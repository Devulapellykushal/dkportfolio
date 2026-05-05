import { useState } from "react";
import { SITE } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function LeadForm({ id = "lead" }: { id?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      SITE.whatsappPrefill,
      "",
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Occasion: ${occasion || "-"}`,
    ];
    const url = buildWhatsAppUrl(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      id={id}
      onSubmit={submit}
      className="rounded-2xl border border-white/10 bg-ink-soft/80 p-6 shadow-card backdrop-blur-md sm:p-8"
    >
      <p className="mb-4 font-display text-xl text-snow">Quick booking</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="mb-1 block text-sm text-mist">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full min-h-[48px] rounded-lg border border-white/15 bg-ink px-4 py-3 text-snow outline-none ring-gold/40 transition focus:border-gold focus:ring-2"
            placeholder="Your name"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="mb-1 block text-sm text-mist">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full min-h-[48px] rounded-lg border border-white/15 bg-ink px-4 py-3 text-snow outline-none ring-gold/40 transition focus:border-gold focus:ring-2"
            placeholder="10-digit mobile"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm text-mist">Occasion</span>
          <select
            name="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="w-full min-h-[48px] rounded-lg border border-white/15 bg-ink px-4 py-3 text-snow outline-none ring-gold/40 transition focus:border-gold focus:ring-2"
          >
            <option value="">Select</option>
            <option value="Couple">Couple</option>
            <option value="Newborn / Baby">Newborn / Baby</option>
            <option value="Anniversary gift">Anniversary gift</option>
            <option value="Family">Family</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full min-h-[52px] rounded-xl bg-gold px-6 py-3 text-base font-semibold text-ink shadow-glow transition hover:brightness-110"
      >
        Send on WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        We reply within minutes during working hours.
      </p>
    </form>
  );
}
