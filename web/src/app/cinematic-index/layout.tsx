import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./index.css";

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
  title: "Oikos — cinematic preview",
  description: "Five takes on a biophilic office hero.",
};

export default function IndexLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={`${fraunces.variable} ${inter.variable}`}>{children}</div>;
}
