"use client";

import { useState } from "react";

const PROJECT_OPTIONS = [
  "Sustainable workplace design",
  "Biophilic design consultation",
  "Sustainable material sourcing",
  "Plant care and maintenance",
  "Not sure yet",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const company = String(f.get("company") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const phone = String(f.get("phone") ?? "").trim();
    const projectType = String(f.get("projectType") ?? "").trim();
    const message = String(f.get("message") ?? "").trim();

    const subject = company
      ? `Enquiry from ${name}, ${company}`
      : `Enquiry from ${name}`;

    const body = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Interested in: ${projectType}`,
      "",
      "About the room:",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.location.href = `mailto:contact@oikosbyangelina.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <p className="contact-form-intro">
        A few lines is plenty. The more you can say about how the room actually
        feels to sit in, the more useful our first reply will be.
      </p>

      <div className="cf-row">
        <label className="cf-field">
          <span className="cf-label">Your name</span>
          <input type="text" name="name" required placeholder="Who we are writing back to" />
        </label>
        <label className="cf-field">
          <span className="cf-label">
            Company <span className="cf-opt">optional</span>
          </span>
          <input type="text" name="company" placeholder="Optional" />
        </label>
      </div>

      <div className="cf-row">
        <label className="cf-field">
          <span className="cf-label">Email</span>
          <input type="email" name="email" required placeholder="you@company.com" />
        </label>
        <label className="cf-field">
          <span className="cf-label">
            Phone <span className="cf-opt">optional</span>
          </span>
          <input type="tel" name="phone" placeholder="If you would rather we call" />
        </label>
      </div>

      <label className="cf-field">
        <span className="cf-label">What you have in mind</span>
        <div className="cf-select-wrap">
          <select name="projectType" required defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {PROJECT_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <span className="cf-caret" aria-hidden />
        </div>
      </label>

      <label className="cf-field">
        <span className="cf-label">Tell us about the room</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Where the office is, roughly how many people work in it, and what it feels like on a difficult afternoon. Stuffy air, hard light, noise that never settles, materials that have given up. Whatever you notice."
        />
      </label>

      <div className="cf-actions">
        <button type="submit" className="cf-submit" data-cursor>
          Submit <span className="arr" />
        </button>
        {sent && (
          <p className="cf-success" role="status">
            Your message is ready in your email app. Send it, and we will read it
            properly and write back within two working days.
          </p>
        )}
      </div>
    </form>
  );
}
