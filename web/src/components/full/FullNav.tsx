const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function FullNav() {
  return (
    <header className="full-navbar">
      <nav className="full-pill" aria-label="Primary">
        <a href={`${BASE}/cinematic/`} className="brand">
          <span className="dot" />
          <span>oikos</span>
        </a>
        <span className="divider" aria-hidden />
        <div className="links">
          <a href="#signature">Signature</a>
          <a href="#material">Material</a>
          <a href="#atelier">Atelier</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#brief">Studio</a>
        </div>
        <span className="divider" aria-hidden />
        <a href="#brief" className="cta" data-cursor>
          <span>Begin a brief</span>
          <span className="arr" />
        </a>
      </nav>
    </header>
  );
}
