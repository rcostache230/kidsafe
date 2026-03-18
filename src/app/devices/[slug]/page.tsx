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
  return getEntriesForStaticParams("devices");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry("devices", slug);

  if (!entry) {
    return {
      title: "Not found | Digital Parents"
    };
  }

  return createEntryMetadata(entry);
}

export default async function DevicePage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntry("devices", slug);

  if (!entry) {
    notFound();
  }

  return <EntryPage entry={entry} />;
}
