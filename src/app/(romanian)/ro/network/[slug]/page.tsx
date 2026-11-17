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
  const guide = getNetworkGuide(slug, "ro");

  if (!guide) {
    return {
      title: "Pagina nu a fost gasita | Digital Parents"
    };
  }

  return createNetworkGuideMetadata(guide, "ro");
}

export default async function RomanianNetworkPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getNetworkGuide(slug, "ro");

  if (!guide) {
    notFound();
  }

  return <NetworkGuidePage guide={guide} locale="ro" />;
}
