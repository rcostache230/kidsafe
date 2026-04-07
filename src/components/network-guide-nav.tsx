import Link from "next/link";

import {
  getNetworkApproach,
  getNetworkCopy,
  getNetworkGuideHref,
  getNetworkGuidesByApproach,
  type NetworkGuide
} from "@/data/network";
import { type Locale } from "@/lib/locale";

export function NetworkGuideNav({
  guide,
  locale = "en"
}: {
  guide: NetworkGuide;
  locale?: Locale;
}) {
  const copy = getNetworkCopy(locale);
  const approach = getNetworkApproach(guide.approach, locale);
  const siblingGuides = getNetworkGuidesByApproach(guide.approach, locale);

  if (!approach || siblingGuides.length <= 1) {
    return null;
  }

  return (
    <nav
      aria-label={copy.siblingNavLabel(approach.name)}
      className="rounded-[22px] border border-[rgba(148,163,184,0.16)] bg-white/80 px-4 py-3 text-sm shadow-[0_16px_44px_-38px_rgba(15,23,42,0.45)] dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2 leading-6">
        <span className="font-semibold text-slate-950 dark:text-white">
          {copy.siblingNavLabel(approach.name)}
        </span>
        {siblingGuides.map((item, index) => (
          <span key={item.slug} className="inline-flex items-center gap-2">
            {index > 0 ? (
              <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">
                ·
              </span>
            ) : null}
            {item.slug === guide.slug ? (
              <span className="font-semibold text-slate-950 dark:text-white">{item.name}</span>
            ) : (
              <Link
                href={getNetworkGuideHref(item.slug, locale)}
                className="text-slate-700 transition-colors hover:text-teal-800 dark:text-slate-300 dark:hover:text-teal-200"
              >
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
