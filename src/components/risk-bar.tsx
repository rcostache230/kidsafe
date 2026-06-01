import { getCopy } from "@/lib/copy";
import { type Locale } from "@/lib/locale";

export function RiskBar({
  position,
  locale = "en"
}: {
  position: number;
  locale?: Locale;
}) {
  const clamped = Math.max(0, Math.min(100, position));
  const copy = getCopy(locale);

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-full border border-paper-line">
        <div className="grid h-3 grid-cols-4">
          <span className="bg-[#D4ECE6]" />
          <span className="bg-[#FCF1D1]" />
          <span className="bg-[#FAE0D2]" />
          <span className="bg-[#F4C0A5]" />
        </div>
        <span
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-paper-ink shadow"
          style={{ left: `calc(${clamped}% - 8px)` }}
          aria-hidden="true"
        />
      </div>
      <div className="grid grid-cols-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper-ink/60">
        <span>{copy.riskBar.low}</span>
        <span>{copy.riskBar.medium}</span>
        <span>{copy.riskBar.high}</span>
        <span>{copy.riskBar.critical}</span>
      </div>
    </div>
  );
}
