import CinematicHero from "@/components/cinematic/CinematicHero";
import Cursor from "@/components/cinematic/Cursor";
import CinematicNav from "@/components/cinematic/CinematicNav";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CinematicV4Page() {
  return (
    <>
      <Cursor />
      <CinematicNav />
      <CinematicHero
        videoSrc={`${BASE}/cinematic/hero-v4.mp4?v=1`}
        posterSrc={`${BASE}/cinematic/hero-v4-poster.jpg?v=1`}
      />
      <section className="cinematic-spacer" aria-hidden />
    </>
  );
}
