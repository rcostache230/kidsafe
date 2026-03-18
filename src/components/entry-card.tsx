import Link from "next/link";

import { type Entry, getEntryHref, getRiskMeta } from "@/data/entries";

import { RiskBadge } from "./risk-badge";

export function EntryCard({
  entry,
  compact = false
}: {
  entry: Entry;
  compact?: boolean;
}) {
  const risk = getRiskMeta(entry.riskLevel);

  return (
    <Link
      href={getEntryHref(entry)}
      className="group block rounded-xl border border-slate-200 border-l-[3px] bg-white p-5 shadow-sm transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:border-slate-800 dark:bg-slate-900/60 dark:hover:shadow-[0_2px_10px_rgba(0,0,0,0.24)]"
      style={{ borderLeftColor: risk.hexColor }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold text-slate-950 dark:text-white">
              {entry.name}
            </h3>
          </div>
          {!compact ? (
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              {entry.summary}
            </p>
          ) : null}
        </div>
        <span className="flex-none">
          <RiskBadge level={entry.riskLevel} compact showDot={false} />
        </span>
      </div>
    </Link>
  );
}
