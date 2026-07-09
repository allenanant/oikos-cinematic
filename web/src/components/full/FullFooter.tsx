const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function FullFooter() {
  return (
    <footer className="full-foot">
      <div className="foot-min">
        <div className="foot-social">
          <a
            href="https://www.linkedin.com/company/oikos-sustainability-consulting/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span className="foot-ic foot-ic-linkedin" />
          </a>
          <a
            href="https://www.instagram.com/oikosbyangelina/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <span className="foot-ic foot-ic-instagram" />
          </a>
          <a
            href="https://www.facebook.com/share/1bfAHnvYTZ/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <span className="foot-ic foot-ic-facebook" />
          </a>
          <a
            href="https://au.pinterest.com/oikosbyangelina/"
            target="_blank"
            rel="noreferrer"
            aria-label="Pinterest"
          >
            <span className="foot-ic foot-ic-pinterest" />
          </a>
        </div>
        <div className="foot-mail">
          <a href="mailto:contact@oikosbyangelina.com">contact@oikosbyangelina.com</a>
        </div>
        <nav className="foot-legal">
          <a href={`${BASE}/terms/`}>Terms and Conditions</a>
          <a href={`${BASE}/privacy/`}>Privacy Policy</a>
        </nav>
        <div className="foot-copy">© 2026 Oikos by Angelina</div>
      </div>
    </footer>
  );
}
