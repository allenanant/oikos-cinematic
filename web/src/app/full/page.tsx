import CinematicHero from "@/components/cinematic/CinematicHero";
import Cursor from "@/components/cinematic/Cursor";
import FullNav from "@/components/full/FullNav";
import Overture from "@/components/full/Overture";
import WhatWeDo from "@/components/full/WhatWeDo";
import Cinema from "@/components/full/Cinema";
import WhyMatters from "@/components/full/WhyMatters";
import Transform from "@/components/full/Transform";
import WhyOikos from "@/components/full/WhyOikos";
import ClosingInvite from "@/components/full/ClosingInvite";
import FullFooter from "@/components/full/FullFooter";
import Reveals from "@/components/full/Reveals";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function FullPage() {
  return (
    <>
      <Cursor />
      <FullNav active="home" />
      <CinematicHero
        videoSrc={`${BASE}/cinematic/hero.mp4?v=7intra`}
        posterSrc={`${BASE}/cinematic/hero-poster.jpg?v=6`}
        subtitle="Design a sustainable life that looks as beautiful as it is responsible."
      />
      <main className="full-flow">
        <Overture />
        <WhatWeDo />
        <Cinema
          videoSrc={`${BASE}/cinematic/hero-v2.mp4?v=7intra`}
          posterSrc={`${BASE}/cinematic/hero-v2-poster.jpg`}
          reverse
        />
        <WhyMatters />
        <Transform />
        <WhyOikos />
        <ClosingInvite />
      </main>
      <FullFooter />
      <Reveals />
    </>
  );
}
