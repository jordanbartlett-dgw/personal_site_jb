@AGENTS.md

# jordanbartlett.co — Project Context

## What This Is
Personal brand website for Jordan Bartlett. Editorial, typography-forward Next.js site.
Lead generator for DGW Branded (merchandise), Foster Greatness (nonprofit), and Infrastructure of Belonging newsletter.

## Status
Live and deployed to Vercel. GitHub repo: jordanbartlett-dgw/personal_site_jb

### Pages
- `/` — Homepage with hero, "What I'm Building", journey teaser, "Currently"
- `/blog` + `/blog/[slug]` — Newsletter archive powered by Beehiiv API
- `/journey` — Interactive founder timeline (2014-2025), ~50 milestones, filterable by category
- `/projects` — Project showcase (built, not yet linked in nav)
- `/connect` — Contact form (Supabase)

## Stack
- Next.js 16.2.1 (App Router) + React 19.2.4 + TypeScript (strict)
- **Tailwind CSS v4** — NO tailwind.config.ts. All config in `src/app/globals.css` via `@theme inline {}`. Plugins via `@plugin`.
- Beehiiv API v2 (blog content + newsletter subscriptions)
- Supabase (contact form submissions via service role key)
- Infisical (secret management, CLI-based injection)
- Vercel deployment target

## Secrets (managed via Infisical)
- `BEEHIIV_API_KEY`, `BEEHIIV_PUBLICATION_ID`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- Infisical workspace: `7a23b0fe-e17a-4745-94a3-078cba9c36c6`

## Commands
```bash
npm run dev:infisical    # Dev server with Infisical secrets
npm run build:infisical  # Production build with Infisical secrets
npm run lint             # ESLint
```

## Content Workflow
- Newsletter publishes via Beehiiv at 10am CST every Wednesday
- Blog revalidates every 30 minutes, so new posts appear by ~10:30am
- LinkedIn post scheduled for 10:30am+ CST to allow time for revalidation check
- Blog HTML is cleaned of Beehiiv wrapper/inline styles in `src/lib/beehiiv.ts`

## Timeline Content Rules
- No employee names. Only family (Scott, Drew, Rachel, Jessie) by first name.
- No dollar amounts unless donations/givebacks.
- No consulting/new business references. DGW + FG journey only.
- Frame team efforts as team efforts, not solo acts.
- Timeline data lives in `src/data/timeline.ts`, projects in `src/data/projects.ts`.

## After Deploying
- Design polish with Impeccable skills (user requested)
- Copy/wording refinement (user deferred to post-build)
- Projects page: refine copy, add to nav when ready (one-line change in nav.tsx)

## Key Skills
- `jb-brand` — Brand context, design system, conversion goals
- `jb-creative` — Voice, editorial rules, stories
- `impeccable:*` — UI design and polish
