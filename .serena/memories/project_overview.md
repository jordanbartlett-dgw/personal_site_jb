# jb_personalbrand — Project Overview

## Purpose
Personal brand website for Jordan Bartlett at jordanbartlett.co. Editorial, typography-forward content site serving as a lead generator for:
- **DGW Branded** — Promotional products social enterprise (branded merchandise)
- **Foster Greatness** — 501(c)(3) nonprofit for current and former foster youth (2,000+ members)
- **Infrastructure of Belonging** — Newsletter on Beehiiv about belonging as infrastructure

## Tech Stack
- **Framework**: Next.js 16.2.1 (App Router)
- **React**: 19.2.4
- **TypeScript**: 5.x (strict mode)
- **Styling**: Tailwind CSS v4 (NO tailwind.config.ts — all config in CSS via `@theme inline`)
- **CSS Processing**: PostCSS with `@tailwindcss/postcss`
- **Typography Plugin**: `@tailwindcss/typography` loaded via `@plugin` directive in CSS
- **Newsletter**: Beehiiv API v2 (blog content + email subscriptions)
- **Database**: Supabase (contact form submissions)
- **Deployment**: Vercel (not yet deployed)
- **Domain**: jordanbartlett.co (via Cloudflare DNS)

## Design System
- Cream background (#FAF7F2), ink text (#1a1a1a), terracotta accent (#C45D3E)
- DM Serif Display (headings) + Instrument Sans (body) via next/font/google
- CSS-only grain texture overlay on body::before
- Typography-only (no photos) for v1
- Warm, editorial feel — independent publisher aesthetic

## Implementation Status
Tasks 1-11 complete. Build passes clean. Task 12 (Vercel deployment) pending.

## Routes
```
/ — Homepage (SSG)
/blog — Blog index (ISR, 1hr revalidation)
/blog/[slug] — Blog post (SSG + dynamic)
/connect — Contact form (static)
/api/subscribe — Newsletter subscription proxy (dynamic)
/llm.txt — AI discoverability (dynamic)
/sitemap.xml — Auto-generated
/robots.txt — Static
```

## Environment Variables Required
See `.env.local.example`:
- `BEEHIIV_API_KEY` — Beehiiv API key for fetching posts
- `BEEHIIV_PUBLICATION_ID` — Beehiiv publication ID
- `NEXT_PUBLIC_BEEHIIV_SUBSCRIBE_URL` — Beehiiv subscription endpoint
- `SUPABASE_URL` — Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role key (server-side only)

## Key Documentation
- Design spec: `docs/superpowers/specs/2026-03-31-jordanbartlett-co-design.md`
- Implementation plan: `docs/superpowers/plans/2026-03-31-jordanbartlett-co.md`
