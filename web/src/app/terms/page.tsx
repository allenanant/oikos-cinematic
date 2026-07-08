import FullFooter from "@/components/full/FullFooter";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function TermsPage() {
  return (
    <>
      <main className="legal-page">
        <section className="legal-hero">
          <div className="legal-hero-in">
            <a className="legal-brand" href={`${BASE}/full/`}>
              oikos
            </a>
            <h1>Terms and Conditions</h1>
            <p className="legal-updated">Last updated: July 2026</p>
          </div>
        </section>
        <section className="legal-body">
          <div className="legal-body-in">
            <p>
              These terms govern your use of the Oikos by Angelina website
              (&ldquo;the site&rdquo;). By using the site, you agree to them.
            </p>
            <h2>About us</h2>
            <p>
              Oikos by Angelina is a biophilic, sustainable workplace design
              studio. The site presents our work and services and lets you send
              us a project enquiry.
            </p>
            <h2>Use of the site</h2>
            <p>
              You may use the site for lawful personal and business-research
              purposes. You agree not to misuse it, attempt to disrupt it, or
              use it in any way that breaches applicable law.
            </p>
            <h2>Enquiries are not a contract</h2>
            <p>
              Submitting a brief or enquiry through the site does not create a
              contract or oblige either of us to proceed. Any project we take
              on will be governed by a separate written agreement setting out
              scope, fees, and timelines.
            </p>
            <h2>Intellectual property</h2>
            <p>
              The site&rsquo;s content — its text, layout, and design — belongs
              to Oikos by Angelina unless stated otherwise. Photographs may be
              licensed from third parties and remain the property of their
              owners. You may not reproduce, republish, or reuse our content
              without our permission.
            </p>
            <h2>Accuracy</h2>
            <p>
              We aim to keep the site accurate and up to date, but we make no
              guarantee that everything is complete, current, or error-free,
              and the site is provided &ldquo;as is&rdquo;.
            </p>
            <h2>External links</h2>
            <p>
              The site links to third-party platforms, including our social
              media profiles. We are not responsible for the content or
              practices of those external sites.
            </p>
            <h2>Limitation of liability</h2>
            <p>
              To the extent permitted by law, Oikos by Angelina is not liable
              for any loss arising from your use of, or inability to use, the
              site.
            </p>
            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of India. If you use the
              site from elsewhere, you are responsible for complying with your
              local laws.
            </p>
            <h2>Changes</h2>
            <p>
              We may update these terms from time to time; continued use of the
              site means you accept the current version.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a href="mailto:contact@oikosbyangelina.com">
                contact@oikosbyangelina.com
              </a>
              .
            </p>
            <p className="legal-back">
              <a href={`${BASE}/full/`}>&larr; Back to Oikos</a>
            </p>
          </div>
        </section>
      </main>
      <FullFooter />
    </>
  );
}
