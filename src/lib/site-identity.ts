export const SITE_NAME = "Digital Parents";
export const SITE_URL = "https://digitalparents.xyz";
export const SITE_AUTHOR = "Razvan Costache";
export const SITE_AUTHOR_URL = "https://razvancostache.com/";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).href;
}

export function breadcrumbData(
  items: ReadonlyArray<{ label: string; href?: string }>,
  currentUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ label, href }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
      item: absoluteUrl(href ?? currentUrl)
    }))
  };
}

export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
