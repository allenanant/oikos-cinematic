import type { Metadata } from "next";
import { Cormorant_Garamond, Fraunces, Inter } from "next/font/google";
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
  title: "Terms and Conditions · Oikos by Angelina",
  description: "The terms that govern use of the Oikos by Angelina website.",
};

export default function TermsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`full-root cinematic-root ${fraunces.variable} ${inter.variable} ${cormorant.variable}`}
    >
      {children}
    </div>
  );
}
