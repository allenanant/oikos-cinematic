"use client";

import { useEffect, useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function FullNav() {
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroH = window.innerHeight;
      const sy = window.scrollY;
      setScrolled(sy > 40);
      // hero is pinned for +=140% scroll → switch to light when we're well past it
      setLight(sy > heroH * 1.4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`full-nav${scrolled ? " scrolled" : ""}${light ? " light" : ""}`}
    >
      <a href={`${BASE}/cinematic/`} className="brand">
        <span className="dot" /> oikos
      </a>
      <div className="links">
        <a href="#signature">Signature</a>
        <a href="#material">Material</a>
        <a href="#atelier">Atelier</a>
        <a href="#philosophy">Philosophy</a>
        <a href="#brief">Studio</a>
      </div>
      <div className="right">
        <span className="meta">
          <span className="pulse" /> Delhi · 28.61° N
        </span>
        <a href="#brief" className="cta" data-cursor>
          Begin a brief <span className="arr" />
        </a>
      </div>
    </nav>
  );
}
