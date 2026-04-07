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
      className="group block rounded-[24px] border border-[rgba(148,163,184,0.18)] bg-white/92 p-5 shadow-[0_22px_48px_-36px_rgba(15,23,42,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-[0_30px_60px_-42px_rgba(13,148,136,0.45)] dark:border-slate-800 dark:bg-slate-950/72 dark:hover:border-teal-500"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-[rgba(20,184,166,0.18)] bg-[rgba(20,184,166,0.08)] px-3 py-1 text-xs font-semibold text-teal-700 dark:border-[rgba(20,184,166,0.30)] dark:bg-[rgba(20,184,166,0.16)] dark:text-teal-300">
            {copy.difficultyLabel}: {guide.difficulty}
          </span>
          <span className="inline-flex items-center rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(248,250,252,0.88)] px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
            {copy.costLabel}: {guide.cost}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
            {guide.name}
          </h3>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            {guide.description}
          </p>
        </div>

        <div className="grid gap-3">
          {setupTime ? (
            <div className="rounded-2xl border border-[rgba(148,163,184,0.16)] bg-white/95 p-3 dark:border-slate-800 dark:bg-slate-950/60">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {getNetworkMetricLabel("Setup time", locale)}
              </p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{setupTime}</p>
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
