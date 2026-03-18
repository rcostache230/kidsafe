export function RiskBar({ position }: { position: number }) {
  const clamped = Math.max(0, Math.min(100, position));

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-full border border-slate-200 dark:border-slate-700">
        <div className="grid h-3 grid-cols-4">
          <span className="bg-[#E1F5EE]" />
          <span className="bg-[#FAEEDA]" />
          <span className="bg-[#FCEBEB]" />
          <span className="bg-[#FCEBEB]" />
        </div>
        <span
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-slate-950 shadow dark:border-slate-900 dark:bg-white"
          style={{ left: `calc(${clamped}% - 8px)` }}
        />
      </div>
      <div className="grid grid-cols-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
        <span>Low</span>
        <span>Medium</span>
        <span>High</span>
        <span>Critical</span>
      </div>
    </div>
  );
}
