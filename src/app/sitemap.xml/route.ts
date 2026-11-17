import { absoluteUrl } from "@/lib/site-identity";

export const dynamic = "force-static";

export function GET() {
  const sitemaps = ["/guide-sitemap.xml", "/blog/sitemap-0.xml"];
  const entries = sitemaps.map((path) => `  <sitemap><loc>${absoluteUrl(path)}</loc></sitemap>`);
  return new Response(
    ['<?xml version="1.0" encoding="UTF-8"?>', '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...entries, '</sitemapindex>'].join("\n"),
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
}
