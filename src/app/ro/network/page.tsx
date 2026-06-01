import type { Metadata } from "next";

import { NetworkOverview } from "@/components/network-overview";
import { getNetworkCopy } from "@/data/network";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const copy = getNetworkCopy("ro");
const title = `${copy.overviewTitle} | ${SITE_NAME}`;
const description = copy.overviewSubtitle;

type PageProps = {
  searchParams: Promise<{
    approach?: string;
  }>;
};

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/network`
  },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    title,
    description,
    url: `${SITE_URL}/network`
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default async function RomanianNetworkOverviewPage({ searchParams }: PageProps) {
  const { approach } = await searchParams;

  return <NetworkOverview locale="ro" initialApproach={approach} />;
}
