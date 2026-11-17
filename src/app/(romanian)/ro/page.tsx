import type { Metadata } from "next";

import { WebsiteData } from "@/components/website-data";
import { HomeDirectory } from "@/components/home-directory";
import { createHomeMetadata } from "@/lib/site";

export const metadata: Metadata = createHomeMetadata("ro");

export default function RomanianHomePage() {
  return <>
    <WebsiteData locale="ro" />
    <HomeDirectory locale="ro" />
  </>;
}
