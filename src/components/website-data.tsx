import type { Locale } from "@/lib/locale";
import { absoluteUrl, SITE_AUTHOR, SITE_AUTHOR_URL, SITE_NAME, SITE_URL } from "@/lib/site-identity";

import { JsonLd } from "./json-ld";

export function WebsiteData({ locale }: { locale: Locale }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    inLanguage: ["ro", "en"],
    creator: { "@type": "Person", name: SITE_AUTHOR, url: SITE_AUTHOR_URL },
    mainEntityOfPage: absoluteUrl(locale === "en" ? "/en" : "/")
  }} />;
}
