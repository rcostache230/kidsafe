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
      className="card card-hover block p-5 no-underline"
      style={{ textDecoration: "none" }}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-paper-line bg-paper-50 text-2xl"
            aria-hidden="true"
          >
            {approach.icon}
          </span>
          <span className="inline-flex items-center rounded-[10px] bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
            {copy.guideCount(guideCount)}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-xl font-semibold tracking-tight text-paper-ink">
            {approach.name}
          </h3>
          <p className="text-[15px] leading-7 text-paper-ink/75">
            {approach.homepageDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
