"use client";

import Link from "next/link";
import { useState } from "react";

import { IconApps, IconDevices, IconNetwork, IconOS } from "@/components/category-icons";
import { EntryCard } from "@/components/entry-card";
import { NetworkApproachCard } from "@/components/network-approach-card";
import { PartnerTips } from "@/components/partner-tips";
import { getCopy } from "@/lib/copy";
import { localizeHref, type Locale } from "@/lib/locale";
import { getEntriesByCategory, type Entry } from "@/data/entries";
import {
  getNetworkApproaches,
  getNetworkGuidesByApproach,
  type NetworkApproach
} from "@/data/network";

const quickPicks = [
  { href: "/os/ios", icon: "🍎" },
  { href: "/os/android", icon: "🤖" },
  { href: "/devices/tablet", icon: "📋" },
  { href: "/devices/laptop", icon: "💻" },
  { href: "/network", icon: "📶" }
];

function filterEntries(entries: Entry[], query: string) {
  if (!query.trim()) {
    return entries;
  }
  const normalized = query.trim().toLowerCase();
  return entries.filter((entry) => entry.name.toLowerCase().includes(normalized));
}

function filterNetworkApproaches(approaches: NetworkApproach[], query: string, locale: Locale) {
  if (!query.trim()) {
    return approaches;
  }
  const normalized = query.trim().toLowerCase();
  return approaches.filter((approach) => {
    const guideNames = getNetworkGuidesByApproach(approach.id, locale)
      .map((guide) => guide.name)
      .join(" ")
      .toLowerCase();
    const haystack = `${approach.name} ${approach.description} ${guideNames}`.toLowerCase();
    return haystack.includes(normalized);
  });
}

export function HomeDirectory({ locale = "en" }: { locale?: Locale }) {
  const [query, setQuery] = useState("");
  const copy = getCopy(locale);

  const apps = filterEntries(getEntriesByCategory("apps", locale), query);
  const operatingSystems = filterEntries(getEntriesByCategory("os", locale), query);
  const devices = filterEntries(getEntriesByCategory("devices", locale), query);
  const networks = filterNetworkApproaches(getNetworkApproaches(locale), query, locale);
  const hasResults =
    apps.length > 0 || operatingSystems.length > 0 || devices.length > 0 || networks.length > 0;

  return (
    <div className="page-shell py-12 sm:py-16" lang={locale}>
      <div className="space-y-14 sm:space-y-20">
        {/* HERO ------------------------------------------------------ */}
        <section className="relative overflow-hidden rounded-[28px] border border-paper-line bg-white px-6 py-12 shadow-soft sm:px-10 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-100 opacity-60 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-brand-100 opacity-50 blur-3xl"
          />
          <div className="relative max-w-3xl space-y-6">
            <p className="eyebrow">{copy.home.eyebrow}</p>
            <h1 className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-paper-ink sm:text-[56px]">
              {copy.home.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-paper-ink/80 sm:text-xl">
              {copy.home.subtitle}
            </p>
            <div className="grid grid-cols-2 gap-3 pt-4 lg:grid-cols-5">
              {quickPicks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href.startsWith("http") ? item.href : localizeHref(item.href, locale)}
                  className="card card-hover flex min-h-[80px] items-center gap-3 px-4 py-3 text-left text-[15px] font-medium text-paper-ink no-underline"
                  style={{ textDecoration: "none" }}
                >
                  <span className="text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="leading-5">{copy.home.quickPicks[index]}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEARCH ---------------------------------------------------- */}
        <section className="space-y-3">
          <label
            htmlFor="directory-search"
            className="block font-display text-2xl font-semibold tracking-tight text-paper-ink"
          >
            {copy.home.searchLabel}
          </label>
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-lg"
            >
              🔍
            </span>
            <input
              id="directory-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.home.searchPlaceholder}
              className="w-full rounded-full border border-paper-line bg-white py-4 pl-14 pr-5 text-base text-paper-ink shadow-soft outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
            />
          </div>
        </section>

        {!hasResults ? (
          <section className="card px-6 py-5 text-paper-ink/80">
            {copy.home.noResults}
          </section>
        ) : null}

        {/* PARENT PARTNERSHIP TIPS ----------------------------------- */}
        <PartnerTips locale={locale} />

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
    <section id={id} className="scroll-mt-24 space-y-6">
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
