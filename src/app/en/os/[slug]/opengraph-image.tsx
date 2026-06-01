import { ImageResponse } from "next/og";

import { EntryOgCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { getEntry } from "@/data/entries";

type ImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const alt = "Digital Parents operating system guide preview";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = "force-static";
export const dynamicParams = false;

export default async function OpenGraphImage({ params }: ImageProps) {
  const { slug } = await params;
  const entry = getEntry("os", slug, "en");

  if (!entry) {
    return new ImageResponse(<div>Not found</div>, {
      ...OG_SIZE
    });
  }

  return new ImageResponse(<EntryOgCard entry={entry} locale="en" />, {
    ...OG_SIZE
  });
}
