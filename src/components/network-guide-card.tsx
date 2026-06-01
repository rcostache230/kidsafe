import Link from "next/link";

import {
  getNetworkCopy,
  getNetworkGuideHref,
  getNetworkMetricLabel,
  type NetworkGuide
} from "@/data/network";
import { type Locale } from "@/lib/locale";

function getMetric(guide: NetworkGuide, label: string) {
  return guide.coverageMetrics.find((metric) => metric.label === label)?.value;
}

export function NetworkGuideCard({
  guide,
  locale = "en"
}: {
  guide: NetworkGuide;
  locale?: Locale;
}) {
  const copy = getNetworkCopy(locale);
  const setupTime = getMetric(guide, "Setup time");

  return (
    <Link
      href={getNetworkGuideHref(guide.slug, locale)}
      className="card card-hover block p-5 no-underline"
      style={{ textDecoration: "none" }}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {copy.difficultyLabel}: {guide.difficulty}
          </span>
          <span className="inline-flex items-center rounded-full border border-paper-line bg-paper-50 px-3 py-1 text-xs font-semibold text-paper-ink/80">
            {copy.costLabel}: {guide.cost}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="font-display text-xl font-semibold tracking-tight text-paper-ink">
            {guide.name}
          </h3>
          <p className="text-[15px] leading-7 text-paper-ink/75">{guide.description}</p>
        </div>

        {setupTime ? (
          <div className="rounded-xl border border-paper-line bg-paper-50 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paper-ink/60">
              {getNetworkMetricLabel("Setup time", locale)}
            </p>
            <p className="mt-1 text-sm text-paper-ink/85">{setupTime}</p>
          </div>
        ) : null}
      </div>
    </Link>
  );
}
