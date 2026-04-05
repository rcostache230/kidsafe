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
  return getEntriesForStaticParams("os");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry("os", slug, "ro");

  if (!entry) {
    return {
      title: "Pagina nu a fost gasita | Digital Parents"
    };
  }

  return createEntryMetadata(entry, "ro");
}

export default async function RomanianOperatingSystemPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntry("os", slug, "ro");

  if (!entry) {
    notFound();
  }

  return <EntryPage entry={entry} locale="ro" />;
}
