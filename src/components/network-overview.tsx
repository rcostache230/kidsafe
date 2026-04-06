"use client";

import Link from "next/link";
import { startTransition, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  getDefaultNetworkApproach,
  getNetworkApproaches,
  getNetworkCopy,
  getNetworkGuideHref,
  getNetworkGuidesByApproach,
  getNetworkOverviewHref,
  isNetworkApproach,
  type NetworkApproachId
} from "@/data/network";
import { type Locale } from "@/lib/locale";

import { Breadcrumbs } from "./breadcrumbs";
import { NetworkBanners } from "./network-banners";
import { NetworkGuideCard } from "./network-guide-card";

export function NetworkOverview({
  locale = "en",
  initialApproach
}: {
  locale?: Locale;
  initialApproach?: string;
}) {
  const router = useRouter();
  const copy = getNetworkCopy(locale);
  const approaches = getNetworkApproaches();
  const defaultApproach = getDefaultNetworkApproach();
  const initialValue = isNetworkApproach(initialApproach) ? initialApproach : defaultApproach;
  const [selectedApproach, setSelectedApproach] = useState<NetworkApproachId>(initialValue);
  const [pillsVisible, setPillsVisible] = useState(false);

  useEffect(() => {
    setSelectedApproach(isNetworkApproach(initialApproach) ? initialApproach : defaultApproach);
  }, [defaultApproach, initialApproach]);

  useEffect(() => {
    setPillsVisible(false);
    const timeoutId = window.setTimeout(() => {
      setPillsVisible(true);
    }, 60);

    return () => window.clearTimeout(timeoutId);
  }, [selectedApproach]);

  const selectedGuides = getNetworkGuidesByApproach(selectedApproach);

  function handleApproachChange(approach: NetworkApproachId) {
    if (approach === selectedApproach) {
      return;
    }

    setSelectedApproach(approach);
    startTransition(() => {
      router.replace(getNetworkOverviewHref(locale, approach), { scroll: false });
    });
  }

  return (
    <article className="page-shell py-10 sm:py-14" lang={locale}>
      <div className="mx-auto max-w-5xl space-y-10">
        <Breadcrumbs
          items={[
            { label: copy.breadcrumbHome, href: locale === "ro" ? "/ro" : "/" },
            { label: copy.breadcrumbOverview }
          ]}
        />

        <header className="space-y-5">
          <div className="space-y-4">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {copy.categoryLabel}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              {copy.overviewTitle}
            </h1>
            <p className="max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
              {copy.overviewSubtitle}
            </p>
          </div>

          <NetworkBanners locale={locale} />
        </header>

        <section className="space-y-5 rounded-[28px] border border-[rgba(148,163,184,0.14)] bg-white/80 p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.38)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/55 sm:p-6">
          <div className="space-y-2">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {copy.selectorEyebrow}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {copy.selectorTitle}
            </h2>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {copy.selectorLevelOne}
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {approaches.map((approach) => {
                const active = approach.id === selectedApproach;

                return (
                  <button
                    key={approach.id}
                    type="button"
                    onClick={() => handleApproachChange(approach.id)}
                    className={`rounded-[22px] border p-4 text-left transition-all duration-200 ${
                      active
                        ? "border-teal-300 bg-[rgba(20,184,166,0.10)] shadow-[0_18px_40px_-34px_rgba(13,148,136,0.45)] dark:border-teal-500 dark:bg-[rgba(20,184,166,0.18)]"
                        : "border-[rgba(148,163,184,0.18)] bg-white/88 hover:-translate-y-0.5 hover:border-teal-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-teal-500"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl" aria-hidden="true">
                        {approach.icon}
                      </span>
                      <div className="space-y-1.5">
                        <p className="text-sm font-semibold text-slate-950 dark:text-white">
                          {approach.name}
                        </p>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {approach.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`space-y-4 transition-all duration-300 ease-out ${
              pillsVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            key={selectedApproach}
          >
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {copy.selectorLevelTwo}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={getNetworkGuideHref(guide.slug, locale)}
                    className="inline-flex items-center rounded-full border border-[rgba(148,163,184,0.18)] bg-white/88 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-teal-300 hover:text-teal-800 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:text-teal-200"
                  >
                    {guide.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {copy.overviewGridTitle}
              </h3>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                {copy.overviewGridSubtitle}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {selectedGuides.map((guide) => (
                <NetworkGuideCard key={guide.slug} guide={guide} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
