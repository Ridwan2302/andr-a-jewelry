import type { Product } from "./data";

export const WHATSAPP_NUMBER = "2250500032314";

export function productOrderLink(product: Product, pageUrl: string): string {
  const link = `${pageUrl}#${product.id}`;
  const message =
    `Bonjour Andréa Jewelry, je souhaite commander la pièce « ${product.name} » ` +
    `(${product.material}) au prix de ${product.price} FCFA.\nLien du produit : ${link}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
