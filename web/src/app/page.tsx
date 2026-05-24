import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Letter } from "@/components/Letter";
import { Etymology } from "@/components/Etymology";
import { Services } from "@/components/Services";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <Letter />
        <Etymology />
        <Services />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
