import Image from "next/image";
import { Reveal } from "./Reveal";

export function Letter() {
  return (
    <section
      id="letter"
      className="relative bg-cream pt-28 md:pt-40 pb-28 md:pb-40"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
        {/* Section masthead */}
        <Reveal>
          <div className="grid grid-cols-12 items-baseline gap-x-6 pb-10 md:pb-16 border-b border-forest/12">
            <div className="col-span-12 md:col-span-3 flex items-baseline gap-4">
              <span className="display italic text-terracotta text-2xl md:text-3xl">
                I
              </span>
              <span className="eyebrow text-forest/55">A Letter</span>
            </div>
            <div className="col-span-12 md:col-span-9 mt-6 md:mt-0">
              <h2 className="display text-forest leading-[0.96] tracking-[-0.018em] text-[clamp(2rem,4.6vw,3.4rem)]">
                What we mean
                <br />
                <span className="italic text-terracotta">when we say oikos.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Body: 12-col asymmetric grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12">
          {/* Marginalia: from-the-desk-of label */}
          <Reveal delay={80} className="col-span-12 md:col-span-3">
            <div className="md:sticky md:top-32 space-y-5">
              <div>
                <div className="eyebrow text-forest/45 mb-2">From the desk of</div>
                <div className="display italic text-forest text-2xl">
                  Angelina
                </div>
                <div className="text-forest/55 text-[12px] mt-1 tracking-wide">
                  Founder &middot; Lodi Road, Delhi
                </div>
              </div>
              <div className="h-px bg-forest/15 w-12" />
              <div className="text-forest/55 text-[12.5px] leading-relaxed">
                Written one Sunday in March, when the jasmine on the balcony
                had just opened.
              </div>
            </div>
          </Reveal>

          {/* The essay */}
          <Reveal delay={140} className="col-span-12 md:col-span-9">
            <div className="max-w-[64ch]">
              <p className="dropcap display text-forest text-[19px] md:text-[20.5px] leading-[1.62]">
                <span className="font-normal not-italic">O</span>ikos is the
                Greek word for the small ecosystem of a home &mdash; the
                household, the family of objects and people inside it, the
                quiet weather of the rooms. Centuries later, the same root
                grew into <em className="italic">ecology</em> and{" "}
                <em className="italic">economy</em>. Both words still ask the
                same question, in their own way: how do we live well together,
                in a finite place?
              </p>

              <p className="mt-7 text-forest/85 text-[16px] leading-[1.78]">
                I started Oikos because most of what is sold as
                &ldquo;sustainable&rdquo; feels neither warm nor considered. It
                comes in plastic, it ships in three boxes, it sits on the
                counter unused. I wanted a practice that did the opposite. Spaces
                that take their cues from the light you actually have. Gifts that
                are still in use a year later. A workplace concierge that
                replaces the things your office quietly runs on &mdash; tissues,
                soap, scent, refills &mdash; before anyone has to ask, and from
                people who make them well.
              </p>

              <p className="mt-7 text-forest/85 text-[16px] leading-[1.78]">
                None of it is rigid. A room is permitted to be imperfect. A
                paper-tied parcel is permitted to look hand-made. The whole
                point is that beauty and care should not be at war with the
                planet, or with the people doing the work.
              </p>

              {/* Pull quote */}
              <Reveal delay={200}>
                <blockquote className="mt-12 md:mt-14 mb-12 border-l-2 border-terracotta pl-6 md:pl-10 max-w-[58ch]">
                  <p className="display italic text-forest text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.22]">
                    A room should exhale a little when you walk in. So should
                    the things you put inside it.
                  </p>
                </blockquote>
              </Reveal>

              <p className="text-forest/85 text-[16px] leading-[1.78]">
                If any of that resonates &mdash; for a home, a studio, a hotel
                room, or the office your team comes back to every Monday &mdash;
                I would love to hear from you. The practice runs slowly, on
                conversations rather than briefs.
              </p>

              {/* Signature */}
              <div className="mt-12 flex items-baseline gap-5 text-forest/75">
                <span className="display italic text-[28px] md:text-[34px] text-forest">
                  &mdash; Angelina
                </span>
                <span className="text-[12px] tracking-[0.18em] uppercase text-forest/45">
                  Founder, Oikos
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Inline figure beneath letter — a detail moment */}
        <Reveal delay={140}>
          <figure className="mt-24 md:mt-32 grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-7 md:col-start-3">
              <div className="img-reveal relative aspect-[16/9] overflow-hidden ring-1 ring-forest/10">
                <Image
                  src="/photos/gifting.jpg"
                  alt="A kraft-paper parcel finished with twine, a wax seal, and a sprig of cedar"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(60,35,15,0.18) 100%)",
                  }}
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-forest/45">
                <span className="text-[11px] tracking-[0.18em] uppercase">
                  fig. 02
                </span>
                <span className="display italic text-[12px]">
                  a small parcel, tied by hand
                </span>
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
