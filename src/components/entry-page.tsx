import Link from "next/link";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

import { getCopy } from "@/lib/copy";
import { localizeHref, type Locale } from "@/lib/locale";
import { absoluteUrl, SITE_AUTHOR, SITE_AUTHOR_URL } from "@/lib/site-identity";
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
import { EntryIcon } from "./entry-icon";
import { EntryReviewDate, EntrySources } from "./entry-sources";
import { GuideContents, GuideSteps } from "./guide-layout";
import { JsonLd } from "./json-ld";
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
  const { entry: copy } = getCopy(locale);
  const relatedEntries = getRelatedEntries(entry, locale);
  const categoryLabel = getCategoryLabel(entry.category, locale);
  const directoryHref = getCategoryDirectoryHref(entry.category, locale);
  const isApp = entry.category === "apps";
  const features = isApp ? entry.appMetrics : undefined;
  const pageUrl = absoluteUrl(getEntryHref(entry, locale));
  const sections: Array<[string, string]> = [];
  if (features?.length) sections.push(["app-features-title", copy.featuresAndLimits]);
  sections.push(
    ["quick-actions-title", copy.quickActions],
    ["watch-for-title", copy.warningTitle],
    ["setup-guide-title", copy.guideTitle]
  );
  if (entry.editorialReview) sections.push(["guide-sources", copy.sources]);

  return (
    <article className="guide-page" lang={locale}>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: pageUrl,
        name: entry.name,
        description: entry.description,
        inLanguage: locale,
        lastReviewed: entry.editorialReview?.checkedAt,
        author: { "@type": "Person", name: SITE_AUTHOR, url: SITE_AUTHOR_URL }
      }} />
      <div className="page-shell guide-shell">
        <Breadcrumbs
          currentUrl={pageUrl}
          items={[
            { label: copy.homeBreadcrumb, href: locale === "en" ? "/en" : "/" },
            { label: categoryLabel, href: directoryHref },
            { label: entry.name }
          ]}
        />

        <header className="guide-hero">
          <div className="guide-intro">
            <div className="flex flex-wrap items-center gap-3">
              <EntryIcon entry={entry} size="sm" className="guide-entry-icon" />
              <span className="eyebrow">{categoryLabel}</span>
            </div>
            <h1 className="page-title">{entry.name}</h1>
            <p className="page-lede">{entry.description}</p>
            <p className="mt-3 text-sm text-paper-mute">
              {locale === "ro" ? "De " : "By "}
              <Link href={localizeHref("/#about", locale)}>{SITE_AUTHOR}</Link>
            </p>
            <div className="guide-intro-actions">
              {!isApp && <RiskBadge level={entry.riskLevel} label={entry.riskLabelText} />}
              <a href="#setup-guide-title" className="guide-jump">
                {copy.guideTitle}
                <ArrowDown size={16} aria-hidden="true" />
              </a>
              {entry.editorialReview && <EntryReviewDate review={entry.editorialReview} locale={locale} />}
            </div>
          </div>

          {isApp && (
            <section className="guide-summary" aria-labelledby="app-risk-title">
              <div className="guide-summary-main">
                <h2 className="eyebrow" id="app-risk-title">{copy.riskLevel}</h2>
                <RiskBadge level={entry.riskLevel} label={entry.riskLabelText} />
                <RiskBar level={entry.riskLevel} position={entry.riskBarPosition} locale={locale} />
              </div>
              <dl className="guide-facts">
                {[
                  [copy.ageRating, entry.ageRating],
                  [copy.ageRecommendation, entry.ageRecommendation],
                  [copy.platform, entry.platform],
                  [copy.users, entry.userCount]
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="eyebrow">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </header>

        <div className="guide-body">
          <GuideContents label={copy.onThisPage} links={sections} />

          <div className="guide-content">
            {features?.length ? (
              <section aria-labelledby="app-features-title">
                <h2 id="app-features-title" tabIndex={-1}>{copy.featuresAndLimits}</h2>
                <dl className="guide-feature-list guide-panel">
                  {features.map((feature) => (
                    <div key={feature.label}>
                      <dt>{feature.label}</dt>
                      <dd>{feature.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            <section aria-labelledby="quick-actions-title">
              <h2 id="quick-actions-title" tabIndex={-1}>{copy.quickActions}</h2>
              <ol className="guide-actions guide-panel" role="list">
                {entry.quickActions.map((action, index) => (
                  <li key={action.title}>
                    <span className="guide-step-number" aria-hidden="true">{index + 1}</span>
                    <div className="min-w-0">
                      <h3>{action.title}</h3>
                      <p>{action.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {entry.callouts?.length ? (
              <div className="guide-callouts">
                {entry.callouts.map((callout) => (
                  <section
                    key={callout.title}
                    className={`guide-callout ${callout.type === "warning" ? "guide-callout-warning" : ""}`}
                  >
                    <h2>{getCalloutTitle(callout.title, locale)}</h2>
                    <p>{callout.description}</p>
                  </section>
                ))}
              </div>
            ) : null}

            <section aria-labelledby="watch-for-title">
              <h2 id="watch-for-title" tabIndex={-1}>{copy.warningTitle}</h2>
              <ul className="guide-warnings guide-panel" role="list">
                {entry.watchFor.map((item) => (
                  <li key={item.title}>
                    <RiskDot level={item.severity} />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3>{item.title}</h3>
                        <span className="eyebrow">{getRiskMeta(item.severity, locale).label}</span>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="setup-guide-title">
              <h2 id="setup-guide-title" tabIndex={-1}>{copy.guideTitle}</h2>
              {entry.setupGuideIntro && <p className="guide-section-intro">{entry.setupGuideIntro}</p>}
              <GuideSteps steps={entry.setupGuide} />
            </section>

            {entry.editorialReview && <EntrySources review={entry.editorialReview} locale={locale} />}
          </div>
        </div>

        {relatedEntries.length ? (
          <nav className="guide-related" aria-labelledby="related-pages-title">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <h2 id="related-pages-title">{copy.relatedTitle}</h2>
              <Link href={directoryHref} className="text-sm font-medium">
                {copy.backTo} {categoryLabel.toLowerCase()}
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
