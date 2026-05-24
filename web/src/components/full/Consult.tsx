type Item = { lab: string; val: React.ReactNode };

const ITEMS: Item[] = [
  {
    lab: "Studio",
    val: (
      <>
        Sultanpur, <em>Delhi</em>
      </>
    ),
  },
  {
    lab: "Hours",
    val: (
      <>
        10:00 — <em>18:30 IST</em>
      </>
    ),
  },
  {
    lab: "Email",
    val: (
      <>
        studio@<em>oikos.in</em>
      </>
    ),
  },
  {
    lab: "Phone",
    val: (
      <>
        +91 11 4123 <em>0001</em>
      </>
    ),
  },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Consult() {
  return (
    <section className="full-consult" id="brief">
      <div className="full-consult-shell">
        <article className="frame" data-reveal>
          <div className="bg">
            <img
              src="https://images.pexels.com/photos/35215429/pexels-photo-35215429/free-photo-of-elegant-indoor-space-with-vertical-garden.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1600&fit=crop"
              alt=""
            />
          </div>

          <header className="head">
            <span className="lab on-dark">
              <span className="bar" /> vii.{" "}
              <span className="num">— a brief is the beginning</span>
            </span>
            <h2>
              Tell us about the <em>floor</em>, the <em>building</em>,
              <br />
              the <em>climate</em> your team works inside.
            </h2>
            <p className="dek">
              We take on four restructures a quarter. Briefs open every March,
              June, September and December — written, never templated.
            </p>
          </header>

          <footer className="foot">
            <div className="details">
              {ITEMS.map((i, k) => (
                <div className="item" key={k}>
                  <div className="lab on-dark">{i.lab}</div>
                  <div className="val">{i.val}</div>
                </div>
              ))}
            </div>
            <div className="actions">
              <a
                href="mailto:studio@oikos.in"
                className="cta"
                data-cursor
              >
                Begin a brief <span className="arr" />
              </a>
              <a
                href={`${BASE}/spaces/`}
                className="ghost"
                data-cursor
              >
                See the atelier
              </a>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
}
