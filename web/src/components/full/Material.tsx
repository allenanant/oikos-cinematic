"use client";

import { useEffect, useRef } from "react";

type Swatch = {
  idx: string;
  img: string;
  alt: string;
  name: React.ReactNode;
  use: string;
};

const SWATCHES: Swatch[] = [
  {
    idx: "— 01",
    img: "https://images.pexels.com/photos/9809060/pexels-photo-9809060.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
    alt: "Lime plaster wall",
    name: (
      <>
        <em>Lime plaster</em>, ivory
      </>
    ),
    use: "Walls · ceilings · reveals",
  },
  {
    idx: "— 02",
    img: "https://images.pexels.com/photos/30211145/pexels-photo-30211145/free-photo-of-close-up-of-wooden-slatted-surface-with-shadows.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
    alt: "Indian oak slats close up",
    name: (
      <>
        <em>Indian oak</em>, slatted
      </>
    ),
    use: "Partitions · acoustic panels",
  },
  {
    idx: "— 03",
    img: "https://images.pexels.com/photos/33585897/pexels-photo-33585897/free-photo-of-close-up-of-aged-brass-water-faucet-handle.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
    alt: "Aged brass close up",
    name: (
      <>
        <em>Aged brass</em>, unlacquered
      </>
    ),
    use: "Hardware · handles · lights",
  },
  {
    idx: "— 04",
    img: "https://images.pexels.com/photos/36299694/pexels-photo-36299694/free-photo-of-natural-wicker-texture-close-up-pattern.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
    alt: "Hand-caned panel",
    name: (
      <>
        Hand-caned <em>panels</em>
      </>
    ),
    use: "Cabinet fronts · reveals",
  },
  {
    idx: "— 05",
    img: "https://images.pexels.com/photos/6485437/pexels-photo-6485437.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
    alt: "Raw linen weave",
    name: (
      <>
        Raw <em>linen</em>, natural
      </>
    ),
    use: "Drapes · upholstery · blinds",
  },
  {
    idx: "— 06",
    img: "https://images.pexels.com/photos/17056994/pexels-photo-17056994/free-photo-of-decorative-wall-of-brick-pots-with-plants.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
    alt: "Living planting wall",
    name: (
      <>
        Living <em>planting wall</em>
      </>
    ),
    use: "Air · humidity · acoustic mass",
  },
];

export default function Material() {
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let down = false;
    let startX = 0;
    let scrollX = 0;

    const onDown = (e: MouseEvent) => {
      down = true;
      startX = e.pageX - rail.offsetLeft;
      scrollX = rail.scrollLeft;
      rail.style.cursor = "grabbing";
    };
    const onUp = () => {
      down = false;
      rail.style.cursor = "grab";
    };
    const onMove = (e: MouseEvent) => {
      if (!down) return;
      e.preventDefault();
      rail.scrollLeft = scrollX - (e.pageX - rail.offsetLeft - startX);
    };
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        rail.scrollLeft += e.deltaY;
      }
    };

    rail.style.cursor = "grab";
    rail.addEventListener("mousedown", onDown);
    rail.addEventListener("mouseleave", onUp);
    rail.addEventListener("mouseup", onUp);
    rail.addEventListener("mousemove", onMove);
    rail.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      rail.removeEventListener("mousedown", onDown);
      rail.removeEventListener("mouseleave", onUp);
      rail.removeEventListener("mouseup", onUp);
      rail.removeEventListener("mousemove", onMove);
      rail.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section className="full-material" id="material">
      <div className="head">
        <span className="n" data-reveal>
          ii.
        </span>
        <h3 data-reveal>
          The <em>material</em> shelf, this season.
        </h3>
        <p className="note" data-reveal>
          Lime, oak, brass, cane, linen, planting — the six in heaviest
          rotation right now. Scroll across.
        </p>
      </div>
      <div className="rail-wrap" data-reveal>
        <div className="rail" ref={railRef} data-cursor>
          {SWATCHES.map((s, i) => (
            <div className="swatch" key={i}>
              <span className="idx">{s.idx}</span>
              <img src={s.img} alt={s.alt} />
              <div className="meta">
                <div className="nm">{s.name}</div>
                <div className="use">{s.use}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rail-hint">
        <span className="bar" /> Drag to read the shelf · 06 entries
      </div>
    </section>
  );
}
