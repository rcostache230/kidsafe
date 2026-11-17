import type { Metadata } from "next";

import NotFoundGuide from "@/components/not-found-guide";

import { SiteDocument } from "./site-document";

export const metadata: Metadata = {
  title: "Pagină negăsită | Digital Parents",
  robots: { index: false }
};

export default function GlobalNotFound() {
  return <SiteDocument locale="ro"><NotFoundGuide /></SiteDocument>;
}
