// Atha Studio — Site configuration
// TODO: Replace placeholder WhatsApp number with Hetvi's real number
export const CONFIG = {
  whatsapp: "91XXXXXXXXXX",
  instagram: "theatha.studio",
} as const;

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildInstagramLink(): string {
  return `https://instagram.com/${CONFIG.instagram}`;
}

