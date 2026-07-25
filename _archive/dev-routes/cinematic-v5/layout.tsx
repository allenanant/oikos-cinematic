import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import LenisProvider from "@/components/cinematic/LenisProvider";
import "../cinematic/cinematic.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = { title: "Oikos — v5 (ElevenLabs push-in)" };

export default function CinematicV5Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`cinematic-root ${fraunces.variable} ${inter.variable}`}>
      <LenisProvider>{children}</LenisProvider>
    </div>
  );
}
