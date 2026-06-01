import type { Metadata } from "next";

import { HomeDirectory } from "@/components/home-directory";
import { createHomeMetadata } from "@/lib/site";

export const metadata: Metadata = createHomeMetadata("en");

export default function HomePage() {
  return <HomeDirectory locale="en" />;
}
