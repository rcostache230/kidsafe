import { getEntriesByCategory, getEntryHref, type Category } from "@/data/entries";
import { getNetworkGuide, getNetworkGuideHref, getNetworkGuideStaticParams } from "@/data/network";

import { localizeHref, type Locale } from "./locale";

const entryCategories = ["apps", "devices", "os"] as const satisfies readonly Category[];
export const guideCategories = [...entryCategories, "network"] as const;

export function getPublishedGuides(locale: Locale) {
  const guides: Array<{ category: Category; slug: string; name: string; path: string }> = entryCategories.flatMap((category) => (
    getEntriesByCategory(category, locale).map(({ name, slug }) => ({
      category,
      slug,
      name,
      path: getEntryHref({ category, slug }, locale)
    }))
  ));

  for (const { slug } of getNetworkGuideStaticParams()) {
    const guide = getNetworkGuide(slug, locale);
    if (guide) {
      guides.push({
        category: "network",
        slug,
        name: guide.name,
        path: getNetworkGuideHref(slug, locale)
      });
    }
  }

  return guides;
}

export function getSitePaths(locale: Locale) {
  return [
    localizeHref("/", locale),
    localizeHref("/network", locale),
    ...getPublishedGuides(locale).map(({ path }) => path)
  ];
}
