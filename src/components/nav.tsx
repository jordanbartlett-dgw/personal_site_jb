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
