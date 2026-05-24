import type { Metadata } from "next";
import { EB_Garamond, Inter, Poppins } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oikos by Angelina — for a life that sustains you",
  description:
    "Biophilic design, conscious gifting, and eco-friendly workplace concierge. Oikos by Angelina brings nature, intention, and lightness into the places we spend our lives.",
  metadataBase: new URL("https://oikosbyangelina.com"),
  openGraph: {
    title: "Oikos by Angelina",
    description: "For a life that sustains you.",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${inter.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
