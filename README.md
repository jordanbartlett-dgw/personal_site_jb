# jordanbartlett.co

Personal brand site for Jordan Bartlett. Editorial, typography-forward Next.js site serving as a lead generator for Doing Good Works, Foster Greatness, and the Infrastructure of Belonging newsletter.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 with `@tailwindcss/typography`
- Beehiiv API v2 (blog content + newsletter subscriptions)
- Supabase (contact form submissions)
- Infisical (secret management)
- Vercel (deployment)

## Development

```bash
npm install
npm run dev:infisical    # dev server with Infisical secrets
npm run build:infisical  # production build with Infisical secrets
npm run lint
```

Secrets are managed via Infisical. See `.env.local.example` for required variables.

## Project Structure

```
src/
  app/
    page.tsx              # Homepage
    blog/                 # Blog index + individual posts (from Beehiiv)
    connect/              # Contact form
    api/subscribe/        # Newsletter subscription endpoint
    llm.txt/              # LLM-readable site summary
    sitemap.ts            # Dynamic sitemap
    robots.ts             # Robots.txt
  components/             # Nav, footer, blog card, forms
  data/currently.ts       # "Currently" section items
  lib/
    beehiiv.ts            # Beehiiv API client
    supabase.ts           # Supabase client
```
