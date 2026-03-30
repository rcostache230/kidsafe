import type { Metadata } from "next";

import { HomeDirectory } from "@/components/home-directory";
import { createHomeMetadata } from "@/lib/site";

export const metadata: Metadata = createHomeMetadata();

export default function HomePage() {
  return <HomeDirectory />;
}
