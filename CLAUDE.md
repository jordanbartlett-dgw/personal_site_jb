@AGENTS.md

# jordanbartlett.co — Project Context

## What This Is
Personal brand website for Jordan Bartlett. Editorial, typography-forward Next.js site.
Lead generator for DGW Branded (merchandise), Foster Greatness (nonprofit), and Infrastructure of Belonging newsletter.

## Status
Implementation complete (Tasks 1-11). Ready for Vercel deployment (Task 12).
See `docs/superpowers/specs/2026-03-31-jordanbartlett-co-design.md` for full spec.
See `docs/superpowers/plans/2026-03-31-jordanbartlett-co.md` for implementation plan.

## Stack
- Next.js 16.2.1 (App Router) + React 19.2.4 + TypeScript (strict)
- **Tailwind CSS v4** — NO tailwind.config.ts. All config in `src/app/globals.css` via `@theme inline {}`. Plugins via `@plugin`.
- Beehiiv API v2 (blog content + newsletter subscriptions)
- Supabase (contact form submissions via service role key)
- Vercel deployment target

## Commands
```bash
npm run dev    # Dev server
npm run build  # Production build
npm run lint   # ESLint
```

## Before Deploying
1. Create Supabase `contact_submissions` table (SQL in plan Task 9)
2. Set env vars (see `.env.local.example`): BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID, NEXT_PUBLIC_BEEHIIV_SUBSCRIBE_URL, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
3. Deploy: `npx vercel` then link jordanbartlett.co domain

## After Deploying
- Design polish with Impeccable skills (user requested)
- Copy/wording refinement (user deferred to post-build)

## Key Skills
- `jb-brand` — Brand context, design system, conversion goals
- `jb-creative` — Voice, editorial rules, stories
- `impeccable:*` — UI design and polish
