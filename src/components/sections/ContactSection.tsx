import { FormEvent, useState } from "react";
import { profile, socialLinks } from "@/data/portfolio";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  const whatsappNumber = "916309251113";

  const handleWhatsAppSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hi Kushal, I came through your portfolio website.",
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Subject: ${subject || "Not provided"}`,
      `Message: ${details || "Not provided"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="container-shell py-20 sm:py-24">
      <div className="glass-card">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Contact</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
          Let’s build impactful AI products together
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">
          Open for AI engineering roles, consulting engagements, and collaboration opportunities.
        </p>

        <div className="mt-5 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
          <p>Phone: {profile.phone}</p>
          <p>Email: {profile.email}</p>
        </div>

        <form className="mt-8 grid gap-3 sm:grid-cols-2" onSubmit={handleWhatsAppSubmit}>
          <input
            className="input-field"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            className="input-field"
            placeholder="Your Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            className="input-field sm:col-span-2"
            placeholder="Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
          />
          <textarea
            className="input-field min-h-28 sm:col-span-2"
            placeholder="Tell me about your project or role."
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            required
          />
          <button type="submit" className="btn-primary sm:w-fit">
            Send on WhatsApp
          </button>
        </form>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn-secondary">
            Email Me
          </a>
          <a href="https://linkedin.com/in/devulapellykushal" className="btn-secondary" target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
          <a
            href="https://wa.me/916309251113?text=Hi%20Kushal%2C%20I%20came%20through%20your%20portfolio%20website."
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-4">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} className="text-sm text-zinc-400 hover:text-brand-gold">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
