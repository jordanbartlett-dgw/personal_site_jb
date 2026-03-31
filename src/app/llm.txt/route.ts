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
