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

      const bindScrub = () => {
        if (!isFinite(video.duration) || !video.duration) return;
        video.pause();
        video.currentTime = reverse ? video.duration - 0.01 : 0;

        if (reduceMotion) return;

        // Decode-aware seeking — coalesce scroll updates into one in-flight
        // seek at a time so the clip never drifts behind the scroll. See
        // CinematicHero for the rationale.
        let targetTime = video.currentTime;
        let seekRaf = 0;
        let seeking = true;
        const SEEK_EPS = 0.04; // ~1 frame at 24fps
        const applySeek = () => {
          if (!seeking) return;
          if (!video.seeking && Math.abs(video.currentTime - targetTime) > SEEK_EPS) {
            video.currentTime = targetTime;
          }
          seekRaf = requestAnimationFrame(applySeek);
        };
        seekRaf = requestAnimationFrame(applySeek);
        cleanups.push(() => {
          seeking = false;
          cancelAnimationFrame(seekRaf);
        });

        const st = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: PIN_END,
          pin: true,
          scrub: SCRUB,
          onUpdate: (self: { progress: number }) => {
            const progress = reverse ? 1 - self.progress : self.progress;
            targetTime = progress * video.duration;
          },
        });
        cleanups.push(() => st.kill());

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
      };

      if (video.readyState >= 1) {
        bindScrub();
      } else {
        video.addEventListener("loadedmetadata", bindScrub, { once: true });
        cleanups.push(() =>
          video.removeEventListener("loadedmetadata", bindScrub)
        );
      }
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
          <span className="cinema-num">— a moment between rooms</span>
        </span>
        <h2 className="cinema-caption">
          Built slowly, <em>tended quietly</em>,<br />
          lived in for years.
        </h2>
      </div>
    </section>
  );
}
