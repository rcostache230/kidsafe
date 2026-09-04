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
  const hasResults =
    apps.length > 0 || operatingSystems.length > 0 || devices.length > 0 || networks.length > 0;

  return (
    <div className="page-shell py-8 sm:py-12" lang={locale}>
      <div className="space-y-8 sm:space-y-10">
        <section className="space-y-6 border-b border-paper-line pb-8 sm:pb-10">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">{copy.home.eyebrow}</p>
            <h1 className="font-display text-[36px] font-semibold leading-[1.12] tracking-tight text-paper-ink sm:text-[50px]">
              {copy.home.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-paper-ink/80">
              {copy.home.subtitle}
            </p>
          </div>
          <div className="max-w-3xl space-y-2 pt-2">
            <label htmlFor="directory-search" className="block text-sm font-semibold text-paper-ink">
              {copy.home.searchLabel}
            </label>
            <div className="relative">
              <MagnifyingGlass aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-700" />
              <input id="directory-search" type="search" value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={copy.home.searchPlaceholder}
                className="w-full rounded-2xl border border-paper-line bg-white py-4 pl-12 pr-14 text-base text-paper-ink placeholder:text-paper-mute outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
              />
              {query ? <button type="button" onClick={() => setQuery("")} aria-label={copy.home.clearSearch}
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl text-paper-mute hover:bg-brand-50">
                <X aria-hidden="true" size={18} />
              </button> : null}
            </div>
            <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-paper-mute">
              {query.trim() ? `${resultCount} ${resultCount === 1 ? copy.home.resultLabel : copy.home.resultsLabel}` : ""}
            </p>
          </div>
        </section>

        {!query.trim() ? <div className="space-y-3">
          <p className="text-sm font-semibold text-paper-mute">{copy.home.quickStartLabel}</p>
          <div className="flex flex-wrap gap-2">
            {quickPicks.map((item, index) => (
              <Link key={item.href} href={localizeHref(item.href, locale)} className="btn-ghost">
                {copy.home.quickPicks[index]}<ArrowRight size={14} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div> : null}

        <nav aria-label={copy.home.browseLabel} className="flex flex-wrap gap-x-6 gap-y-2 border-b border-paper-line pb-4 text-sm font-semibold">
          {[
            ["apps", copy.footer.apps, apps.length],
            ["operating-systems", copy.footer.os, operatingSystems.length],
            ["devices", copy.footer.devices, devices.length],
            ["network", copy.footer.network, networks.length]
          ].filter(([, , count]) => Number(count) > 0).map(([id, label]) => (
            <a key={id} href={`#${id}`} className="inline-flex min-h-11 items-center">{label}</a>
          ))}
        </nav>

        {!hasResults ? <section className="card space-y-4 p-6 text-paper-mute">
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

        {!query.trim() ? <PartnerTips locale={locale} /> : null}

        {/* ABOUT ----------------------------------------------------- */}
        <section
          id="about"
          className="scroll-mt-24 overflow-hidden rounded-[28px] border border-paper-line bg-paper-100 px-6 py-10 sm:px-10 sm:py-12"
        >
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border border-paper-line bg-white font-display text-xl font-semibold text-brand-700 shadow-soft"
              aria-hidden="true"
            >
              RC
            </div>
            <div className="space-y-5">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-paper-ink">
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
          </div>
        </section>
      </div>
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
    <section id={id} className="scroll-mt-36 space-y-6 pt-2">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
          <Icon className="h-5 w-5" />
        </span>
        <div className="space-y-1.5">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper-ink">
            {title}
          </h2>
          <p className="text-paper-ink/75">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}
