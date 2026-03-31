# Code Style and Conventions

## TypeScript
- Strict mode enabled in tsconfig.json
- Path alias: `@/*` maps to `./src/*`
- Type hints on all function signatures
- Named exports for components (not default exports for components, but default exports for pages)
- Pages use `export default async function PageName()` pattern
- Components use `export function ComponentName()` pattern

## File Organization
```
src/
  app/                  # Next.js App Router pages and API routes
    api/subscribe/      # API route for newsletter subscriptions
    blog/               # Blog index and dynamic [slug] pages
    connect/            # Contact form page + server actions
    llm.txt/            # AI discoverability route
    globals.css         # Tailwind v4 theme + base styles
    layout.tsx          # Root layout with fonts, nav, footer
    page.tsx            # Homepage
    robots.ts           # Robots.txt
    sitemap.ts          # Dynamic sitemap
  components/           # Shared React components
  data/                 # Data files (currently.ts for update-friendly content)
  lib/                  # Utilities (beehiiv.ts, supabase.ts)
```

## Tailwind v4 (IMPORTANT)
- NO `tailwind.config.ts` file — Tailwind v4 uses CSS-only config
- Custom colors, fonts, spacing defined in `globals.css` via `@theme inline { }`
- Plugins loaded via `@plugin "package-name";` in CSS
- Import syntax: `@import "tailwindcss";` (not `@tailwind base/components/utilities`)
- PostCSS uses `@tailwindcss/postcss` plugin

## Design Tokens (in globals.css)
- `--color-cream`, `--color-ink`, `--color-muted`, `--color-subtle`, `--color-terracotta`, `--color-border-light`
- `--font-serif` (DM Serif Display), `--font-sans` (Instrument Sans)
- `--max-width-prose` (640px)
- Usage: `bg-cream`, `text-ink`, `text-terracotta`, `font-serif`, `font-sans`, etc.

## Component Patterns
- Server components by default (no "use client" unless needed)
- Client components only for interactive elements (forms, state)
- `"use client"` at top of file when client-side hooks are needed
- Forms use `useActionState` hook with server actions
- `useSearchParams()` requires Suspense boundary wrapper

## Naming
- Files: kebab-case (e.g., `newsletter-form.tsx`, `blog-card.tsx`)
- Components: PascalCase (e.g., `NewsletterForm`, `BlogCard`)
- Functions: camelCase
- Types: PascalCase
- CSS custom properties: kebab-case with `--color-`, `--font-` prefixes

## ESLint
- Uses `eslint-config-next` with core-web-vitals and typescript presets
- Flat config format (eslint.config.mjs)
