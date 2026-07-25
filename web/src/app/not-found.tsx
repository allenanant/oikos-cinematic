import type { Metadata } from "next";
import { Cormorant_Garamond, Fraunces, Inter } from "next/font/google";
import "./cinematic/cinematic.css";
import "./full/full.css";

/**
 * The 404 was the stock Next.js page: black text on white, no branding, and not
 * a single link out. It matters more than usual now that the old preview routes
 * (/cinematic, /cinematic-v2..v5, /cinematic-index, /v-open, /journal) all land
 * here. This one keeps the brand and offers a way back.
 *
 * Fonts are declared locally because not-found.tsx renders inside the ROOT
 * layout, not inside full/layout.tsx, so it does not inherit those variables.
 */

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Page not found · Oikos by Angelina",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/contact/", label: "Contact" },
];

export default function NotFound() {
  return (
    <div
      className={`full-root cinematic-root ${fraunces.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <main className="nf-wrap">
        <div className="nf-inner">
          <img src="/logo-light.svg" alt="Oikos" width={40} height={26} className="nf-logo" />
          <span className="nf-code">404</span>
          <h1 className="nf-title">
            This page has <em>grown over</em>.
          </h1>
          <p className="nf-dek">
            The page you asked for is not here any more. Everything else is
            still where you left it.
          </p>
          <nav className="nf-links" aria-label="Site">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="/contact/" className="nf-cta">
            Begin a brief <span className="arr" />
          </a>
        </div>
      </main>
    </div>
  );
}
