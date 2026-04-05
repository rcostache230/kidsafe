import type { Metadata } from "next";

import { HomeDirectory } from "@/components/home-directory";
import { createHomeMetadata } from "@/lib/site";

export const metadata: Metadata = createHomeMetadata("ro");

export default function RomanianHomePage() {
  return <HomeDirectory locale="ro" />;
}
