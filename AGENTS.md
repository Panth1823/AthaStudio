# AGENTS.md — Atha Studio website

Instructions for any AI coding assistant working in this repo.

## First, always
1. Read `DESIGN.md` before writing or changing any UI. It is the source of truth for colour, type, spacing, components, imagery and copy voice.
2. Read `products.json` to understand the data. Never hard-code a product in markup.
3. If a request conflicts with `DESIGN.md`, say so and ask before breaking it.

## Project
Website for Atha Studio, an artist-led hand-painted jewellery brand (founder: Hetvi, Instagram @theatha.studio). Currently sold on Instagram. Goal: a calm, tactile, artistic site that shows each piece clearly and makes ordering simple (WhatsApp enquiry first, checkout later).

## Stack (change only if I ask)
- Astro + Tailwind CSS (or Next.js App Router + Tailwind if the repo already uses it), TypeScript where available
- Fonts: Cormorant Garamond (headings) and DM Sans (body), via Fontsource or Google Fonts
- Data: `products.json` + `/images`, no database and no backend yet
- Hosting: static, free tier (Vercel, Netlify or Cloudflare Pages)

## Rules
- Free and open-source tools only unless I approve otherwise.
- Mobile first. Test at 375px width before desktop.
- Put colours, spacing and radius in CSS variables/Tailwind theme from `DESIGN.md`. Do not scatter hex values through components.
- Use only the spacing scale 8, 16, 24, 32 (and doubles).
- No new dependencies without saying why. Prefer plain HTML/CSS before adding a library.
- No stock-template looks: no gradients, stickers, heavy shadows, emoji, or generic luxury copy.
- Every image needs real alt text, explicit width/height, and lazy loading below the fold.
- Currency toggle uses the fixed `price_inr` and `price_usd` fields. Never convert.
- Keep components small and named by purpose (`ProductCard`, `InspirationBlock`, `CategoryGrid`).
- Write all visible copy in Hetvi's voice per `DESIGN.md` section 9. If you need placeholder copy, mark it `TODO(copy)` so I can replace it.

## How to work
- Make one section or page at a time, then stop so I can review.
- After each change, tell me which files changed and what to check on a phone.
- If you can run a browser or take screenshots, compare against the mockup at `reference/mockup.png` and fix visible differences.
- Do not touch `products.json` content unless I ask; you may add fields only if the schema in `DESIGN.md` section 11 allows it.

## Done means
- Looks right at 375px and 1280px
- Keyboard and screen-reader usable
- No console errors
- Lighthouse performance and accessibility both high (aim 90+)
