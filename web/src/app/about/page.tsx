import { px, pxSet } from "@/lib/pexels";
import Cursor from "@/components/cinematic/Cursor";
import FullNav from "@/components/full/FullNav";
import ClosingInvite from "@/components/full/ClosingInvite";
import FullFooter from "@/components/full/FullFooter";
import Reveals from "@/components/full/Reveals";

type Card = {
  n: string;
  kicker: string;
  ttl: React.ReactNode;
  body: React.ReactNode;
  img: string;
  alt: string;
};

const CARDS: Card[] = [
  {
    n: "01",
    kicker: "Daylight-led restructure",
    ttl: (
      <>
        Light, brought to the <em>middle</em>.
      </>
    ),
    body: (
      <>
        Pull light into the deepest, most dead centre of your space, through
        the core, not just the windows.
      </>
    ),
    img: "https://images.pexels.com/photos/35566906/pexels-photo-35566906/free-photo-of-modern-office-atrium-with-greenery.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&fit=crop",
    alt: "A deep floor-plate with daylight reaching its centre",
  },
  {
    n: "02",
    kicker: "Planting as a working system",
    ttl: (
      <>
        Fresh air you actually <em>feel</em>.
      </>
    ),
    body: (
      <>
        We treat planting as air infrastructure, not decoration. A living
        system measured for what it puts back into the room.
      </>
    ),
    img: "https://images.pexels.com/photos/17056994/pexels-photo-17056994/free-photo-of-decorative-wall-of-brick-pots-with-plants.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&fit=crop",
    alt: "A structural living wall with daylight and natural materials",
  },
  {
    n: "03",
    kicker: "Acoustics as material",
    ttl: (
      <>
        Quiet, <em>built in</em>.
      </>
    ),
    body: (
      <>
        We build quiet from the materials up, each design tuned by measurement.
        The easiest way to feel expensive is to be quiet.
      </>
    ),
    img: "https://images.pexels.com/photos/36287488/pexels-photo-36287488/free-photo-of-modern-office-interior-in-milano-with-green-plants.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&fit=crop",
    alt: "A calm, soft-surfaced workspace with plants and warm light",
  },
];

const ABOUT_HERO =
  "https://images.pexels.com/photos/35566906/pexels-photo-35566906/free-photo-of-modern-office-atrium-with-greenery.jpeg";

export default function AboutPage() {
  return (
    <>
      <Cursor />
      <FullNav active="about" lightAt={0.68} />

      <section className="about-hero">
        <div className="about-hero-bg">
          {/* LCP for this route — stays eager and gets an explicit priority. */}
          <img
            src={px(ABOUT_HERO, 2000, 1250)}
            srcSet={pxSet(ABOUT_HERO, [1200, 1600, 2000, 2400], 8 / 5)}
            sizes="100vw"
            alt=""
            width={2000}
            height={1250}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="about-hero-inner">
          <h1>
            At Oikos, we help individuals and businesses live consciously -
            combining creativity, purpose, and sustainability{" "}
            <span className="about-hl">in every choice</span>.
          </h1>
        </div>
      </section>

      <main className="full-flow">
        <section className="about-etym">
          <div className="ed">
            <div className="etym-word" data-reveal>
              <span className="word">οἶκος</span>
              <span className="gloss">Greek for home.</span>
            </div>
            <div className="etym-body">
              <p className="lead" data-reveal>
                The root, also, of both <em>ecology</em> and{" "}
                <em>economy</em>. The way a household is kept, and the world that
                keeps it.
              </p>
              <p data-reveal>
                Your workplace is your other home. So Oikos started with a simple
                conviction: it ought to be kept with the same care.
              </p>
            </div>
          </div>
        </section>

        <section className="about-founder">
          <div className="ed">
            <div className="founder-note" data-reveal>
              <span className="founder-eyebrow">
                <span className="founder-bar" />A note from the founder
              </span>
              <div className="founder-body">
                <p>
                  I&rsquo;m Angelina, a lawyer by profession and a nature
                  enthusiast at heart. After spending years working in
                  uninspiring spaces, I came to realize how deeply our
                  surroundings influence the way we think, feel, and work. I
                  found myself longing for the calm, clarity, and energy that
                  nature brings, and I began to wonder why our workplaces
                  couldn&rsquo;t offer the same experience.
                </p>
                <p>
                  That question became the foundation of this company. My
                  mission is to transform everyday workspaces into environments
                  that are not only beautiful but also healthier, more
                  sustainable, and deeply connected to nature. Through
                  thoughtful biophilic designs, I aim to help people and
                  businesses create spaces that inspire creativity, enhance
                  well-being, and remind us that even in the busiest offices, we
                  don&rsquo;t have to lose{" "}
                  <em>our connection with the natural world.</em>
                </p>
              </div>
              <div className="founder-sign-row">
                <span className="founder-sign">Angelina</span>
                <span className="founder-role">
                  Founder &middot; Oikos by Angelina
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-triad">
          <div className="ed">
            <div
              className="full-mark"
              style={{ gridColumn: "1 / 13" }}
              data-reveal
            >
              <h3>
                How your space is <em>transformed</em>
              </h3>
              <span className="meta">
                Light, air, quiet <em>· three working systems</em>
              </span>
            </div>
            <div className="triad">
              {CARDS.map((c, i) => (
                <article className="triad-row" key={i} data-reveal>
                  <div className="img">
                    {/* Below the fold — lazy, or React preloads all three at
                        top priority against the hero. 4/3 slot, ~612x459. */}
                    <img
                      src={px(c.img, 1240, 930)}
                      srcSet={pxSet(c.img, [620, 900, 1240], 4 / 3)}
                      sizes="(max-width: 780px) 100vw, 45vw"
                      alt={c.alt}
                      width={1240}
                      height={930}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="body">
                    <span className="n">{c.n}</span>
                    <span className="kicker">{c.kicker}</span>
                    <h4 className="ttl">{c.ttl}</h4>
                    <p className="p">{c.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-expertise">
          <div className="ed">
            <span className="lab" data-reveal>
              <span className="num">
                Our <span className="ok-accent">expertise</span>
              </span>
            </span>
            <h3 data-reveal>
              Sustainability, made <em>approachable</em>.
            </h3>
            <p data-reveal>
              With Oikos you benefit from deep expertise in sustainability
              consultation. We combine environmental knowledge with a
              human-centred approach, so every recommendation is actionable,
              beautiful, and aligned with your values, so sustainability sits
              naturally in the way you work, with lasting impact for your team
              and the planet.
            </p>
          </div>
        </section>

        <ClosingInvite
          eyebrow="· a greener way to work"
          title={
            <>
              Empower your business with{" "}
              <em>sustainable</em> practice.
            </>
          }
          dek="Share the details of your project with us, and take the first step towards a greener, more responsible future."
          ctaLabel="Begin a brief"
        />
      </main>

      <FullFooter />
      <Reveals />
    </>
  );
}
