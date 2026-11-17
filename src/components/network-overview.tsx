import { Suspense } from "react";

import {
  getNetworkCopy,
  getNetworkGuidesByApproach,
  getNetworkOverviewApproaches,
  getNetworkOverviewHref
} from "@/data/network";
import { type Locale } from "@/lib/locale";

import { Breadcrumbs } from "./breadcrumbs";
import { NetworkApproachHighlight } from "./network-approach-highlight";
import { NetworkBanners } from "./network-banners";
import { NetworkGuideCard } from "./network-guide-card";

export function NetworkOverview({
  locale = "en"
}: {
  locale?: Locale;
}) {
  const copy = getNetworkCopy(locale);
  const approaches = getNetworkOverviewApproaches(locale);

  return (
    <article className="page-shell guide-shell space-y-8" lang={locale}>
      <Breadcrumbs
        currentUrl={getNetworkOverviewHref(locale)}
        items={[
          { label: copy.breadcrumbHome, href: locale === "en" ? "/en" : "/" },
          { label: copy.breadcrumbOverview }
        ]}
      />

      <header className="space-y-4 border-b border-paper-ink pb-8">
        <p className="eyebrow">{copy.categoryLabel}</p>
        <h1 className="page-title">{copy.overviewTitle}</h1>
        <p className="page-lede">{copy.overviewSubtitle}</p>
      </header>

      <nav aria-label={copy.selectorEyebrow} className="directory-nav">
        <p className="eyebrow">{copy.selectorEyebrow}</p>
        <ul>
          {approaches.map((approach) => (
            <li key={approach.id}><a href={`#${approach.id}`}>{approach.name}</a></li>
          ))}
        </ul>
      </nav>

      <NetworkBanners locale={locale} />
      <Suspense><NetworkApproachHighlight /></Suspense>

      <div className="space-y-6">
        {approaches.map((approach) => {
          const guides = getNetworkGuidesByApproach(approach.id, locale);

          return (
            <section
              key={approach.id}
              id={approach.id}
              aria-labelledby={`${approach.id}-title`}
              data-network-approach
              className="space-y-5 border-t border-paper-line pt-8 target:border-brand-600 data-[highlighted=true]:border-brand-600"
            >
              <div className="space-y-2">
                <h2 id={`${approach.id}-title`} className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  {approach.name}
                </h2>
                <p className="max-w-3xl text-paper-mute">{approach.description}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {guides.map((guide) => (
                  <NetworkGuideCard key={guide.slug} guide={guide} locale={locale} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}
