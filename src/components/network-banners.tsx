import { getNetworkCopy } from "@/data/network";
import { type Locale } from "@/lib/locale";

export function NetworkBanners({ locale = "en" }: { locale?: Locale }) {
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
