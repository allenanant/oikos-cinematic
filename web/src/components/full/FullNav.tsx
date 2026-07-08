"use client";

import { Fragment, useEffect, useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Props = {
  /** true when the page opens on a dark full-bleed hero (home, about) */
  darkHero?: boolean;
  /** scroll point (× viewport height) at which the pill flips to the light-bg tint */
  lightAt?: number;
  active?: "home" | "about" | "services" | "contact";
};

const LINKS: { href: string; label: string; key: Props["active"] }[] = [
  { href: `${BASE}/full/`, label: "Home", key: "home" },
  { href: `${BASE}/about/`, label: "About", key: "about" },
  { href: `${BASE}/services/`, label: "Services", key: "services" },
  { href: `${BASE}/contact/`, label: "Contact", key: "contact" },
];

// The four service-detail pages, surfaced as a dropdown under "Services".
const SERVICE_LINKS: { href: string; label: string }[] = [
  { href: `${BASE}/services/workplace-restructure/`, label: "Sustainable workplace design" },
  { href: `${BASE}/services/reading-of-the-room/`, label: "Biophilic design consultation" },
  { href: `${BASE}/services/material-direction/`, label: "Sustainable material sourcing" },
  { href: `${BASE}/services/aftercare/`, label: "Plant care and maintenance" },
];

export default function FullNav({ darkHero = true, lightAt = 1.05, active }: Props) {
  const [onLight, setOnLight] = useState(!darkHero);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Lock background scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`full-navbar${onLight ? " on-light" : ""}${
        menuOpen ? " menu-open" : ""
      }`}
    >
      <nav className="full-pill" aria-label="Primary">
        <a href={`${BASE}/full/`} className="brand" aria-label="Oikos home">
          <img src={`${BASE}/logo-light.svg`} alt="Oikos" className="logo" />
        </a>
        <span className="divider" aria-hidden />
        <div className="links">
          {LINKS.slice(0, 3).map((l) =>
            l.key === "services" ? (
              <div className="full-svc-wrap" key={l.key}>
                <a
                  href={l.href}
                  className={`full-svc-trigger${active === l.key ? " active" : ""}`}
                  aria-current={active === l.key ? "page" : undefined}
                  aria-haspopup="true"
                >
                  {l.label}
                  <span className="full-svc-caret" aria-hidden />
                </a>
                <div className="full-dropdown" role="menu" aria-label="Services">
                  {SERVICE_LINKS.map((s) => (
                    <a key={s.href} href={s.href} role="menuitem">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={l.key}
                href={l.href}
                className={active === l.key ? "active" : undefined}
                aria-current={active === l.key ? "page" : undefined}
              >
                {l.label}
              </a>
            )
          )}
        </div>
        <span className="divider" aria-hidden />
        <a href={`${BASE}/contact/`} className="cta" data-cursor>
          <span>Begin a brief</span>
          <span className="arr" />
        </a>
        <button
          type="button"
          className="full-burger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className="full-menu" role="dialog" aria-modal="true" aria-label="Menu">
        <button
          type="button"
          className="full-menu-scrim"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
        <div className="full-menu-panel">
          <button
            type="button"
            className="full-menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <span className="x" aria-hidden />
            Close
          </button>
          <nav className="full-menu-nav" aria-label="Mobile">
            {LINKS.map((l, i) => (
              <Fragment key={l.key}>
                <a
                  href={l.href}
                  className={active === l.key ? "active" : undefined}
                  aria-current={active === l.key ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  style={{ ["--mi" as string]: i }}
                >
                  <span className="mi-n">{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </a>
                {l.key === "services" && (
                  <div className="full-menu-sub">
                    {SERVICE_LINKS.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        onClick={() => setMenuOpen(false)}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </Fragment>
            ))}
          </nav>
          <div className="full-menu-foot">
            <a
              href={`${BASE}/contact/`}
              className="full-menu-cta"
              onClick={() => setMenuOpen(false)}
            >
              Begin a brief <span className="arr" />
            </a>
            <a href="mailto:contact@oikosbyangelina.com" className="full-menu-email">
              contact@oikosbyangelina.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
