import { px, pxSet } from "@/lib/pexels";
import Cursor from "@/components/cinematic/Cursor";
import FullNav from "@/components/full/FullNav";
import ClosingInvite from "@/components/full/ClosingInvite";
import FullFooter from "@/components/full/FullFooter";
import Reveals from "@/components/full/Reveals";
import { ServiceData, SERVICE_MAP } from "@/lib/serviceData";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Render *word* markers in a string as italic-terracotta emphasis.
function emph(text: string): React.ReactNode {
  if (!text.includes("*")) return text;
  return text.split(/(\*[^*]+\*)/g).map((p, i) =>
    p.startsWith("*") && p.endsWith("*") ? <em key={i}>{p.slice(1, -1)}</em> : <span key={i}>{p}</span>
  );
}

// Render a heading with its last word in the terracotta accent.
function accentLast(text: string): React.ReactNode {
  const words = text.trim().split(" ");
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <span className="ok-accent">{last}</span>
    </>
  );
}

export default function ServiceDetail({ data }: { data: ServiceData }) {
  const related = data.related
    .map((slug) => SERVICE_MAP[slug])
    .filter(Boolean);

  return (
    <>
      <Cursor />
      <FullNav active="services" darkHero lightAt={0.7} />

      <section className="svcd-hero">
        <div className="svcd-hero-bg">
          {/* LCP for all four service routes. */}
          <img
            src={px(data.hero.image, 2000, 1125)}
            srcSet={pxSet(data.hero.image, [1000, 1400, 2000], 16 / 9)}
            sizes="100vw"
            alt=""
            width={2000}
            height={1125}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="svcd-hero-inner oik-hero-c">
          <a className="svcd-back" href={`${BASE}/services/`}>
            <span className="arr-l" /> All services
          </a>
          <h1>{emph(data.hero.h1)}</h1>
          <p className="svcd-dek">{data.hero.dek}</p>
        </div>
      </section>

      <main className="full-flow" data-service={data.slug}>
        {/* APPROACH */}
        <section className="svcd-approach">
          <div className="ed">
            <div className={`svcd-ap-head${data.approach.wide ? " oik-ap-c" : ""}`} data-reveal>
              <h2>{accentLast(data.approach.heading)}</h2>
            </div>
            <div className="svcd-steps">
              {data.approach.steps.map((s) => (
                <article className="svcd-step" key={s.n} data-reveal>
                  <figure className="svcd-step-img">
                    {/* The slot is 2:1 (~616x308) but the sources were 1000px
                        portraits, so object-fit threw away half of every
                        download. Ask Pexels for the crop we actually render. */}
                    <img
                      src={px(s.image, 1240, 620)}
                      srcSet={pxSet(s.image, [620, 900, 1240], 2)}
                      sizes="(max-width: 680px) 100vw, 45vw"
                      alt={s.alt}
                      width={1240}
                      height={620}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <span className="n">{s.n}</span>
                  <div className="svcd-step-body">
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DETAIL — split image + text */}
        <section className="svcd-detail">
          <div className="ed">
            <div className="svcd-detail-img" data-reveal>
              {/* 4/5 portrait slot fed from landscape sources — request the
                  portrait crop instead of cropping it away client-side. */}
              <img
                src={px(data.detail.image, 1060, 1325)}
                srcSet={pxSet(data.detail.image, [520, 800, 1060], 4 / 5)}
                sizes="(max-width: 780px) 100vw, 42vw"
                alt={data.detail.alt}
                width={1060}
                height={1325}
                loading="lazy"
                decoding="async"
              />
              {data.detail.caption && <span className="cap">{data.detail.caption}</span>}
            </div>
            <div className="svcd-detail-text" data-reveal>
              <h2>{data.detail.heading}</h2>
              {data.detail.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* INCLUDED */}
        <section className="svcd-included">
          <div className="ed">
            <div className="svcd-incl-head" data-reveal>
              {data.included.eyebrow && (
                <span className="wr-incl-ey">{accentLast(data.included.eyebrow)}</span>
              )}
              <h2>{data.included.heading}</h2>
            </div>
            <div className="svcd-incl-grid">
              {data.included.items.map((it, i) => (
                <article className="svcd-incl" key={i} data-reveal>
                  <h4>{it.title}</h4>
                  <p>{it.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="svcd-faq">
          <div className="ed">
            <span className="lab" data-reveal>
              <span className="bar" /> Frequently asked{" "}
              <span className="ok-accent">questions</span>
            </span>
            <div className="svcd-faqs">
              {data.faq.map((f, i) => (
                <details className="svcd-faq-item" key={i} data-reveal>
                  <summary>
                    <span className="q">{f.q}</span>
                    <span className="mk" aria-hidden />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="svcd-related">
            <div className="ed">
              <span className="lab" data-reveal>
                <span className="bar" /> Also from the studio{" "}
                <span className="num">· keep reading</span>
              </span>
              <div className="svcd-rel-grid">
                {related.map((r) => (
                  <a
                    className="svcd-rel"
                    href={`${BASE}/services/${r.slug}/`}
                    key={r.slug}
                    data-reveal
                    data-cursor
                  >
                    <span className="svcd-rel-ey">{r.eyebrow}</span>
                    <span className="svcd-rel-ttl">{r.title}</span>
                    <span className="svcd-rel-go">
                      Explore this service <span className="arr" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <ClosingInvite
          eyebrow="· begin a brief"
          title={
            <>
              Start with this <em>room</em>.
            </>
          }
          dek="Tell us where the office is, who works in it, and what it feels like on a difficult afternoon. We will read it back to you."
          ctaLabel="Begin a brief"
        />
      </main>

      <FullFooter />
      <Reveals />
    </>
  );
}
