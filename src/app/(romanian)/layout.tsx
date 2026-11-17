import type { ReactNode } from "react";

import { SiteDocument, defaultMetadata } from "../site-document";

export const metadata = defaultMetadata;

export default function RomanianLayout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="ro">{children}</SiteDocument>;
}
