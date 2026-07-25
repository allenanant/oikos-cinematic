import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import LenisProvider from "@/components/cinematic/LenisProvider";
import "./cinematic.css";

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

export const metadata: Metadata = {
  title: "Oikos — Offices that learned how to breathe again.",
  description:
    "A working studio for biophilic workplaces — quieter rooms, denser air, slower light.",
};

export default function CinematicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`cinematic-root ${fraunces.variable} ${inter.variable}`}>
      <LenisProvider>{children}</LenisProvider>
    </div>
  );
}
