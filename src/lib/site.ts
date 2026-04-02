import type { Metadata } from "next";

import { type Entry, getEntryHref } from "@/data/entries";

export const SITE_NAME = "Digital Parents";
export const SITE_URL = "https://digitalparents.xyz";
export const SITE_DESCRIPTION =
  "A static digital safety directory for parents covering devices, operating systems, and popular apps children use.";
export const HOME_DESCRIPTION =
  "Step-by-step digital safety guides for the apps, devices, and systems your child uses.";

function trimDescription(text: string, maxLength = 155) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

export function createEntryMetadata(entry: Entry): Metadata {
  const title = `${entry.name} — Digital Safety Guide for Parents | ${SITE_NAME}`;
  const socialTitle = `${entry.name} — Digital Safety Guide for Parents`;
  const description = trimDescription(entry.summary || entry.description);
  const url = `${SITE_URL}${getEntryHref(entry)}`;
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

export function createHomeMetadata(): Metadata {
  const imageUrl = `${SITE_URL}/opengraph-image`;

  return {
    title: SITE_NAME,
    description: HOME_DESCRIPTION,
    alternates: {
      canonical: SITE_URL
    },
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      title: "Your child's apps, devices, and settings — explained in plain language.",
      description: HOME_DESCRIPTION,
      url: SITE_URL,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Digital Parents homepage preview"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Your child's apps, devices, and settings — explained in plain language.",
      description: HOME_DESCRIPTION,
      images: [imageUrl]
    }
  };
}
