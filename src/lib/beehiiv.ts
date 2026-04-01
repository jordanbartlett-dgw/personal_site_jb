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

function cleanBeehiivHtml(html: string): string {
  // Extract content-blocks div if present (skip header, byline, social buttons)
  const contentMatch = html.match(
    /<div[^>]*id=["']content-blocks["'][^>]*>([\s\S]*)/i
  );
  let content = contentMatch ? contentMatch[1] : html;

  // Remove closing wrapper divs from the end
  content = content.replace(/(<\/div>\s*){1,5}$/, "");

  // Strip inline styles so Tailwind Typography controls presentation
  content = content.replace(/\s*style="[^"]*"/gi, "");

  // Strip Beehiiv CSS custom properties and embedded styles
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

  // Strip class attributes with Beehiiv-specific classes
  content = content.replace(/\s*class="[^"]*"/gi, "");

  return content.trim();
}

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
    content: cleanBeehiivHtml(post.content?.free?.web || ""),
    thumbnailUrl: post.thumbnail_url,
    webUrl: post.web_url,
    readingTime: estimateReadingTime(post.content?.free?.web || ""),
  };
}

export async function getPosts(page = 1, limit = 10): Promise<{
  posts: BlogPost[];
  totalPages: number;
}> {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    return { posts: [], totalPages: 0 };
  }

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
      next: { revalidate: 1800 },
    }
  );

  if (!response.ok) {
    throw new Error(`Beehiiv API error: ${response.status}`);
  }

  const data: BeehiivListResponse = await response.json();

  const now = Date.now();
  const posts = data.data
    .filter((post) => post.publish_date * 1000 <= now)
    .map(mapPost);

  return {
    posts,
    totalPages: data.total_pages,
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    return null;
  }

  const params = new URLSearchParams({
    status: "confirmed",
    "expand[]": "free_web_content",
    "slugs[]": slug,
  });

  const response = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/posts?${params}`,
    {
      headers: { Authorization: `Bearer ${apiKey}` },
      next: { revalidate: 1800 },
    }
  );

  if (!response.ok) {
    throw new Error(`Beehiiv API error: ${response.status}`);
  }

  const data: BeehiivListResponse = await response.json();

  const post = data.data[0];
  if (!post || post.publish_date * 1000 > Date.now()) {
    return null;
  }

  return mapPost(post);
}

export async function getAllSlugs(): Promise<string[]> {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    return [];
  }

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
        next: { revalidate: 1800 },
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
