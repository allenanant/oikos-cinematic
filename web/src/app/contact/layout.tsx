import type { Metadata } from "next";
import { Cormorant_Garamond, Fraunces, Inter } from "next/font/google";
import LenisProvider from "@/components/cinematic/LenisProvider";
import "../cinematic/cinematic.css";
import "../full/full.css";

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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Contact · Oikos",
  description:
    "Begin a conversation with Oikos, a Delhi studio that restructures offices around light, air, quiet and material. Tell us about the room and we will read it back to you.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`full-root cinematic-root ${fraunces.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <LenisProvider>{children}</LenisProvider>
    </div>
  );
}
