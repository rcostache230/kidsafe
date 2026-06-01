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
          <p className="eyebrow">{copy.categoryLabel}</p>
          <h1 className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-paper-ink sm:text-[48px]">
            {copy.overviewTitle}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-paper-ink/80">
            {copy.overviewSubtitle}
          </p>

          <NetworkBanners locale={locale} />
        </header>

        <div className="space-y-6">
          {approaches.map((approach) => {
            const guides = getNetworkGuidesByApproach(approach.id, locale);
            const highlighted = approach.id === highlightedApproach;

            return (
              <section
                key={approach.id}
                className={`space-y-5 rounded-card border bg-white p-6 shadow-soft sm:p-7 ${
                  highlighted
                    ? "border-brand-600"
                    : "border-paper-line"
                }`}
              >
                <div className="space-y-2">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-paper-ink">
                    {approach.name}
                  </h2>
                  <p className="max-w-3xl text-paper-ink/75">{approach.description}</p>
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
