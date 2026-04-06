import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NetworkGuidePage } from "@/components/network-guide-page";
import { getNetworkGuide, getNetworkGuideHref, getNetworkGuideStaticParams } from "@/data/network";
import { SITE_NAME, SITE_URL } from "@/lib/site";

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
      title: "Pagina nu a fost gasita | Digital Parents"
    };
  }

  const title = `${guide.name} | ${SITE_NAME}`;
  const description = guide.description;
  const url = `${SITE_URL}${getNetworkGuideHref(guide.slug, "ro")}`;
  const imageUrl = `${url}/opengraph-image`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      title,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export default async function RomanianNetworkPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getNetworkGuide(slug);

  if (!guide) {
    notFound();
  }

  return <NetworkGuidePage guide={guide} locale="ro" />;
}
