"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Letter", href: "#letter", index: "I" },
  { label: "Etymology", href: "#etymology", index: "II" },
  { label: "Practice", href: "#practice", index: "III" },
  { label: "Begin", href: "#begin", index: "IV" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-md bg-cream/90 border-b border-forest/8"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1480px] grid-cols-12 items-center gap-x-6 px-6 py-4 md:py-5 md:px-12">
        {/* Left: wordmark */}
        <a
          href="#top"
          className="col-span-3 md:col-span-2 display text-forest text-[22px] md:text-[24px] leading-none"
          aria-label="Oikos by Angelina — home"
        >
          <span className="italic">oikos</span>
          <span className="text-terracotta">.</span>
        </a>

        {/* Center: magazine-style index */}
        <nav className="col-span-6 md:col-span-8 hidden md:flex items-center justify-center gap-10 text-forest/75">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-baseline gap-2 text-[13px] tracking-[0.04em] hover:text-forest transition-colors"
            >
              <span className="display italic text-[11px] text-terracotta/80 group-hover:text-terracotta">
                {l.index}
              </span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        {/* Right: small folio + correspondence link */}
        <div className="col-span-9 md:col-span-2 flex items-center justify-end gap-4">
          <span className="hidden lg:block eyebrow text-forest/45">
            Vol. I
          </span>
          <a
            href="#begin"
            className="cta-link text-[13px] text-forest"
          >
            <span className="display italic">Begin a correspondence</span>
          </a>
        </div>

        {/* Mobile-only minimal CTA */}
        <a
          href="#begin"
          className="md:hidden col-span-9 justify-self-end text-sm text-forest"
        >
          <span className="display italic">Correspondence →</span>
        </a>
      </div>
    </header>
  );
}
