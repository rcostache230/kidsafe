import { ImageResponse } from "next/og";

import { HomeOgCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "Previzualizare homepage Digital Parents";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function RomanianOpenGraphImage() {
  return new ImageResponse(<HomeOgCard locale="ro" />, {
    ...OG_SIZE
  });
}
