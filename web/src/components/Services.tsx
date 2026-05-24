import Image from "next/image";
import { Reveal } from "./Reveal";

type Practice = {
  number: string;
  kicker: string;
  title: string;
  italicWord?: string;
  body: string[];
  pull: string;
  suitedFor: string;
  cta: { label: string; href: string };
  image: { src: string; alt: string; caption: string; location: string };
};

const practices: Practice[] = [
  {
    number: "01",
    kicker: "Of rooms",
    title: "Biophilic interiors",
    body: [
      "Rooms designed to take their cues from the light you actually have, the way a body wants to move through a space, and the planting you can keep alive next March. Materials that age well. Layouts that have somewhere to put a hand.",
      "Each project begins with a long walk through the space, no notebook, no brief. The drawings come later.",
    ],
    pull: "We don't decorate rooms. We listen to them, and then we add a little.",
    suitedFor:
      "Studios, café & retail interiors, boutique hotel suites, corporate offices that want to feel less like corporate offices.",
    cta: { label: "Begin a room", href: "#begin" },
    image: {
      src: "/photos/biophilic.jpg",
      alt: "A Monstera deliciosa in a stoneware pot beside a sculpted chair",
      caption: "From a recent residential commission",
      location: "Vasant Vihar, Delhi",
    },
  },
  {
    number: "02",
    kicker: "Of gestures",
    title: "Conscious gifting",
    body: [
      "Hampers, festival gifts, wedding favours and quiet thank-yous, assembled by hand. Sourced from small makers and built around things people keep, not consume in a week.",
      "Every parcel is tied in twine and finished with a wax seal. The wrapping itself is part of the gift.",
    ],
    pull: "A small, slow ritual on both ends — the making, and the opening.",
    suitedFor:
      "Personal gifting, wedding favours, client appreciation, employee onboarding, festive hampers.",
    cta: { label: "Curate a parcel", href: "#begin" },
    image: {
      src: "/photos/gifting.jpg",
      alt: "A kraft-paper parcel tied in twine, finished with a wax seal and a sprig of cedar",
      caption: "Spring hamper, in twine and cedar",
      location: "Studio, Lodi Road",
    },
  },
  {
    number: "03",
    kicker: "Of upkeep",
    title: "A workplace concierge",
    body: [
      "A standing service for the things your workplace quietly runs on — hand soap, tissues, room scents, pantry refills, washroom essentials, the seasonal touches that make a room feel cared for.",
      "Sourced from sustainable brands. Delivered on a schedule that matches your usage. Replenished before anyone has to ask.",
    ],
    pull: "One conversation at the start. Ongoing care after that.",
    suitedFor:
      "Offices, co-working spaces, boutique hotels, clinics, studios.",
    cta: { label: "Set up a service", href: "#begin" },
    image: {
      src: "/photos/concierge.jpg",
      alt: "Two refillable amber-glass bottles arranged on a warm-wood surface",
      caption: "Amber refill set, in a small studio kitchen",
      location: "Mehrauli, Delhi",
    },
  },
];

export function Services() {
  return (
    <section
      id="practice"
      className="relative bg-cream py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
        {/* Section masthead */}
        <Reveal>
          <div className="grid grid-cols-12 items-baseline gap-x-6 pb-10 md:pb-16 border-b border-forest/12">
            <div className="col-span-12 md:col-span-3 flex items-baseline gap-4">
              <span className="display italic text-terracotta text-2xl md:text-3xl">
                III
              </span>
              <span className="eyebrow text-forest/55">The Practice</span>
            </div>
            <div className="col-span-12 md:col-span-9 mt-6 md:mt-0">
              <h2 className="display text-forest leading-[0.96] tracking-[-0.018em] text-[clamp(2rem,4.6vw,3.4rem)]">
                Three ways
                <br />
                <span className="italic text-terracotta">we bring oikos in.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Practices: editorial spreads */}
        <div className="mt-20 md:mt-32 space-y-32 md:space-y-44">
          {practices.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal
                key={p.number}
                className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-10 items-start"
              >
                {/* Photograph spread — takes 7/12 cols, alternates side */}
                <figure
                  className={`col-span-12 md:col-span-7 ${
                    reverse ? "md:order-2 md:col-start-6" : "md:order-1"
                  }`}
                >
                  {/* Caption row above photo */}
                  <div className="flex items-baseline justify-between pb-3">
                    <span className="eyebrow text-forest/45">
                      Plate {romanize(i + 2)}
                    </span>
                    <span className="display italic text-forest/45 text-sm">
                      {p.image.caption}
                    </span>
                  </div>

                  <div className="img-reveal relative aspect-[4/5] md:aspect-[5/6] overflow-hidden ring-1 ring-forest/10 shadow-[0_30px_80px_-40px_rgba(60,35,15,0.32)]">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none mix-blend-multiply"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 50%, rgba(180,106,44,0.10) 80%, rgba(60,35,15,0.20) 100%)",
                      }}
                    />
                  </div>

                  {/* Caption row below photo */}
                  <figcaption className="mt-3 flex items-baseline justify-between text-forest/45">
                    <span className="text-[11px] tracking-[0.18em] uppercase">
                      fig. {String(i + 3).padStart(2, "0")}
                    </span>
                    <span className="display italic text-[12px]">
                      {p.image.location}
                    </span>
                  </figcaption>
                </figure>

                {/* Editorial text spread */}
                <div
                  className={`col-span-12 md:col-span-5 ${
                    reverse ? "md:order-1 md:col-start-1 md:row-start-1" : "md:order-2"
                  } md:pt-8`}
                >
                  {/* Number + kicker */}
                  <div className="flex items-baseline gap-5">
                    <span className="display italic text-terracotta text-[2.6rem] md:text-[3.2rem] leading-none">
                      {p.number}
                    </span>
                    <div className="flex-1 flex items-center gap-3">
                      <span className="block h-px flex-1 bg-forest/20" />
                      <span className="eyebrow text-forest/55">{p.kicker}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="display text-forest leading-[1.0] mt-6 text-[clamp(2.1rem,3.2vw,3rem)] tracking-[-0.012em]">
                    {p.title}
                  </h3>

                  {/* Body */}
                  <div className="mt-8 space-y-5 text-forest/82 text-[15.5px] leading-[1.78] max-w-[44ch]">
                    {p.body.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>

                  {/* Pull quote */}
                  <blockquote className="mt-9 border-l-2 border-terracotta pl-5 max-w-[42ch]">
                    <p className="display italic text-forest text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.32]">
                      &ldquo;{p.pull}&rdquo;
                    </p>
                  </blockquote>

                  {/* Suited for */}
                  <div className="mt-9 space-y-2">
                    <div className="eyebrow text-forest/55">Suited for</div>
                    <p className="text-forest/72 text-[13.5px] leading-[1.65] max-w-[44ch]">
                      {p.suitedFor}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href={p.cta.href}
                    className="cta-link mt-10 inline-flex text-forest text-[14px] tracking-wide"
                  >
                    <span className="display italic">{p.cta.label}</span>
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
            );
          })}
        </div>

        {/* Section footer rule */}
        <Reveal>
          <div className="mt-24 md:mt-32 flex items-end justify-between border-t border-forest/15 pt-6 text-forest/45">
            <span className="eyebrow">III &middot; The Practice</span>
            <span className="display italic text-sm">011 · 014</span>
            <span className="eyebrow hidden md:block">Continue ↓</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function romanize(n: number): string {
  const map: Record<number, string> = {
    1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI",
    7: "VII", 8: "VIII", 9: "IX", 10: "X",
  };
  return map[n] ?? String(n);
}
