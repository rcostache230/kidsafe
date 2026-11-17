import type { CollectionEntry } from "astro:content";

export function postSlug(post: CollectionEntry<"posts">) {
  return post.data.lang === "ro" ? post.id.replace(/^ro\//, "") : `en/${post.id}`;
}
