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
