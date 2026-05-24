import { Reveal } from "./Reveal";

export function Closing() {
  return (
    <section
      id="begin"
      className="relative bg-forest text-cream overflow-hidden py-28 md:py-44"
    >
      {/* Warm wash — restrained */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[55vh] w-[55vh] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(228,197,138,0.55), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-12">
        {/* Section masthead — inverted colors */}
        <Reveal>
          <div className="grid grid-cols-12 items-baseline gap-x-6 pb-10 md:pb-16 border-b border-cream/15">
            <div className="col-span-12 md:col-span-3 flex items-baseline gap-4">
              <span className="display italic text-gold text-2xl md:text-3xl">
                IV
              </span>
              <span className="eyebrow text-cream/60">A Correspondence</span>
            </div>
            <div className="col-span-12 md:col-span-9 mt-6 md:mt-0">
              <h2 className="display text-cream leading-[0.96] tracking-[-0.018em] text-[clamp(2rem,4.6vw,3.4rem)]">
                Write to Angelina
                <span className="text-gold">.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Body */}
        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12">
          {/* Left: instructions / marginalia */}
          <Reveal delay={80} className="col-span-12 md:col-span-3">
            <div className="space-y-5">
              <div>
                <div className="eyebrow text-cream/45 mb-2">How this works</div>
                <p className="text-cream/75 text-[13.5px] leading-[1.7]">
                  A short message is enough. Tell us about the room, the
                  occasion, or the office. Angelina replies personally, usually
                  within two days.
                </p>
              </div>
              <div className="h-px bg-cream/20 w-12" />
              <div className="text-cream/55 text-[12px] leading-relaxed">
                Slow practice, slow correspondence. <br />
                We do not work in briefs.
              </div>
            </div>
          </Reveal>

          {/* Right: the prompt + CTAs */}
          <Reveal delay={140} className="col-span-12 md:col-span-9">
            <div className="max-w-[58ch]">
              <p className="display text-cream text-[clamp(1.5rem,2.8vw,2.4rem)] leading-[1.32] tracking-[-0.012em]">
                Tell us about your{" "}
                <span className="italic text-gold">room</span>, your{" "}
                <span className="italic text-gold">gift</span>, or the{" "}
                <span className="italic text-gold">office</span> your people
                return to every Monday.
              </p>

              <p className="mt-8 md:mt-10 text-cream/75 text-[15px] leading-[1.78] max-w-[52ch]">
                We&rsquo;ll take it from there. One conversation is usually
                enough to find the right starting point.
              </p>

              {/* Inline contact rows */}
              <div className="mt-12 md:mt-14 grid grid-cols-12 gap-x-8 gap-y-8">
                <div className="col-span-12 md:col-span-7">
                  <div className="eyebrow text-cream/45 mb-3">By letter</div>
                  <a
                    href="mailto:angelina@oikosbyangelina.com"
                    className="display italic text-cream text-[clamp(1.1rem,1.6vw,1.45rem)] hover:text-gold transition-colors break-words inline-block"
                  >
                    angelina@oikosbyangelina.com
                  </a>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div className="eyebrow text-cream/45 mb-3">By voice</div>
                  <a
                    href="tel:+919999999999"
                    className="display italic text-cream text-[clamp(1.1rem,1.6vw,1.45rem)] hover:text-gold transition-colors inline-block"
                  >
                    +91 99 9999 9999
                  </a>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="mt-14 md:mt-16 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a
                  href="mailto:angelina@oikosbyangelina.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-cream pl-6 pr-5 py-3 text-forest text-[13px] tracking-wide transition-all hover:bg-gold"
                >
                  <span className="display italic">Begin the correspondence</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M1 7h12m0 0L8 2m5 5l-5 5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <span className="text-cream/55 text-[13px] tracking-wide">
                  Reply within two working days
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section footer */}
        <Reveal>
          <div className="mt-24 md:mt-32 flex items-end justify-between border-t border-cream/15 pt-6 text-cream/45">
            <span className="eyebrow">IV &middot; A Correspondence</span>
            <span className="display italic text-sm">014 · 014</span>
            <span className="eyebrow hidden md:block">End of issue</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
