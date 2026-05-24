/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const VARIANTS = [
  {
    href: "/cinematic/",
    label: "v1",
    title: "Wide office dolly",
    note: "Empty biophilic workspace, golden hour, monstera shadows.",
    poster: `${BASE}/cinematic/hero-poster.jpg`,
  },
  {
    href: "/cinematic-v2/",
    label: "v2",
    title: "Vertical atrium",
    note: "Cascading ferns, palm crowns, sun raking through tall windows.",
    poster: `${BASE}/cinematic/hero-v2-poster.jpg`,
  },
  {
    href: "/cinematic-v3/",
    label: "v3",
    title: "Macro botanical",
    note: "Fern fronds, dew, glowing monstera in soft directional light.",
    poster: `${BASE}/cinematic/hero-v3-poster.jpg`,
  },
  {
    href: "/cinematic-v4/",
    label: "v4",
    title: "Kling push-in",
    note: "Slow forward dolly into a backlit amber monstera leaf.",
    poster: `${BASE}/cinematic/hero-v4-poster.jpg`,
  },
  {
    href: "/cinematic-v5/",
    label: "v5",
    title: "ElevenLabs push-in",
    note: "Same shot via ElevenLabs Seedance — tighter framing, 4s clip.",
    poster: `${BASE}/cinematic/hero-v5-poster.jpg`,
  },
];

export default function CinematicIndex() {
  return (
    <main className="cin-index">
      <header className="cin-index-head">
        <div className="brand">
          <span className="dot" /> oikos
        </div>
        <div className="kicker">Cinematic hero — preview reel</div>
        <h1>
          Five takes on a <em>biophilic</em> office hero.
        </h1>
        <p>
          Pick a variant. Each plays a scroll-scrubbed cinematic clip behind the
          same headline. v2 was the smoothest baseline. v4 / v5 are the latest
          generations.
        </p>
      </header>

      <ul className="cin-index-grid">
        {VARIANTS.map((v) => (
          <li key={v.href}>
            <Link href={v.href}>
              <div className="thumb">
                <img src={v.poster} alt={v.title} loading="lazy" />
                <span className="badge">{v.label}</span>
              </div>
              <div className="meta">
                <h2>{v.title}</h2>
                <p>{v.note}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <footer className="cin-index-foot">
        oikos · cinematic preview · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
