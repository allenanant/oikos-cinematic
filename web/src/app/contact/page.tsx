import Cursor from "@/components/cinematic/Cursor";
import FullNav from "@/components/full/FullNav";
import FullFooter from "@/components/full/FullFooter";
import Reveals from "@/components/full/Reveals";
import ContactForm from "@/components/full/ContactForm";

const STEPS = [
  {
    n: "01",
    title: "You write",
    body: "Send us a few lines about your space. We reply within two working days.",
  },
  {
    n: "02",
    title: "We visit",
    body: "If it’s a good fit, we come and see it in person.",
  },
  {
    n: "03",
    title: "You get a plan",
    body: "We send back a written reading and a clear set of next steps.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Cursor />
      <FullNav darkHero={false} active="contact" />

      <main className="full-flow contact-flow">
        <section className="contact-hero">
          <div className="ed">
            <div className="contact-hero-text" data-reveal>
              <span className="lab">
                <span className="bar" /> Contact{" "}
                <span className="num">· begin a conversation</span>
              </span>
              <h1>
                Tell us about the <em>room</em>, and we will read it back to you.
              </h1>
              <p className="contact-dek">
                Most projects start the same way: someone walks their office and
                senses it is working against the people in it. If that sounds
                familiar, write to us. There is no brief to fill in yet. A few
                honest lines about the space is enough to begin.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-main">
          <div className="ed">
            <div className="contact-form-col" data-reveal>
              <ContactForm />
            </div>

            <aside className="contact-aside-col">
              <div className="contact-steps" data-reveal>
                <span className="lab">
                  <span className="bar" /> What happens{" "}
                  <span className="ok-accent">next</span>
                </span>
                {STEPS.map((s) => (
                  <div className="contact-step" key={s.n}>
                    <span className="n">{s.n}</span>
                    <div className="cs-body">
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-studio" data-reveal>
                <div className="cstud-item">
                  <span className="cstud-lab">Studio</span>
                  <span className="cstud-val">Sultanpur, Delhi</span>
                </div>
                <div className="cstud-item">
                  <span className="cstud-lab">Hours</span>
                  <span className="cstud-val">Monday to Friday, 10:00 to 18:30 IST</span>
                </div>
                <div className="cstud-item">
                  <span className="cstud-lab">Email</span>
                  <a className="cstud-val" href="mailto:contact@oikosbyangelina.com">
                    contact@oikosbyangelina.com
                  </a>
                </div>
                <div className="cstud-item">
                  <span className="cstud-lab">Instagram</span>
                  <a
                    className="cstud-val"
                    href="https://instagram.com/oikos.studio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @oikos.studio
                  </a>
                </div>
              </div>

              <p className="contact-reassure" data-reveal>
                Writing to us commits you to nothing. A reading often ends with us
                telling a company its office is better than it feared, and the fix
                is smaller than it thought.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <FullFooter />
      <Reveals />
    </>
  );
}
