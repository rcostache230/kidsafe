"use client";

import Link from "next/link";
import { useState } from "react";

import { IconApps, IconDevices, IconNetwork, IconOS } from "@/components/category-icons";
import { EntryCard } from "@/components/entry-card";
import { NetworkApproachCard } from "@/components/network-approach-card";
import { getCopy } from "@/lib/copy";
import { localizeHref, type Locale } from "@/lib/locale";
import { getEntriesByCategory, type Entry } from "@/data/entries";
import {
  getNetworkApproaches,
  getNetworkGuidesByApproach,
  type NetworkApproach
} from "@/data/network";

const quickPicks = [
  {
    href: "/os/ios",
    icon: "🍎"
  },
  {
    href: "/os/android",
    icon: "🤖"
  },
  {
    href: "/devices/tablet",
    icon: "📋"
  },
  {
    href: "/devices/laptop",
    icon: "💻"
  },
  {
    href: "https://digitalparents.xyz/network",
    icon: "📶"
  }
];

function filterEntries(entries: Entry[], query: string) {
  if (!query.trim()) {
    return entries;
  }

  const normalized = query.trim().toLowerCase();
  return entries.filter((entry) => entry.name.toLowerCase().includes(normalized));
}

function filterNetworkApproaches(approaches: NetworkApproach[], query: string) {
  if (!query.trim()) {
    return approaches;
  }

  const normalized = query.trim().toLowerCase();

  return approaches.filter((approach) => {
    const guideNames = getNetworkGuidesByApproach(approach.id)
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
  const networks = filterNetworkApproaches(getNetworkApproaches(), query);
  const hasResults =
    apps.length > 0 || operatingSystems.length > 0 || devices.length > 0 || networks.length > 0;

  return (
    <div className="page-shell py-10 sm:py-14" lang={locale}>
      <div className="space-y-8 sm:space-y-10">
        <section className="overflow-hidden rounded-[32px] border border-[rgba(20,184,166,0.10)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(240,253,250,0.92))] p-6 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,118,110,0.18))] sm:p-8 lg:p-10">
          <div className="max-w-5xl space-y-6">
            <div className="space-y-4">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                {copy.home.eyebrow}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                {copy.home.title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                {copy.home.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
              {quickPicks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href.startsWith("http") ? item.href : localizeHref(item.href, locale)}
                  className="flex min-h-[76px] items-center gap-3 rounded-[24px] border border-[rgba(148,163,184,0.18)] bg-white/92 px-4 py-3 text-left text-[15px] font-medium text-slate-800 shadow-[0_22px_48px_-36px_rgba(15,23,42,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-[0_30px_60px_-42px_rgba(13,148,136,0.45)] dark:border-slate-800 dark:bg-slate-950/72 dark:text-slate-100 dark:hover:border-teal-500"
                >
                  <span className="text-xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="leading-5">{copy.home.quickPicks[index]}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <label
            htmlFor="directory-search"
            className="text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            {copy.home.searchLabel}
          </label>
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base"
            >
              🔍
            </span>
            <input
              id="directory-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.home.searchPlaceholder}
              className="w-full rounded-full border border-[rgba(148,163,184,0.24)] bg-white/90 py-3.5 pl-12 pr-4 text-sm text-slate-900 shadow-[0_16px_40px_-36px_rgba(15,23,42,0.45)] outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-900/40"
            />
          </div>
        </section>

        {!hasResults ? (
          <section className="rounded-[28px] border border-[rgba(148,163,184,0.18)] bg-white/85 p-6 text-sm leading-7 text-slate-600 shadow-[0_18px_48px_-40px_rgba(15,23,42,0.4)] dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
            {copy.home.noResults}
          </section>
        ) : null}

        {apps.length ? (
          <section
            id="apps"
            className="scroll-mt-24 space-y-5 rounded-[28px] border border-[rgba(148,163,184,0.14)] bg-white/80 p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.38)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/55 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="category-icon inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                <IconApps className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {copy.home.sections.appsTitle}
                </h2>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {copy.home.sections.appsDescription}
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {apps.map((entry) => (
                <EntryCard key={entry.slug} entry={entry} compact locale={locale} />
              ))}
            </div>
          </section>
        ) : null}

        {operatingSystems.length ? (
          <section
            id="operating-systems"
            className="scroll-mt-24 space-y-5 rounded-[28px] border border-[rgba(148,163,184,0.14)] bg-white/80 p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.38)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/55 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="category-icon inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                <IconOS className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {copy.home.sections.osTitle}
                </h2>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {copy.home.sections.osDescription}
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {operatingSystems.map((entry) => (
                <EntryCard key={entry.slug} entry={entry} locale={locale} />
              ))}
            </div>
          </section>
        ) : null}

        {devices.length ? (
          <section
            id="devices"
            className="scroll-mt-24 space-y-5 rounded-[28px] border border-[rgba(148,163,184,0.14)] bg-white/80 p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.38)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/55 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="category-icon inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                <IconDevices className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {copy.home.sections.devicesTitle}
                </h2>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {copy.home.sections.devicesDescription}
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {devices.map((entry) => (
                <EntryCard key={entry.slug} entry={entry} locale={locale} />
              ))}
            </div>
          </section>
        ) : null}

        {networks.length ? (
          <section
            id="network"
            className="scroll-mt-24 space-y-5 rounded-[28px] border border-[rgba(148,163,184,0.14)] bg-white/80 p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.38)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/55 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="category-icon inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                <IconNetwork className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {copy.home.sections.networkTitle}
                </h2>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {copy.home.sections.networkDescription}
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {networks.map((approach) => (
                <NetworkApproachCard key={approach.id} approach={approach} locale={locale} />
              ))}
            </div>
          </section>
        ) : null}

        <section
          id="about"
          className="scroll-mt-24 rounded-[30px] border border-[rgba(20,184,166,0.12)] bg-[linear-gradient(135deg,rgba(240,253,250,0.88),rgba(255,255,255,0.94))] p-6 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.42)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,rgba(15,118,110,0.14),rgba(15,23,42,0.96))] sm:p-8"
        >
          <div className="grid gap-6 md:grid-cols-[auto,1fr] md:items-start">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/80 bg-white text-xl font-semibold text-teal-700 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.4)] dark:border-slate-700 dark:bg-slate-900 dark:text-teal-300">
              RC
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {copy.home.aboutTitle}
                </h2>
                <p className="text-base leading-8 text-slate-700 dark:text-slate-200">
                  {copy.home.aboutBodyOne}
                </p>
                <p className="text-base leading-8 text-slate-700 dark:text-slate-200">
                  {copy.home.aboutBodyTwo}
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/rcostache/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-teal-200 bg-white px-4 py-2.5 text-sm font-medium text-teal-700 shadow-[0_16px_36px_-28px_rgba(13,148,136,0.6)] transition-colors hover:border-teal-300 hover:text-teal-800 dark:border-teal-800 dark:bg-slate-900 dark:text-teal-300 dark:hover:border-teal-700"
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
