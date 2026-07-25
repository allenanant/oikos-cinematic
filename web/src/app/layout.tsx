import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// EB Garamond and Poppins used to be declared here too. Every shipping page is
// wrapped by full/layout.tsx, which redefines --font-display and --font-editorial
// with Fraunces and Cormorant, so those two families never painted a glyph — they
// were just 115 KB of woff2 preloaded at top priority against the LCP image.
// Inter stays because <body> itself sits outside the full-root wrapper.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
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
    <html lang="en" className={inter.variable}>
      <head>
        {/* Nearly all the photography is served from Pexels, so the first image
            byte was waiting on a cold DNS + TCP + TLS handshake. */}
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        {/* full.css still @imports Playfair and Sacramento from Google, which is
            a serialised chain: HTML -> full.css -> googleapis -> gstatic. These
            at least warm the two connections while the CSS is parsing. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
