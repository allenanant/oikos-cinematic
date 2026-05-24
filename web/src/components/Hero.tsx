import Image from "next/image";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24"
    >
      {/* Soft ambient washes — restrained, not decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[55vh] w-[55vh] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(180,106,44,0.16), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1480px] px-6 md:px-12">
        {/* Masthead strip — magazine-issue style */}
        <Reveal>
          <div className="flex items-end justify-between text-forest/55 pb-10 md:pb-14 border-b border-forest/15">
            <div className="flex items-baseline gap-4 md:gap-6">
              <span className="eyebrow">Vol. I</span>
              <span className="hidden md:block h-px w-10 bg-forest/30 translate-y-[-3px]" />
              <span className="eyebrow">Issue 01 · Spring 2026</span>
            </div>
            <span className="hidden md:block eyebrow">
              Delhi · India
            </span>
          </div>
        </Reveal>

        {/* Main hero grid: 12 col, asymmetric */}
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mt-12 md:mt-20 items-start">
          {/* Left column — type */}
          <div className="col-span-12 md:col-span-7 lg:col-span-7">
            <Reveal delay={80}>
              <div className="flex items-center gap-3 text-forest/55">
                <span className="block h-px w-8 bg-terracotta/55" />
                <span className="eyebrow text-terracotta">
                  A studio visit
                </span>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <h1 className="mt-8 md:mt-10 display text-forest leading-[0.93] tracking-[-0.022em]">
                <span className="block text-[clamp(3.2rem,9vw,8rem)] font-normal">
                  For a life
                </span>
                <span className="block text-[clamp(3.2rem,9vw,8rem)] italic text-terracotta -mt-1">
                  that steadies
                </span>
                <span className="block text-[clamp(3.2rem,9vw,8rem)] font-normal">
                  you<span className="text-terracotta">.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-12 md:mt-16 grid grid-cols-12 gap-x-6">
                <p className="col-span-12 md:col-span-9 lg:col-span-8 text-[15px] md:text-[16.5px] leading-[1.75] text-forest/75">
                  Oikos is a small practice in Delhi for the spaces and gestures
                  that hold a life together. Biophilic interiors, conscious gifting,
                  and a quiet workplace concierge &mdash; each made by hand, sourced
                  with care, and arranged so that the room exhales when you walk in.
                </p>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a
                  href="#practice"
                  className="group inline-flex items-center gap-3 rounded-full bg-forest pl-6 pr-5 py-3 text-cream text-[13px] tracking-wide transition-all hover:bg-earth"
                >
                  <span className="display italic">Read the issue</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform group-hover:translate-y-0.5"
                  >
                    <path
                      d="M7 1v12m0 0L2 8m5 5l5-5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="#begin"
                  className="cta-link text-[13px] tracking-wide text-forest"
                >
                  <span className="display italic">Or write to Angelina</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12m0 0L8 2m5 5l-5 5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right column — the opening photograph */}
          <div className="col-span-12 md:col-span-5 lg:col-span-5 mt-14 md:mt-0">
            <Reveal delay={120} className="md:translate-y-2">
              <figure className="relative">
                {/* Caption-style label above the photo */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="eyebrow text-forest/45">Plate I</span>
                  <span className="display italic text-forest/45 text-sm">
                    A studio, late afternoon
                  </span>
                </div>

                <div className="img-reveal relative aspect-[4/5] overflow-hidden ring-1 ring-forest/10 shadow-[0_30px_80px_-40px_rgba(60,35,15,0.35)]">
                  <Image
                    src="/photos/hero.jpg"
                    alt="A warm mid-century interior with a tan leather sofa, fiddle-leaf fig, and afternoon light"
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    priority
                    className="object-cover"
                  />
                  {/* Warm tint to anchor cool whites back to the cream brand */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-multiply"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,248,235,0.0) 35%, rgba(180,106,44,0.10) 75%, rgba(60,35,15,0.18) 100%)",
                    }}
                  />
                </div>

                {/* Folio-style caption */}
                <figcaption className="mt-3 flex items-baseline justify-between text-forest/50">
                  <span className="text-[11px] tracking-[0.18em] uppercase">
                    fig. 01
                  </span>
                  <span className="text-[12px] italic display">
                    photographed for Oikos, 2026
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Bottom rule + page-number indicator */}
        <Reveal delay={480}>
          <div className="mt-20 md:mt-28 flex items-end justify-between border-t border-forest/15 pt-6 text-forest/45">
            <span className="eyebrow">A practice in well-living</span>
            <span className="display italic text-sm">001 · 014</span>
            <span className="eyebrow hidden md:block">Continue →</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
