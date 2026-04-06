import Link from "next/link";

import {
  getNetworkApproach,
  getNetworkCopy,
  getNetworkMetricLabel,
  getNetworkOverviewHref,
  type NetworkGuide
} from "@/data/network";
import { type Locale } from "@/lib/locale";

import { Breadcrumbs } from "./breadcrumbs";
import { NetworkBanners } from "./network-banners";
import { NetworkGuideNav } from "./network-guide-nav";

export function NetworkGuidePage({
  guide,
  locale = "en"
}: {
  guide: NetworkGuide;
  locale?: Locale;
}) {
  const copy = getNetworkCopy(locale);
  const approach = getNetworkApproach(guide.approach, locale);

  return (
    <article className="page-shell py-10 sm:py-14" lang={locale}>
      <div className="mx-auto max-w-5xl space-y-10">
        <Breadcrumbs
          items={[
            { label: copy.breadcrumbHome, href: locale === "ro" ? "/ro" : "/" },
            { label: copy.breadcrumbOverview, href: getNetworkOverviewHref(locale) },
            { label: guide.name }
          ]}
        />

        <header className="space-y-5">
          <div className="space-y-4">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {copy.categoryLabel}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                {guide.name}
              </h1>
            </div>
            <p className="max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
              {guide.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {approach ? (
              <span className="inline-flex items-center rounded-full border border-[rgba(20,184,166,0.18)] bg-[rgba(20,184,166,0.08)] px-3 py-1 text-sm font-semibold text-teal-700 dark:border-[rgba(20,184,166,0.30)] dark:bg-[rgba(20,184,166,0.16)] dark:text-teal-300">
                {copy.approachLabel}: {approach.name}
              </span>
            ) : null}
            <span className="inline-flex items-center rounded-full border border-[rgba(148,163,184,0.18)] bg-white/88 px-3 py-1 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              {copy.difficultyLabel}: {guide.difficulty}
            </span>
            <span className="inline-flex items-center rounded-full border border-[rgba(148,163,184,0.18)] bg-white/88 px-3 py-1 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              {copy.costLabel}: {guide.cost}
            </span>
            <Link
              href={getNetworkOverviewHref(locale, guide.approach)}
              className="text-sm font-medium text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
            >
              {copy.backToOverview}
            </Link>
          </div>

          <NetworkBanners locale={locale} />
        </header>

        <NetworkGuideNav guide={guide} locale={locale} />

        <section className="space-y-5 rounded-[26px] border border-[rgba(148,163,184,0.18)] bg-white/80 p-5 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
            {copy.coverageTitle}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {guide.coverageMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-[rgba(148,163,184,0.16)] bg-white/95 p-4 dark:border-slate-800 dark:bg-slate-950/60"
              >
                <p className="text-base font-semibold text-slate-950 dark:text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {getNetworkMetricLabel(metric.label, locale)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[24px] border border-[rgba(5,150,105,0.22)] bg-[rgba(5,150,105,0.08)] p-5 dark:border-[rgba(5,150,105,0.35)] dark:bg-[rgba(5,150,105,0.14)]">
            <h2 className="text-lg font-semibold text-[#059669] dark:text-[#6ee7b7]">
              {copy.whatItBlocksTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {guide.whatItBlocks.map((item) => (
                <li key={item} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-[rgba(217,119,6,0.22)] bg-[rgba(217,119,6,0.10)] p-5 dark:border-[rgba(217,119,6,0.35)] dark:bg-[rgba(217,119,6,0.16)]">
            <h2 className="text-lg font-semibold text-[#D97706] dark:text-[#fcd34d]">
              {copy.whatItCannotBlockTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {guide.whatItCannotBlock.map((item) => (
                <li key={item} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {guide.highlightedSection ? (
          <section className="rounded-[24px] border border-[rgba(20,184,166,0.14)] bg-[rgba(236,253,250,0.78)] p-5 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.35)] dark:border-[rgba(20,184,166,0.24)] dark:bg-[rgba(15,118,110,0.16)]">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
              {guide.highlightedSection.title ?? copy.highlightedTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {guide.highlightedSection.items.map((item) => (
                <li key={item} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="space-y-5" aria-labelledby="network-guide-title">
          <div className="space-y-2">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {copy.guideEyebrow}
            </p>
            <h2
              id="network-guide-title"
              className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white"
            >
              {copy.guideTitle}
            </h2>
          </div>

          <ol className="space-y-4">
            {guide.setupSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[24px] border border-[rgba(148,163,184,0.18)] bg-white/92 p-5 shadow-[0_22px_48px_-36px_rgba(15,23,42,0.42)] dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-teal-50 text-sm font-semibold text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                    {index + 1}
                  </span>
                  <div className="min-w-0 space-y-2">
                    <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {step.action}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className={`grid gap-3 ${guide.warning ? "sm:grid-cols-2" : ""}`}>
          <section className="rounded-2xl border border-[rgba(5,150,105,0.22)] bg-[rgba(5,150,105,0.08)] p-4 dark:border-[rgba(5,150,105,0.35)] dark:bg-[rgba(5,150,105,0.14)]">
            <h2 className="text-sm font-semibold text-[#059669] dark:text-[#6ee7b7]">
              {copy.tipTitle}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {guide.tip}
            </p>
          </section>
          {guide.warning ? (
            <section className="rounded-2xl border border-[rgba(217,119,6,0.24)] bg-[rgba(217,119,6,0.10)] p-4 dark:border-[rgba(217,119,6,0.35)] dark:bg-[rgba(217,119,6,0.16)]">
              <h2 className="text-sm font-semibold text-[#D97706] dark:text-[#fcd34d]">
                {copy.warningTitle}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                {guide.warning}
              </p>
            </section>
          ) : null}
        </div>
      </div>
    </article>
  );
}
