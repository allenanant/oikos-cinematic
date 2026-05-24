import { Reveal } from "./Reveal";

export function Etymology() {
  return (
    <section
      id="etymology"
      className="relative bg-cream-soft/55 py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
        {/* Section masthead — same anatomy as Letter */}
        <Reveal>
          <div className="grid grid-cols-12 items-baseline gap-x-6 pb-10 md:pb-16 border-b border-forest/12">
            <div className="col-span-12 md:col-span-3 flex items-baseline gap-4">
              <span className="display italic text-terracotta text-2xl md:text-3xl">
                II
              </span>
              <span className="eyebrow text-forest/55">Etymology</span>
            </div>
            <div className="col-span-12 md:col-span-9 mt-6 md:mt-0">
              <h2 className="display text-forest leading-[0.96] tracking-[-0.018em] text-[clamp(2rem,4.6vw,3.4rem)]">
                One word, then
                <br />
                <span className="italic text-terracotta">two ways of living.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Glossary entry — single coherent block, no double-grid */}
        <Reveal delay={120}>
          <div className="mt-16 md:mt-24 grid grid-cols-12 gap-x-6 md:gap-x-10 items-end">
            {/* Headword on the left */}
            <div className="col-span-12 md:col-span-5">
              <div className="display italic text-forest/55 text-[clamp(1.4rem,2vw,1.9rem)]">
                οἶκος
              </div>
              <div className="display text-forest leading-[0.9] mt-2 text-[clamp(4.5rem,10vw,8.5rem)] tracking-[-0.02em]">
                <span className="italic">oíkos</span>
                <span className="text-terracotta">.</span>
              </div>
              <div className="eyebrow mt-4 text-forest/55">
                noun &middot; ancient Greek
              </div>
            </div>

            {/* Definition on the right, optically aligned to baseline of headword */}
            <div className="col-span-12 md:col-span-7 mt-10 md:mt-0 md:pb-8">
              <p className="display italic text-forest text-[clamp(1.35rem,2.3vw,1.85rem)] leading-[1.32]">
                home
                <span className="not-italic text-terracotta/70 mx-3">·</span>
                household
                <br className="hidden md:block" />
                <span className="not-italic text-terracotta/70 mx-3 md:hidden">·</span>
                the small ecosystem within it
              </p>
              <p className="mt-6 text-forest/65 text-[14px] leading-[1.7] max-w-[44ch]">
                Centuries later, the same root branched into two words that
                began their lives as one.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Branching diagram */}
        <Reveal delay={220} className="mt-24 md:mt-32">
          <EtymologyBranch />
        </Reveal>

        {/* Closing footer — folio numbers + page rule */}
        <Reveal delay={140}>
          <div className="mt-20 md:mt-28 flex items-end justify-between border-t border-forest/15 pt-6 text-forest/45">
            <span className="eyebrow">II &middot; Etymology</span>
            <span className="display italic text-sm">004 · 014</span>
            <span className="eyebrow hidden md:block">Continue ↓</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EtymologyBranch() {
  return (
    <div className="relative flex justify-center">
      {/* Mobile */}
      <svg
        viewBox="0 0 420 360"
        className="block md:hidden w-full max-w-md"
        fill="none"
        aria-hidden
      >
        <text x="210" y="46" textAnchor="middle" fontFamily="var(--font-display), serif" fontStyle="italic" fontSize="40" fill="var(--color-forest)">οἶκος</text>
        <path d="M 198,62 C 150,100 110,150 95,210" pathLength={1} stroke="var(--color-terracotta)" strokeWidth="1.2" strokeLinecap="round" className="branch-line" style={{ ["--branch-delay" as string]: "150ms" }} />
        <path d="M 222,62 C 270,100 310,150 325,210" pathLength={1} stroke="var(--color-terracotta)" strokeWidth="1.2" strokeLinecap="round" className="branch-line" style={{ ["--branch-delay" as string]: "150ms" }} />
        <circle cx="95" cy="210" r="3.2" fill="var(--color-terracotta)" className="branch-word" style={{ ["--word-delay" as string]: "1500ms" }} />
        <circle cx="325" cy="210" r="3.2" fill="var(--color-terracotta)" className="branch-word" style={{ ["--word-delay" as string]: "1500ms" }} />
        <g className="branch-word" style={{ ["--word-delay" as string]: "1700ms" }}>
          <text x="95" y="252" textAnchor="middle" fontFamily="var(--font-display), serif" fontStyle="italic" fontSize="34" fill="var(--color-forest)">ecology</text>
          <text x="95" y="282" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="11" letterSpacing="2.6" fill="var(--color-forest)" opacity="0.55">THE STUDY</text>
          <text x="95" y="302" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="11" letterSpacing="2.6" fill="var(--color-forest)" opacity="0.55">OF HOME</text>
        </g>
        <g className="branch-word" style={{ ["--word-delay" as string]: "1900ms" }}>
          <text x="325" y="252" textAnchor="middle" fontFamily="var(--font-display), serif" fontStyle="italic" fontSize="34" fill="var(--color-forest)">economy</text>
          <text x="325" y="282" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="11" letterSpacing="2.6" fill="var(--color-forest)" opacity="0.55">THE MANAGEMENT</text>
          <text x="325" y="302" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="11" letterSpacing="2.6" fill="var(--color-forest)" opacity="0.55">OF HOME</text>
        </g>
        <text x="210" y="346" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="11" letterSpacing="2.8" fill="var(--color-forest)" opacity="0.4" className="branch-word" style={{ ["--word-delay" as string]: "2200ms" }}>TWO WORDS · ONE ROOT</text>
      </svg>

      {/* Desktop */}
      <svg
        viewBox="0 0 800 320"
        className="hidden md:block w-full max-w-3xl"
        fill="none"
        aria-hidden
      >
        <text
          x="400"
          y="48"
          textAnchor="middle"
          fontFamily="var(--font-display), serif"
          fontStyle="italic"
          fontSize="44"
          fill="var(--color-forest)"
        >
          οἶκος
        </text>
        <path
          d="M 380,68 C 280,110 200,150 175,200"
          pathLength={1}
          stroke="var(--color-terracotta)"
          strokeWidth="1.1"
          strokeLinecap="round"
          className="branch-line"
          style={{ ["--branch-delay" as string]: "150ms" }}
        />
        <path
          d="M 420,68 C 520,110 600,150 625,200"
          pathLength={1}
          stroke="var(--color-terracotta)"
          strokeWidth="1.1"
          strokeLinecap="round"
          className="branch-line"
          style={{ ["--branch-delay" as string]: "150ms" }}
        />
        <circle cx="175" cy="200" r="3" fill="var(--color-terracotta)" className="branch-word" style={{ ["--word-delay" as string]: "1500ms" }} />
        <circle cx="625" cy="200" r="3" fill="var(--color-terracotta)" className="branch-word" style={{ ["--word-delay" as string]: "1500ms" }} />
        <g className="branch-word" style={{ ["--word-delay" as string]: "1700ms" }}>
          <text x="175" y="240" textAnchor="middle" fontFamily="var(--font-display), serif" fontStyle="italic" fontSize="42" fill="var(--color-forest)">ecology</text>
          <text x="175" y="272" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="11" letterSpacing="3" fill="var(--color-forest)" opacity="0.55">THE STUDY OF HOME</text>
        </g>
        <g className="branch-word" style={{ ["--word-delay" as string]: "1900ms" }}>
          <text x="625" y="240" textAnchor="middle" fontFamily="var(--font-display), serif" fontStyle="italic" fontSize="42" fill="var(--color-forest)">economy</text>
          <text x="625" y="272" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="11" letterSpacing="3" fill="var(--color-forest)" opacity="0.55">THE MANAGEMENT OF HOME</text>
        </g>
        <text x="400" y="312" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="11" letterSpacing="3" fill="var(--color-forest)" opacity="0.4" className="branch-word" style={{ ["--word-delay" as string]: "2200ms" }}>TWO WORDS · ONE ROOT</text>
      </svg>
    </div>
  );
}
