"use client";

import { useEffect, useRef } from "react";

type Props = { videoSrc: string; posterSrc?: string; subtitle?: string };

// Original v2-feels-perfect config: raw <video>.currentTime, light scrub.
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

      // Create the pin on MOUNT — not inside a video-load callback. Inserting
      // the pin-spacer late (after loadedmetadata) shifts the layout and makes
      // the next section pop in mid-scroll. The seek itself is duration-guarded
      // below, so it is safe to pin before the video reports its duration.
      let targetTime = 0;
      const st = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: PIN_END,
        pin: true,
        scrub: SCRUB,
        onUpdate: (self: { progress: number }) => {
          if (isFinite(video.duration) && video.duration) {
            targetTime = self.progress * video.duration;
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

      // Decode-aware seeking: coalesce ScrollTrigger updates into one in-flight
      // seek so the clip never drifts behind the scroll on a heavy page.
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
        video.currentTime = 0;
      };
      if (video.readyState >= 1) initVideo();
      else video.addEventListener("loadedmetadata", initVideo, { once: true });
      seekRaf = requestAnimationFrame(applySeek);
      cleanups.push(() => {
        seeking = false;
        cancelAnimationFrame(seekRaf);
      });

      ScrollTrigger.refresh();
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
            <span>Design a sustainable life</span>
          </span>
          <span className="row">
            <span>
              that looks as <em>beautiful</em>
            </span>
          </span>
          <span className="row">
            <span>
              as it is <em>responsible</em>
            </span>
          </span>
        </h1>
        {subtitle && <p className="cinematic-sub">{subtitle}</p>}
      </div>
    </section>
  );
}
