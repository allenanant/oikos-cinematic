"use client";

import { useEffect, useRef } from "react";

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
            <span className="n">v.</span>
            <h3>
              Before and <em>after</em>, the same floor.
            </h3>
          </div>
          <p className="note">
            A 220 m² floor in Gurugram, restructured in seven weeks. Drag the
            divider.
          </p>
        </div>
        <div className="full-ba-frame" ref={frameRef} data-reveal>
          <span className="full-ba-label before">Before</span>
          <div className="full-ba-img full-ba-before">
            <img
              src="https://images.pexels.com/photos/37241151/pexels-photo-37241151/free-photo-of-empty-modern-office-space-with-fluorescent-lighting.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1029&fit=crop"
              alt="Empty office with fluorescent lighting before restructure"
            />
          </div>
          <div className="full-ba-img full-ba-after" ref={afterRef}>
            <img
              src="https://images.pexels.com/photos/36287488/pexels-photo-36287488/free-photo-of-modern-office-interior-in-milano-with-green-plants.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1029&fit=crop"
              alt="Restructured office with plants and warm daylight"
            />
          </div>
          <span className="full-ba-label after">After</span>
          <div className="full-ba-divider" ref={dividerRef} />
          <div className="full-ba-handle" ref={handleRef} data-cursor />
        </div>
      </div>
    </section>
  );
}
