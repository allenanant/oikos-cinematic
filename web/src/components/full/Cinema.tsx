"use client";

import { useEffect, useRef } from "react";

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

      if (reduceMotion) {
        const initStatic = () => {
          video.pause();
          video.currentTime = reverse ? Math.max(video.duration - 0.01, 0) : 0;
        };
        if (video.readyState >= 1) initStatic();
        else video.addEventListener("loadedmetadata", initStatic, { once: true });
        return;
      }

      // Pin on MOUNT so the pin-spacer exists immediately and the section does
      // not pop in mid-scroll once the video metadata loads. Seeking stays
      // duration-guarded below. See CinematicHero for the rationale.
      let targetTime = 0;
      const st = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: PIN_END,
        pin: true,
        scrub: SCRUB,
        onUpdate: (self: { progress: number }) => {
          if (!isFinite(video.duration) || !video.duration) return;
          const progress = reverse ? 1 - self.progress : self.progress;
          targetTime = progress * video.duration;
        },
      });
      cleanups.push(() => st.kill());

      let seekRaf = 0;
      let seeking = true;
      const SEEK_EPS = 0.04; // ~1 frame at 24fps
      const applySeek = () => {
        if (!seeking) return;
        if (
          isFinite(video.duration) &&
          !video.seeking &&
          Math.abs(video.currentTime - targetTime) > SEEK_EPS
        ) {
          video.currentTime = targetTime;
        }
        seekRaf = requestAnimationFrame(applySeek);
      };
      const initVideo = () => {
        video.pause();
        video.currentTime = reverse ? Math.max(video.duration - 0.01, 0) : 0;
        targetTime = video.currentTime;
      };
      if (video.readyState >= 1) initVideo();
      else video.addEventListener("loadedmetadata", initVideo, { once: true });
      seekRaf = requestAnimationFrame(applySeek);
      cleanups.push(() => {
        seeking = false;
        cancelAnimationFrame(seekRaf);
      });

      const captionEl = container.querySelector(".cinema-caption");
      if (captionEl) {
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

      ScrollTrigger.refresh();
    })();

    return () => {
      cancelled = true;
      cleanups.forEach((c) => c());
    };
  }, [reverse]);

  return (
    <section ref={containerRef} className="full-cinema">
      <div className="cinema-media">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          muted
          playsInline
          preload="auto"
          autoPlay={false}
          loop={false}
        />
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
