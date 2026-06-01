import type { NextConfig } from "next";

/**
 * Digital Parents — Next.js configuration.
 *
 * Blog architecture
 * -----------------
 * The Astro blog under `apps/blog` builds static HTML/CSS/JS into
 * `public/blog/` (see apps/blog/astro.config.mjs). Anything in
 * `public/` is served by Next.js as-is. The rewrites below map clean
 * blog URLs such as `/blog`, `/blog/<post>` and `/blog/ro/<post>` to
 * Astro's generated `index.html` files while keeping real static files
 * such as `/blog/rss.xml` and hashed assets untouched.
 *
 * If we ever split the blog onto a separate origin (Cloudflare Pages,
 * a subdomain), swap the static-output approach for the rewrite below.
 */
const BLOG_ORIGIN = process.env.BLOG_ORIGIN; // e.g. https://blog-prod.example.com

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    if (!BLOG_ORIGIN) {
      return {
        afterFiles: [
          { source: "/blog", destination: "/blog/index.html" },
          { source: "/blog/:path*", destination: "/blog/:path*/index.html" }
        ]
      };
    }
    // Optional: proxy /blog/* to an external Astro deployment.
    return [
      { source: "/blog", destination: `${BLOG_ORIGIN}/blog` },
      { source: "/blog/:path*", destination: `${BLOG_ORIGIN}/blog/:path*` }
    ];
  },
  async headers() {
    // Long-cache the blog's hashed assets, but keep HTML revalidatable so
    // newly published posts show up immediately.
    return [
      {
        source: "/blog/_assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ]
      },
      {
        source: "/blog/:path*.html",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" }
        ]
      }
    ];
  }
};

export default nextConfig;
