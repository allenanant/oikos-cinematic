"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let tx = cx;
    let ty = cy;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.dataset.show = "true";
    };

    const onEnter = () => el.classList.add("is-expanded");
    const onLeave = () => el.classList.remove("is-expanded");

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };
    tick();

    const targets = document.querySelectorAll<HTMLElement>("[data-cursor]");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", onEnter);
      t.addEventListener("mouseleave", onLeave);
    });
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", onEnter);
        t.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return <div ref={ref} className="cinematic-cursor" aria-hidden />;
}
