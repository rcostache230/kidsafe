import type { Metadata } from "next";

import { NetworkOverview } from "@/components/network-overview";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = `Home Network & Router Controls | ${SITE_NAME}`;
const description =
  "Router, DNS, and ISP parental control guides that protect every device on your home network at once.";

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

export default async function NetworkOverviewPage({ searchParams }: PageProps) {
  const { approach } = await searchParams;

  return <NetworkOverview locale="en" initialApproach={approach} />;
}
