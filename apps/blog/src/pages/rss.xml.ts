import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts", (entry) => !entry.data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
  );

  return rss({
    title: "Digital Parents — Articles",
    description:
      "Short, practical reads on raising kids in a connected world. EN + RO.",
    site: context.site ?? "https://digitalparents.xyz/blog",
    items: sorted.map((post) => {
      const path =
        post.data.lang === "ro"
          ? post.id.replace(/^ro\//, "")
          : `en/${post.id}`;

      return {
        title: post.data.title,
        pubDate: post.data.publishedAt,
        description: post.data.description,
        link: `/blog/${path}`,
        categories: post.data.tags
      };
    }),
    customData: `<language>en-us</language>`
  });
}
