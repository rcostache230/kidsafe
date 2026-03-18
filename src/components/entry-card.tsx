import Link from "next/link";

import { type Entry, getEntryHref } from "@/data/entries";

import { RiskDot } from "./risk-dot";

export function EntryCard({
  entry,
  compact = false
}: {
  entry: Entry;
  compact?: boolean;
}) {
  return (
    <Link
      href={getEntryHref(entry)}
      className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-slate-400 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-600"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 space-y-2">
          <div className="flex items-center gap-3">
            <RiskDot level={entry.riskLevel} />
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
        <span
          className="text-lg text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-700 dark:group-hover:text-slate-200"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </Link>
  );
}
