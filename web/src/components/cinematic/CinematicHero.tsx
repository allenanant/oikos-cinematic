"use client";

import { useEffect, useRef } from "react";

type Props = { videoSrc: string; posterSrc?: string; subtitle?: string };

// Original v2-feels-perfect config: raw <video>.currentTime, light scrub.
// No scrolly-video, no transitionSpeed smoothing, no proxy tween.
const SCRUB = 0.3;
const PIN_END = "+=140%";

export default function CinematicHero({ videoSrc, posterSrc, subtitle }: Props) {
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

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const container = containerRef.current!;
      const video = videoRef.current!;
      const titleSpans = container.querySelectorAll<HTMLSpanElement>(
        ".cinematic-title .row > span"
      );

      if (reduceMotion) {
        gsap.set(titleSpans, { yPercent: 0, opacity: 1 });
        return;
      }

      gsap.set(titleSpans, { yPercent: 110, opacity: 1 });
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(titleSpans, { yPercent: 0, duration: 1.2, stagger: 0.13, delay: 0.25 });

      const bindScrub = () => {
        if (!isFinite(video.duration) || !video.duration) return;
        video.pause();
        video.currentTime = 0;

        const st = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: PIN_END,
          pin: true,
          scrub: SCRUB,
          onUpdate: (self: { progress: number }) => {
            const t = self.progress * video.duration;
            if (Math.abs(video.currentTime - t) > 0.015) {
              video.currentTime = t;
            }
          },
        });
        cleanups.push(() => st.kill());

        const fadeTween = gsap.to(
          container.querySelector(".cinematic-foreground"),
          {
            yPercent: -14,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "+=120%",
              scrub: true,
            },
          }
        );
        cleanups.push(() => fadeTween.scrollTrigger?.kill());
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
  }, []);

  return (
    <section ref={containerRef} className="cinematic-hero">
      <div className="cinematic-media">
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
      <div className="cinematic-overlay" aria-hidden />

      <div className="cinematic-foreground">
        <h1 className="cinematic-title display">
          <span className="row">
            <span>We restructure</span>
          </span>
          <span className="row">
            <span>
              offices that <em>forgot</em>
            </span>
          </span>
          <span className="row">
            <span>
              how to <em>breathe</em>.
            </span>
          </span>
        </h1>
        {subtitle && <p className="cinematic-sub">{subtitle}</p>}
      </div>
    </section>
  );
}
