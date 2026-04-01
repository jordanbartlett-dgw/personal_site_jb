import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/beehiiv";
import { NewsletterForm } from "@/components/newsletter-form";

export const revalidate = 1800;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
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
        <Link
          href="/blog"
          className="inline-block mt-8 text-sm text-terracotta border-b border-terracotta hover:opacity-80 transition-opacity"
        >
          Read more posts →
        </Link>
      </div>
    </article>
  );
}
