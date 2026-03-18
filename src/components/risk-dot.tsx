import { type RiskLevel, getRiskMeta } from "@/data/entries";

export function RiskDot({ level }: { level: RiskLevel }) {
  const meta = getRiskMeta(level);

  return <span className={`inline-flex h-2.5 w-2.5 rounded-full ${meta.dotClass}`} aria-hidden="true" />;
}
