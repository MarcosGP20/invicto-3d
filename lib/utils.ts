export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getWhatsAppUrl(message?: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+5493517692476";
  const text =
    message ?? "Hola, me interesa cotizar un producto de impresión 3D.";
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}
