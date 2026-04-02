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
    journey/              # Interactive founder timeline (2014-2025)
    projects/             # Project showcase
    connect/              # Contact form
    api/subscribe/        # Newsletter subscription endpoint
    llm.txt/              # LLM-readable site summary
    sitemap.ts            # Dynamic sitemap
    robots.ts             # Robots.txt
  components/
    nav.tsx               # Site navigation
    footer.tsx            # Footer with social links
    newsletter-form.tsx   # Newsletter subscription form
    contact-form.tsx      # Contact form
    blog-card.tsx         # Blog post preview card
    project-card.tsx      # Project showcase card
    section-label.tsx     # Section header utility
    timeline/             # Timeline components (year-marker, card, filter)
  data/
    currently.ts          # "Currently" section items
    timeline.ts           # Founder timeline milestones
    projects.ts           # Project showcase entries
  lib/
    beehiiv.ts            # Beehiiv API client
    supabase.ts           # Supabase client
```
