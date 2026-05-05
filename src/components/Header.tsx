import { SITE, telHref } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/85 backdrop-blur-md">
      <div className="container-narrow flex min-h-[64px] items-center justify-between gap-4 py-3">
        <a href="#top" className="group flex flex-col leading-tight">
          <span className="font-display text-xl font-semibold tracking-tight text-snow group-hover:text-gold sm:text-2xl">
            {SITE.brand}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-goldMuted">
            {SITE.tagline}
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-mist md:flex">
          <a href="#gallery" className="transition hover:text-gold">
            Gallery
          </a>
          <a href="#pricing" className="transition hover:text-gold">
            Pricing
          </a>
          <a href="#process" className="transition hover:text-gold">
            Process
          </a>
          <a href="#contact" className="transition hover:text-gold">
            Contact
          </a>
          <a
            href={SITE.instagramUrl}
            className="transition hover:text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={telHref()}
            className="hidden min-h-[44px] items-center rounded-lg border border-white/15 px-3 text-sm text-snow transition hover:border-gold/50 hover:text-gold sm:inline-flex"
          >
            Call
          </a>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-ink shadow-glow transition hover:brightness-110"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
