import { type RiskLevel, getRiskMeta } from "@/data/entries";

import { RiskDot } from "./risk-dot";

export function RiskBadge({
  level,
  label
}: {
  level: RiskLevel;
  label?: string;
}) {
  const meta = getRiskMeta(level);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${meta.badgeClass}`}
    >
      <RiskDot level={level} />
      {label ?? meta.label}
    </span>
  );
}
