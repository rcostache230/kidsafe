import Link from "next/link";

import {
  getFirstGuideForApproach,
  getNetworkApproaches,
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
  const approaches = getNetworkApproaches();
  const currentApproach = getNetworkApproach(guide.approach);
  const siblingGuides = getNetworkGuidesByApproach(guide.approach);

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          {copy.selectorEyebrow}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
          {copy.selectorTitle}
        </h2>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
          {copy.selectorLevelOne}
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {approaches.map((approach) => {
            const firstGuide = getFirstGuideForApproach(approach.id);
            const active = approach.id === guide.approach;

            return firstGuide ? (
              <Link
                key={approach.id}
                href={getNetworkGuideHref(firstGuide.slug, locale)}
                className={`rounded-[22px] border p-4 text-left transition-all duration-200 ${
                  active
                    ? "border-teal-300 bg-[rgba(20,184,166,0.10)] shadow-[0_18px_40px_-34px_rgba(13,148,136,0.45)] dark:border-teal-500 dark:bg-[rgba(20,184,166,0.18)]"
                    : "border-[rgba(148,163,184,0.18)] bg-white/88 hover:border-teal-300 hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-teal-500"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl" aria-hidden="true">
                    {approach.icon}
                  </span>
                  <div className="space-y-1.5">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">
                      {approach.name}
                    </p>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {approach.description}
                    </p>
                  </div>
                </div>
              </Link>
            ) : null;
          })}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
          {copy.selectorLevelTwo}
        </p>
        <div className="flex flex-wrap gap-2">
          {siblingGuides.map((item) => {
            const active = item.slug === guide.slug;

            return (
              <Link
                key={item.slug}
                href={getNetworkGuideHref(item.slug, locale)}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-teal-700 text-white dark:bg-teal-500 dark:text-slate-950"
                    : "border border-[rgba(148,163,184,0.18)] bg-white/88 text-slate-700 hover:border-teal-300 hover:text-teal-800 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:text-teal-200"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        {currentApproach ? (
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            {currentApproach.description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
