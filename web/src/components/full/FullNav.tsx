"use client";

import { useEffect, useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function FullNav() {
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Hero is pinned for +=140% of viewport, so cream sections start past ~120vh.
      // Switch to the dark-glass treatment once we are clearly off the hero photo.
      setOnLight(window.scrollY > window.innerHeight * 1.05);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`full-navbar${onLight ? " on-light" : ""}`}>
      <nav className="full-pill" aria-label="Primary">
        <a href={`${BASE}/cinematic/`} className="brand">
          <span className="dot" />
          <span>oikos</span>
        </a>
        <span className="divider" aria-hidden />
        <div className="links">
          <a href="#signature">Signature</a>
          <a href="#material">Material</a>
          <a href="#atelier">Atelier</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#brief">Studio</a>
        </div>
        <span className="divider" aria-hidden />
        <a href="#brief" className="cta" data-cursor>
          <span>Begin a brief</span>
          <span className="arr" />
        </a>
      </nav>
    </header>
  );
}
