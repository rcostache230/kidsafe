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
      <div className="mx-auto max-w-4xl space-y-12">
        <Breadcrumbs
          items={[
            { label: copy.breadcrumbHome, href: locale === "ro" ? "/ro" : "/" },
            { label: copy.breadcrumbOverview, href: getNetworkOverviewHref(locale) },
            { label: guide.name }
          ]}
        />

        <header className="space-y-6">
          <p className="eyebrow">{copy.categoryLabel}</p>
          <h1 className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-paper-ink sm:text-[48px]">
            {guide.name}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-paper-ink/80">
            {guide.description}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {approach ? (
              <span className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                {copy.approachLabel}: {approach.name}
              </span>
            ) : null}
            <span className="inline-flex items-center rounded-full border border-paper-line bg-white px-3 py-1 text-sm font-semibold text-paper-ink/85">
              {copy.difficultyLabel}: {guide.difficulty}
            </span>
            <span className="inline-flex items-center rounded-full border border-paper-line bg-white px-3 py-1 text-sm font-semibold text-paper-ink/85">
              {copy.costLabel}: {guide.cost}
            </span>
            <Link
              href={getNetworkOverviewHref(locale, guide.approach)}
              className="text-sm font-medium text-brand-700 no-underline hover:text-brand-600"
              style={{ textDecoration: "none" }}
            >
              {copy.backToOverview}
            </Link>
          </div>

          <NetworkGuideNav guide={guide} locale={locale} />
          <NetworkBanners locale={locale} collapsible />
        </header>

        <section className="card space-y-5 p-6">
          <h2 className="font-display text-xl font-semibold text-paper-ink">
            {copy.coverageTitle}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {guide.coverageMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-paper-line bg-paper-50 p-4"
              >
                <p className="font-display text-base font-semibold text-paper-ink">
                  {metric.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper-ink/60">
                  {getNetworkMetricLabel(metric.label, locale)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-sage-100 bg-[#F1F6EF] p-5">
            <h2 className="font-display text-lg font-semibold text-sage-600">
              {copy.whatItBlocksTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {guide.whatItBlocks.map((item) => (
                <li key={item} className="text-[15px] leading-7 text-paper-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-accent-200 bg-accent-50 p-5">
            <h2 className="font-display text-lg font-semibold text-accent-600">
              {copy.whatItCannotBlockTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {guide.whatItCannotBlock.map((item) => (
                <li key={item} className="text-[15px] leading-7 text-paper-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {guide.highlightedSection ? (
          <section className="rounded-2xl border border-brand-100 bg-brand-50 p-5">
            <h2 className="font-display text-lg font-semibold text-brand-700">
              {guide.highlightedSection.title ?? copy.highlightedTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {guide.highlightedSection.items.map((item) => (
                <li key={item} className="text-[15px] leading-7 text-paper-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="space-y-5" aria-labelledby="network-guide-title">
          <div className="space-y-2">
            <p className="eyebrow">{copy.guideEyebrow}</p>
            <h2
              id="network-guide-title"
              className="font-display text-3xl font-semibold tracking-tight text-paper-ink"
            >
              {copy.guideTitle}
            </h2>
          </div>

          <ol className="space-y-4">
            {guide.setupSteps.map((step, index) => (
              <li key={step.title} className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-50 font-display text-sm font-semibold text-brand-700">
                    {index + 1}
                  </span>
                  <div className="min-w-0 space-y-2">
                    <h3 className="font-display text-lg font-semibold text-paper-ink">
                      {step.title}
                    </h3>
                    <p className="text-[15px] leading-7 text-paper-ink/80">
                      {step.action}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className={`grid gap-3 ${guide.warning ? "sm:grid-cols-2" : ""}`}>
          <section className="rounded-2xl border border-sage-100 bg-[#F1F6EF] p-5">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-sage-600">
              {copy.tipTitle}
            </h2>
            <p className="mt-2 text-[15px] leading-7 text-paper-ink/85">{guide.tip}</p>
          </section>
          {guide.warning ? (
            <section className="rounded-2xl border border-accent-200 bg-accent-50 p-5">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-600">
                {copy.warningTitle}
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-paper-ink/85">
                {guide.warning}
              </p>
            </section>
          ) : null}
        </div>
      </div>
    </article>
  );
}
