import Link from "next/link";

import {
  getNetworkCopy,
  getNetworkGuidesByApproach,
  getNetworkOverviewHref,
  type NetworkApproach
} from "@/data/network";
import { type Locale } from "@/lib/locale";

export function NetworkApproachCard({
  approach,
  locale = "en"
}: {
  approach: NetworkApproach;
  locale?: Locale;
}) {
  const copy = getNetworkCopy(locale);
  const guideCount = getNetworkGuidesByApproach(approach.id).length;

  return (
    <Link
      href={getNetworkOverviewHref(locale, approach.id)}
      className="group block rounded-[24px] border border-[rgba(148,163,184,0.18)] bg-white/92 p-4 shadow-[0_22px_48px_-36px_rgba(15,23,42,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-[0_30px_60px_-42px_rgba(13,148,136,0.45)] dark:border-slate-800 dark:bg-slate-950/72 dark:hover:border-teal-500"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(236,253,250,0.92))] text-2xl shadow-[0_16px_30px_-22px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(15,118,110,0.18))]"
            aria-hidden="true"
          >
            {approach.icon}
          </span>
          <span className="inline-flex items-center rounded-[10px] bg-[rgba(20,184,166,0.10)] px-2.5 py-1 text-[11px] font-semibold text-teal-700 dark:bg-[rgba(20,184,166,0.18)] dark:text-teal-300">
            {copy.guideCount(guideCount)}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
            {approach.name}
          </h3>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            {approach.homepageDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
