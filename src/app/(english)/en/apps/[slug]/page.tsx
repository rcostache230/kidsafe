import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EntryPage } from "@/components/entry-page";
import { getEntriesForStaticParams, getEntry } from "@/data/entries";
import { createEntryMetadata } from "@/lib/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getEntriesForStaticParams("apps");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry("apps", slug, "en");

  if (!entry) {
    return {
      title: "Not found | Digital Parents"
    };
  }

  return createEntryMetadata(entry, "en");
}

export default async function AppPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntry("apps", slug, "en");

  if (!entry) {
    notFound();
  }

  return <EntryPage entry={entry} locale="en" />;
}
