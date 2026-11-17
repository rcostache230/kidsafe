import { getSitePaths } from "@/lib/discovery";
import { absoluteUrl } from "@/lib/site-identity";

export const dynamic = "force-static";

export function GET() {
  const paths = [...getSitePaths("ro"), ...getSitePaths("en")];
  const entries = paths.map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`);
  return new Response(
    ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...entries, '</urlset>'].join("\n"),
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
}
