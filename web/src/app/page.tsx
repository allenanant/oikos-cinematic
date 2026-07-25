"use client";

import { useEffect } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// The live Oikos site lives at /full/. The bare root previously rendered an
// old "magazine" draft; anyone landing here is forwarded to the real homepage.
export default function Home() {
  useEffect(() => {
    window.location.replace(`${BASE}/full/`);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f2f11",
        color: "#f5efe0",
        // Outside the full-root wrapper, so --font-display is not defined here.
        fontFamily: "'EB Garamond', Georgia, serif",
        fontStyle: "italic",
        fontSize: "30px",
        letterSpacing: "0.4px",
      }}
    >
      <a href={`${BASE}/full/`} style={{ color: "#f5efe0", textDecoration: "none" }}>
        oikos
      </a>
    </main>
  );
}
