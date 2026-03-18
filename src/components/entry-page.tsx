import Link from "next/link";

import {
  categoryDirectoryHref,
  categoryLabels,
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

export function EntryPage({ entry }: { entry: Entry }) {
  const relatedEntries = getRelatedEntries(entry);

  return (
    <article className="page-shell py-10 sm:py-14">
      <div className="mx-auto max-w-4xl space-y-10">
        <Breadcrumbs
          items={[
            { label: "Digital Parents", href: "/" },
            {
              label: categoryLabels[entry.category],
              href: categoryDirectoryHref[entry.category]
            },
            { label: entry.name }
          ]}
        />

        <header className="space-y-5">
          <div className="space-y-4">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {categoryLabels[entry.category]}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                {entry.name}
              </h1>
              <RiskBadge level={entry.riskLevel} label={entry.riskLabelText} />
            </div>
            <p className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
              {entry.description}
            </p>
          </div>

          {entry.callouts?.length ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {entry.callouts.map((callout) => {
                const warning = callout.type === "warning";
                return (
                  <section
                    key={callout.title}
                    className={`rounded-2xl border p-4 ${
                      warning
                        ? "border-[rgba(220,38,38,0.22)] bg-[rgba(220,38,38,0.08)] dark:border-[rgba(220,38,38,0.35)] dark:bg-[rgba(220,38,38,0.14)]"
                        : "border-[rgba(5,150,105,0.22)] bg-[rgba(5,150,105,0.08)] dark:border-[rgba(5,150,105,0.35)] dark:bg-[rgba(5,150,105,0.14)]"
                    }`}
                  >
                    <h2
                      className={`text-sm font-semibold ${
                        warning
                          ? "text-[#DC2626] dark:text-[#fca5a5]"
                          : "text-[#059669] dark:text-[#6ee7b7]"
                      }`}
                    >
                      {callout.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                      {callout.description}
                    </p>
                  </section>
                );
              })}
            </div>
          ) : null}

          {entry.category === "apps" && entry.riskBarPosition !== undefined ? (
            <section className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
                  Overall risk
                </h2>
                <RiskBar position={entry.riskBarPosition} />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Age rating", value: entry.ageRating },
                  { label: "Users", value: entry.userCount },
                  { label: "Platform", value: entry.platform },
                  { label: "Age recommendation", value: entry.ageRecommendation }
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/60"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
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
                      className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/60"
                    >
                      <p className="text-base font-semibold text-slate-950 dark:text-white">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}
        </header>

        <section className="space-y-5" aria-labelledby="quick-actions-title">
          <div className="space-y-2">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Start here
            </p>
            <h2
              id="quick-actions-title"
              className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white"
            >
              Three actions for today
            </h2>
          </div>
          <ol className="grid gap-4 sm:grid-cols-3">
            {entry.quickActions.map((action, index) => (
              <li
                key={action.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                    {action.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {action.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-5" aria-labelledby="watch-for-title">
          <div className="space-y-2">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Risk awareness
            </p>
            <h2
              id="watch-for-title"
              className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white"
            >
              What to watch for
            </h2>
          </div>

          <div className="grid gap-4">
            {entry.watchFor.map((item) => {
              const meta = getRiskMeta(item.severity);

              return (
                <section
                  key={item.title}
                  className={`rounded-2xl border p-5 ${meta.surfaceClass} ${meta.borderClass}`}
                >
                  <div className="flex items-start gap-3">
                    <RiskDot level={item.severity} />
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                          {item.title}
                        </h3>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                          {meta.label}
                        </span>
                      </div>
                      <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="setup-guide-title">
          <div className="space-y-2">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Full guide
            </p>
            <h2
              id="setup-guide-title"
              className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white"
            >
              Full setup guide
            </h2>
          </div>

          {entry.setupGuideIntro ? (
            <p className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-sm leading-6 text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200">
              {entry.setupGuideIntro}
            </p>
          ) : null}

          <ol className="space-y-4">
            {entry.setupGuide.map((item, index) => (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-white">
                    {index + 1}
                  </span>
                  <div className="min-w-0 space-y-2">
                    <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    {item.steps.map((step) => (
                      <p
                        key={step}
                        className="text-sm leading-6 text-slate-600 dark:text-slate-300"
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

        {relatedEntries.length ? (
          <nav className="space-y-5 border-t border-slate-200 pt-8 dark:border-slate-800" aria-labelledby="related-pages-title">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Keep going
                </p>
                <h2
                  id="related-pages-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white"
                >
                  Related pages
                </h2>
              </div>
              <Link
                href={categoryDirectoryHref[entry.category]}
                className="text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
              >
                Back to {categoryLabels[entry.category].toLowerCase()}
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedEntries.map((relatedEntry) => (
                <EntryCard
                  key={getEntryHref(relatedEntry)}
                  entry={relatedEntry}
                  compact={relatedEntry.category === "apps"}
                />
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </article>
  );
}
