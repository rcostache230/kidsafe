import type { Metadata } from "next";

import { WebsiteData } from "@/components/website-data";
import { HomeDirectory } from "@/components/home-directory";
import { createHomeMetadata } from "@/lib/site";

export const metadata: Metadata = createHomeMetadata("en");

export default function HomePage() {
  return <>
    <WebsiteData locale="en" />
    <HomeDirectory locale="en" />
  </>;
}
