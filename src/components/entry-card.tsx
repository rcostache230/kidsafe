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
  const parentFriendlyRiskLabel =
    entry.homeBadgeLabel ?? getRiskMeta(entry.riskLevel, locale).parentLabel;

  return (
    <Link
      href={getEntryHref(entry, locale)}
      className="card card-hover block p-5 no-underline"
      style={{ textDecoration: "none" }}
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
            <h3 className="font-display text-xl font-semibold tracking-tight text-paper-ink">
              {entry.name}
            </h3>
            <p className="text-[15px] leading-7 text-paper-ink/75">{entry.summary}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-4">
          <EntryIcon entry={entry} size="sm" />
          <div className="min-w-0 space-y-1.5">
            <h3 className="font-display text-xl font-semibold tracking-tight text-paper-ink">
              {entry.name}
            </h3>
            <p className="text-[15px] leading-7 text-paper-ink/75">
              {subtitle ?? entry.summary}
            </p>
          </div>
        </div>
      )}
    </Link>
  );
}
