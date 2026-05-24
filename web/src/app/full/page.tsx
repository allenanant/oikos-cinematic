import CinematicHero from "@/components/cinematic/CinematicHero";
import Cursor from "@/components/cinematic/Cursor";
import FullNav from "@/components/full/FullNav";
import Overture from "@/components/full/Overture";
import Signature from "@/components/full/Signature";
import Whisper from "@/components/full/Whisper";
import Material from "@/components/full/Material";
import Atelier from "@/components/full/Atelier";
import Philosophy from "@/components/full/Philosophy";
import Transform from "@/components/full/Transform";
import Spread from "@/components/full/Spread";
import Consult from "@/components/full/Consult";
import FullFooter from "@/components/full/FullFooter";
import Reveals from "@/components/full/Reveals";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function FullPage() {
  return (
    <>
      <Cursor />
      <FullNav />
      <CinematicHero
        videoSrc={`${BASE}/cinematic/hero.mp4?v=6`}
        posterSrc={`${BASE}/cinematic/hero-poster.jpg?v=6`}
      />
      <main className="full-flow">
        <Overture />
        <Signature />
        <Whisper />
        <Material />
        <Atelier />
        <Philosophy />
        <Transform />
        <Spread />
        <Consult />
      </main>
      <FullFooter />
      <Reveals />
    </>
  );
}
