import Link from "next/link";
import { ArrowDown, WifiHigh } from "@phosphor-icons/react/dist/ssr";

import {
  getNetworkApproach,
  getNetworkCopy,
  getNetworkMetricLabel,
  getNetworkGuideHref,
  getNetworkOverviewHref,
  type NetworkGuide
} from "@/data/network";
import { getCopy } from "@/lib/copy";
import { type Locale } from "@/lib/locale";

import { Breadcrumbs } from "./breadcrumbs";
import { GuideContents, GuideSteps } from "./guide-layout";
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
  const highlightedTitle = guide.highlightedSection?.title ?? copy.highlightedTitle;
  const sections: Array<[string, string]> = [
    ["network-blocks-title", copy.whatItBlocksTitle],
    ["network-limits-title", copy.whatItCannotBlockTitle]
  ];
  if (guide.highlightedSection) sections.push(["network-highlights-title", highlightedTitle]);
  sections.push(["network-guide-title", copy.guideTitle]);

  return (
    <article className="guide-page" lang={locale}>
      <div className="page-shell guide-shell">
        <Breadcrumbs
          currentUrl={getNetworkGuideHref(guide.slug, locale)}
          items={[
            { label: copy.breadcrumbHome, href: locale === "en" ? "/en" : "/" },
            { label: copy.breadcrumbOverview, href: getNetworkOverviewHref(locale) },
            { label: guide.name }
          ]}
        />

        <header className="guide-hero">
          <div className="guide-intro">
            <div className="flex flex-wrap items-center gap-3">
              <span className="guide-entry-icon inline-flex h-10 w-10 items-center justify-center rounded-xl" aria-hidden="true">
                <WifiHigh size={22} />
              </span>
              <span className="eyebrow">{copy.categoryLabel}</span>
            </div>
            <h1 className="page-title">{guide.name}</h1>
            <p className="page-lede">{guide.description}</p>
            <div className="guide-intro-actions">
              <a href="#network-guide-title" className="guide-jump">
                {copy.guideTitle}
                <ArrowDown size={16} aria-hidden="true" />
              </a>
              <Link href={getNetworkOverviewHref(locale, guide.approach)} className="text-sm">
                {copy.backToOverview}
              </Link>
            </div>
          </div>

          <section className="guide-summary" aria-labelledby="network-coverage-title">
            <div className="guide-summary-main">
              <h2 id="network-coverage-title" className="eyebrow">{copy.coverageTitle}</h2>
            </div>
            <dl className="guide-facts">
              {guide.coverageMetrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="eyebrow">{getNetworkMetricLabel(metric.label, locale)}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
            <dl className="guide-facts">
              <div>
                <dt className="eyebrow">{copy.difficultyLabel}</dt>
                <dd>{guide.difficulty}</dd>
              </div>
              <div>
                <dt className="eyebrow">{copy.costLabel}</dt>
                <dd>{guide.cost}</dd>
              </div>
              {approach && (
                <div>
                  <dt className="eyebrow">{copy.approachLabel}</dt>
                  <dd>{approach.name}</dd>
                </div>
              )}
            </dl>
          </section>
        </header>

        <div className="guide-body">
          <GuideContents label={getCopy(locale).entry.onThisPage} links={sections} />

          <div className="guide-content">
            <div className="guide-callouts">
              <section className="guide-callout" aria-labelledby="network-blocks-title">
                <h2 id="network-blocks-title" tabIndex={-1}>{copy.whatItBlocksTitle}</h2>
                <ul>
                  {guide.whatItBlocks.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
              <section className="guide-callout guide-callout-warning" aria-labelledby="network-limits-title">
                <h2 id="network-limits-title" tabIndex={-1}>{copy.whatItCannotBlockTitle}</h2>
                <ul>
                  {guide.whatItCannotBlock.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            </div>

            <NetworkBanners locale={locale} collapsible />

            {guide.highlightedSection && (
              <section className="guide-callout" aria-labelledby="network-highlights-title">
                <h2 id="network-highlights-title" tabIndex={-1}>{highlightedTitle}</h2>
                <ul>
                  {guide.highlightedSection.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            )}

            <section aria-labelledby="network-guide-title">
              <h2 id="network-guide-title" tabIndex={-1}>{copy.guideTitle}</h2>
              <GuideSteps steps={guide.setupSteps.map(({ title, action }) => ({ title, steps: [action] }))} />
            </section>

            <div className="guide-callouts">
              <section className="guide-callout">
                <h2>{copy.tipTitle}</h2>
                <p>{guide.tip}</p>
              </section>
              {guide.warning && (
                <section className="guide-callout guide-callout-warning">
                  <h2>{copy.warningTitle}</h2>
                  <p>{guide.warning}</p>
                </section>
              )}
            </div>

            <NetworkGuideNav guide={guide} locale={locale} />
          </div>
        </div>
      </div>
    </article>
  );
}
