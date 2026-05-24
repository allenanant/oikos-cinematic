const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function FullFooter() {
  return (
    <footer className="full-foot">
      <div className="inner">
        <div className="col">
          <span className="brand">oikos</span>
          <p>
            A working studio for biophilic workplaces. We restructure offices
            into rooms that hold light, air and quiet. Studio 001, Delhi —
            28.61° N.
          </p>
        </div>
        <div className="col">
          <h5>Studio</h5>
          <a href={`${BASE}/cinematic/`}>Home</a>
          <a href={`${BASE}/practice/`}>Practice</a>
          <a href={`${BASE}/spaces/`}>Spaces</a>
          <a href={`${BASE}/journal/`}>Journal</a>
        </div>
        <div className="col">
          <h5>This page</h5>
          <a href="#signature">Signature</a>
          <a href="#material">Material</a>
          <a href="#atelier">Atelier</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#founder">Founder</a>
        </div>
        <div className="col">
          <h5>Get in touch</h5>
          <a href="mailto:studio@oikos.in">studio@oikos.in</a>
          <a href="#brief">Begin a brief</a>
          <a href="#">Instagram</a>
          <a href="#">Are.na</a>
        </div>
      </div>
      <div className="bar">
        <span>&copy; Oikos Studio · Delhi, 28.61° N</span>
        <span>
          <a href="#">Privacy</a> · <a href="#">Imprint</a>
        </span>
      </div>
    </footer>
  );
}
