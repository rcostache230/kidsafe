import {
  getNetworkCopy,
  getNetworkGuidesByApproach,
  getNetworkOverviewApproaches,
  isNetworkApproach
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
  const copy = getNetworkCopy(locale);
  const approaches = getNetworkOverviewApproaches(locale);
  const highlightedApproach = isNetworkApproach(initialApproach) ? initialApproach : undefined;

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

        <div className="space-y-6">
          {approaches.map((approach) => {
            const guides = getNetworkGuidesByApproach(approach.id, locale);
            const highlighted = approach.id === highlightedApproach;

            return (
              <section
                key={approach.id}
                className={`space-y-5 rounded-[28px] border bg-white/80 p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.38)] backdrop-blur-sm dark:bg-slate-900/55 sm:p-6 ${
                  highlighted
                    ? "border-teal-300 shadow-[0_24px_60px_-40px_rgba(13,148,136,0.35)] dark:border-teal-500"
                    : "border-[rgba(148,163,184,0.14)] dark:border-slate-800"
                }`}
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {approach.name}
                  </h2>
                  <p className="max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {approach.description}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {guides.map((guide) => (
                    <NetworkGuideCard key={guide.slug} guide={guide} locale={locale} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}
