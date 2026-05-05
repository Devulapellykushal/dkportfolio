import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  children: React.ReactNode;
  className?: string;
  message?: string;
  ariaLabel?: string;
};

export function WhatsAppButton({
  children,
  className = "",
  message,
  ariaLabel = "Book on WhatsApp",
}: Props) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 text-center text-base font-semibold text-ink shadow-glow transition hover:brightness-110 active:scale-[0.99] ${className}`}
    >
      {children}
    </a>
  );
}
