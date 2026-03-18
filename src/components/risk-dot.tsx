import { type RiskLevel, getRiskMeta } from "@/data/entries";

export function RiskDot({
  level,
  className = "",
  withRing = false
}: {
  level: RiskLevel;
  className?: string;
  withRing?: boolean;
}) {
  const meta = getRiskMeta(level);

  return (
    <span
      className={`inline-flex h-2.5 w-2.5 rounded-full ${meta.dotClass} ${className}`}
      style={withRing ? { boxShadow: meta.ringShadow } : undefined}
      aria-hidden="true"
    />
  );
}
