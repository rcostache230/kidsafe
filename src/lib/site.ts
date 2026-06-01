import type { Metadata } from "next";

import { getCopy } from "@/lib/copy";
import { defaultLocale, type Locale } from "@/lib/locale";
import { type Entry, getEntryHref } from "@/data/entries";

export const SITE_NAME = "Digital Parents";
export const SITE_URL = "https://digitalparents.xyz";
export const SITE_DESCRIPTION = getCopy(defaultLocale).metadata.siteDescription;
export const HOME_DESCRIPTION = getCopy(defaultLocale).metadata.homeDescription;

function trimDescription(text: string, maxLength = 155) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

export function createEntryMetadata(entry: Entry, locale: Locale = defaultLocale): Metadata {
  const copy = getCopy(locale);
  const title = `${entry.name} — ${copy.metadata.entryTitleSuffix} | ${SITE_NAME}`;
  const socialTitle = `${entry.name} — ${copy.metadata.entryTitleSuffix}`;
  const description = trimDescription(entry.summary || entry.description);
  const url = `${SITE_URL}${getEntryHref(entry, locale)}`;
  const imageUrl = `${url}/opengraph-image`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      title: socialTitle,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: socialTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl]
    }
  };
}

export function createHomeMetadata(locale: Locale = defaultLocale): Metadata {
  const copy = getCopy(locale);
  const homePath = locale === "en" ? "/en" : "";
  const imageUrl = `${SITE_URL}${homePath}/opengraph-image`;

  return {
    title: SITE_NAME,
    description: copy.metadata.homeDescription,
    alternates: {
      canonical: `${SITE_URL}${homePath}`
    },
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      title: copy.metadata.homeTitle,
      description: copy.metadata.homeDescription,
      url: `${SITE_URL}${homePath}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: copy.og.homeAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.homeTitle,
      description: copy.metadata.homeDescription,
      images: [imageUrl]
    }
  };
}
