import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Single posts collection with a `lang` field. EN posts live at /blog/<slug>,
// RO posts at /blog/ro/<slug>. Tags are free-form. `featured` lifts a post
// to the top of the index.
const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(["en", "ro"]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default("Razvan Costache"),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts };
