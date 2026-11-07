# DESIGN.md — Atha Studio

Read this file before creating or changing any UI. If a request conflicts with this file, follow this file and say so.

## 1. Brand in one line

**Little things, reimagined to wear.**
Atha Studio is an artist-led wearable-art brand (hand-painted jewellery and accessories) by Hetvi. It notices overlooked everyday details, interprets them, and makes them wearable.

Descriptor: *Artist-made, hand-painted wearable art.*
Instagram: @theatha.studio
Write the name as **Atha Studio** in all page text. The official mark is "अtha Studio"; never write "Athar".

**Feeling:** wonder, recognition, delight, pride, a little desire.
**Vibe keywords:** vintage, peaceful, artistic, tactile, warm. A thoughtful artist's studio, not a luxury template.

## 2. Colour tokens

Values are provisional until tested against the real logo patch.

```css
:root {
  --studio-brown: #604136;  /* primary brand background, footer, dark sections */
  --ivory:        #F2E8DA;  /* main page background */
  --taupe:        #927466;  /* supporting surfaces, borders, muted UI */
  --ink:          #29251F;  /* all main text */
  --gold:         #AD8750;  /* decorative highlights only, sparingly */
  --terracotta:   #A9573D;  /* links, CTAs, occasional accent */
}
```

Rules:
- Default page: `--ivory` background, `--ink` text.
- Dark sections (footer, one feature band): `--studio-brown` background, `--ivory` text.
- Terracotta: links, primary buttons, small accents. Use for text 18px+ or bold; contrast on ivory is about 4:1.
- Gold: lines, tiny ornaments, hover details. Never for body text (low contrast).
- Taupe: borders, dividers, captions on large type only. Not for small body text.
- Product photos keep their true colours. Never tint or overlay a colour filter on products.
- Collections may introduce their own accent colour taken from the artwork, used only inside that collection.
- Forbidden: neon, arbitrary gradients, extra decorative colours, pure white `#fff` or pure black `#000` backgrounds.

## 3. Typography

Both fonts are on Google Fonts (self-host with Fontsource if possible).

| Role | Font | Weight | Size (mobile → desktop) |
| --- | --- | --- | --- |
| Headline | Cormorant Garamond | 500 | 32px → 44px |
| Subheading | Cormorant Garamond | 500 | 20px → 26px |
| Body | DM Sans | 400 | 15–16px → 18px |
| Caption / labels | DM Sans | 400 | 12–14px |

- Category labels (EARRINGS, NECKPIECES) are DM Sans, small caps or uppercase, letter-spacing about 0.08em.
- Line height: headings 1.15, body 1.6.
- The logo is the existing handwritten Atha wordmark, used unchanged. Do not imitate it with script fonts anywhere else.
- No decorative fonts, no childish lettering, no more than these two families.

## 4. Layout and spacing

- Spacing scale: **8, 16, 24, 32** px (extend by doubling: 48, 64, 96 for section gaps). No other values.
- Mobile side margin: 24px. Max content width on desktop: 1120px.
- Mobile first. Most visitors arrive from Instagram on a phone. Tap targets at least 44px.
- One clear focal point per section. Generous breathing room around photography.
- Editorial text is left-aligned. Centre text only for short hero or section intros.
- Mix compositions: centred product shots and asymmetric layouts. The page should feel like pages of one artist's notebook, not a repeated template.
- Dividers: a single thin line in `--taupe` at low opacity, used sparingly.

## 5. Shape, depth and motion

- Image corner radius: **4px** (open decision: the mockup uses larger rounded corners; the brand guidelines say avoid excessive rounded cards). Keep this in one variable `--radius` so it is a one-line change.
- No heavy borders, drop shadows, stickers, badges or decorative clutter.
- Optional soft fabric/stitched-edge detail drawn from the logo patch, used where it adds tactility, not on every section.
- Motion: gentle fades and small translate on scroll or hover, 200–300ms. Respect `prefers-reduced-motion`. No parallax gimmicks, no trend-led transitions.

## 6. Components

**Header:** small wordmark on the left, menu on the right (collapses to a drawer on mobile). Ivory background, no heavy shadow.

**Hero:** one large photo (artist at the work table), headline in Cormorant, one sentence of supporting copy, one text link with an arrow in terracotta ("Discover Atha →").

**Photo card with caption:** full-width image, small credit/label chip at the bottom-left, title and one line below.

**Category grid:** 2 columns on mobile, 4 on desktop. Square-ish images, uppercase label under each (Earrings, Neckpieces, Rings, Brooches).

**Product card:** image first (4:5), name, price (INR default, USD toggle), availability in plain text (Available / Made to order / Sold). No badges.

**Product page:** large images with close-ups and a worn shot, then the **inspiration block** (see below), then materials, size, care, shipping, and the enquiry button.

**Inspiration block (signature element):** every product shows the thing Hetvi noticed (photo or sketch) beside the finished piece, with one or two sentences of her own words. This is Atha's recurring editorial device.

**Buttons:** Primary = terracotta fill, ivory text. Secondary = text link with arrow. Primary action is "Enquire on WhatsApp" with a prefilled message containing product name and SKU. Secondary: "Message on Instagram".

**Footer:** `--studio-brown` background, ivory text, Instagram link, shipping/care/contact links.

## 7. Page structure (from the mobile mockup)

1. **Hero:** artist at work, headline, supporting line, "Discover Atha →"
2. **A collection of memories:** feature band for a themed collection (e.g. "Things We Grew Up With") with one large photo and a one-line story
3. **Collected from the studio:** category grid
4. **A little corner of creation:** process section (hands painting/sculpting), short copy
5. **Newest pieces:** product row
6. **Footer**

Other pages: Shop (all products, filter by category, search), Product, About (Hetvi's story), Contact/Enquire, Care & Shipping.

Sample hero copy in the mockup ("Wearing India's Stories.") is a placeholder. Check it against the voice rules below before shipping.

## 8. Imagery

- Warm, natural-looking light. Tactile surfaces. Accurate product colour.
- Order per product: full piece, close-up detail, worn shot for scale.
- Show hands, tools, paint, clay. Visible craft is the point.
- Avoid generic luxury props, heavy filters, sterile white-box shots, and repeated product-only images with no idea behind them.
- Format: WebP, about 1600px on the long side, under 300KB, named by SKU (`ATH-EAR-001-1.webp`). Always meaningful alt text.
- Icons: restrained line icons only when they serve a clear purpose.

## 9. Voice and copy

Observant, personal, curious, quietly confident. Conversational and specific, with room for humour. Written as Hetvi speaking about what caught her eye. English, with Hinglish where natural.

Structure when telling a piece's story: **Notice → Interpret → Create → Wear → Invite.** Not every page needs all five.

Good: "This piece started with a detail I couldn't stop looking at." / "I didn't want to make a miniature version. I wanted to capture its character."

Never write: "Elevate your look", "exquisite collection", "must-have for every occasion", "luxury at affordable prices", "every piece tells a story" (without saying what the story is), or vague claims of uniqueness or craftsmanship.

Sales copy: say what makes the piece interesting, show it clearly, state price, materials, care, delivery time, customisation and availability honestly.

## 10. Accessibility and performance

- Target WCAG 2.1 AA. Visible focus states, keyboard navigation, alt text on every image.
- First contentful paint under 2s on a mid-range phone over 4G. Lazy-load images below the fold; set width/height to avoid layout shift.
- Respect `prefers-reduced-motion`. No auto-playing sound.

## 11. Data contract

All products come from `products.json`. Never hard-code a product in markup. Schema fields: `sku`, `name`, `category`, `description`, `materials`, `dimensions`, `price_inr`, `price_usd`, `status` (`available` | `made_to_order` | `sold`), `images[]`, optional `stock`, `tags`, `featured`, `created`. Add fields; never rename existing ones. Mark sold items `sold` instead of deleting them. INR and USD prices are set by hand and never auto-converted.

## 12. Decision filter (use before adding any section or feature)

1. Does it help someone see the piece clearly and understand the idea behind it?
2. Is it calm, tactile and artistic rather than loud?
3. Does it make ordering simpler?
If not, leave it out.

## 13. Open decisions

- Heading colour: guidelines say Deep Ink; the mockup uses a dark green. Currently following the guidelines.
- Corner radius: 4px per guidelines vs rounded in the mockup (`--radius` variable).
- Palette values and the minimum logo size are unconfirmed until tested with the real logo.
