"use client";

import { useEffect, useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Props = {
  /** true when the page opens on a dark full-bleed hero (home, about) */
  darkHero?: boolean;
  /** scroll point (× viewport height) at which the pill flips to the light-bg tint */
  lightAt?: number;
  active?: "home" | "about" | "services";
};

export default function FullNav({ darkHero = true, lightAt = 1.05, active }: Props) {
  const [onLight, setOnLight] = useState(!darkHero);

  useEffect(() => {
    if (!darkHero) {
      setOnLight(true);
      return;
    }
    const onScroll = () => {
      setOnLight(window.scrollY > window.innerHeight * lightAt);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [darkHero, lightAt]);

  return (
    <header className={`full-navbar${onLight ? " on-light" : ""}`}>
      <nav className="full-pill" aria-label="Primary">
        <a href={`${BASE}/full/`} className="brand" aria-label="Oikos — home">
          <img src={`${BASE}/logo-light.svg`} alt="Oikos" className="logo" />
        </a>
        <span className="divider" aria-hidden />
        <div className="links">
          <a
            href={`${BASE}/full/`}
            className={active === "home" ? "active" : undefined}
          >
            Home
          </a>
          <a
            href={`${BASE}/about/`}
            className={active === "about" ? "active" : undefined}
          >
            About
          </a>
          <a
            href={`${BASE}/services/`}
            className={active === "services" ? "active" : undefined}
          >
            Services
          </a>
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
