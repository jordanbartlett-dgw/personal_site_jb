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
