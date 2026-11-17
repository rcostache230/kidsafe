import type { Metadata } from "next";

import { type Entry, getEntryHref } from "@/data/entries";
import { getNetworkCopy, getNetworkGuideHref, type NetworkGuide } from "@/data/network";
import { getCopy } from "@/lib/copy";

import { defaultLocale, localizeHref, type Locale } from "./locale";
import { absoluteUrl, SITE_NAME } from "./site-identity";

export { SITE_NAME, SITE_URL } from "./site-identity";

export const SITE_DESCRIPTION = getCopy(defaultLocale).metadata.siteDescription;
export const HOME_DESCRIPTION = getCopy(defaultLocale).metadata.homeDescription;

function trimDescription(text: string, maxLength = 155) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

function localizedMetadata({
  locale,
  path,
  title,
  description,
  imagePath,
  socialTitle = title,
  imageAlt = socialTitle
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  imagePath: string;
  socialTitle?: string;
  imageAlt?: string;
}): Metadata {
  const ro = absoluteUrl(localizeHref(path, "ro"));
  const en = absoluteUrl(localizeHref(path, "en"));
  const url = locale === "ro" ? ro : en;
  const imageUrl = absoluteUrl(imagePath);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ro, en, "x-default": ro }
    },
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      title: socialTitle,
      description,
      url,
      locale: locale === "ro" ? "ro_RO" : "en_US",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: imageAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl]
    }
  };
}

export function createEntryMetadata(entry: Entry, locale: Locale = defaultLocale): Metadata {
  const copy = getCopy(locale);
  const socialTitle = `${entry.name} — ${copy.metadata.entryTitleSuffix}`;
  return localizedMetadata({
    locale,
    path: getEntryHref(entry, "ro"),
    title: `${socialTitle} | ${SITE_NAME}`,
    description: trimDescription(entry.summary || entry.description),
    imagePath: `${getEntryHref(entry, locale)}/opengraph-image`,
    socialTitle
  });
}

export function createHomeMetadata(locale: Locale = defaultLocale): Metadata {
  const copy = getCopy(locale);
  const title = locale === "ro" ? "Ghiduri de siguranță digitală pentru părinți" : "Digital Safety Guides for Parents";
  return localizedMetadata({
    locale,
    path: "/",
    title: `${title} | ${SITE_NAME}`,
    description: copy.metadata.homeDescription,
    imagePath: localizeHref("/opengraph-image", locale),
    socialTitle: copy.metadata.homeTitle,
    imageAlt: copy.og.homeAlt
  });
}

export function createNetworkGuideMetadata(guide: NetworkGuide, locale: Locale): Metadata {
  return localizedMetadata({
    locale,
    path: getNetworkGuideHref(guide.slug, "ro"),
    title: `${guide.name} | ${SITE_NAME}`,
    description: guide.description,
    imagePath: `${getNetworkGuideHref(guide.slug, locale)}/opengraph-image`
  });
}

export function createNetworkOverviewMetadata(locale: Locale): Metadata {
  const copy = getNetworkCopy(locale);
  return localizedMetadata({
    locale,
    path: "/network",
    title: `${copy.overviewTitle} | ${SITE_NAME}`,
    description: copy.overviewSubtitle,
    imagePath: localizeHref("/opengraph-image", locale)
  });
}
