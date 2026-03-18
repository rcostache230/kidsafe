import { type RiskLevel, getRiskMeta } from "@/data/entries";

import { RiskDot } from "./risk-dot";

export function RiskBadge({
  level,
  label,
  compact = false,
  showDot = true
}: {
  level: RiskLevel;
  label?: string;
  compact?: boolean;
  showDot?: boolean;
}) {
  const meta = getRiskMeta(level);
  const sizeClass = compact
    ? "rounded-[10px] px-2.5 py-1 text-[11px]"
    : "rounded-full px-3 py-1 text-sm";

  return (
    <span className={`inline-flex items-center gap-2 font-semibold ${sizeClass} ${meta.badgeClass}`}>
      {showDot ? <RiskDot level={level} /> : null}
      {label ?? meta.label}
    </span>
  );
}
