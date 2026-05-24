import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oikos by Angelina · Studio",
  description:
    "Oikos by Angelina is a Delhi practice for restructuring offices into biophilic, Mediterranean workspaces. Light, plants, and stone done quietly.",
};

/* ────────────────────────────────────────────────────────────
   /v-open  ·  Open-style landing variant for Oikos
   Modeled on the Open (mobbin.com) editorial flow:
   spaced wordmark, cream + deep-forest two-tone, hairline form
   fields, pill buttons, oversized display words per section.
   ────────────────────────────────────────────────────────── */

const NAV = ["studio", "offices", "process", "journal", "begin"];

const PROGRAMS = [
  { tag: "Audit", title: "Anand Niketan", meta: "Office · 14 desks" },
  { tag: "Restructure", title: "Vasant Vihar Mews", meta: "Studio · 28 desks" },
  { tag: "Plant", title: "Hauz Khas Loft", meta: "Co-working · 40 desks" },
  { tag: "Wellness", title: "Greater Kailash", meta: "Cabin · 9 desks" },
  { tag: "Restructure", title: "Sundar Nagar Atrium", meta: "Office · 22 desks" },
  { tag: "Audit", title: "Saket Boardroom", meta: "Cabin · 6 desks" },
  { tag: "Plant", title: "Khan Market Studio", meta: "Studio · 12 desks" },
];

const SERVICES = [
  { name: "Biophilic Audit", meta: "Existing office · 1 week" },
  { name: "Material Restructure", meta: "Furniture · flooring · light" },
  { name: "Plant Architecture", meta: "Living walls · atriums · trays" },
  { name: "Wellness Sequence", meta: "Acoustics · air · aroma" },
];

const PROCESS = [
  { step: "01", title: "Walk-through", meta: "Week 1" },
  { step: "02", title: "Concept", meta: "Week 2 / 3" },
  { step: "03", title: "Source", meta: "Week 4 / 5" },
  { step: "04", title: "Install", meta: "Week 6" },
];

export default function OpenStyleLanding() {
  return (
    <div className="bg-cream text-forest">
      {/* ─── 01 · Top bar (deep-forest mast, like Open's black header) ──── */}
      <header className="sticky top-0 z-50 bg-forest text-cream/90">
        <div className="mx-auto grid grid-cols-12 items-center gap-4 px-5 py-3 text-[11px] tracking-[0.18em] uppercase md:px-10">
          {/* Left meta */}
          <div className="col-span-3 flex items-center gap-4 md:gap-6">
            <span className="hidden md:inline-block h-2 w-2 rounded-full bg-cream/40" />
            <span>Spring 2026</span>
            <span className="hidden md:inline opacity-50">/</span>
            <span className="hidden md:inline">Delhi</span>
          </div>

          {/* Center spaced wordmark — the signature Open gesture */}
          <Link
            href="#top"
            aria-label="Oikos · home"
            className="col-span-6 flex items-center justify-between font-normal text-[24px] md:text-[28px] tracking-normal lowercase"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            <span>o</span>
            <span>i</span>
            <span>k</span>
            <span>o</span>
            <span>s</span>
          </Link>

          {/* Right meta */}
          <div className="col-span-3 flex items-center justify-end gap-4 md:gap-6">
            <span className="hidden md:inline">Studio</span>
            <span className="hidden md:inline opacity-50">/</span>
            <span className="hidden md:inline">Offices</span>
            <span
              aria-hidden
              className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-cream/30 text-[10px]"
            >
              AB
            </span>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ─── 02 · Hero — full-bleed image with floating filter pills ──── */}
        <section className="relative">
          {/* Filter pill row, floating just under the masthead */}
          <div className="absolute inset-x-0 top-4 z-30 mx-auto flex max-w-[1480px] items-center justify-between px-5 md:px-10">
            <div className="flex items-center gap-2 rounded-full bg-forest/85 px-1.5 py-1 backdrop-blur text-cream">
              <FilterPill active>All</FilterPill>
              <FilterPill>Audit</FilterPill>
              <FilterPill>Restructure</FilterPill>
              <FilterPill>Plant</FilterPill>
              <FilterPill>Wellness</FilterPill>
            </div>
            <button
              type="button"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-cream/50 px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-cream/90 backdrop-blur"
            >
              Filter
              <span aria-hidden>+</span>
            </button>
          </div>

          {/* Image canvas */}
          <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
            <Image
              src="/photos/hero.jpg"
              alt="Late afternoon light in an office filled with plants and warm wood"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_30%]"
            />
            {/* Warm gradient anchor */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,57,16,0.35) 0%, rgba(11,57,16,0.05) 40%, rgba(11,57,16,0.65) 100%)",
              }}
            />

            {/* Hero caption card, anchored bottom-right (mirrors Open's "Addictions Anonymous" panel) */}
            <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1480px] items-end justify-between px-5 pb-10 md:px-10 md:pb-14">
              <div className="hidden md:block max-w-[26ch]">
                <p className="text-[11px] tracking-[0.22em] uppercase text-cream/70">
                  Plate I · Hauz Khas, 4:42 PM
                </p>
              </div>

              <div className="w-full md:max-w-[460px] rounded-2xl bg-forest/55 p-7 text-cream backdrop-blur-md ring-1 ring-cream/15">
                <p className="text-[11px] tracking-[0.22em] uppercase text-cream/70">
                  Featured · Studio · 6 week sprint
                </p>
                <h1
                  className="mt-3 text-[34px] md:text-[44px] leading-[1.02]"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  Bring the office
                  <br />
                  <em className="text-honey">back to life.</em>
                </h1>
                <p className="mt-4 text-[14px] leading-[1.7] text-cream/80">
                  Oikos restructures Delhi offices into Mediterranean, plant-fed
                  rooms. Acoustic stone, soft light, real trees rooted in the
                  floor plate. Done in six weeks, quietly.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#offices"
                    className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-[12px] tracking-[0.16em] uppercase text-forest hover:bg-cream-deep transition-colors"
                  >
                    See offices
                    <Arrow />
                  </a>
                  <a
                    href="#begin"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/55 px-5 py-2.5 text-[12px] tracking-[0.16em] uppercase text-cream hover:bg-cream/10 transition-colors"
                  >
                    Book a studio visit
                    <Arrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 03 · "Breathe"-style horizontal row, dark band ───────────── */}
        <section id="offices" className="bg-forest text-cream">
          <div className="mx-auto max-w-[1480px] px-5 pt-16 pb-6 md:px-10 md:pt-24">
            <div className="flex items-end justify-between gap-6">
              <div className="max-w-[640px]">
                <h2
                  className="text-[40px] md:text-[64px] leading-[0.98]"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  Offices
                </h2>
                <p className="mt-4 text-[13.5px] leading-[1.7] text-cream/70">
                  Seven restructures from the last three seasons. Quiet rooms,
                  living walls, full daylight. Each one redrawn around the way
                  the team actually moves through the day.
                </p>
              </div>
              <a
                href="#process"
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-cream/45 px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase text-cream hover:bg-cream/10 transition-colors"
              >
                See all
                <Arrow />
              </a>
            </div>
          </div>

          {/* Horizontally-scrolling card row */}
          <div className="overflow-x-auto pb-14 md:pb-20">
            <ul className="mx-auto flex max-w-[1480px] items-stretch gap-4 px-5 md:gap-6 md:px-10">
              {PROGRAMS.map((p, i) => (
                <li
                  key={p.title}
                  className="group flex w-[58vw] shrink-0 flex-col md:w-[300px]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-cream/10">
                    <Image
                      src={
                        i % 3 === 0
                          ? "/photos/biophilic.jpg"
                          : i % 3 === 1
                          ? "/photos/concierge.jpg"
                          : "/photos/gifting.jpg"
                      }
                      alt={`${p.title} · ${p.tag} project by Oikos`}
                      fill
                      sizes="(max-width: 768px) 60vw, 320px"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      style={{
                        objectPosition: `${(i * 17) % 100}% ${(i * 23) % 100}%`,
                      }}
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-forest/80 px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase text-cream/90">
                      {p.tag}
                    </span>
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <span className="text-[13px] leading-tight text-cream/85">
                      {p.title}
                    </span>
                    <span className="text-[11px] tracking-[0.14em] uppercase text-cream/45">
                      {p.meta}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── 04 · Editorial "Subscription"-style band ─────────────────── */}
        <section className="relative">
          <div className="relative h-[58vh] min-h-[420px] overflow-hidden">
            <Image
              src="/photos/biophilic.jpg"
              alt="Studio interior with plants and morning light"
              fill
              sizes="100vw"
              className="object-cover object-[center_60%]"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,57,16,0.10) 0%, rgba(11,57,16,0.0) 40%, rgba(255,248,235,0.0) 75%, rgba(255,248,235,0.96) 100%)",
              }}
            />
            <h3
              className="absolute bottom-10 left-5 md:left-10 max-w-[18ch] text-cream text-[34px] md:text-[58px] leading-[1.0]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Bring the outside <em className="text-honey">in.</em>
            </h3>
          </div>

          <div className="bg-cream">
            <div className="mx-auto grid max-w-[1480px] grid-cols-12 items-end gap-6 px-5 py-10 md:gap-10 md:px-10 md:py-14">
              <h4
                className="col-span-12 md:col-span-5 text-[44px] md:text-[80px] leading-[0.95] text-forest"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Studio Visit
              </h4>
              <p className="col-span-12 md:col-span-5 text-[14.5px] leading-[1.75] text-forest/75">
                A 60-minute walk-through of your office with Angelina. We map
                what stays, what leaves, where the trees go, and which wall
                gives way to glass. No fee, no pitch deck — you keep the notes.
              </p>
              <div className="col-span-12 md:col-span-2 flex justify-start md:justify-end">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-[11px] tracking-[0.22em] uppercase text-cream hover:bg-earth transition-colors"
                >
                  60 min / free
                  <Caret />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 05 · "Recipient"-style services (form-row aesthetic) ─────── */}
        <section id="services" className="bg-cream">
          <div className="mx-auto max-w-[1480px] px-5 md:px-10">
            <div className="h-px w-full bg-forest/15" />

            <div className="grid grid-cols-12 items-start gap-6 py-14 md:gap-10 md:py-20">
              <h4
                className="col-span-12 md:col-span-5 text-[48px] md:text-[88px] leading-[0.95] text-forest"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Services
              </h4>

              <div className="col-span-12 md:col-span-7">
                <p className="mb-8 text-[11px] tracking-[0.22em] uppercase text-forest/55">
                  Four ways we restructure a room *
                </p>

                <ul className="flex flex-col gap-9">
                  {SERVICES.map((s) => (
                    <li key={s.name} className="grid grid-cols-12 items-end gap-3">
                      <div className="col-span-12 md:col-span-7 border-b border-forest/30 pb-2">
                        <p className="text-[20px] md:text-[24px] text-forest">
                          {s.name}
                        </p>
                      </div>
                      <div className="col-span-12 md:col-span-5 border-b border-forest/20 pb-2 text-[11px] tracking-[0.22em] uppercase text-forest/60">
                        {s.meta}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="rounded-full bg-forest px-5 py-3 text-[11px] tracking-[0.22em] uppercase text-cream hover:bg-earth transition-colors"
                  >
                    Request a deck
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-forest/40 px-5 py-3 text-[11px] tracking-[0.22em] uppercase text-forest hover:bg-forest hover:text-cream transition-colors"
                  >
                    Generate link
                  </button>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-forest/15" />

            {/* Process — mimics Open's "About you" with hairline fields */}
            <div
              id="process"
              className="grid grid-cols-12 items-start gap-6 py-14 md:gap-10 md:py-20"
            >
              <h4
                className="col-span-12 md:col-span-5 text-[48px] md:text-[88px] leading-[0.95] text-forest"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Process
              </h4>

              <div className="col-span-12 md:col-span-7">
                <ul className="grid grid-cols-2 gap-x-8 gap-y-9">
                  {PROCESS.map((p) => (
                    <li key={p.step} className="border-b border-forest/30 pb-2">
                      <p className="text-[20px] md:text-[24px] text-forest">
                        <span className="mr-3 text-terracotta">{p.step}</span>
                        {p.title}
                      </p>
                      <p className="mt-1 text-[11px] tracking-[0.22em] uppercase text-forest/55">
                        {p.meta} *
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="mt-10 max-w-[52ch] text-[14px] leading-[1.75] text-forest/70">
                  Six weeks, start to finish. Most of the move-in happens in
                  week five — by the time your team is back from a long
                  weekend, the room has changed.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-forest/15" />

            {/* ─── 06 · "Confirm"-style contact form ──────────────────── */}
            <div
              id="begin"
              className="grid grid-cols-12 items-start gap-6 py-14 md:gap-10 md:py-24"
            >
              <h4
                className="col-span-12 md:col-span-5 text-[64px] md:text-[120px] leading-[0.9] text-forest"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Begin.
              </h4>

              <form
                action="mailto:hello@oikosbyangelina.com"
                method="post"
                encType="text/plain"
                className="col-span-12 md:col-span-7"
              >
                <div className="grid grid-cols-2 gap-x-8 gap-y-9">
                  <Field label="First name" name="first" placeholder="Sam" />
                  <Field label="Last name" name="last" placeholder="Lee" />
                  <Field
                    label="Email"
                    name="email"
                    placeholder="sam@studio.com"
                    full
                  />
                  <Field
                    label="Company"
                    name="company"
                    placeholder="Studio · Office name"
                  />
                  <Field
                    label="Team size"
                    name="size"
                    placeholder="12 — 80"
                  />
                  <Field
                    label="Add a note"
                    name="note"
                    placeholder="Tell us about the room"
                    full
                    multiline
                  />
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-[11px] tracking-[0.22em] uppercase text-forest/55">
                    6 week sprint · Delhi NCR · From ₹12L
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-terracotta px-7 py-3.5 text-[12px] tracking-[0.18em] uppercase text-cream hover:bg-terracotta-soft transition-colors"
                  >
                    Book studio visit
                    <Arrow />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ─── 07 · Footer (mirrors Open's bottom black bar) ──────────── */}
        <footer className="bg-forest text-cream/85">
          <div className="mx-auto grid max-w-[1480px] grid-cols-12 items-center gap-6 px-5 py-10 md:gap-10 md:px-10 md:py-14">
            <div className="col-span-12 md:col-span-5">
              <p
                className="text-[28px] md:text-[34px]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                <em>oikos</em>
                <span className="text-terracotta">.</span>
              </p>
              <p className="mt-3 max-w-[42ch] text-[12.5px] leading-[1.75] text-cream/65">
                A practice for biophilic office restructuring in Delhi. Studio
                visits by appointment.
              </p>
            </div>

            <nav className="col-span-6 md:col-span-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] tracking-[0.18em] uppercase">
              {NAV.map((n) => (
                <a key={n} href={`#${n}`} className="hover:text-cream">
                  {n}
                  <span aria-hidden className="ml-1">
                    →
                  </span>
                </a>
              ))}
            </nav>

            <div className="col-span-6 md:col-span-3 flex flex-col items-end gap-2 text-right text-[11px] tracking-[0.18em] uppercase">
              <a href="mailto:hello@oikosbyangelina.com" className="hover:text-cream">
                hello@oikosbyangelina.com
              </a>
              <span className="opacity-50">Delhi · India</span>
            </div>
          </div>

          <div className="border-t border-cream/10">
            <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-5 text-[10px] tracking-[0.22em] uppercase text-cream/45 md:px-10">
              <span>Terms · Privacy</span>
              <span>© 2026 Oikos by Angelina · All rights reserved</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Small UI helpers
   ────────────────────────────────────────────────────────── */

function FilterPill({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] tracking-[0.16em] uppercase ${
        active ? "bg-cream text-forest" : "text-cream/80 hover:text-cream"
      }`}
    >
      {children}
    </span>
  );
}

function Arrow() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="translate-x-0 transition-transform"
    >
      <path
        d="M1 7h12m0 0L8 2m5 5l-5 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Caret() {
  return (
    <svg width="11" height="7" viewBox="0 0 11 7" fill="none" aria-hidden>
      <path
        d="M1 1l4.5 4L10 1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Field({
  label,
  name,
  placeholder,
  full = false,
  multiline = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  full?: boolean;
  multiline?: boolean;
}) {
  const wrapClass = full ? "col-span-2" : "col-span-2 md:col-span-1";
  if (multiline) {
    return (
      <label className={`${wrapClass} block`}>
        <textarea
          name={name}
          placeholder={placeholder}
          rows={3}
          className="w-full resize-none border-b border-forest/30 bg-transparent pb-2 text-[16px] text-forest placeholder:text-forest/35 focus:border-terracotta focus:outline-none"
        />
        <span className="mt-1 block text-[11px] tracking-[0.22em] uppercase text-forest/55">
          {label} *
        </span>
      </label>
    );
  }
  return (
    <label className={`${wrapClass} block`}>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="w-full border-b border-forest/30 bg-transparent pb-2 text-[18px] text-forest placeholder:text-forest/35 focus:border-terracotta focus:outline-none"
      />
      <span className="mt-1 block text-[11px] tracking-[0.22em] uppercase text-forest/55">
        {label} *
      </span>
    </label>
  );
}
