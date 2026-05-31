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
        Pull light into the deepest, most dead centre of your space — through
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
        We treat planting as air infrastructure, not decoration — a living
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

export default function AboutPage() {
  return (
    <>
      <Cursor />
      <FullNav active="about" lightAt={0.68} />

      <section className="about-hero">
        <div className="about-hero-bg">
          <img
            src="https://images.pexels.com/photos/35566906/pexels-photo-35566906/free-photo-of-modern-office-atrium-with-greenery.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1500&fit=crop"
            alt=""
          />
        </div>
        <div className="about-hero-inner">
          <span className="lab on-dark">
            <span className="bar" /> About{" "}
            <span className="num">— the studio</span>
          </span>
          <h1>
            We restructure offices into rooms that{" "}
            <em>breathe</em>.
          </h1>
        </div>
      </section>

      <main className="full-flow">
        <section className="about-etym">
          <div className="ed">
            <span className="lab" data-reveal>
              <span className="bar" /> i.{" "}
              <span className="num">— the name</span>
            </span>
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

        <section className="about-triad">
          <div className="ed">
            <div
              className="full-mark"
              style={{ gridColumn: "1 / 13" }}
              data-reveal
            >
              <span className="n">ii.</span>
              <h3>
                How a room is <em>changed</em>.
              </h3>
              <span className="meta">
                Light, air, quiet <em>— three working systems</em>
              </span>
            </div>
            <div className="triad">
              {CARDS.map((c, i) => (
                <article className="triad-row" key={i} data-reveal>
                  <div className="img">
                    <img src={c.img} alt={c.alt} />
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
              <span className="bar" /> iii.{" "}
              <span className="num">— our expertise</span>
            </span>
            <h3 data-reveal>
              Sustainability, made <em>approachable</em>.
            </h3>
            <p data-reveal>
              With Oikos you benefit from deep expertise in sustainability
              consultation. We combine environmental knowledge with a
              human-centred approach, so every recommendation is actionable,
              beautiful, and aligned with your values — sustainability
              integrated seamlessly into the way you work, with lasting impact
              for your team and the planet.
            </p>
          </div>
        </section>

        <ClosingInvite
          eyebrow="— a greener way to work"
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
