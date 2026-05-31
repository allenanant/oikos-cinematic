import Cursor from "@/components/cinematic/Cursor";
import FullNav from "@/components/full/FullNav";
import ClosingInvite from "@/components/full/ClosingInvite";
import FullFooter from "@/components/full/FullFooter";
import Reveals from "@/components/full/Reveals";

type Svc = {
  n: string;
  ttl: React.ReactNode;
  body: React.ReactNode;
  forWhom: string;
};

const SERVICES: Svc[] = [
  {
    n: "01",
    ttl: (
      <>
        Workplace <em>restructure</em>.
      </>
    ),
    body: (
      <>
        We restructure offices from the climate up. Light is re-planned. Air and
        planting are designed as a single system. Acoustics are tuned by
        measurement. Materials are chosen for how they age, not how they
        photograph. Concept through completion.
      </>
    ),
    forWhom:
      "Companies redesigning the office their team works in every day.",
  },
  {
    n: "02",
    ttl: (
      <>
        A reading of the <em>room</em>.
      </>
    ),
    body: (
      <>
        A short, standalone engagement. Before any design begins, we read the
        room. You receive a written reading and a set of moves the room is
        asking for, ranked by what each would change. A reading is useful on its
        own — many offices need fixing, not redesigning — and it is how every
        full restructure begins.
      </>
    ),
    forWhom:
      "Companies who suspect their office is the problem, and want to know what it is before committing to a project.",
  },
  {
    n: "03",
    ttl: (
      <>
        Material <em>direction</em>.
      </>
    ),
    body: (
      <>
        If you have an architect or a designer already, and what you&rsquo;re
        missing is the material conviction the room deserves, we come in as a
        specialist layer. Sourcing, vetting, sample assembly, defensible claims.
        We hand the design team a palette that holds up to a question.
      </>
    ),
    forWhom:
      "Projects with a designer in place that want their materials chosen by someone who works in them every day.",
  },
  {
    n: "04",
    ttl: (
      <>
        <em>Aftercare</em>.
      </>
    ),
    body: (
      <>
        The engagement that begins when most studios leave — six months of
        post-handover work, a written care calendar, scheduled visits, and the
        planting kept alive by people who know why it was specified. Included
        with every restructure. Available on its own to projects we
        didn&rsquo;t design, where the room is good but the room is dying.
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

export default function ServicesPage() {
  return (
    <>
      <Cursor />
      <FullNav darkHero={false} active="services" />

      <main className="full-flow svc-flow">
        <section className="svc-hero">
          <div className="ed">
            <div className="svc-hero-text" data-reveal>
              <span className="lab">
                <span className="bar" /> Services{" "}
                <span className="num">— what we offer</span>
              </span>
              <h1>
                We restructure the workplace as a{" "}
                <em>climate</em> — light, air, quiet, material.
              </h1>
            </div>
            <div className="svc-hero-img" data-reveal>
              <img
                src="https://images.pexels.com/photos/16615212/pexels-photo-16615212/free-photo-of-howea-plant-against-wooden-waving-wall.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop"
                alt="A workspace corner — planting against carved oak"
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="svc-how">
          <div className="ed">
            <span className="lab" data-reveal>
              <span className="bar" /> Method{" "}
              <span className="num">— how we work</span>
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
            <p className="svc-how-note" data-reveal>
              Four projects a quarter — concept through completion, and six
              months past handover.
            </p>
          </div>
        </section>

        <ClosingInvite
          eyebrow="— begin a brief"
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
