# Atha Studio: Product Requirements & Tech Stack

*Prepared for Shah · October 2026 · Draft v1*

## 1. Overview

Atha Studio sells artistic handmade products. The goal is a low-cost, portable online presence that can start tiny (a shareable catalogue this week) and grow into a full website and, later, a shop with checkout, without ever rebuilding the product data.

**Guiding principles**

1. **Free first.** ₹0 software and hosting for the first phase; the only unavoidable cost is a domain.
2. **One source of truth.** A single product data file (schema in section 6) feeds the catalogue today and the website tomorrow.
3. **Portable.** No lock-in: all data and images live in a Git repo the owner controls.
4. **Simple to maintain.** No server, database or plugin updates until real orders justify it.
5. **Art first.** Large, high-quality images and a calm, gallery-like design.

## 2. Users

| User | Needs |
| --- | --- |
| **Visitor / buyer** (mostly arriving from Instagram on a phone) | See products quickly, understand price in INR or USD, ask to buy in one tap |
| **Owner** (Atha Studio’s founder, non-technical) | Add or edit a product, mark it sold, in minutes without touching code |
| **Developer** (Shah) | Clean data, a repo he can extend, a clear path to a full website and checkout |

## 3. Scope and phases

### Phase 0: Catalogue (now)

A standalone, mobile-first, single-page catalogue that can go live immediately and be shared via a link in the Instagram bio.

**In scope:** product grid, category filter, search, product detail view, INR/USD toggle, availability status, WhatsApp and Instagram enquiry buttons with prefilled message, basic SEO and share previews.

**Out of scope:** payments, user accounts, cart, inventory sync.

### Phase 1: Website

Brand website with Home, Shop (catalogue), Product pages, About/Story, Contact, and optional journal. The catalogue becomes the Shop section, reading the same product data.

### Phase 2: Commerce (only when order volume needs it)

Cart and checkout, order management, inventory, shipping and tax rules, payment providers, transactional email.

## 4. Functional requirements

### 4.1 Phase 0: Catalogue

| ID | Requirement | Priority |
| --- | --- | --- |
| C-01 | Display all products in a responsive grid (1 column on small phones, 2 on larger phones, 3 to 4 on desktop) | Must |
| C-02 | Each card shows image, name, category and price in the selected currency | Must |
| C-03 | Currency toggle between INR and USD, using fixed per-product prices (never auto-converted) | Must |
| C-04 | Category filter and free-text search over name, description and SKU | Must |
| C-05 | Product detail view with description, materials, dimensions, SKU and availability | Must |
| C-06 | “Enquire / Buy” button opening WhatsApp with a prefilled message containing product name and SKU | Must |
| C-07 | Secondary “Message on Instagram” link | Should |
| C-08 | Availability states: available, made to order, sold | Must |
| C-09 | Shareable link to a product (hash or URL per SKU) | Should |
| C-10 | Graceful placeholder when an image is missing | Must |
| C-11 | Open Graph and meta tags so links preview well on WhatsApp and Instagram | Should |
| C-12 | All content driven by one data file; no product is hard-coded in markup | Must |

### 4.2 Phase 1: Website

| ID | Requirement | Priority |
| --- | --- | --- |
| W-01 | Pages: Home, Shop, Product, About, Contact | Must |
| W-02 | Shop and Product pages generated from the same product data | Must |
| W-03 | Contact form delivering to the owner’s email (free-tier form service) | Should |
| W-04 | Owner can edit products through a simple admin UI (headless CMS) | Should |
| W-05 | Custom domain with HTTPS | Must |
| W-06 | Sitemap, robots, structured data (schema.org Product) | Should |
| W-07 | Basic privacy-friendly analytics | Could |
| W-08 | Optional journal or “process” posts | Could |

### 4.3 Phase 2: Commerce

| ID | Requirement | Priority |
| --- | --- | --- |
| E-01 | Cart and checkout in INR and USD | Must |
| E-02 | Payments: UPI and cards in India; international cards or PayPal for USD | Must |
| E-03 | Order notifications by email to the owner and buyer | Must |
| E-04 | Stock count per SKU with automatic “sold” state | Must |
| E-05 | Shipping rules: domestic and international | Should |
| E-06 | Admin dashboard for orders, products and customers | Must |

## 5. Non-functional requirements

- **Performance:** first contentful paint under 2 seconds on a mid-range phone over 4G; images lazy-loaded and served in modern formats (WebP or AVIF) at sensible sizes.
- **Mobile first:** most traffic will come from Instagram on phones; tap targets of at least 44 px.
- **Accessibility:** WCAG 2.1 AA as a target: alt text on every image, keyboard navigation, sufficient contrast, visible focus.
- **SEO and sharing:** meaningful titles, descriptions and Open Graph images.
- **Portability:** all data exportable as JSON and CSV at any time.
- **Cost:** ₹0 recurring in Phase 0 apart from the domain.
- **Security and privacy:** HTTPS everywhere; no personal data stored in Phase 0 and Phase 1 beyond contact form submissions.
- **Maintainability:** one repo, a short README, no custom backend until Phase 2.

## 6. Product data model

This schema is the contract between all phases. Keep it stable; add fields rather than renaming them.

| Field | Type | Notes |
| --- | --- | --- |
| `sku` | string | Unique, never reused. Format `ATH-<CAT>-<NNN>`, e.g. `ATH-EAR-001` |
| `name` | string | Display name |
| `category` | string | e.g. Earrings, Prints, Home decor |
| `description` | string | Short story and details |
| `materials` | string | Optional |
| `dimensions` | string | Optional, e.g. “6 × 4 cm” |
| `price_inr` | number | Fixed INR price |
| `price_usd` | number | Fixed USD price |
| `status` | enum | `available`, `made_to_order`, `sold` |
| `stock` | number | Optional in Phase 0; required in Phase 2 |
| `images` | string\[\] | Ordered; first is the cover. Relative paths such as `images/ATH-EAR-001-1.webp` |
| `tags` | string\[\] | Optional, for search |
| `featured` | boolean | Optional, for the home page |
| `created` | date | ISO date |

**Example**

```json
{
  "sku": "ATH-EAR-001",
  "name": "Hand-painted Clay Earrings",
  "category": "Earrings",
  "description": "Lightweight polymer clay, hand painted.",
  "price_inr": 1200,
  "price_usd": 35,
  "status": "available",
  "images": ["images/ATH-EAR-001-1.webp"]
}
```

**Pricing rules**

- INR and USD prices are set by hand and independent of each other.
- USD prices should include a reasonable allowance for international shipping or state clearly that shipping is extra.
- Review prices when the exchange rate moves significantly.

**Image rules**

- Keep untouched originals in a separate backup folder or cloud drive.
- Publish optimised copies (about 1600 px on the long side, WebP, under 300 KB each).
- Name files by SKU: `ATH-EAR-001-1.webp`, `ATH-EAR-001-2.webp`.
- Use natural light, a plain background and one detail shot per product.

## 7. Tech stack

### 7.1 Phase 0: Catalogue

| Layer | Choice | Why |
| --- | --- | --- |
| Frontend | Single static page with plain HTML, CSS and JavaScript | Zero build step, zero cost, easy for the owner to host anywhere |
| Data | `products.json` (same schema as section 6) | Becomes the data source for the website unchanged |
| Images | `/images` folder in the repo | Free, versioned, portable |
| Hosting | Vercel, Netlify, Cloudflare Pages or GitHub Pages (all have free tiers; confirm current limits) | Free HTTPS and global CDN |
| Ordering | WhatsApp click-to-chat and Instagram DM link | No payment integration needed yet |
| Domain | Optional, bought when ready; free subdomain until then | Only recurring cost |

### 7.2 Phase 1: Website

| Layer | Choice | Alternatives |
| --- | --- | --- |
| Framework | **Next.js** (App Router) with static generation, TypeScript | Astro (lighter, content-focused) |
| Styling | Tailwind CSS | CSS modules |
| Content and data | Start with `products.json`; move to a headless CMS when the owner wants an editing UI | Sanity or Decap CMS (Git-based, free); verify current free-tier limits |
| Images | Next.js image optimisation or pre-optimised WebP | Cloudinary free tier |
| Forms | Free-tier form service or serverless function | Formspree, Web3Forms |
| Hosting | Vercel (free tier) | Netlify, Cloudflare Pages |
| Analytics | Privacy-friendly option with a free or self-hosted tier | Plausible, Umami |

### 7.3 Phase 2: Commerce

Pick one path when orders justify it.

| Option | Pros | Cons |
| --- | --- | --- |
| **Medusa** (open source, MIT, Node and TypeScript) | Fits the Next.js stack, full control, no platform fee | Needs a server and Postgres database; you maintain it |
| **Hosted checkout** (payment links or buy buttons from a payment provider) | No backend, quick, low maintenance | Less control; manual inventory |
| **Shopify with headless storefront** | Managed, reliable | Monthly cost |

**Payments to evaluate:** Razorpay (UPI and Indian cards) for INR; Stripe or PayPal for USD, subject to availability and onboarding requirements for the owner’s business.

## 8. Architecture

```
  products.json  +  /images   (single source of truth, in Git)
          │
  ┌───────┼──────────────────────────┐
  │       │                          │
  Phase 0 catalogue (static)   Phase 1 website (Next.js)   Phase 2 commerce (Medusa or hosted checkout)
          │                          │                          │
   Instagram bio link        Custom domain + Shop pages     Cart, payments, orders
```

**Integration plan:** the Phase 0 catalogue is built to read `products.json`. In Phase 1 the same file is imported by the Next.js Shop page, so no data migration is needed. In Phase 2 the file is imported into Medusa (or the hosted checkout) using the SKU as the key.

## 9. Content workflow (owner)

1. Photograph the product and save the original.
2. Export an optimised copy named by SKU.
3. Add or edit the product entry (via the CMS in Phase 1, or by sending Shah the details in Phase 0).
4. Publish; the site rebuilds automatically.
5. When an item sells, set `status` to `sold` rather than deleting it, so the page and its link keep working.

## 10. Milestones

| Milestone | Deliverable | Target |
| --- | --- | --- |
| M0 | Catalogue live with 5 to 10 real products; link in Instagram bio | Week 1 |
| M1 | Real photos and final copy for all products; WhatsApp number and Instagram handle set | Week 2 |
| M2 | Domain purchased and connected | Week 2 to 3 |
| M3 | Website (Home, Shop, About, Contact) live | Weeks 4 to 6 |
| M4 | Editing UI for the owner | Weeks 6 to 8 |
| M5 | Checkout, if order volume justifies it | Later |

## 11. Costs (estimates; verify before committing)

| Item | Phase 0 | Phase 1 | Phase 2 |
| --- | --- | --- | --- |
| Hosting | ₹0 | ₹0 (free tier) | ₹0 to a small monthly fee (server for Medusa) |
| Domain | Optional | About ₹500 to ₹1,000 per year | Same |
| Payments | n/a | n/a | Per-transaction provider fees |
| Email and forms | n/a | ₹0 (free tier) | Free tier or low cost |

## 12. Success metrics

- Catalogue link clicks from Instagram bio.
- Number of WhatsApp enquiries per week.
- Enquiry-to-sale conversion (tracked manually at first).
- Page speed and mobile usability scores.

## 13. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Owner can’t update the catalogue herself | Add a CMS or a simple edit workflow in Phase 1; document the steps |
| Image-heavy pages are slow | Optimised WebP, lazy loading, size limits |
| Prices drift as exchange rates move | Scheduled price review; fixed prices per currency |
| Platform free tiers change | Keep everything in Git; host anywhere that serves static files |
| Manual order handling doesn’t scale | Move to Phase 2 when enquiries become hard to manage |
| International shipping complexity | Define shipping policy and costs before enabling USD checkout |

## 14. Open questions

1. How many products at launch, and in how many categories?
2. Does she want to take payment online right away, or is WhatsApp enquiry enough for now?
3. Which countries will she ship to, and who handles shipping and costs?
4. Does she already have a domain name in mind, and the WhatsApp Business number and Instagram handle to use?
5. Does she want to edit products herself, and if so how often?
6. Brand assets: logo, colours, fonts, About text?

## 15. Launch checklist (Phase 0)

- [ ] Replace sample products with real ones using the schema above
- [ ] Set the WhatsApp number and Instagram handle in the catalogue config
- [ ] Add optimised product photos named by SKU
- [ ] Check prices in both currencies
- [ ] Test on a real phone, including the WhatsApp button
- [ ] Add the link to the Instagram bio
- [ ] Keep a backup of originals and the data file
