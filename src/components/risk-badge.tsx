import { type RiskLevel, getRiskMeta } from "@/data/entries";

import { RiskDot } from "./risk-dot";

const badgePaletteByLevel: Record<RiskLevel, string> = {
  critical: "bg-[#FCE7E5] text-[#9B1D17] border border-[#F5C4BF]",
  high: "bg-[#FBE2D5] text-[#A23E11] border border-[#F4C0A5]",
  medium: "bg-[#FCF1D1] text-[#7A5A0D] border border-[#F1E2A3]",
  low: "bg-[#D4ECE6] text-[#0D5849] border border-[#A6D7CC]"
};

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
  const palette = badgePaletteByLevel[level];
  const sizeClass = compact
    ? "rounded-[10px] px-2.5 py-1 text-[11px]"
    : "rounded-full px-3.5 py-1.5 text-sm";

  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold ${sizeClass} ${palette}`}
    >
      {showDot ? <RiskDot level={level} /> : null}
      {label ?? meta.label}
    </span>
  );
}
