import { getNetworkCopy } from "@/data/network";
import { type Locale } from "@/lib/locale";

function BannerContent({ locale = "en" }: { locale?: Locale }) {
  const copy = getNetworkCopy(locale);

  return (
    <div className="grid gap-3">
      <section className="rounded-2xl border border-brand-100 bg-brand-50 p-5">
        <p className="text-[15px] leading-7 text-paper-ink/90">{copy.infoBanner}</p>
      </section>
      <section className="rounded-2xl border border-accent-200 bg-accent-50 p-5">
        <p className="text-[15px] leading-7 text-paper-ink/90">{copy.warningBanner}</p>
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
    <details className="group overflow-hidden rounded-2xl border border-paper-line bg-white shadow-soft">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-paper-ink transition-colors hover:text-brand-700 [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true">ℹ️</span>
          {copy.contextSummaryLabel}
        </span>
        <span
          className="text-paper-ink/40 transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        >
          ˅
        </span>
      </summary>
      <div className="border-t border-paper-line p-4 sm:p-5">
        <BannerContent locale={locale} />
      </div>
    </details>
  );
}
