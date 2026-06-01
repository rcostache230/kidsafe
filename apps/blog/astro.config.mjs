// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// The blog is built to `<repo>/public/blog` so the Next.js site at the
// repo root serves it directly at digitalparents.xyz/blog — no rewrite
// needed in production. Locally you can either:
//   - run `npm run dev` here on a separate port, or
//   - run `npm run build:blog` from repo root and let Next serve it.
export default defineConfig({
  site: "https://digitalparents.xyz",
  base: "/blog",
  trailingSlash: "ignore",
  outDir: "../../public/blog",
  build: {
    assets: "_assets"
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true
    }
  }
});
