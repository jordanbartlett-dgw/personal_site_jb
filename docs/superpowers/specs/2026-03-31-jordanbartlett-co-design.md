# jordanbartlett.co — Design Spec

## Overview

Personal brand site for Jordan Bartlett. An editorial, typography-forward single-page site with a blog powered by Beehiiv. Deploys on Vercel. Audience: purpose-driven corporate partners (mostly for-profit).

The site introduces who Jordan is and funnels visitors toward four outcomes: newsletter signup, DGW branded merchandise inquiries, FG donations, and FG corporate partnership inquiries.

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static (SSG) | Editorial scroll homepage |
| `/blog` | ISR | Blog index listing posts from Beehiiv |
| `/blog/[slug]` | ISR | Individual blog post rendered from Beehiiv content |
| `/connect` | Static | Contact form with inquiry type selector |

## Homepage Sections (Editorial Scroll)

### 1. Navigation

Minimal top bar. Left: "Jordan Bartlett" (links to `/`). Right: "Writing" (links to `/blog`), "Connect" (links to `/connect`). No hamburger menu on desktop. On mobile, these two links are small enough to stay visible without a menu.

### 2. Hero

- Jordan's name as the primary heading
- One-line descriptor: grounded, not clever. Example direction: "Builder. CTO. Writing Infrastructure of Belonging."
- Brief supporting sentence connecting DGW and FG
- Newsletter email capture inline (Beehiiv subscribe): email input + "Subscribe" button
- Microcopy below: "Join Infrastructure of Belonging" or similar

The newsletter signup is the highest-priority, lowest-friction CTA. It lives in the hero.

### 3. What I'm Building

Three connected blocks, flowing vertically. Not cards in a grid. The narrative connects them: DGW funds FG, the newsletter ties the thesis together.

**Doing Good Works**
- Description: promotional products social enterprise and PBC. Every order funds Foster Greatness. Your branded merch budget becomes impact.
- CTA: "Book a call about branded merchandise" → `/connect?type=merchandise`

**Foster Greatness**
- Description: lifelong community for current and former foster youth. 2,000+ members. Lived experience-led. Free to join. No aging out.
- CTAs: "Partner with us" → `/connect?type=partnership`, "Donate" → `fostergreatness.co/donate` (external)

**Infrastructure of Belonging**
- Description: the newsletter. Belonging is not accidental. It is infrastructure. Infrastructure can be engineered.
- CTA: "Read recent posts" → `/blog`

### 4. Currently

A "what I'm up to now" section. Update-friendly. Data lives in a simple TypeScript data file (`src/data/currently.ts`) so Jordan can update without touching layout code.

Initial items:
- Training for the South Downs Way 100 (June 2027)
- Building AI systems for small teams
- Writing Infrastructure of Belonging
- Documenting Rett Set 100 on Instagram

### 5. Footer

- "Find Me" links: LinkedIn, GitHub, Instagram, Newsletter archive
- Email: jordan@jordanbartlett.co
- Minimal. No heavy footer chrome.

## Blog (`/blog` and `/blog/[slug]`)

### Blog Index

- List of posts pulled from Beehiiv API at build time via ISR
- Revalidation: every 1 hour (or on-demand via webhook if Beehiiv supports it)
- Each post shows: title, date, excerpt/preview text
- Sorted by publish date, newest first
- Pagination if post count exceeds 10 (simple "Load more" or page numbers)
- Newsletter signup CTA repeated at the bottom of the index

### Blog Post

- Individual post rendered from Beehiiv HTML content
- Styled to match site typography (DM Serif Display headings, Instrument Sans body)
- Post metadata: title, date, estimated reading time
- Newsletter signup CTA at the bottom of each post
- "Back to all posts" link at top

## Contact Form (`/connect`)

### Fields

| Field | Type | Required |
|-------|------|----------|
| Name | Text input | Yes |
| Email | Email input | Yes |
| Company | Text input | Yes |
| Inquiry Type | Radio group | Yes |
| Notes | Textarea | No |

### Inquiry Types

- Branded Merchandise (DGW)
- Corporate Partnership (Foster Greatness)
- General

### Behavior

- The `type` query parameter pre-selects the inquiry type when coming from a CTA (e.g., `/connect?type=merchandise`)
- Form submits via Next.js Server Action
- Submission stored in Supabase `contact_submissions` table
- Success state: brief confirmation message on the same page
- Error state: inline error message, form stays populated

### Supabase Table: `contact_submissions`

```sql
create table contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text not null,
  inquiry_type text not null check (inquiry_type in ('merchandise', 'partnership', 'general')),
  notes text,
  created_at timestamptz default now()
);
```

Row-level security: insert-only for anonymous, read for authenticated (Jordan's admin access).

## Design System

### Typography

- **Headings**: DM Serif Display (Google Fonts), loaded via `next/font/google`
- **Body**: Instrument Sans (Google Fonts), loaded via `next/font/google`
- Both loaded with `display: swap` for performance

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `bg-cream` | `#FAF7F2` | Page background |
| `text-ink` | `#1a1a1a` | Primary text |
| `text-muted` | `#555555` | Secondary/supporting text |
| `text-subtle` | `#999999` | Labels, microcopy |
| `accent-terracotta` | `#C45D3E` | CTAs, links, highlights |
| `border-light` | `rgba(26,26,26,0.08)` | Section dividers |

### Grain Texture

CSS-only background noise overlay using SVG filter. Applied to the body or a fixed overlay div. Subtle, not distracting. Zero performance cost.

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,..."); /* inline SVG noise */
  z-index: 9999;
}
```

### Design Principles

- Generous whitespace. Let content breathe.
- Typography-forward. Type does most of the visual work.
- Minimal UI chrome. No complex navigation.
- No photos for v1. Typography and whitespace carry the identity.
- No emojis in body copy.
- Mobile-first. Most traffic from social/newsletter clicks.

### Responsive Breakpoints

- Mobile: < 640px (default/primary design target)
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Max content width: 640px for body text (optimal reading width)

## Data Architecture

### Newsletter Signup

Client-side POST to Beehiiv's subscribe API endpoint. No server-side proxy needed. The Beehiiv publication ID will be stored in an environment variable.

### Blog Content (Beehiiv API)

- Fetch posts at build time using Beehiiv's REST API
- ISR with 1-hour revalidation
- Store Beehiiv API key in environment variable (server-side only)
- Map Beehiiv post data to a local `BlogPost` type:
  - `slug`: derived from Beehiiv post URL or ID
  - `title`: post title
  - `publishedAt`: ISO date string
  - `excerpt`: first N characters or Beehiiv's preview text
  - `content`: HTML content from Beehiiv
  - `readingTime`: calculated from word count

### Contact Form

- Next.js Server Action validates and inserts into Supabase
- Supabase client initialized with service role key (server-side only)
- Environment variables: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`

### Currently Data

Simple TypeScript array in `src/data/currently.ts`:

```typescript
export const currently = [
  { text: "Training for the South Downs Way 100", link: null },
  { text: "Building AI systems for small teams", link: null },
  { text: "Writing Infrastructure of Belonging", link: "/blog" },
  { text: "Documenting Rett Set 100 on Instagram", link: "https://instagram.com/..." },
];
```

## SEO and Meta

### Structured Data

- `Person` schema for Jordan on the homepage
- `Organization` schema for DGW and FG (linked from Person)
- `BlogPosting` schema on each blog post

### Meta Tags

- Open Graph and Twitter Card meta on all pages
- Default OG image: typography-based card (generated or static)
- Per-post OG images if Beehiiv provides them, otherwise default

### /llm.txt

Plain text file at `/llm.txt` describing the site for AI crawlers. Follows the convention Jordan already uses at fostergreatness.co.

### Sitemap and Robots

- Auto-generated sitemap via `next-sitemap` or Next.js metadata API
- Robots.txt allowing all crawlers

## Environment Variables

| Variable | Where | Purpose |
|----------|-------|---------|
| `BEEHIIV_API_KEY` | Server only | Fetch blog posts from Beehiiv API |
| `BEEHIIV_PUBLICATION_ID` | Server only | Beehiiv publication identifier |
| `NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID` | Client | Newsletter subscribe form |
| `SUPABASE_URL` | Server only | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server only | Supabase admin access for form submissions |

## Performance Requirements

- Core Web Vitals passing. LCP under 2.5s.
- SSG for homepage and contact page. ISR for blog routes.
- Fonts loaded via `next/font` — no external requests, no layout shift.
- Grain texture is CSS-only. No canvas or JS.
- Minimal client-side JS. Only the newsletter form and contact form need interactivity.
- Images optimized via `next/image` if added later.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout: fonts, grain overlay, analytics
    page.tsx            # Homepage
    blog/
      page.tsx          # Blog index
      [slug]/
        page.tsx        # Blog post
    connect/
      page.tsx          # Contact form
      actions.ts        # Server action for form submission
    llm.txt/
      route.ts          # /llm.txt endpoint
  components/
    nav.tsx             # Navigation bar
    footer.tsx          # Footer with links
    newsletter-form.tsx # Beehiiv email capture (reusable)
    contact-form.tsx    # Contact form with inquiry type
    blog-card.tsx       # Blog post preview card
    section-label.tsx   # "WHAT I'M BUILDING", "CURRENTLY" labels
  lib/
    beehiiv.ts          # Beehiiv API client and types
    supabase.ts         # Supabase client initialization
  data/
    currently.ts        # "Currently" section data
  styles/
    globals.css         # Tailwind imports, grain texture, base styles
```

## Out of Scope for v1

- Photos/imagery (typography-only)
- CMS or admin panel
- Dark mode
- Multi-language support
- Search functionality
- Comment system on blog posts
- Instagram embed/feed
- Animation beyond subtle CSS transitions
- AI consulting or What's Good content
