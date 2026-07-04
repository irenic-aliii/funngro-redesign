# Funngro — Redesign

A 2-page, production-ready redesign of the Funngro Earn website, built with
Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `/` is Home, `/how-it-works` is the full process
page — real routed pages, not anchor scrolling.

```bash
npm run build && npm run start   # production build
```

## What's real vs. placeholder

I didn't have access to Funngro's actual current copy (no file, URL, or
export was provided), so the FAQ answers, step descriptions, income-ladder
numbers, testimonials, and footer legal links are **written to match the
brief's structure**, not lifted from the live site. Everything else —
architecture, design system, components, animations, accessibility,
SEO scaffolding — is fully built out and production-ready.

Swap in the real copy by editing the files in `/data` — nothing else needs
to change, since every section reads from there rather than hardcoding text.

## Structure

```
app/
  layout.tsx         Root layout, fonts, global SEO metadata
  page.tsx            Home (/)
  how-it-works/
    page.tsx          How It Works (/how-it-works)
  robots.ts            sitemap.ts   SEO
  not-found.tsx        Custom 404
components/
  layout/              Navbar, Footer, Container
  ui/                   Button, SectionTitle, StatCard, CTA
  home/                 Hero, WhatIsFunngro, WhyJoin, IncomePreview,
                         HowItWorksPreview, Testimonials
  hiw/                  HiwHero, Timeline, IncomeLadder, Principles,
                         Progression, FAQ
data/                  All copy: steps, incomeLadder, principles,
                        progression, faq, footer, testimonials
lib/animations.ts       Shared Framer Motion variants
```

## Design system

- **Background** `#07100C` near-black green · **Card** `#101B15`
- **Accent** mint `#3ECF8E` · **Border** `rgba(62,207,142,0.14)`
- **Display** Space Grotesk · **Body** Inter · **Mono/data** IBM Plex Mono
  (used for numbers, stats, and the live earnings ticker — reinforcing that
  this is a real earning product, not a generic SaaS template)

## Notes

- Fully responsive, keyboard-navigable, `prefers-reduced-motion` respected.
- FAQ and the 7-step progression are accessible accordions (`aria-expanded`,
  `aria-controls`, keyboard operable).
- The project builds clean (`next build`) — verified in this environment
  with local font stubs, since Google Fonts isn't reachable from this
  sandbox; it will fetch normally on a machine with full internet access.
