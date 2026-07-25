"use client";
import { px, pxSet } from "@/lib/pexels";

import { useEffect, useRef } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const BEFORE_IMG =
  "https://images.pexels.com/photos/5483233/pexels-photo-5483233.jpeg";

export default function Transform() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const afterRef = useRef<HTMLDivElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const after = afterRef.current;
    const divider = dividerRef.current;
    const handle = handleRef.current;
    if (!frame || !after || !divider || !handle) return;

    let dragging = false;

    const setPos = (clientX: number) => {
      const rect = frame.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(2, Math.min(98, pct));
      after.style.clipPath = `inset(0 0 0 ${pct}%)`;
      divider.style.left = `${pct}%`;
      handle.style.left = `${pct}%`;
    };

    const onDown = (e: MouseEvent | TouchEvent) => {
      dragging = true;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      setPos(x);
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      setPos(x);
    };
    const onUp = () => {
      dragging = false;
    };

    handle.addEventListener("mousedown", onDown as EventListener);
    frame.addEventListener("mousedown", onDown as EventListener);
    window.addEventListener("mousemove", onMove as EventListener);
    window.addEventListener("mouseup", onUp);
    handle.addEventListener("touchstart", onDown as EventListener, { passive: true });
    frame.addEventListener("touchstart", onDown as EventListener, { passive: true });
    window.addEventListener("touchmove", onMove as EventListener, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      handle.removeEventListener("mousedown", onDown as EventListener);
      frame.removeEventListener("mousedown", onDown as EventListener);
      window.removeEventListener("mousemove", onMove as EventListener);
      window.removeEventListener("mouseup", onUp);
      handle.removeEventListener("touchstart", onDown as EventListener);
      frame.removeEventListener("touchstart", onDown as EventListener);
      window.removeEventListener("touchmove", onMove as EventListener);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <section className="full-transform">
      <div className="ed">
        <div className="stamp-row" data-reveal>
          <div className="left">
            <h3>
              When <em>nature</em> moves in
            </h3>
          </div>
        </div>
        <div className="full-ba-frame" ref={frameRef} data-reveal>
          <span className="full-ba-label before">Before</span>
          <div className="full-ba-img full-ba-before">
            <img
              src={px(BEFORE_IMG, 1800, 772)}
              srcSet={pxSet(BEFORE_IMG, [1200, 1800, 2400], 2400 / 1029)}
              sizes="(min-width: 1480px) 1480px, 100vw"
              alt="A bare, cool open-plan office before restructure"
              width={1800}
              height={771}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="full-ba-img full-ba-after" ref={afterRef}>
            {/* The only local content photo, so it needs a real <picture> —
                Pexels does the format negotiation for everything else. */}
            <picture>
              <source
                type="image/avif"
                srcSet={`${BASE}/photos/nature-after-1200.avif 1200w, ${BASE}/photos/nature-after-1800.avif 1800w, ${BASE}/photos/nature-after-2400.avif 2400w`}
                sizes="(min-width: 1480px) 1480px, 100vw"
              />
              <source
                type="image/webp"
                srcSet={`${BASE}/photos/nature-after-1200.webp 1200w, ${BASE}/photos/nature-after-1800.webp 1800w, ${BASE}/photos/nature-after-2400.webp 2400w`}
                sizes="(min-width: 1480px) 1480px, 100vw"
              />
              <img
                src={`${BASE}/photos/nature-after.jpg`}
                alt="The same floor restructured, warm with plants, wood and daylight"
                width={1800}
                height={772}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <span className="full-ba-label after">After</span>
          <div className="full-ba-divider" ref={dividerRef} />
          <div className="full-ba-handle" ref={handleRef} data-cursor />
        </div>
      </div>
    </section>
  );
}
