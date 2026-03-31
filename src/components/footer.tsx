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
