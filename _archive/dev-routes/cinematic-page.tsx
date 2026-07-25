import CinematicHero from "@/components/cinematic/CinematicHero";
import Cursor from "@/components/cinematic/Cursor";
import CinematicNav from "@/components/cinematic/CinematicNav";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CinematicPage() {
  return (
    <>
      <Cursor />
      <CinematicNav />
      <CinematicHero
        videoSrc={`${BASE}/cinematic/hero.mp4?v=6`}
        posterSrc={`${BASE}/cinematic/hero-poster.jpg?v=6`}
      />
      <section className="cinematic-spacer" aria-hidden />
    </>
  );
}
