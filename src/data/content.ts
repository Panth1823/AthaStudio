// Atha Studio — Content constants
// TODO(copy): Review all copy below with Hetvi before launch.
// All copy follows DESIGN.md § 9 — Observant, personal, specific, quietly confident.

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Shop",        href: "#shop" },
  { label: "Collections", href: "#memories" },
  { label: "About",       href: "#about" },
  { label: "Contact",     href: "#enquire" },
];

export interface Category {
  label: string;
  placeholderCaption: string;
}

export const CATEGORIES: Category[] = [
  { label: "Earrings",    placeholderCaption: "Earrings collection" },
  { label: "Neckpieces",  placeholderCaption: "Neckpieces collection" },
  { label: "Rings",       placeholderCaption: "Rings collection" },
  { label: "Brooches",    placeholderCaption: "Brooches collection" },
];

export const COPY = {
  // Hero
  heroHeadline: "Little things, reimagined to wear.",
  heroSubline: "Artist-made, hand-painted wearable art.",
  heroCtaLabel: "Discover Atha →",

  // Memory feature
  memorySectionLabel: "A collection of memories",
  memoryTitle: "Things We Grew Up With",
  memorySubline: "Little things from a time we still remember.", // TODO(copy)

  // Category grid
  categoryHeading: "Collected from the studio",

  // Idea behind the piece
  ideaHeading: "The idea behind the piece",
  ideaCaption1: "The thing she noticed",
  ideaCaption2: "The finished piece",
  ideaBody:
    "It usually starts with something easy to walk past — a rust stain on an old door, the texture of a worn coin, a tile pattern nobody photographs. I sit with it long enough to find what I want to keep, then I figure out how to make it sit quietly on the ear, or rest on a finger, so it goes everywhere with you.", // TODO(copy)

  // Creation corner
  creationHeading: "A little corner of creation",
  creationSubline:
    "Every piece begins with an idea, a little colour and a pair of hands.",
  creationPlaceholderCaption: "Hands painting a piece in the studio",

  // Enquire band
  enquireLine:
    "See something you like? Ask about it — no forms, just a conversation.", // TODO(copy)
  enquireWhatsAppCta: "Enquire on WhatsApp",
  enquireInstagramLabel: "Message on Instagram",

  // Footer
  footerBrandName: "Atha Studio",
  footerLinks: [
    { label: "Care",      href: "#care" },
    { label: "Shipping",  href: "#shipping" },
    { label: "Contact",   href: "#enquire" },
  ],
} as const;

