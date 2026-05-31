type Service = {
  idx: string;
  img: string;
  alt: string;
  ttl: React.ReactNode;
  desc: string;
};

const SERVICES: Service[] = [
  {
    idx: "01",
    img: "https://images.pexels.com/photos/35566906/pexels-photo-35566906/free-photo-of-modern-office-atrium-with-greenery.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1750&fit=crop",
    alt: "Office atrium restructured around daylight and greenery",
    ttl: (
      <>
        Workspace <em>design</em>
      </>
    ),
    desc: "A full revision of where you work, from first concept to final fitting.",
  },
  {
    idx: "02",
    img: "https://images.pexels.com/photos/13012256/pexels-photo-13012256.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1750&fit=crop",
    alt: "Workplace ceiling with hanging plants and natural light",
    ttl: (
      <>
        Biophilic &amp; <em>wellbeing</em>
      </>
    ),
    desc: "Light, air, greenery and natural materials, arranged to stimulate each sense.",
  },
  {
    idx: "03",
    img: "https://images.pexels.com/photos/30211145/pexels-photo-30211145/free-photo-of-close-up-of-wooden-slatted-surface-with-shadows.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1750&fit=crop",
    alt: "Slatted oak surface, a material chosen to last",
    ttl: (
      <>
        Sustainable <em>sourcing</em>
      </>
    ),
    desc: "Materials chosen to last, and to stand up to scrutiny.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="full-do" id="what-we-do">
      <div className="ed">
        <div className="full-mark" style={{ gridColumn: "1 / 13" }} data-reveal>
          <span className="n">i.</span>
          <h3>
            What we <em>do</em>.
          </h3>
          <span className="meta">
            Three ways a room is changed{" "}
            <em>— concept to care</em>
          </span>
        </div>
        <div className="do-grid">
          {SERVICES.map((s, i) => (
            <article className="do-card" key={i} data-reveal>
              <div className="img">
                <span className="idx">— {s.idx}</span>
                <img src={s.img} alt={s.alt} />
              </div>
              <h4 className="ttl">{s.ttl}</h4>
              <p className="desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
