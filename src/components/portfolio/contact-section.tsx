"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  IdCard,
  Linkedin,
  LoaderCircle,
  Mail,
  Send,
} from "lucide-react";
import { profile } from "@/content/portfolio";
import { sendContactMessage } from "@/lib/contact";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Angeline Mary Marchella",
    href: profile.links.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "ORCID",
    value: "0009-0000-6787-3672",
    href: profile.links.orcid,
    icon: IdCard,
    external: true,
  },
];

export function ContactSection() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return;
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    setSending(true);
    setStatus(null);
    try {
      await sendContactMessage(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, {
        name,
        email,
        subject,
        message,
      });
      setStatus("success");
      form.reset();
    } catch (issue) {
      setError(
        issue instanceof Error
          ? issue.message
          : "Your message could not be sent. Please try again.",
      );
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      className="contact-section section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="section-label">
          <span>07</span>LET’S CONNECT
        </div>
        <div className="contact-grid">
          <div className="contact-details">
            <h2 id="contact-title">
              The next great idea
              <br />
              starts with <em>a conversation.</em>
            </h2>
            <p className="contact-intro">
              Interested in AI research, building thoughtful software, or
              exploring a new venture? I’d love to hear from you.
            </p>
            <div className="contact-methods">
              {contactLinks.map(
                ({ label, value, href, icon: Icon, external }) => (
                  <a
                    className="contact-method"
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    <span className="contact-method-icon">
                      <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="contact-method-label">{label}</span>
                      <span className="contact-method-value">{value}</span>
                    </span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                ),
              )}
            </div>
          </div>
          <form className="contact-form" onSubmit={submit} aria-busy={sending}>
            <div className="contact-form-heading">
              <Mail size={22} strokeWidth={1.5} aria-hidden="true" />
              <h3>Leave a message.</h3>
            </div>
            <p className="contact-form-intro">
              A question, an idea, or just a hello.
            </p>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">
                  Your name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  maxLength={100}
                  pattern=".*\S.*"
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                />
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="contact-subject">
                Subject <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                placeholder="What would you like to talk about?"
                required
                maxLength={160}
                pattern=".*\S.*"
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a little about your idea…"
                required
                rows={5}
                maxLength={2000}
              />
            </div>
            <input
              type="text"
              name="website"
              className="contact-honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <p className="contact-form-hint" id="contact-delivery-note">
              Your message is sent by email via Web3Forms.
            </p>
            <button
              type="submit"
              className="contact-submit"
              aria-describedby="contact-delivery-note"
              disabled={sending}
            >
              {sending ? "Sending…" : "Send message"}{" "}
              {sending ? (
                <LoaderCircle
                  size={17}
                  className="animate-spin"
                  aria-hidden="true"
                />
              ) : (
                <Send size={17} aria-hidden="true" />
              )}
            </button>
            {status === "success" && (
              <p className="contact-form-status" role="status">
                Your message has been sent. Thank you for reaching out!
              </p>
            )}
            {status === "error" && (
              <p
                className="contact-form-status contact-form-error"
                role="alert"
              >
                {error}{" "}
                <a href={`mailto:${profile.email}`}>Email me directly</a>.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
