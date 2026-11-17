"use client";

import Link from "next/link";
import { useState } from "react";
import { MagnifyingGlass, ArrowRight, X } from "@phosphor-icons/react";

import { IconApps, IconDevices, IconNetwork, IconOS } from "@/components/category-icons";
import { EntryCard } from "@/components/entry-card";
import { NetworkApproachCard } from "@/components/network-approach-card";
import { PartnerTips } from "@/components/partner-tips";
import { getCopy } from "@/lib/copy";
import { creatorUrl, crossPromoCopy } from "@/lib/cross-promo";
import { localizeHref, type Locale } from "@/lib/locale";
import { getEntriesByCategory, type Entry } from "@/data/entries";
import {
  getNetworkApproaches,
  getNetworkGuidesByApproach,
  type NetworkApproach
} from "@/data/network";

const quickPicks = [
  { href: "/os/ios" },
  { href: "/os/android" },
  { href: "/devices/tablet" },
  { href: "/devices/laptop" },
  { href: "/network" }
];

function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function filterEntries(entries: Entry[], query: string) {
  if (!query.trim()) {
    return entries;
  }
  const normalized = normalizeSearch(query);
  return entries.filter((entry) => normalizeSearch(entry.name).includes(normalized));
}

function filterNetworkApproaches(approaches: NetworkApproach[], query: string, locale: Locale) {
  if (!query.trim()) {
    return approaches;
  }
  const normalized = normalizeSearch(query);
  return approaches.filter((approach) => {
    const guideNames = getNetworkGuidesByApproach(approach.id, locale)
      .map((guide) => guide.name)
      .join(" ")
      .toLowerCase();
    const haystack = `${approach.name} ${approach.description} ${guideNames}`.toLowerCase();
    return normalizeSearch(haystack).includes(normalized);
  });
}

export function HomeDirectory({ locale = "en" }: { locale?: Locale }) {
  const [query, setQuery] = useState("");
  const copy = getCopy(locale);

  const apps = filterEntries(getEntriesByCategory("apps", locale), query);
  const operatingSystems = filterEntries(getEntriesByCategory("os", locale), query);
  const devices = filterEntries(getEntriesByCategory("devices", locale), query);
  const networks = filterNetworkApproaches(getNetworkApproaches(locale), query, locale);
  const resultCount = apps.length + operatingSystems.length + devices.length + networks.length;
  const isSearching = Boolean(query.trim());
  const categories = [
    { id: "apps", label: copy.footer.apps, count: apps.length },
    { id: "operating-systems", label: copy.footer.os, count: operatingSystems.length },
    { id: "devices", label: copy.footer.devices, count: devices.length },
    { id: "network", label: copy.footer.network, count: networks.length }
  ].filter(({ count }) => count > 0);

  return (
    <div className="page-shell space-y-10 pb-12 sm:space-y-12 sm:pb-16" lang={locale}>
      <header className="directory-hero">
        <div>
          <div className="space-y-3">
            <p className="eyebrow">{copy.home.eyebrow}</p>
            <h1 className="page-title">{copy.home.title}</h1>
            <p className="page-lede">{copy.home.subtitle}</p>
          </div>

          <div className="mt-6 max-w-xl space-y-2 sm:mt-8">
            <label htmlFor="directory-search" className="block text-sm font-semibold">
              {copy.home.searchLabel}
            </label>
            <div className="relative">
              <MagnifyingGlass aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-700" />
              <input
                id="directory-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={copy.home.searchPlaceholder}
                className="directory-search"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label={copy.home.clearSearch}
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-paper-mute hover:bg-brand-50"
                >
                  <X aria-hidden="true" size={18} />
                </button>
              )}
            </div>
            <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-paper-mute">
              {isSearching ? `${resultCount} ${resultCount === 1 ? copy.home.resultLabel : copy.home.resultsLabel}` : ""}
            </p>
          </div>
        </div>

        {!isSearching && (
          <nav aria-label={copy.home.quickStartLabel} className="contents-panel directory-quick-start">
            <p className="eyebrow">{copy.home.quickStartLabel}</p>
            <ul>
              {quickPicks.map((item, index) => (
                <li key={item.href}>
                  <Link href={localizeHref(item.href, locale)}>
                    {copy.home.quickPicks[index]}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {categories.length > 0 && (
        <nav aria-label={copy.home.browseLabel} className="directory-nav">
          <p className="eyebrow">{copy.home.browseLabel}</p>
          <ul>
            {categories.map(({ id, label }) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </nav>
      )}

      {resultCount === 0 ? <section className="card space-y-4 p-6 text-paper-mute">
        <p>{copy.home.noResults}</p>
        <button type="button" className="btn-ghost" onClick={() => setQuery("")}>{copy.home.clearSearch}</button>
      </section> : null}

      {apps.length ? (
        <DirectorySection
          id="apps"
          Icon={IconApps}
          title={copy.home.sections.appsTitle}
          description={copy.home.sections.appsDescription}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} compact locale={locale} />
            ))}
          </div>
        </DirectorySection>
      ) : null}

      {operatingSystems.length ? (
        <DirectorySection
          id="operating-systems"
          Icon={IconOS}
          title={copy.home.sections.osTitle}
          description={copy.home.sections.osDescription}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {operatingSystems.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} locale={locale} />
            ))}
          </div>
        </DirectorySection>
      ) : null}

      {devices.length ? (
        <DirectorySection
          id="devices"
          Icon={IconDevices}
          title={copy.home.sections.devicesTitle}
          description={copy.home.sections.devicesDescription}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {devices.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} locale={locale} />
            ))}
          </div>
        </DirectorySection>
      ) : null}

      {networks.length ? (
        <DirectorySection
          id="network"
          Icon={IconNetwork}
          title={copy.home.sections.networkTitle}
          description={copy.home.sections.networkDescription}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {networks.map((approach) => (
              <NetworkApproachCard key={approach.id} approach={approach} locale={locale} />
            ))}
          </div>
        </DirectorySection>
      ) : null}

      {!isSearching ? <PartnerTips locale={locale} /> : null}

      <section id="about" className="card p-6 sm:p-8">
        <div className="max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            {copy.home.aboutTitle}
          </h2>
          <p className="text-paper-ink/85">{copy.home.aboutBodyOne}</p>
          <p className="text-paper-ink/85">{copy.home.aboutBodyTwo}</p>
          <div className="flex flex-wrap gap-3">
            <a href={creatorUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost no-underline">
              {crossPromoCopy[locale].creatorLink}
            </a>
            <a
              href="https://www.linkedin.com/in/rcostache/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost no-underline"
              style={{ textDecoration: "none" }}
            >
              {copy.home.linkedin}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function DirectorySection({
  id,
  Icon,
  title,
  description,
  children
}: {
  id: string;
  Icon: (props: { className?: string }) => React.JSX.Element;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="directory-section space-y-5">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-paper-line bg-white text-paper-ink">
          <Icon className="h-5 w-5" />
        </span>
        <div className="space-y-1.5">
          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="text-paper-ink/75">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}
