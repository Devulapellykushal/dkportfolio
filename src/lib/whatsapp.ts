import { SITE } from "../config/site";

export function buildWhatsAppUrl(message?: string): string {
  const text = message ?? SITE.whatsappPrefill;
  const params = new URLSearchParams({ text });
  return `https://wa.me/${SITE.phoneE164}?${params.toString()}`;
}
