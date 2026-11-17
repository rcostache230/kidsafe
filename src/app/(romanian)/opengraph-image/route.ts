import { ImageResponse } from "next/og";
import { createElement } from "react";

import { HomeOgCard, OG_FONTS, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(createElement(HomeOgCard, { locale: "ro" }), {
    ...OG_SIZE,
    fonts: OG_FONTS
  });
}
