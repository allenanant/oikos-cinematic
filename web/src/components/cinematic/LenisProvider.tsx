"use client";

import { useEffect } from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: Lenis }, gsapMod, scrollTriggerMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      const gsap = gsapMod.default ?? gsapMod;
      const ScrollTrigger =
        scrollTriggerMod.ScrollTrigger ?? scrollTriggerMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const isTouch = window.matchMedia("(hover: none)").matches;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Skip Lenis on touch + reduced-motion devices; native scroll wins there.
      if (isTouch || reduceMotion) {
        ScrollTrigger.refresh();
        return;
      }

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time: number) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        lenis.destroy();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}
