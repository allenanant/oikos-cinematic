import CinematicHero from "@/components/cinematic/CinematicHero";
import Cursor from "@/components/cinematic/Cursor";
import CinematicNav from "@/components/cinematic/CinematicNav";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CinematicV3Page() {
  return (
    <>
      <Cursor />
      <CinematicNav />
      <CinematicHero
        videoSrc={`${BASE}/cinematic/hero-v3.mp4?v=8`}
        posterSrc={`${BASE}/cinematic/hero-v3-poster.jpg?v=6`}
      />
      <section className="cinematic-spacer" aria-hidden />
    </>
  );
}
