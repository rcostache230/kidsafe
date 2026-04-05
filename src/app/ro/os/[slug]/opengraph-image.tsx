import { ImageResponse } from "next/og";

import { getEntry } from "@/data/entries";
import { EntryOgCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

type ImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const alt = "Previzualizare ghid sistem de operare Digital Parents";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = "force-static";
export const dynamicParams = false;

export default async function RomanianOpenGraphImage({ params }: ImageProps) {
  const { slug } = await params;
  const entry = getEntry("os", slug, "ro");

  if (!entry) {
    return new ImageResponse(<div>Not found</div>, {
      ...OG_SIZE
    });
  }

  return new ImageResponse(<EntryOgCard entry={entry} locale="ro" />, {
    ...OG_SIZE
  });
}
