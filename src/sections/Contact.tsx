import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE, telHref } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 bg-ink py-[var(--section-y)]">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Visit & book"
          title="We’re at Lulu Mall, Hyderabad — and we visit homes across the city"
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-inkSoft/50 p-6 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">Phone</p>
              <a
                href={telHref()}
                className="mt-2 block font-display text-3xl text-snow transition hover:text-gold"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="mt-1 text-sm text-muted">Tap to call — instant answers.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-inkSoft/50 p-6 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">Studio location</p>
              <p className="mt-2 text-lg text-mist">{SITE.address}</p>
            </div>
            <WhatsAppButton className="w-full text-lg" message={SITE.whatsappPrefill}>
              Book Your Slot Now
            </WhatsAppButton>
          </div>
          <div className="space-y-8">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-card">
              <iframe
                title="Kalakruthi location — Lulu Mall Hyderabad"
                src={SITE.mapsEmbedSrc}
                className="aspect-[4/3] min-h-[280px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
