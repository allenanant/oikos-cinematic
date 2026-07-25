import CinematicHero from "@/components/cinematic/CinematicHero";
import Cursor from "@/components/cinematic/Cursor";
import CinematicNav from "@/components/cinematic/CinematicNav";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CinematicV2Page() {
  return (
    <>
      <Cursor />
      <CinematicNav />
      <CinematicHero
        videoSrc={`${BASE}/cinematic/hero-v2.mp4?v=5`}
        posterSrc={`${BASE}/cinematic/hero-v2-poster.jpg?v=5`}
      />
      <section className="cinematic-spacer" aria-hidden />
    </>
  );
}
