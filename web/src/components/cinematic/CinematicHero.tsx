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
      const titleSpans = container.querySelectorAll<HTMLSpanElement>(
        ".cinematic-title .row > span"
      );

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(titleSpans, { yPercent: 0, opacity: 1 });
      } else {
        gsap.set(titleSpans, { yPercent: 110, opacity: 1 });
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.to(titleSpans, { yPercent: 0, duration: 1.2, stagger: 0.13, delay: 0.25 });
        cleanups.push(() => tl.kill());
      }

      /**
       * Everything that costs bytes or CPU. Only runs on devices that passed the
       * gate, and returns a teardown so it can all be undone if the window is
       * resized down to phone width or the page comes back from bfcache.
       */
      const activate = (): (() => void) => {
        container.dataset.video = "on";

        video.preload = "auto";
        video.src = videoSrc;
        video.load();

        // Raw scroll progress, kept whether or not duration is known yet.
        // Storing only the derived time meant a refresh mid-pin sat on frame 0
        // until the visitor scrolled again.
        let progress = 0;
        let ready = false;
        let seekRaf = 0;
        let running = false;
        let bufferTimer = 0;

        const timeFor = (p: number) =>
          isFinite(video.duration) && video.duration
            ? Math.min(p * video.duration, lastFrameTime(video))
            : 0;

        const applySeek = () => {
          if (!running) return;
          seekRaf = requestAnimationFrame(applySeek);
          if (!ready || document.hidden || video.seeking) return;
          const t = Math.round(timeFor(progress) * SRC_FPS) / SRC_FPS;
          if (Math.abs(video.currentTime - t) > SEEK_EPS) video.currentTime = t;
        };

        // Start and stop the loop outright rather than letting it wake every
        // frame and bail — two sections idling at 60fps for the whole session
        // is the thing this was meant to fix.
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
          container.dataset.videoReady = "true"; // CSS cross-fades video over poster
          video.currentTime = timeFor(progress);
        };
        video.addEventListener("progress", markReady);
        video.addEventListener("canplaythrough", markReady);

        // Some browsers refuse to paint a <video> that has never played, leaving
        // a black box under the cross-fade. Prime it muted, then park it.
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

        // Create the pin on MOUNT — not inside a video-load callback. Inserting
        // the pin-spacer late (after loadedmetadata) shifts the layout and makes
        // the next section pop in mid-scroll. Seeking is duration-guarded above,
        // so it is safe to pin before the video reports its duration.
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

        const fadeTween = gsap.to(container.querySelector(".cinematic-foreground"), {
          yPercent: -14,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=120%",
            scrub: true,
          },
        });

        const teardown = () => {
          clearTimeout(bufferTimer);
          stopLoop();
          st.kill();
          fadeTween.scrollTrigger?.kill();
          fadeTween.kill();
          video.removeEventListener("progress", markReady);
          video.removeEventListener("canplaythrough", markReady);
          video.removeEventListener("loadeddata", prime);
          video.pause();
          video.removeAttribute("src");
          video.load(); // abort any in-flight fetch
          delete container.dataset.videoReady;
        };

        // onToggle does not fire on creation, so seed it — otherwise a deep link
        // or a mid-page refresh lands inside the pinned section and never scrubs.
        progress = st.progress;
        if (st.isActive) startLoop();

        // The timer starts with the download, not on mount.
        bufferTimer = window.setTimeout(() => {
          if (ready) return;
          teardown();
          container.dataset.video = "off";
          ScrollTrigger.refresh();
        }, BUFFER_TIMEOUT_MS);

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
