"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import {
  BUFFER_TIMEOUT_MS,
  canPlayVideo,
  isFullyBuffered,
  lastFrameTime,
  SEEK_EPS,
  SRC_FPS,
  watchEligibility,
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
    let teardownVideo: (() => void) | null = null;

    (async () => {
      const [gsapMod, stMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      const gsap = gsapMod.default ?? gsapMod;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current!;
      const video = videoRef.current!;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

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
        cleanups.push(() => {
          captionTween.scrollTrigger?.kill();
          captionTween.kill();
        });
      }

      // See CinematicHero for the rationale. On mobile this section is a static
      // 100vh poster with the caption still revealing on scroll.
      const activate = (): (() => void) => {
        container.dataset.video = "on";

        let progress = 0;
        let ready = false;
        let seekRaf = 0;
        let running = false;
        let bufferTimer = 0;

        const timeFor = (p: number) => {
          if (!isFinite(video.duration) || !video.duration) return 0;
          const q = reverse ? 1 - p : p;
          return Math.min(q * video.duration, lastFrameTime(video));
        };

        const applySeek = () => {
          if (!running) return;
          seekRaf = requestAnimationFrame(applySeek);
          if (!ready || document.hidden || video.seeking) return;
          const t = Math.round(timeFor(progress) * SRC_FPS) / SRC_FPS;
          if (Math.abs(video.currentTime - t) > SEEK_EPS) video.currentTime = t;
        };

        const startLoop = () => {
          if (running) return;
          running = true;
          seekRaf = requestAnimationFrame(applySeek);
        };
        const stopLoop = () => {
          running = false;
          cancelAnimationFrame(seekRaf);
          // Apply one last seek on the way out. onToggle fires at the pin
          // boundary, so without this the final scroll of the range never
          // lands and the clip freezes short of its end frame.
          if (ready && !video.seeking) video.currentTime = timeFor(progress);
        };

        const markReady = () => {
          if (ready || !isFullyBuffered(video)) return;
          ready = true;
          clearTimeout(bufferTimer);
          container.dataset.videoReady = "true";
          video.currentTime = timeFor(progress);
        };
        video.addEventListener("progress", markReady);
        video.addEventListener("canplaythrough", markReady);

        const prime = () => {
          video
            .play()
            .then(() => {
              video.pause();
              // Don't undo a seek markReady already applied.
              if (!ready) video.currentTime = timeFor(progress);
            })
            .catch(() => video.pause());
        };
        video.addEventListener("loadeddata", prime, { once: true });

        // This section sits about three screens down, so fetching at page load
        // just means 2.4 MB competing with the hero. Start it a couple of
        // viewports out — in pixels, because rootMargin percentages resolve
        // against the root's width, not its height.
        const margin = Math.round(window.innerHeight * 2);
        const io = new IntersectionObserver(
          ([entry], obs) => {
            if (!entry.isIntersecting) return;
            obs.disconnect();
            video.preload = "auto";
            video.src = videoSrc;
            video.load();
            // Timer starts with the download. Starting it on mount meant a
            // visitor who lingered above this section lost the pin before the
            // clip had even begun loading.
            bufferTimer = window.setTimeout(() => {
              if (ready) return;
              teardown();
              container.dataset.video = "off";
              ScrollTrigger.refresh();
            }, BUFFER_TIMEOUT_MS);
          },
          { rootMargin: `${margin}px 0px` }
        );
        io.observe(container);

        // Pin on MOUNT so the pin-spacer exists immediately and the section does
        // not pop in mid-scroll once the video metadata loads.
        const st = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: PIN_END,
          pin: true,
          scrub: SCRUB,
          onToggle: (self: { isActive: boolean }) =>
            self.isActive ? startLoop() : stopLoop(),
          onUpdate: (self: { progress: number }) => {
            progress = self.progress;
          },
        });

        const teardown = () => {
          clearTimeout(bufferTimer);
          stopLoop();
          io.disconnect();
          st.kill();
          video.removeEventListener("progress", markReady);
          video.removeEventListener("canplaythrough", markReady);
          video.removeEventListener("loadeddata", prime);
          video.pause();
          video.removeAttribute("src");
          video.load();
          delete container.dataset.videoReady;
        };

        progress = st.progress;
        if (st.isActive) startLoop();

        return teardown;
      };

      const sync = () => {
        const allowed = canPlayVideo();
        if (allowed && !teardownVideo) {
          teardownVideo = activate();
          ScrollTrigger.refresh();
        } else if (!allowed && teardownVideo) {
          teardownVideo();
          teardownVideo = null;
          container.dataset.video = "off";
          ScrollTrigger.refresh();
        }
      };

      sync();
      cleanups.push(watchEligibility(sync));
      ScrollTrigger.refresh();
    })();

    return () => {
      cancelled = true;
      teardownVideo?.();
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
