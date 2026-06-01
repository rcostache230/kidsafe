import Link from "next/link";

import { getCopy } from "@/lib/copy";
import { type Locale } from "@/lib/locale";
import {
  getCategoryDirectoryHref,
  getCategoryLabel,
  getEntryHref,
  getRelatedEntries,
  getRiskMeta,
  type Entry
} from "@/data/entries";

import { Breadcrumbs } from "./breadcrumbs";
import { EntryCard } from "./entry-card";
import { RiskBadge } from "./risk-badge";
import { RiskBar } from "./risk-bar";
import { RiskDot } from "./risk-dot";

function getCalloutTitle(title: string, locale: Locale) {
  const copy = getCopy(locale);

  if (title === "Highest concern") {
    return copy.entry.calloutConcern;
  }

  if (title === "Most impactful action") {
    return copy.entry.calloutAction;
  }

  return title;
}

export function EntryPage({
  entry,
  locale = "en"
}: {
  entry: Entry;
  locale?: Locale;
}) {
  const copy = getCopy(locale);
  const relatedEntries = getRelatedEntries(entry, locale);

  return (
    <article className="page-shell py-10 sm:py-14" lang={locale}>
      <div className="mx-auto max-w-3xl space-y-12">
        <Breadcrumbs
          items={[
            { label: copy.entry.homeBreadcrumb, href: locale === "en" ? "/en" : "/" },
            {
              label: getCategoryLabel(entry.category, locale),
              href: getCategoryDirectoryHref(entry.category, locale)
            },
            { label: entry.name }
          ]}
        />

        {/* HEADER --------------------------------------------------- */}
        <header className="space-y-6">
          <p className="eyebrow">{getCategoryLabel(entry.category, locale)}</p>
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-paper-ink sm:text-[48px]">
              {entry.name}
            </h1>
            <RiskBadge level={entry.riskLevel} label={entry.riskLabelText} />
          </div>
          <p className="prose-parent text-lg text-paper-ink/85">{entry.description}</p>
        </header>

        {/* QUICK ACTIONS -------------------------------------------- */}
        <section className="space-y-5" aria-labelledby="quick-actions-title">
          <h2
            id="quick-actions-title"
            className="font-display text-3xl font-semibold tracking-tight text-paper-ink"
          >
            {copy.entry.quickActions}
          </h2>
          <ol className="grid gap-4 sm:grid-cols-3">
            {entry.quickActions.map((action, index) => (
              <li key={action.title} className="card p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 font-display text-sm font-semibold text-brand-700">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-base font-semibold text-paper-ink">
                    {action.title}
                  </h3>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-paper-ink/80">
                  {action.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* CALLOUTS ------------------------------------------------- */}
        {entry.callouts?.length ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {entry.callouts.map((callout) => {
              const warning = callout.type === "warning";
              return (
                <section
                  key={callout.title}
                  className={`rounded-2xl border p-5 ${
                    warning
                      ? "border-accent-200 bg-accent-50"
                      : "border-sage-100 bg-[#F1F6EF]"
                  }`}
                >
                  <h2
                    className={`text-sm font-semibold uppercase tracking-wider ${
                      warning ? "text-accent-600" : "text-sage-600"
                    }`}
                  >
                    {getCalloutTitle(callout.title, locale)}
                  </h2>
                  <p className="mt-2 text-[15px] leading-7 text-paper-ink/85">
                    {callout.description}
                  </p>
                </section>
              );
            })}
          </div>
        ) : null}

        {/* RISK BAR + META ------------------------------------------ */}
        {entry.category === "apps" && entry.riskBarPosition !== undefined ? (
          <section className="card space-y-6 p-6">
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-paper-ink">
                {copy.entry.riskLevel}
              </h2>
              <RiskBar position={entry.riskBarPosition} locale={locale} />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: copy.entry.ageRating, value: entry.ageRating },
                { label: copy.entry.users, value: entry.userCount },
                { label: copy.entry.platform, value: entry.platform },
                { label: copy.entry.ageRecommendation, value: entry.ageRecommendation }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-paper-line bg-paper-50 p-4"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paper-ink/60">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-[15px] leading-6 text-paper-ink/90">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {entry.appMetrics?.length ? (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {entry.appMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-paper-line bg-paper-50 p-4"
                  >
                    <p className="font-display text-lg font-semibold text-paper-ink">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper-ink/60">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {/* WATCH FOR ------------------------------------------------ */}
        <section className="space-y-5" aria-labelledby="watch-for-title">
          <div className="space-y-2">
            <p className="eyebrow">{copy.entry.warningEyebrow}</p>
            <h2
              id="watch-for-title"
              className="font-display text-3xl font-semibold tracking-tight text-paper-ink"
            >
              {copy.entry.warningTitle}
            </h2>
          </div>

          <div className="grid gap-4">
            {entry.watchFor.map((item) => {
              const meta = getRiskMeta(item.severity, locale);
              return (
                <section
                  key={item.title}
                  className="rounded-2xl border border-paper-line bg-white p-5 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <RiskDot level={item.severity} />
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-lg font-semibold text-paper-ink">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paper-ink/60">
                          {meta.label}
                        </span>
                      </div>
                      <p className="text-[15px] leading-7 text-paper-ink/85">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        {/* SETUP GUIDE ---------------------------------------------- */}
        <section className="space-y-5" aria-labelledby="setup-guide-title">
          <div className="space-y-2">
            <p className="eyebrow">{copy.entry.guideEyebrow}</p>
            <h2
              id="setup-guide-title"
              className="font-display text-3xl font-semibold tracking-tight text-paper-ink"
            >
              {copy.entry.guideTitle}
            </h2>
          </div>

          {entry.setupGuideIntro ? (
            <p className="rounded-2xl border border-paper-line bg-paper-100 p-5 text-[15px] leading-7 text-paper-ink/85">
              {entry.setupGuideIntro}
            </p>
          ) : null}

          <ol className="space-y-4">
            {entry.setupGuide.map((item, index) => (
              <li
                key={item.title}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-50 font-display text-sm font-semibold text-brand-700">
                    {index + 1}
                  </span>
                  <div className="min-w-0 space-y-2">
                    <h3 className="font-display text-lg font-semibold text-paper-ink">
                      {item.title}
                    </h3>
                    {item.steps.map((step) => (
                      <p
                        key={step}
                        className="text-[15px] leading-7 text-paper-ink/80"
                      >
                        {step}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* RELATED -------------------------------------------------- */}
        {relatedEntries.length ? (
          <nav
            className="space-y-5 border-t border-paper-line pt-10"
            aria-labelledby="related-pages-title"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">{copy.entry.relatedEyebrow}</p>
                <h2
                  id="related-pages-title"
                  className="mt-2 font-display text-2xl font-semibold tracking-tight text-paper-ink"
                >
                  {copy.entry.relatedTitle}
                </h2>
              </div>
              <Link
                href={getCategoryDirectoryHref(entry.category, locale)}
                className="text-sm font-medium text-brand-700 no-underline hover:text-brand-600"
                style={{ textDecoration: "none" }}
              >
                {copy.entry.backTo} {getCategoryLabel(entry.category, locale).toLowerCase()}
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedEntries.map((relatedEntry) => (
                <EntryCard
                  key={getEntryHref(relatedEntry, locale)}
                  entry={relatedEntry}
                  compact={relatedEntry.category === "apps"}
                  locale={locale}
                />
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </article>
  );
}
