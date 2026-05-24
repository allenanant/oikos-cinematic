type ColItem = {
  img: string;
  alt: string;
  ttl: React.ReactNode;
  loc: string;
};

const COL: ColItem[] = [
  {
    img: "https://images.pexels.com/photos/35215429/pexels-photo-35215429/free-photo-of-elegant-indoor-space-with-vertical-garden.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop",
    alt: "Vertical garden wall with curved ceiling",
    ttl: (
      <>
        A vertical garden under a <em>curved</em> ceiling.
      </>
    ),
    loc: "Mumbai · BKC",
  },
  {
    img: "https://images.pexels.com/photos/16615212/pexels-photo-16615212/free-photo-of-howea-plant-against-wooden-waving-wall.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop",
    alt: "Palm against carved wooden wall",
    ttl: (
      <>
        A <em>palm corner</em> against carved oak.
      </>
    ),
    loc: "Delhi · Saket",
  },
  {
    img: "https://images.pexels.com/photos/17580983/pexels-photo-17580983/free-photo-of-terraced-placed-plants-in-lobby.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop",
    alt: "Terraced plants in lobby",
    ttl: (
      <>
        A <em>terraced lobby</em>, plants on every step.
      </>
    ),
    loc: "Gurugram · DLF",
  },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Atelier() {
  return (
    <section className="full-atelier" id="atelier">
      <div className="ed">
        <div className="stamp-row" data-reveal>
          <div className="left">
            <span className="n">iii.</span>
            <h3>
              From the <em>atelier</em>.
            </h3>
          </div>
          <a href={`${BASE}/spaces/`} className="more" data-cursor>
            See the full archive
          </a>
        </div>
        <a href="#" className="a-hero" data-cursor data-reveal>
          <img
            src="https://images.pexels.com/photos/13012256/pexels-photo-13012256.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1920&fit=crop"
            alt="Office ceiling with hanging plants and daylight"
          />
          <span className="cap">
            A workplace ceiling we taught how to <em>breathe</em>
          </span>
        </a>
        <div className="a-col">
          {COL.map((c, i) => (
            <a key={i} href="#" className="item" data-cursor data-reveal>
              <div className="img">
                <img src={c.img} alt={c.alt} />
              </div>
              <div className="ttl">{c.ttl}</div>
              <div className="loc">{c.loc}</div>
            </a>
          ))}
        </div>
        <a href="#" className="a-wide" data-cursor data-reveal>
          <img
            src="https://images.pexels.com/photos/32477165/pexels-photo-32477165/free-photo-of-modern-indoor-garden-with-tables-and-seating.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1029&fit=crop"
            alt="Indoor garden with tables and slatted ceiling"
          />
          <div className="cap">
            <span className="ttl">
              A <em>kitchen room</em> under a slatted ceiling — a shared kitchen
              for thirty people.
            </span>
            <span className="loc">Bengaluru · Indiranagar</span>
          </div>
        </a>
      </div>
    </section>
  );
}
