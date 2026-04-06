import { ImageResponse } from "next/og";

import { NetworkGuideOgCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { getNetworkGuide } from "@/data/network";

type ImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const alt = "Previzualizare ghid retea de acasa Digital Parents";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = "force-static";
export const dynamicParams = false;

export default async function OpenGraphImage({ params }: ImageProps) {
  const { slug } = await params;
  const guide = getNetworkGuide(slug, "ro");

  if (!guide) {
    return new ImageResponse(<div>Not found</div>, {
      ...OG_SIZE
    });
  }

  return new ImageResponse(<NetworkGuideOgCard guide={guide} locale="ro" />, {
    ...OG_SIZE
  });
}
