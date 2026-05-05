import { SITE, telHref } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink py-10 text-sm text-muted">
      <div className="container-narrow flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-snow">
            {SITE.brand} <span className="text-gold">·</span> {SITE.tagline}
          </p>
          <p className="mt-1">{SITE.city}, India</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={telHref()} className="hover:text-gold">
            +{SITE.phoneE164}
          </a>
          <a href={buildWhatsAppUrl()} className="hover:text-gold" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a
            href={SITE.instagramUrl}
            className="hover:text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a href="#gallery" className="hover:text-gold">
            Gallery
          </a>
          <a href="#pricing" className="hover:text-gold">
            Pricing
          </a>
        </div>
        <p className="text-xs">© {year} {SITE.brand}. All rights reserved.</p>
      </div>
    </footer>
  );
}
