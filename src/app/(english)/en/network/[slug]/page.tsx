import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NetworkGuidePage } from "@/components/network-guide-page";
import { getNetworkGuide, getNetworkGuideStaticParams } from "@/data/network";
import { createNetworkGuideMetadata } from "@/lib/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getNetworkGuideStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getNetworkGuide(slug);

  if (!guide) {
    return {
      title: "Not found | Digital Parents"
    };
  }

  return createNetworkGuideMetadata(guide, "en");
}

export default async function NetworkPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getNetworkGuide(slug);

  if (!guide) {
    notFound();
  }

  return <NetworkGuidePage guide={guide} locale="en" />;
}
