# jordanbartlett.co Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build jordanbartlett.co — an editorial personal brand site with a Beehiiv-powered blog and Supabase-backed contact form.

**Architecture:** Next.js App Router with SSG for the homepage and contact page, ISR for blog routes. Tailwind CSS for styling. Beehiiv API for blog content and newsletter subscriptions. Supabase for contact form submissions. Typography-forward design with DM Serif Display + Instrument Sans, cream background, grain texture overlay.

**Tech Stack:** Next.js 15+, Tailwind CSS, TypeScript, Beehiiv API, Supabase, Vercel

**Design Skill:** Use `impeccable:frontend-design` skill when building UI components. The design brief for that skill: warm editorial personal brand site. Cream background (#FAF7F2), charcoal text (#1a1a1a), terracotta accent (#C45D3E). DM Serif Display for headings, Instrument Sans for body. Generous whitespace. Subtle grain texture. No photos. Typography does the visual work. Think independent publisher, not startup. Reference the JB Brand skill (`jb-brand`) for voice, copy guidelines, and content. Reference the JB Creative skill (`jb-creative`) for tone calibration and editorial rules.

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/styles/globals.css`
- Create: `.env.local.example`
- Create: `.gitignore`

- [ ] **Step 1: Create Next.js project**

Run from the project root (`/Users/jbdgw/Developer/JB/agents/jb_personalbrand`):

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

When prompted, accept defaults. This generates the full scaffold with Tailwind already configured.

- [ ] **Step 2: Verify the scaffold runs**

```bash
npm run dev
```

Expected: Dev server starts on `http://localhost:3000`. Stop the server after confirming.

- [ ] **Step 3: Install additional dependencies**

```bash
npm install @supabase/supabase-js
```

No other runtime dependencies needed. Beehiiv is plain `fetch`. Fonts are via `next/font/google`.

- [ ] **Step 4: Create `.env.local.example`**

Create `.env.local.example` with all required environment variables (no real values):

```bash
# Beehiiv
BEEHIIV_API_KEY=your_beehiiv_api_key
BEEHIIV_PUBLICATION_ID=pub_your_publication_id
NEXT_PUBLIC_BEEHIIV_SUBSCRIBE_URL=https://api.beehiiv.com/v2/publications/pub_your_publication_id/subscriptions

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

- [ ] **Step 5: Update `.gitignore`**

Ensure `.gitignore` includes:

```
.env.local
.superpowers/
```

The `create-next-app` scaffold already includes most entries. Just add `.superpowers/` and confirm `.env.local` is present.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "scaffold: Next.js project with Tailwind and Supabase"
```

---

## Task 2: Design System — Fonts, Colors, Grain Texture

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/styles/globals.css`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Configure fonts in root layout**

Replace the contents of `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { DM_Serif_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jordanbartlett.co"),
  title: {
    default: "Jordan Bartlett",
    template: "%s | Jordan Bartlett",
  },
  description:
    "Builder. CTO. Co-founder of Doing Good Works and Foster Greatness. Writing Infrastructure of Belonging.",
  openGraph: {
    title: "Jordan Bartlett",
    description:
      "Builder. CTO. Co-founder of Doing Good Works and Foster Greatness.",
    url: "https://jordanbartlett.co",
    siteName: "Jordan Bartlett",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Bartlett",
    description:
      "Builder. CTO. Co-founder of Doing Good Works and Foster Greatness.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${instrumentSans.variable}`}>
      <body className="bg-cream text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Configure Tailwind with custom colors and fonts**

Replace the contents of `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        ink: "#1a1a1a",
        muted: "#555555",
        subtle: "#999999",
        terracotta: "#C45D3E",
        "border-light": "rgba(26,26,26,0.08)",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-instrument-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "640px",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 3: Set up globals.css with grain texture**

Replace the contents of `src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.035;
    z-index: 9999;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px 256px;
  }
}

@layer base {
  ::selection {
    background-color: #C45D3E;
    color: #FAF7F2;
  }
}
```

- [ ] **Step 4: Create a minimal test page to verify the design system**

Replace the contents of `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="px-6 py-20 max-w-prose mx-auto">
      <h1 className="font-serif text-4xl mb-4">Jordan Bartlett</h1>
      <p className="text-muted text-lg leading-relaxed mb-8">
        Builder. CTO. Writing Infrastructure of Belonging.
      </p>
      <p className="text-subtle text-sm uppercase tracking-widest mb-4">
        Section Label
      </p>
      <a href="#" className="text-terracotta text-sm border-b border-terracotta">
        A link with terracotta accent
      </a>
    </main>
  );
}
```

- [ ] **Step 5: Verify in browser**

```bash
npm run dev
```

Open `http://localhost:3000`. Confirm:
- Cream background with subtle grain texture overlay
- DM Serif Display on the heading
- Instrument Sans on body text
- Terracotta accent on the link
- Proper text colors (ink, muted, subtle)

Stop the dev server.

- [ ] **Step 6: Commit**

```bash
git add src/app/layout.tsx src/styles/globals.css tailwind.config.ts src/app/page.tsx
git commit -m "design: fonts, color palette, grain texture, Tailwind config"
```

---

## Task 3: Shared Components — Nav, Footer, Section Label

**Files:**
- Create: `src/components/nav.tsx`
- Create: `src/components/footer.tsx`
- Create: `src/components/section-label.tsx`

- [ ] **Step 1: Create the navigation component**

Use `impeccable:frontend-design` skill for this component. Design brief: minimal top bar navigation for an editorial personal brand site. Left side: "Jordan Bartlett" as a text logo linking to `/`. Right side: two text links — "Writing" (links to `/blog`) and "Connect" (links to `/connect`). No hamburger menu. On mobile, all three items stay visible (the two nav links are short enough). Cream background (#FAF7F2), ink text (#1a1a1a). Separated from content by a subtle bottom border (rgba(26,26,26,0.08)). Font: Instrument Sans (body font). The name on the left uses DM Serif Display (serif font). Minimal, warm, editorial feel.

Create `src/components/nav.tsx`:

```tsx
import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-border-light">
      <Link href="/" className="font-serif text-lg">
        Jordan Bartlett
      </Link>
      <div className="flex gap-6 text-sm text-muted">
        <Link href="/blog" className="hover:text-ink transition-colors">
          Writing
        </Link>
        <Link href="/connect" className="hover:text-ink transition-colors">
          Connect
        </Link>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Create the footer component**

Create `src/components/footer.tsx`:

```tsx
import Link from "next/link";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/jordanbartlett", external: true },
  { label: "GitHub", href: "https://github.com/jordanbartlett", external: true },
  { label: "Instagram", href: "https://instagram.com/jordanbartlett", external: true },
  { label: "Newsletter", href: "/blog", external: false },
];

export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-16 border-t border-border-light">
      <div className="max-w-prose mx-auto flex flex-col sm:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-subtle mb-4">
            Find Me
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-ink transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
        <p className="text-sm text-subtle">jordan@jordanbartlett.co</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Create the section label component**

Create `src/components/section-label.tsx`:

```tsx
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-subtle mb-8">
      {children}
    </p>
  );
}
```

- [ ] **Step 4: Wire nav and footer into root layout**

Update `src/app/layout.tsx` — add the Nav and Footer imports and render them wrapping `{children}`:

Add imports at the top:
```tsx
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
```

Update the body contents:
```tsx
<body className="bg-cream text-ink font-sans antialiased">
  <Nav />
  <main>{children}</main>
  <Footer />
</body>
```

- [ ] **Step 5: Verify in browser**

```bash
npm run dev
```

Confirm nav and footer render correctly on `http://localhost:3000`. Stop server.

- [ ] **Step 6: Commit**

```bash
git add src/components/nav.tsx src/components/footer.tsx src/components/section-label.tsx src/app/layout.tsx
git commit -m "feat: nav, footer, and section label components"
```

---

## Task 4: Newsletter Signup Component

**Files:**
- Create: `src/components/newsletter-form.tsx`
- Create: `src/app/api/subscribe/route.ts`

The Beehiiv subscribe API requires the API key in the Authorization header, so we proxy through a Next.js API route to keep the key server-side.

- [ ] **Step 1: Create the API route for newsletter subscription**

Create `src/app/api/subscribe/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { error: "Email is required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    return NextResponse.json(
      { error: "Newsletter service is not configured" },
      { status: 500 }
    );
  }

  const response = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: "jordanbartlett.co",
        utm_medium: "website",
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("Beehiiv subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: response.status }
    );
  }

  return NextResponse.json({ success: true });
}
```

- [ ] **Step 2: Create the newsletter form component**

Use `impeccable:frontend-design` skill for this component. Design brief: inline email signup form for a newsletter called "Infrastructure of Belonging." Sits inside the hero section on a cream background. Single row on desktop: email input + "Subscribe" button. Stacks on mobile. Input has a light border, placeholder "your@email.com". Button uses terracotta (#C45D3E) background with cream text. Below the form: small microcopy text in subtle gray. Shows a success message after subscribing. Warm, editorial, minimal.

Create `src/components/newsletter-form.tsx`:

```tsx
"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-muted">
        You are in. Check your inbox for a welcome from Infrastructure of Belonging.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="px-4 py-2.5 border border-border-light rounded bg-white text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-terracotta transition-colors flex-1 sm:max-w-[280px]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-2.5 bg-terracotta text-cream text-sm rounded hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-terracotta">
          Something went wrong. Try again.
        </p>
      )}
      <p className="text-xs text-subtle">
        Join Infrastructure of Belonging. On building things that matter.
      </p>
    </form>
  );
}
```

- [ ] **Step 3: Verify the form renders**

```bash
npm run dev
```

Temporarily add `<NewsletterForm />` to `src/app/page.tsx` to confirm it renders. The actual subscribe won't work without env vars, but the UI should display correctly.

- [ ] **Step 4: Commit**

```bash
git add src/components/newsletter-form.tsx src/app/api/subscribe/route.ts
git commit -m "feat: newsletter signup form with Beehiiv API proxy"
```

---

## Task 5: Homepage — Full Editorial Scroll

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/data/currently.ts`

- [ ] **Step 1: Create the currently data file**

Create `src/data/currently.ts`:

```ts
export type CurrentlyItem = {
  text: string;
  link: string | null;
};

export const currently: CurrentlyItem[] = [
  { text: "Training for the South Downs Way 100 (June 2027)", link: null },
  { text: "Building AI systems for small teams", link: null },
  { text: "Writing Infrastructure of Belonging", link: "/blog" },
  {
    text: "Documenting Rett Set 100 on Instagram",
    link: "https://instagram.com/jordanbartlett",
  },
];
```

- [ ] **Step 2: Build the homepage**

Use `impeccable:frontend-design` skill for the full homepage. Design brief: editorial scroll personal brand homepage for Jordan Bartlett. Cream background with grain texture (already in globals.css). Sections flow top to bottom with generous vertical spacing (py-16 to py-20 between sections). Sections separated by subtle horizontal lines. Max content width 640px, centered. Typography-forward: DM Serif Display for headings (font-serif), Instrument Sans for body (font-sans). No photos. No cards. No grid layout. Vertical flow of connected narrative blocks.

The page has these sections in order:
1. Hero: Jordan's name (h1, serif, large), one-line descriptor, supporting sentence, inline newsletter signup form
2. "What I'm Building" section label, then three vertical blocks — DGW, Foster Greatness, Infrastructure of Belonging — each with a serif heading, body text in muted, and terracotta CTAs
3. "Currently" section label, then a list of current activities
4. Footer is already in the layout

CTAs are styled as text links with a bottom border in terracotta, with a right arrow (→). The DGW CTA links to `/connect?type=merchandise`. FG has two CTAs: "Partner with us" → `/connect?type=partnership` and "Donate" → external `https://fostergreatness.co/donate`. Newsletter CTA: "Read recent posts" → `/blog`.

Reference the JB Brand skill for copy direction and voice. Reference the JB Creative skill for tone. The copy will be refined later, but should follow Jordan's voice: direct, warm, grounded. No throat-clearing. No jargon. No em dashes.

Replace `src/app/page.tsx`:

```tsx
import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import { SectionLabel } from "@/components/section-label";
import { currently } from "@/data/currently";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 md:px-10 pt-20 pb-16 max-w-prose mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">
          Jordan Bartlett
        </h1>
        <p className="text-lg md:text-xl text-muted leading-relaxed mb-3">
          Builder. CTO. Writing Infrastructure of Belonging.
        </p>
        <p className="text-base text-muted leading-relaxed mb-8">
          Co-founder of Doing Good Works and Foster Greatness. Building at the
          intersection of commerce, community, and technology.
        </p>
        <NewsletterForm />
      </section>

      <div className="border-t border-border-light mx-6 md:mx-10" />

      {/* What I'm Building */}
      <section className="px-6 md:px-10 py-16 max-w-prose mx-auto">
        <SectionLabel>What I&apos;m Building</SectionLabel>

        {/* DGW */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl mb-3">
            Doing Good Works
          </h2>
          <p className="text-base text-muted leading-relaxed mb-4">
            A promotional products social enterprise and public benefit
            corporation. Every order funds Foster Greatness. Your branded merch
            budget becomes impact.
          </p>
          <Link
            href="/connect?type=merchandise"
            className="text-sm text-terracotta border-b border-terracotta hover:opacity-80 transition-opacity"
          >
            Book a call about branded merchandise →
          </Link>
        </div>

        {/* FG */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl mb-3">
            Foster Greatness
          </h2>
          <p className="text-base text-muted leading-relaxed mb-4">
            Lifelong community for current and former foster youth. 2,000+
            members. Lived experience-led. Free to join. No aging out.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/connect?type=partnership"
              className="text-sm text-terracotta border-b border-terracotta hover:opacity-80 transition-opacity"
            >
              Partner with us →
            </Link>
            <a
              href="https://fostergreatness.co/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-terracotta border-b border-terracotta hover:opacity-80 transition-opacity"
            >
              Donate →
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-serif text-2xl md:text-3xl mb-3">
            Infrastructure of Belonging
          </h2>
          <p className="text-base text-muted leading-relaxed mb-4">
            The newsletter. Belonging is not accidental. It is infrastructure.
            Infrastructure can be engineered. For builders and operators.
          </p>
          <Link
            href="/blog"
            className="text-sm text-terracotta border-b border-terracotta hover:opacity-80 transition-opacity"
          >
            Read recent posts →
          </Link>
        </div>
      </section>

      <div className="border-t border-border-light mx-6 md:mx-10" />

      {/* Currently */}
      <section className="px-6 md:px-10 py-16 max-w-prose mx-auto">
        <SectionLabel>Currently</SectionLabel>
        <ul className="space-y-3">
          {currently.map((item) => (
            <li key={item.text} className="text-base text-muted leading-relaxed">
              {item.link ? (
                item.link.startsWith("http") ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink transition-colors"
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    className="hover:text-ink transition-colors"
                  >
                    {item.text}
                  </Link>
                )
              ) : (
                item.text
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
```

- [ ] **Step 3: Verify the full homepage in browser**

```bash
npm run dev
```

Confirm all sections render correctly at `http://localhost:3000`. Check mobile responsiveness by resizing the browser window. Stop server.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/data/currently.ts
git commit -m "feat: homepage editorial scroll with all sections"
```

---

## Task 6: Beehiiv API Client and Blog Types

**Files:**
- Create: `src/lib/beehiiv.ts`

- [ ] **Step 1: Create the Beehiiv API client with types**

Create `src/lib/beehiiv.ts`:

```ts
export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  publishedAt: string;
  excerpt: string;
  content: string;
  thumbnailUrl: string | null;
  webUrl: string;
  readingTime: number;
};

type BeehiivPost = {
  id: string;
  title: string;
  subtitle: string | null;
  slug: string;
  publish_date: number;
  preview_text: string;
  meta_default_description: string | null;
  thumbnail_url: string | null;
  web_url: string;
  content: {
    free: {
      web: string;
    };
  };
};

type BeehiivListResponse = {
  data: BeehiivPost[];
  total_results: number;
  total_pages: number;
  page: number;
  limit: number;
};

type BeehiivSingleResponse = {
  data: BeehiivPost;
};

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 250));
}

function mapPost(post: BeehiivPost): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    subtitle: post.subtitle,
    publishedAt: new Date(post.publish_date * 1000).toISOString(),
    excerpt: post.meta_default_description || post.preview_text || "",
    content: post.content?.free?.web || "",
    thumbnailUrl: post.thumbnail_url,
    webUrl: post.web_url,
    readingTime: estimateReadingTime(post.content?.free?.web || ""),
  };
}

function getConfig() {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    throw new Error("Beehiiv environment variables are not configured");
  }

  return { apiKey, publicationId };
}

export async function getPosts(page = 1, limit = 10): Promise<{
  posts: BlogPost[];
  totalPages: number;
}> {
  const { apiKey, publicationId } = getConfig();

  const params = new URLSearchParams({
    status: "confirmed",
    "expand[]": "free_web_content",
    order_by: "publish_date",
    direction: "desc",
    page: String(page),
    limit: String(limit),
  });

  const response = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/posts?${params}`,
    {
      headers: { Authorization: `Bearer ${apiKey}` },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(`Beehiiv API error: ${response.status}`);
  }

  const data: BeehiivListResponse = await response.json();

  return {
    posts: data.data.map(mapPost),
    totalPages: data.total_pages,
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { apiKey, publicationId } = getConfig();

  const params = new URLSearchParams({
    status: "confirmed",
    "expand[]": "free_web_content",
    "slugs[]": slug,
  });

  const response = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/posts?${params}`,
    {
      headers: { Authorization: `Bearer ${apiKey}` },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(`Beehiiv API error: ${response.status}`);
  }

  const data: BeehiivListResponse = await response.json();

  if (data.data.length === 0) {
    return null;
  }

  return mapPost(data.data[0]);
}

export async function getAllSlugs(): Promise<string[]> {
  const { apiKey, publicationId } = getConfig();
  const slugs: string[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const params = new URLSearchParams({
      status: "confirmed",
      order_by: "publish_date",
      direction: "desc",
      page: String(page),
      limit: "100",
    });

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/posts?${params}`,
      {
        headers: { Authorization: `Bearer ${apiKey}` },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`Beehiiv API error: ${response.status}`);
    }

    const data: BeehiivListResponse = await response.json();
    slugs.push(...data.data.map((post) => post.slug));
    totalPages = data.total_pages;
    page++;
  }

  return slugs;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/beehiiv.ts
git commit -m "feat: Beehiiv API client with typed blog post mapping"
```

---

## Task 7: Blog Index Page

**Files:**
- Create: `src/components/blog-card.tsx`
- Create: `src/app/blog/page.tsx`

- [ ] **Step 1: Create the blog card component**

Use `impeccable:frontend-design` skill. Design brief: minimal blog post preview card for an editorial site. No actual card chrome (no borders, no shadows, no background). Just a title (serif font, linked), date in subtle gray, and a one-line excerpt in muted. Generous vertical spacing between cards. The title is the only interactive element. Terracotta color on hover. Cream background. Think literary magazine table of contents.

Create `src/components/blog-card.tsx`:

```tsx
import Link from "next/link";
import type { BlogPost } from "@/lib/beehiiv";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="py-6">
      <p className="text-xs text-subtle mb-2">
        {formatDate(post.publishedAt)} · {post.readingTime} min read
      </p>
      <Link href={`/blog/${post.slug}`}>
        <h2 className="font-serif text-xl md:text-2xl mb-2 hover:text-terracotta transition-colors">
          {post.title}
        </h2>
      </Link>
      {post.excerpt && (
        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      )}
    </article>
  );
}
```

- [ ] **Step 2: Create the blog index page**

Create `src/app/blog/page.tsx`:

```tsx
import type { Metadata } from "next";
import { getPosts } from "@/lib/beehiiv";
import { BlogCard } from "@/components/blog-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Infrastructure of Belonging. On building things that matter, technology for social impact, and scaling yourself before scaling headcount.",
};

export const revalidate = 3600;

export default async function BlogPage() {
  const { posts } = await getPosts(1, 20);

  return (
    <div className="px-6 md:px-10 py-16 max-w-prose mx-auto">
      <SectionLabel>Writing</SectionLabel>
      <h1 className="font-serif text-3xl md:text-4xl mb-3">
        Infrastructure of Belonging
      </h1>
      <p className="text-base text-muted leading-relaxed mb-12">
        On building things that matter, technology for social impact, and
        scaling yourself before scaling headcount.
      </p>

      {posts.length > 0 ? (
        <div className="divide-y divide-border-light">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-muted">Posts are on their way. Subscribe to be the first to know.</p>
      )}

      <div className="border-t border-border-light mt-12 pt-12">
        <p className="text-sm text-muted mb-4">
          Get new posts delivered to your inbox.
        </p>
        <NewsletterForm />
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/blog-card.tsx src/app/blog/page.tsx
git commit -m "feat: blog index page with Beehiiv posts"
```

---

## Task 8: Blog Post Page

**Files:**
- Create: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Create the blog post page with dynamic metadata**

Create `src/app/blog/[slug]/page.tsx`:

```tsx
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/beehiiv";
import { NewsletterForm } from "@/components/newsletter-form";

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.thumbnailUrl && {
        images: [{ url: post.thumbnailUrl, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.thumbnailUrl && { images: [post.thumbnailUrl] }),
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="px-6 md:px-10 py-16 max-w-prose mx-auto">
      <Link
        href="/blog"
        className="text-sm text-subtle hover:text-muted transition-colors mb-8 inline-block"
      >
        ← All posts
      </Link>

      <header className="mb-12">
        <h1 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-sm text-subtle">
          {formatDate(post.publishedAt)} · {post.readingTime} min read
        </p>
      </header>

      <div
        className="prose prose-neutral max-w-none
          prose-headings:font-serif prose-headings:font-normal
          prose-a:text-terracotta prose-a:no-underline hover:prose-a:opacity-80
          prose-p:text-muted prose-p:leading-relaxed
          prose-li:text-muted
          prose-blockquote:border-terracotta prose-blockquote:text-muted
          prose-strong:text-ink
          prose-img:rounded"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="border-t border-border-light mt-16 pt-12">
        <p className="text-sm text-muted mb-4">
          Get new posts delivered to your inbox.
        </p>
        <NewsletterForm />
      </div>
    </article>
  );
}
```

- [ ] **Step 2: Install Tailwind typography plugin**

The `prose` classes require `@tailwindcss/typography`:

```bash
npm install -D @tailwindcss/typography
```

Add the plugin to `tailwind.config.ts` — update the `plugins` array:

```ts
plugins: [require("@tailwindcss/typography")],
```

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/\[slug\]/page.tsx tailwind.config.ts package.json package-lock.json
git commit -m "feat: blog post page with Beehiiv content and typography"
```

---

## Task 9: Contact Form with Supabase

**Files:**
- Create: `src/lib/supabase.ts`
- Create: `src/app/connect/actions.ts`
- Create: `src/components/contact-form.tsx`
- Create: `src/app/connect/page.tsx`

- [ ] **Step 0: Create the Supabase table**

This step is done in the Supabase dashboard (SQL Editor), not in code:

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

-- RLS: anonymous can insert, authenticated can read
alter table contact_submissions enable row level security;

create policy "Allow anonymous inserts"
  on contact_submissions for insert
  to anon
  with check (true);

create policy "Allow authenticated reads"
  on contact_submissions for select
  to authenticated
  using (true);
```

Run this SQL in the Supabase dashboard before proceeding. Confirm the table appears in the Table Editor.

- [ ] **Step 1: Create the Supabase client**

Create `src/lib/supabase.ts`:

```ts
import { createClient } from "@supabase/supabase-js";

export function createServerClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Supabase environment variables are not configured");
  }

  return createClient(url, key);
}
```

- [ ] **Step 2: Create the server action**

Create `src/app/connect/actions.ts`:

```ts
"use server";

import { createServerClient } from "@/lib/supabase";

export type FormState = {
  success: boolean;
  error: string | null;
};

const INQUIRY_TYPES = ["merchandise", "partnership", "general"] as const;

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const inquiryType = formData.get("inquiry_type") as string;
  const notes = formData.get("notes") as string;

  if (!name || !email || !company || !inquiryType) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!INQUIRY_TYPES.includes(inquiryType as (typeof INQUIRY_TYPES)[number])) {
    return { success: false, error: "Invalid inquiry type." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const supabase = createServerClient();
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      company,
      inquiry_type: inquiryType,
      notes: notes || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: "Something went wrong. Please try again." };
    }

    return { success: true, error: null };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
```

- [ ] **Step 3: Create the contact form component**

Use `impeccable:frontend-design` skill. Design brief: contact form on a cream background for a personal brand site. Fields: Name, Email, Company (all text inputs, required), Inquiry Type (three radio buttons: Branded Merchandise, Corporate Partnership, General), Notes (textarea, optional). Submit button in terracotta. The form should pre-select the inquiry type based on a `type` query parameter. Clean, generous spacing between fields. Labels in subtle gray uppercase. Inputs with light borders. Shows success message after submission. Error messages in terracotta. Warm, editorial feel.

Create `src/components/contact-form.tsx`:

```tsx
"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactForm, type FormState } from "@/app/connect/actions";

const inquiryTypes = [
  { value: "merchandise", label: "Branded Merchandise" },
  { value: "partnership", label: "Corporate Partnership" },
  { value: "general", label: "General" },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  const defaultType = inquiryTypes.find((t) => t.value === typeParam)
    ? typeParam
    : "general";

  const [state, formAction, pending] = useActionState<FormState, FormData>(
    submitContactForm,
    { success: false, error: null }
  );

  if (state.success) {
    return (
      <div className="py-8">
        <h2 className="font-serif text-2xl mb-3">Thank you</h2>
        <p className="text-muted">
          Your message has been received. I will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <p className="text-sm text-terracotta">{state.error}</p>
      )}

      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-widest text-subtle mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 border border-border-light rounded bg-white text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-terracotta transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-widest text-subtle mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 border border-border-light rounded bg-white text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-terracotta transition-colors"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-xs uppercase tracking-widest text-subtle mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-2.5 border border-border-light rounded bg-white text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-terracotta transition-colors"
        />
      </div>

      <fieldset>
        <legend className="text-xs uppercase tracking-widest text-subtle mb-3">
          What can I help with?
        </legend>
        <div className="space-y-2">
          {inquiryTypes.map((type) => (
            <label key={type.value} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="inquiry_type"
                value={type.value}
                defaultChecked={type.value === defaultType}
                className="accent-terracotta"
              />
              <span className="text-sm text-muted">{type.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="notes" className="block text-xs uppercase tracking-widest text-subtle mb-2">
          Notes <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full px-4 py-2.5 border border-border-light rounded bg-white text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-terracotta transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="px-6 py-2.5 bg-terracotta text-cream text-sm rounded hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
```

- [ ] **Step 4: Create the connect page**

Create `src/app/connect/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Get in touch about branded merchandise, corporate partnerships, or anything else.",
};

export default function ConnectPage() {
  return (
    <div className="px-6 md:px-10 py-16 max-w-prose mx-auto">
      <h1 className="font-serif text-3xl md:text-4xl mb-3">
        Let&apos;s connect
      </h1>
      <p className="text-base text-muted leading-relaxed mb-12">
        Whether you are looking for branded merchandise through Doing Good
        Works or exploring a corporate partnership with Foster Greatness, this
        is the place to start.
      </p>

      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
```

Note: `Suspense` wraps `ContactForm` because `useSearchParams()` requires it in the App Router.

- [ ] **Step 5: Verify the form renders**

```bash
npm run dev
```

Open `http://localhost:3000/connect`. Confirm the form renders. Test `http://localhost:3000/connect?type=merchandise` to confirm the radio pre-selects. Submission will fail without Supabase configured, which is expected. Stop server.

- [ ] **Step 6: Commit**

```bash
git add src/lib/supabase.ts src/app/connect/actions.ts src/components/contact-form.tsx src/app/connect/page.tsx
git commit -m "feat: contact form with Supabase server action"
```

---

## Task 10: SEO — Structured Data, llm.txt, Sitemap

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/app/llm.txt/route.ts`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add structured data to the homepage**

Add a JSON-LD script to `src/app/page.tsx`. Add this at the top of the component's return, before the first `<section>`:

```tsx
import Script from "next/script";
```

Add at the beginning of the return JSX, inside the outer `<div>`:

```tsx
<Script
  id="structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jordan Bartlett",
      url: "https://jordanbartlett.co",
      jobTitle: "CTO & Co-Founder",
      description:
        "Builder, CTO, and co-founder of Doing Good Works and Foster Greatness.",
      worksFor: [
        {
          "@type": "Organization",
          name: "Doing Good Works",
          url: "https://doinggoodworks.com",
          description:
            "Promotional products social enterprise and public benefit corporation.",
        },
        {
          "@type": "Organization",
          name: "Foster Greatness",
          url: "https://fostergreatness.co",
          description:
            "Lifelong community for current and former foster youth.",
        },
      ],
      sameAs: [
        "https://linkedin.com/in/jordanbartlett",
        "https://github.com/jordanbartlett",
        "https://instagram.com/jordanbartlett",
      ],
    }),
  }}
/>
```

- [ ] **Step 2: Create the /llm.txt route**

Create `src/app/llm.txt/route.ts`:

```ts
export async function GET() {
  const content = `# jordanbartlett.co

## About
Jordan Bartlett is a builder, CTO, and co-founder of two organizations:

- Doing Good Works (DGW Branded): A promotional products social enterprise and public benefit corporation. Full-service branded merchandise. Every order funds Foster Greatness.
- Foster Greatness: A 501(c)(3) nonprofit creating lifelong community for current and former foster youth. 2,000+ members nationwide.

Jordan writes Infrastructure of Belonging, a newsletter on building things that matter at the intersection of technology, community, and commerce.

## Pages
- / — Homepage
- /blog — Newsletter archive and blog posts
- /connect — Contact form for branded merchandise inquiries, corporate partnerships, and general inquiries

## Contact
- Email: jordan@jordanbartlett.co
- LinkedIn: linkedin.com/in/jordanbartlett
- GitHub: github.com/jordanbartlett

## Related Sites
- doinggoodworks.com — Doing Good Works (branded merchandise)
- fostergreatness.co — Foster Greatness (community platform)
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
```

- [ ] **Step 3: Add robots and sitemap metadata to root layout**

Update the `metadata` export in `src/app/layout.tsx` — add these fields to the existing metadata object:

```ts
robots: {
  index: true,
  follow: true,
},
```

Create `src/app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/beehiiv";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugs();

  const blogPosts = slugs.map((slug) => ({
    url: `https://jordanbartlett.co/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
  }));

  return [
    {
      url: "https://jordanbartlett.co",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: "https://jordanbartlett.co/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://jordanbartlett.co/connect",
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    ...blogPosts,
  ];
}
```

Create `src/app/robots.ts`:

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jordanbartlett.co/sitemap.xml",
  };
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/app/llm.txt/route.ts src/app/layout.tsx src/app/sitemap.ts src/app/robots.ts
git commit -m "feat: structured data, llm.txt, sitemap, and robots.txt"
```

---

## Task 11: Final Verification and Polish

**Files:**
- No new files. Verification and minor fixes only.

- [ ] **Step 1: Run the build**

```bash
npm run build
```

Expected: Build succeeds. The blog pages will fail if Beehiiv env vars are not set. To build without them, temporarily handle the missing config gracefully — the `getConfig()` function in `src/lib/beehiiv.ts` already throws, so the build will skip those pages and they will render on-demand via ISR.

If the build fails due to missing env vars, add a check in `getPosts`, `getPostBySlug`, and `getAllSlugs` that returns empty results when env vars are missing. This allows the build to succeed without Beehiiv configured:

In `getPosts`, wrap the body:
```ts
if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
  return { posts: [], totalPages: 0 };
}
```

In `getPostBySlug`, wrap the body:
```ts
if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
  return null;
}
```

In `getAllSlugs`, wrap the body:
```ts
if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
  return [];
}
```

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

Fix any lint errors that appear.

- [ ] **Step 3: Test all routes manually**

```bash
npm run dev
```

Verify each route:
- `http://localhost:3000` — homepage renders all sections
- `http://localhost:3000/blog` — blog index renders (empty state if no env vars)
- `http://localhost:3000/connect` — contact form renders
- `http://localhost:3000/connect?type=merchandise` — radio pre-selects
- `http://localhost:3000/connect?type=partnership` — radio pre-selects
- `http://localhost:3000/llm.txt` — plain text content appears

Test mobile responsiveness by resizing to 375px width.

- [ ] **Step 4: Verify accessibility**

Check in browser dev tools:
- All headings follow proper hierarchy (h1 → h2)
- Form inputs have associated labels
- Color contrast passes WCAG AA (cream background + ink text = high contrast)
- Tab navigation works through nav, forms, and links

- [ ] **Step 5: Commit any fixes**

```bash
git add -A
git commit -m "fix: build fixes and polish"
```

---

## Task 12: Vercel Deployment Setup

**Files:**
- Create: `vercel.json` (optional, only if needed)

- [ ] **Step 1: Confirm Vercel CLI is available**

```bash
npx vercel --version
```

If not installed, install globally:
```bash
npm install -g vercel
```

- [ ] **Step 2: Link the project to Vercel**

```bash
npx vercel link
```

Follow the prompts to link to your Vercel account and create the project.

- [ ] **Step 3: Set environment variables on Vercel**

```bash
npx vercel env add BEEHIIV_API_KEY production
npx vercel env add BEEHIIV_PUBLICATION_ID production
npx vercel env add SUPABASE_URL production
npx vercel env add SUPABASE_SERVICE_ROLE_KEY production
```

Enter the real values when prompted.

- [ ] **Step 4: Deploy**

```bash
npx vercel --prod
```

Expected: Production deployment succeeds. Verify the live site at the Vercel URL.

- [ ] **Step 5: Configure custom domain**

In the Vercel dashboard, add `jordanbartlett.co` as a custom domain. Update Cloudflare DNS to point to Vercel's nameservers or add the required CNAME/A records.

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "chore: deployment configuration"
```
