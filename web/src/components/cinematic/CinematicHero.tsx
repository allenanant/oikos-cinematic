"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import {
  BUFFER_TIMEOUT_MS,
  canPlayVideo,
  isFullyBuffered,
  SEEK_EPS,
  SRC_FPS,
} from "@/lib/videoGate";

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
      cleanups.push(() => tl.kill());

      // Phones, tablets, Save-Data and reduced-motion stop here. Nothing has
      // requested the clip yet (the <video> ships with no src), so bailing out
      // costs zero bytes. Without the pin the section is a plain 100vh poster
      // block, which is what the CSS already declares — no layout to repair.
      if (!canPlayVideo()) {
        container.dataset.video = "off";
        ScrollTrigger.refresh();
        return;
      }
      container.dataset.video = "on";

      // Only now do bytes move.
      video.preload = "auto";
      video.src = videoSrc;
      video.load();

      let targetTime = 0;
      let active = false;
      let ready = false;
      let seekRaf = 0;

      let bufferTimer = 0;

      const markReady = () => {
        if (ready || !isFullyBuffered(video)) return;
        ready = true;
        clearTimeout(bufferTimer);
        container.dataset.videoReady = "true"; // CSS cross-fades video over poster
        video.currentTime = targetTime;
      };
      video.addEventListener("progress", markReady);
      video.addEventListener("canplaythrough", markReady);

      // Some browsers refuse to paint a <video> that has never played, leaving a
      // black box under the cross-fade. Prime it muted, then park it.
      const prime = () => {
        video
          .play()
          .then(() => {
            video.pause();
            // markReady may already have seeked to the scroll position; don't
            // yank it back to the start.
            if (!ready) video.currentTime = 0;
          })
          .catch(() => video.pause());
      };
      video.addEventListener("loadeddata", prime, { once: true });

      // Create the pin on MOUNT — not inside a video-load callback. Inserting
      // the pin-spacer late (after loadedmetadata) shifts the layout and makes
      // the next section pop in mid-scroll. The seek itself is duration-guarded
      // below, so it is safe to pin before the video reports its duration.
      const st = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: PIN_END,
        pin: true,
        scrub: SCRUB,
        // Seek only while the section is pinned. This loop used to run from
        // mount to unmount, burning a frame callback forever on a section the
        // user had scrolled past screens ago.
        onToggle: (self: { isActive: boolean }) => {
          active = self.isActive;
        },
        onUpdate: (self: { progress: number }) => {
          if (isFinite(video.duration) && video.duration) {
            targetTime = self.progress * video.duration;
          }
        },
      });
      cleanups.push(() => st.kill());
      // onToggle does not fire on creation, so seed it — otherwise a deep link
      // or a mid-page refresh lands inside the pinned section with active=false
      // and the clip never scrubs.
      active = st.isActive;

      // If it never finishes buffering, drop the pin rather than trapping the
      // visitor in a frozen section. Degrades to the static poster block that
      // mobile already gets.
      bufferTimer = window.setTimeout(() => {
        if (ready) return;
        container.dataset.video = "off";
        video.removeAttribute("src");
        video.load();
        st.kill();
        ScrollTrigger.refresh();
      }, BUFFER_TIMEOUT_MS);

      cleanups.push(() => {
        clearTimeout(bufferTimer);
        video.removeEventListener("progress", markReady);
        video.removeEventListener("canplaythrough", markReady);
        video.removeEventListener("loadeddata", prime);
        video.removeAttribute("src");
        video.load(); // abort any in-flight fetch
      });

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
      cleanups.push(() => {
        fadeTween.scrollTrigger?.kill();
        fadeTween.kill();
      });

      const applySeek = () => {
        seekRaf = requestAnimationFrame(applySeek);
        if (!active || !ready || document.hidden || video.seeking) return;
        const t = Math.round(targetTime * SRC_FPS) / SRC_FPS; // snap to frame grid
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
  }, [videoSrc]);

  return (
    <section
      ref={containerRef}
      className="cinematic-hero"
      data-video="off"
      style={
        posterSrc
          ? ({ "--poster": `url("${posterSrc}")` } as CSSProperties)
          : undefined
      }
    >
      <div className="cinematic-media">
        {/*
          No src, no <source>, preload="none". The preload scanner has nothing to
          find, so this element is provably zero bytes until the desktop gate in
          the effect assigns video.src. Never put src back into this JSX.
        */}
        <video ref={videoRef} poster={posterSrc} muted playsInline preload="none" />
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
