import FullFooter from "@/components/full/FullFooter";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PrivacyPage() {
  return (
    <>
      <main className="legal-page">
        <section className="legal-hero">
          <div className="legal-hero-in">
            <a className="legal-brand" href={`${BASE}/full/`}>
              oikos
            </a>
            <h1>Privacy Policy</h1>
            <p className="legal-updated">Last updated: July 2026</p>
          </div>
        </section>
        <section className="legal-body">
          <div className="legal-body-in">
            <p>
              Oikos by Angelina (&ldquo;Oikos&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) designs biophilic, sustainable workplaces. This
              policy explains how we handle personal information collected
              through this website.
            </p>
            <h2>Information we collect</h2>
            <p>
              <strong>What you give us.</strong> When you send a brief through
              our contact form, we collect the details you choose to provide:
              your name, company, email address, phone number, project type,
              and your message. The form sends this to us as an email.
            </p>
            <p>
              <strong>Collected automatically.</strong> Our site is hosted on
              GitHub Pages which, like most hosts, may log standard technical
              information (such as IP address, browser type, and pages
              requested) for security and operation. We do not use analytics,
              advertising, or tracking cookies.
            </p>
            <h2>How we use your information</h2>
            <p>
              We use what you provide only to respond to your enquiry, discuss
              your project, and provide our design services. We never sell,
              rent, or trade your personal information.
            </p>
            <h2>Legal basis</h2>
            <p>
              We rely on your consent, given when you contact us, and our
              legitimate interest in responding to enquiries and running our
              studio. India&rsquo;s Digital Personal Data Protection Act, 2023
              applies to our handling of your data.
            </p>
            <h2>Sharing</h2>
            <p>
              We do not share your personal information with third parties for
              their own marketing. We rely on service providers only to operate
              — namely our website host (GitHub) and our email provider, who
              process data on our behalf. We may disclose information where
              required by law.
            </p>
            <h2>Data retention</h2>
            <p>
              We keep enquiry and project correspondence only as long as needed
              to respond to you and, where relevant, deliver a project, after
              which we delete or archive it.
            </p>
            <h2>Your rights</h2>
            <p>
              You may ask us to access, correct, update, or delete your
              personal information, or withdraw your consent, at any time.
              Contact us at{" "}
              <a href="mailto:contact@oikosbyangelina.com">
                contact@oikosbyangelina.com
              </a>{" "}
              and we will respond within a reasonable period.
            </p>
            <h2>International visitors</h2>
            <p>
              Oikos is based in India, and any information you send us is
              processed there. If you contact us from outside India, you
              consent to that processing. Where the laws of your location grant
              you additional rights — for example, the EU or UK GDPR&rsquo;s
              rights of access, rectification, erasure, objection, and data
              portability — we will honour them; write to us at{" "}
              <a href="mailto:contact@oikosbyangelina.com">
                contact@oikosbyangelina.com
              </a>{" "}
              to exercise them.
            </p>
            <h2>Security</h2>
            <p>
              We take reasonable measures to protect your information, though
              no method of transmission over the internet is completely secure.
            </p>
            <h2>External links</h2>
            <p>
              Our site links to our profiles on LinkedIn, Instagram, Facebook,
              and Pinterest. Those platforms have their own privacy policies,
              which govern your use of them.
            </p>
            <h2>Children</h2>
            <p>
              Our website and services are intended for businesses and adults,
              not children, and we do not knowingly collect data from children.
            </p>
            <h2>Changes</h2>
            <p>
              We may update this policy from time to time; the &ldquo;last
              updated&rdquo; date above will change to reflect it.
            </p>
            <h2>Contact</h2>
            <p>
              Questions or requests about this policy or your data:{" "}
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
