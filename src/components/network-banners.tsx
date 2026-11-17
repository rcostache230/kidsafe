import { Info } from "@phosphor-icons/react/dist/ssr";
import { getNetworkCopy } from "@/data/network";
import { type Locale } from "@/lib/locale";

function BannerContent({ locale = "en" }: { locale?: Locale }) {
  const copy = getNetworkCopy(locale);

  return (
    <div className="guide-callouts">
      <div className="guide-callout">
        <p>{copy.infoBanner}</p>
      </div>
      <div className="guide-callout guide-callout-warning">
        <p>{copy.warningBanner}</p>
      </div>
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
    <details className="group overflow-hidden rounded-card border border-paper-line bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-paper-ink transition-colors hover:text-brand-700 [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <Info aria-hidden="true" size={18} />
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
