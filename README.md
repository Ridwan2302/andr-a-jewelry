# Andréa Jewelry — Storefront

A single-page storefront for **Andréa Jewelry**, a stainless steel and
gold-plated jewelry retailer based in Cocody, Abidjan, Côte d'Ivoire. Built
with Next.js (App Router), React, TypeScript, and Tailwind CSS v4. Prices
are shown in FCFA (XOF); product orders deep-link to WhatsApp instead of a
checkout cart.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — assembles the page sections in order.
- `components/` — one component per section (header, hero, boutique/product
  grid, brand story, testimonials, newsletter, footer).
- `lib/data.ts` — static product, collection, and review data.
- `lib/whatsapp.ts` — builds the WhatsApp order deep link for a product.

## Notes

- Product photography currently points at Unsplash placeholder URLs — swap
  `lib/data.ts` and the hero/atelier images in `components/Hero.tsx` and
  `components/Histoire.tsx` for real product/campaign photography before
  launch.
- WhatsApp ordering number lives in `lib/whatsapp.ts`
  (`WHATSAPP_NUMBER`).
