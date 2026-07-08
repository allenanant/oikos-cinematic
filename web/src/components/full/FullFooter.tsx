const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function FullFooter() {
  return (
    <footer className="full-foot">
      <div className="inner">
        <div className="col">
          <span className="brand">oikos</span>
          <p>
            A studio for sustainable, biophilic workplaces. We restructure
            offices into rooms that hold light, air and quiet — designed to
            nurture both people and the planet.
          </p>
        </div>
        <div className="col">
          <h5>Studio</h5>
          <a href={`${BASE}/full/`}>Home</a>
          <a href={`${BASE}/about/`}>About</a>
          <a href={`${BASE}/services/`}>Services</a>
        </div>
        <div className="col">
          <h5>Visit</h5>
          <p>
            Sultanpur, Delhi
            <br />
            10:00 — 18:30 IST
          </p>
        </div>
        <div className="col">
          <h5>Get in touch</h5>
          <a href="mailto:contact@oikosbyangelina.com">contact@oikosbyangelina.com</a>
          <a href="#brief">Begin a brief</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="bar">
        <span>&copy; Oikos · Delhi, 28.61° N</span>
        <span>
          <a href="#">Privacy</a> · <a href="#">Imprint</a>
        </span>
      </div>
    </footer>
  );
}
