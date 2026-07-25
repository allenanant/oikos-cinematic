import { px, pxSet } from "@/lib/pexels";
import Cursor from "@/components/cinematic/Cursor";
import FullNav from "@/components/full/FullNav";
import ClosingInvite from "@/components/full/ClosingInvite";
import FullFooter from "@/components/full/FullFooter";
import Reveals from "@/components/full/Reveals";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Svc = {
  n: string;
  slug: string;
  ttl: React.ReactNode;
  body: React.ReactNode;
  forWhom: string;
};

const SERVICES: Svc[] = [
  {
    n: "01",
    slug: "workplace-restructure",
    ttl: (
      <>
        Sustainable workplace <em>design</em>.
      </>
    ),
    body: (
      <>
        A full office redesign from the climate up. Light, air, planting,
        acoustics and materials worked as one system. Concept to completion.
      </>
    ),
    forWhom:
      "Companies redesigning the office their team works in every day.",
  },
  {
    n: "02",
    slug: "reading-of-the-room",
    ttl: (
      <>
        Biophilic design <em>consultation</em>.
      </>
    ),
    body: (
      <>
        A short, standalone study. We read the room and hand you the moves
        it&rsquo;s asking for, ranked by impact. Useful on its own, and how
        every restructure begins.
      </>
    ),
    forWhom:
      "Companies who suspect their office is the problem, and want to know what it is before committing to a project.",
  },
  {
    n: "03",
    slug: "material-direction",
    ttl: (
      <>
        Sustainable material <em>sourcing</em>.
      </>
    ),
    body: (
      <>
        A specialist layer for teams who already have a designer. Sourcing,
        vetting, samples and defensible claims. A palette that holds up to a
        question.
      </>
    ),
    forWhom:
      "Projects with a designer in place that want their materials chosen by someone who works in them every day.",
  },
  {
    n: "04",
    slug: "aftercare",
    ttl: (
      <>
        Plant care and <em>maintenance</em>.
      </>
    ),
    body: (
      <>
        The work that begins when most studios leave. Six months of visits, a
        written care calendar, and planting kept alive by the people who
        specified it.
      </>
    ),
    forWhom: "Finished spaces that need to stay finished.",
  },
];

const STEPS = [
  { n: "01", t: "Read the room" },
  { n: "02", t: "Design the climate" },
  { n: "03", t: "Source with conviction" },
  { n: "04", t: "Stay to keep it alive" },
];

const SVC_HERO =
  "https://images.pexels.com/photos/28461040/pexels-photo-28461040.jpeg";

export default function ServicesPage() {
  return (
    <>
      <Cursor />
      <FullNav darkHero={false} active="services" />

      <main className="full-flow svc-flow">
        <section className="svc-hero">
          <div className="ed">
            <div className="svc-hero-text" data-reveal>
              <h1>
                A sustainable workspace isn&rsquo;t just a <em>luxury</em>. It
                is the quiet and <em>comfort</em> you deserve
              </h1>
            </div>
            <div className="svc-hero-img" data-reveal>
              {/* Full-bleed: full.css:2195 overrides this slot to
                  position:absolute;inset:0 with object-fit:cover, so it covers
                  the viewport at every width. Landscape crop, sizes 100vw. */}
              <img
                src={px(SVC_HERO, 2000, 1125)}
                srcSet={pxSet(SVC_HERO, [1000, 1400, 2000], 16 / 9)}
                sizes="100vw"
                alt="Modern office with wooden furniture and plants"
                width={2000}
                height={1125}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="svc-list">
          <div className="ed">
            <div className="svc-items">
              {SERVICES.map((s, i) => (
                <article className="svc-item" key={i} data-reveal>
                  <span className="n">{s.n}</span>
                  <div className="svc-body">
                    <h2 className="ttl">{s.ttl}</h2>
                    <p className="p">{s.body}</p>
                    <p className="for">
                      <span className="lbl">For</span>
                      {s.forWhom}
                    </p>
                    <a
                      className="svc-explore"
                      href={`${BASE}/services/${s.slug}/`}
                      data-cursor
                    >
                      Explore this service <span className="arr" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="svc-how">
          <div className="ed">
            <span className="lab" data-reveal>
              <span className="num">
                how we <span className="ok-accent">work</span>
              </span>
            </span>
            <h3 data-reveal>
              We work in one <em>direction</em>, every time.
            </h3>
            <div className="svc-steps">
              {STEPS.map((s, i) => (
                <div className="step" key={i} data-reveal>
                  <span className="n">{s.n}</span>
                  <span className="t">{s.t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ClosingInvite
          eyebrow="· begin a brief"
          title={
            <>
              Tell us about the <em>room</em>.
            </>
          }
          dek="Every project begins with a conversation."
          ctaLabel="Begin a brief"
        />
      </main>

      <FullFooter />
      <Reveals />
    </>
  );
}
