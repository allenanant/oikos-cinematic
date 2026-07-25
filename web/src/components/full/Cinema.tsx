"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import {
  canPlayVideo,
  isFullyBuffered,
  SEEK_EPS,
  SRC_FPS,
} from "@/lib/videoGate";

type Props = {
  videoSrc: string;
  posterSrc?: string;
  reverse?: boolean;
};

const SCRUB = 0.3;
const PIN_END = "+=140%";

export default function Cinema({ videoSrc, posterSrc, reverse = false }: Props) {
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const cleanups: Array<() => void> = [];

    (async () => {
      const [gsapMod, stMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      const gsap = gsapMod.default ?? gsapMod;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const container = containerRef.current!;
      const video = videoRef.current!;

      // The caption reveal is cheap and belongs on every device.
      const captionEl = container.querySelector(".cinema-caption");
      if (captionEl && !reduceMotion) {
        const captionTween = gsap.fromTo(
          captionEl,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            ease: "expo.out",
            duration: 1,
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
        cleanups.push(() => captionTween.scrollTrigger?.kill());
      }

      // See CinematicHero for the rationale. On mobile this section becomes a
      // static 100vh poster with the caption still revealing on scroll.
      if (!canPlayVideo()) {
        container.dataset.video = "off";
        ScrollTrigger.refresh();
        return;
      }
      container.dataset.video = "on";

      // This section sits about three screens down, so fetching it at load just
      // means 2.4 MB competing with the hero for bandwidth. Start it when the
      // user is within two viewports — far enough ahead that it has buffered by
      // the time they arrive.
      const io = new IntersectionObserver(
        ([entry], obs) => {
          if (!entry.isIntersecting) return;
          obs.disconnect();
          video.preload = "auto";
          video.src = videoSrc;
          video.load();
        },
        { rootMargin: "200% 0px" }
      );
      io.observe(container);
      cleanups.push(() => io.disconnect());

      let targetTime = 0;
      let active = false;
      let ready = false;
      let seekRaf = 0;

      const markReady = () => {
        if (ready || !isFullyBuffered(video)) return;
        ready = true;
        // reverse: this section opens on the LAST frame.
        if (reverse) targetTime = Math.max(video.duration - 0.01, 0);
        container.dataset.videoReady = "true";
        video.currentTime = targetTime;
      };
      video.addEventListener("progress", markReady);
      video.addEventListener("canplaythrough", markReady);
      cleanups.push(() => {
        video.removeEventListener("progress", markReady);
        video.removeEventListener("canplaythrough", markReady);
      });

      // Some browsers refuse to paint a <video> that has never played. Prime it
      // muted, then park it on the frame this section should open on.
      const prime = () => {
        video
          .play()
          .then(() => {
            video.pause();
            video.currentTime = reverse ? Math.max(video.duration - 0.01, 0) : 0;
          })
          .catch(() => video.pause());
      };
      video.addEventListener("loadeddata", prime, { once: true });

      // Pin on MOUNT so the pin-spacer exists immediately and the section does
      // not pop in mid-scroll once the video metadata loads. Seeking stays
      // duration-guarded below. See CinematicHero for the rationale.
      const st = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: PIN_END,
        pin: true,
        scrub: SCRUB,
        // Seek only while pinned — this loop used to run for the whole session.
        onToggle: (self: { isActive: boolean }) => {
          active = self.isActive;
        },
        onUpdate: (self: { progress: number }) => {
          if (!isFinite(video.duration) || !video.duration) return;
          const progress = reverse ? 1 - self.progress : self.progress;
          targetTime = progress * video.duration;
        },
      });
      cleanups.push(() => st.kill());
      active = st.isActive;

      const applySeek = () => {
        seekRaf = requestAnimationFrame(applySeek);
        if (!active || !ready || document.hidden || video.seeking) return;
        const t = Math.round(targetTime * SRC_FPS) / SRC_FPS;
        if (Math.abs(video.currentTime - t) > SEEK_EPS) video.currentTime = t;
      };
      seekRaf = requestAnimationFrame(applySeek);
      cleanups.push(() => cancelAnimationFrame(seekRaf));

      ScrollTrigger.refresh();
    })();

    return () => {
      cancelled = true;
      cleanups.forEach((c) => c());
    };
  }, [reverse, videoSrc]);

  return (
    <section
      ref={containerRef}
      className="full-cinema"
      data-video="off"
      style={
        posterSrc
          ? ({ "--poster": `url("${posterSrc}")` } as CSSProperties)
          : undefined
      }
    >
      <div className="cinema-media">
        {/* No src, no <source>, preload="none". Zero bytes until gated. */}
        <video ref={videoRef} poster={posterSrc} muted playsInline preload="none" />
      </div>
      <div className="cinema-overlay" aria-hidden />

      <div className="cinema-foreground">
        <span className="cinema-eyebrow">
          <span className="cinema-bar" />
          interlude{" "}
          <span className="cinema-num">· a moment between rooms</span>
        </span>
        <h2 className="cinema-caption">
          Living <em>design</em>.<br />
          Lasting <em>impact</em>.
        </h2>
      </div>
    </section>
  );
}
