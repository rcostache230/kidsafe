import type { ReactNode } from "react";

import { SiteDocument, defaultMetadata } from "../site-document";

export const metadata = defaultMetadata;

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
