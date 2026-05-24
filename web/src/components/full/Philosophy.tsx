type Principle = {
  n: string;
  title: React.ReactNode;
  body: string;
};

const PRINCIPLES: Principle[] = [
  {
    n: "01.",
    title: (
      <>
        Air, <em>then</em> floor plan.
      </>
    ),
    body: "Every restructure begins with a three-day climate study — light, CO₂, humidity, ambient noise. The brief follows the reading, not the other way around.",
  },
  {
    n: "02.",
    title: (
      <>
        Plants as <em>infrastructure</em>.
      </>
    ),
    body: "Planting plans before furniture plans. Every room ships with a care calendar and six months of post-handover work, on us.",
  },
  {
    n: "03.",
    title: (
      <>
        Quiet is a <em>material</em>.
      </>
    ),
    body: "Lime ceilings, oak slats, planting walls, wool floors. Acoustics tuned by source-test, not by vibe. The cheapest way to feel expensive is to be quiet.",
  },
  {
    n: "04.",
    title: (
      <>
        Four rooms <em>a quarter</em>.
      </>
    ),
    body: "Slower work, fewer projects, deeper attention. The team stays small — one botanist, two interior architects, an acoustician we trust.",
  },
];

export default function Philosophy() {
  return (
    <section className="full-philos" id="philosophy">
      <div className="ed">
        <div className="lead" data-reveal>
          <span className="lab">
            <span className="bar" /> Studio 001{" "}
            <span className="num">— iv. principles</span>
          </span>
          <h3>
            Four <em>principles</em> we work from.
          </h3>
          <p className="note">
            Slow practice, fewer rooms, deeper attention — the only kind of
            scale we are interested in.
          </p>
        </div>
        <div className="list">
          {PRINCIPLES.map((p, i) => (
            <div className="principle" key={i} data-reveal>
              <span className="n">{p.n}</span>
              <div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
