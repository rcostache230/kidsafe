import Link from "next/link";

import { getDirectorySubtitle } from "@/lib/copy";
import { type Locale } from "@/lib/locale";
import { type Entry, getEntryHref, getRiskMeta } from "@/data/entries";

import { EntryIcon } from "./entry-icon";
import { RiskBadge } from "./risk-badge";

export function EntryCard({
  entry,
  compact = false,
  locale = "en"
}: {
  entry: Entry;
  compact?: boolean;
  locale?: Locale;
}) {
  const isAppCard = entry.category === "apps" || compact;
  const subtitle = getDirectorySubtitle(entry.slug, locale);
  const cardPadding = isAppCard ? "p-4" : "p-5";
  const parentFriendlyRiskLabel = entry.homeBadgeLabel ?? getRiskMeta(entry.riskLevel, locale).parentLabel;

  return (
    <Link
      href={getEntryHref(entry, locale)}
      className={`group block rounded-[24px] border border-[rgba(148,163,184,0.18)] bg-white/92 ${cardPadding} shadow-[0_22px_48px_-36px_rgba(15,23,42,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-[0_30px_60px_-42px_rgba(13,148,136,0.45)] dark:border-slate-800 dark:bg-slate-950/72 dark:hover:border-teal-500`}
    >
      {isAppCard ? (
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <EntryIcon entry={entry} />
            <RiskBadge
              level={entry.riskLevel}
              label={parentFriendlyRiskLabel}
              compact
              showDot={false}
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
              {entry.name}
            </h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              {entry.summary}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-4">
          <EntryIcon entry={entry} size="sm" />
          <div className="min-w-0 space-y-1.5">
            <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
              {entry.name}
            </h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              {subtitle ?? entry.summary}
            </p>
          </div>
        </div>
      )}
    </Link>
  );
}
