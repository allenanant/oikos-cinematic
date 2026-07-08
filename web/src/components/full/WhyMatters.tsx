"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { target: number; qualifier: string; cap: string };

const STATS: Stat[] = [
  { target: 18, qualifier: "around", cap: "rise in productivity" },
  { target: 28, qualifier: "close to", cap: "more wellbeing at work" },
  { target: 20, qualifier: "over", cap: "more productive meetings" },
];

function Figure({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(target);
      return;
    }
    let raf = 0;
    let started = false;
    const run = (from: number) => {
      const dur = 1400;
      let t0 = 0;
      const step = (ts: number) => {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * target));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      void from;
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            run(0);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <span className="fig" ref={ref}>
      {val}
      <span className="pct">%</span>
    </span>
  );
}

export default function WhyMatters() {
  return (
    <section className="full-why" id="why-it-matters">
      <div className="ed">
        <div className="why-head" data-reveal>
          <h2 className="sec-title">
            Why it <em>matters</em>
          </h2>
          <h3>
            Your workplace should not just look right, it should{" "}
            <em>feel right</em>
          </h3>
          <p className="note">
            In post-occupancy studies of biophilic office redesigns, the change
            is measurable.
          </p>
        </div>
        <div className="why-stats">
          {STATS.map((s, i) => (
            <div className="why-stat" key={i} data-reveal>
              <span className="q">{s.qualifier}</span>
              <Figure target={s.target} />
              <span className="cap">{s.cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
