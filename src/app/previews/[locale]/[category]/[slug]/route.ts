import { ImageResponse } from "next/og";
import { createElement } from "react";

import { getEntry } from "@/data/entries";
import { getNetworkGuide } from "@/data/network";
import { getPublishedGuides, guideCategories } from "@/lib/discovery";
import { EntryOgCard, NetworkGuideOgCard, OG_FONTS, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return (["ro", "en"] as const).flatMap((locale) =>
    getPublishedGuides(locale).map(({ category, slug }) => ({ locale, category, slug }))
  );
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string; category: string; slug: string }> }
) {
  const { locale, category: categoryParam, slug } = await params;
  const category = guideCategories.find((value) => value === categoryParam);
  if ((locale !== "ro" && locale !== "en") || !category) {
    return new Response(null, { status: 404 });
  }

  if (category === "network") {
    const guide = getNetworkGuide(slug, locale);
    if (!guide) return new Response(null, { status: 404 });
    return new ImageResponse(createElement(NetworkGuideOgCard, { guide, locale }), { ...OG_SIZE, fonts: OG_FONTS });
  }

  const entry = getEntry(category, slug, locale);
  if (!entry) return new Response(null, { status: 404 });
  return new ImageResponse(createElement(EntryOgCard, { entry, locale }), { ...OG_SIZE, fonts: OG_FONTS });
}
