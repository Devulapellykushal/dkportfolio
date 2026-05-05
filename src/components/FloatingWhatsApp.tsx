import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-card animate-pulse-soft md:bottom-8 md:right-8"
      aria-label="Chat on WhatsApp"
      title="Book on WhatsApp"
    >
      <span aria-hidden>💬</span>
    </a>
  );
}
