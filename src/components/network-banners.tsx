import { getNetworkCopy } from "@/data/network";
import { type Locale } from "@/lib/locale";

function BannerContent({ locale = "en" }: { locale?: Locale }) {
  const copy = getNetworkCopy(locale);

  return (
    <div className="grid gap-3">
      <section className="rounded-[24px] border border-[rgba(14,165,233,0.24)] bg-[rgba(14,165,233,0.08)] p-5 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.35)] dark:border-[rgba(56,189,248,0.30)] dark:bg-[rgba(8,47,73,0.52)]">
        <p className="text-sm leading-7 text-slate-800 dark:text-slate-100">{copy.infoBanner}</p>
      </section>
      <section className="rounded-[24px] border border-[rgba(217,119,6,0.24)] bg-[rgba(217,119,6,0.10)] p-5 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.35)] dark:border-[rgba(251,191,36,0.32)] dark:bg-[rgba(120,53,15,0.35)]">
        <p className="text-sm leading-7 text-slate-800 dark:text-slate-100">
          {copy.warningBanner}
        </p>
      </section>
    </div>
  );
}

export function NetworkBanners({
  locale = "en",
  collapsible = false
}: {
  locale?: Locale;
  collapsible?: boolean;
}) {
  const copy = getNetworkCopy(locale);

  if (!collapsible) {
    return <BannerContent locale={locale} />;
  }

  return (
    <details className="group overflow-hidden rounded-[24px] border border-[rgba(148,163,184,0.18)] bg-white/85 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/55">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-slate-800 transition-colors hover:text-teal-800 dark:text-slate-100 dark:hover:text-teal-200 [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true">ℹ️</span>
          {copy.contextSummaryLabel}
        </span>
        <span
          className="text-slate-400 transition-transform duration-200 group-open:rotate-180 dark:text-slate-500"
          aria-hidden="true"
        >
          ˅
        </span>
      </summary>
      <div className="border-t border-[rgba(148,163,184,0.16)] p-4 dark:border-slate-800 sm:p-5">
        <BannerContent locale={locale} />
      </div>
    </details>
  );
}
