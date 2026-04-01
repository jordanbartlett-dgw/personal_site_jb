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

export const revalidate = 1800;

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
        <p className="text-muted">
          Posts are on their way. Subscribe to be the first to know.
        </p>
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
