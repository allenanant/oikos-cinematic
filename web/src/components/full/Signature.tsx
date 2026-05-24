type Work = {
  href: string;
  stamp: string;
  img: string;
  alt: string;
  ttl: React.ReactNode;
  loc: string;
};

const FEATURE: Work = {
  href: "#",
  stamp: "Headquarters · three floors",
  img: "https://images.pexels.com/photos/35566906/pexels-photo-35566906/free-photo-of-modern-office-atrium-with-greenery.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1760&fit=crop",
  alt: "Office atrium with greenery and daylight",
  ttl: (
    <>
      A three-floor headquarters we taught how to <em>hold light</em>.
    </>
  ),
  loc: "Gurugram · Cyber City",
};

const COMPANIONS: Work[] = [
  {
    href: "#",
    stamp: "Restoration · 1972 shed",
    img: "https://images.pexels.com/photos/8297857/pexels-photo-8297857.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&fit=crop",
    alt: "Restored warehouse interior with timber and plants",
    ttl: (
      <>
        A 1972 warehouse restored as a <em>working studio</em>.
      </>
    ),
    loc: "Delhi · Sultanpur",
  },
  {
    href: "#",
    stamp: "Studio · ground floor",
    img: "https://images.pexels.com/photos/29954478/pexels-photo-29954478/free-photo-of-modern-spiral-atrium-with-palm-trees-in-hamburg.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&fit=crop",
    alt: "Indoor courtyard with palm trees",
    ttl: (
      <>
        An <em>indoor courtyard</em> built around a single tree.
      </>
    ),
    loc: "Delhi · Saket",
  },
];

export default function Signature() {
  return (
    <section className="full-signature" id="signature">
      <div className="ed">
        <div className="full-mark" style={{ gridColumn: "1 / 13" }} data-reveal>
          <span className="n">i.</span>
          <h3>
            Signature <em>practice</em>, this season.
          </h3>
          <span className="meta">
            Three rooms from the studio&apos;s current shelf{" "}
            <em>— 2024 / 2025</em>
          </span>
        </div>
        <a href={FEATURE.href} className="feature" data-cursor data-reveal>
          <span className="stamp">{FEATURE.stamp}</span>
          <img src={FEATURE.img} alt={FEATURE.alt} />
          <div className="cap">
            <div className="ttl">{FEATURE.ttl}</div>
            <div className="loc">{FEATURE.loc}</div>
          </div>
        </a>
        <div className="companions">
          {COMPANIONS.map((c, i) => (
            <a
              key={i}
              href={c.href}
              className="companion"
              data-cursor
              data-reveal
            >
              <div className="img">
                <img src={c.img} alt={c.alt} />
              </div>
              <div className="ttl">{c.ttl}</div>
              <div className="loc">{c.loc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
