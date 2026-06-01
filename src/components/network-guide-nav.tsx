import Link from "next/link";

import {
  getNetworkApproach,
  getNetworkCopy,
  getNetworkGuideHref,
  getNetworkGuidesByApproach,
  type NetworkGuide
} from "@/data/network";
import { type Locale } from "@/lib/locale";

export function NetworkGuideNav({
  guide,
  locale = "en"
}: {
  guide: NetworkGuide;
  locale?: Locale;
}) {
  const copy = getNetworkCopy(locale);
  const approach = getNetworkApproach(guide.approach, locale);
  const siblingGuides = getNetworkGuidesByApproach(guide.approach, locale);

  if (!approach || siblingGuides.length <= 1) {
    return null;
  }

  return (
    <nav
      aria-label={copy.siblingNavLabel(approach.name)}
      className="rounded-2xl border border-paper-line bg-white px-5 py-3 text-sm shadow-soft"
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2 leading-6">
        <span className="font-semibold text-paper-ink">
          {copy.siblingNavLabel(approach.name)}
        </span>
        {siblingGuides.map((item, index) => (
          <span key={item.slug} className="inline-flex items-center gap-2">
            {index > 0 ? (
              <span className="text-paper-ink/30" aria-hidden="true">
                ·
              </span>
            ) : null}
            {item.slug === guide.slug ? (
              <span className="font-semibold text-paper-ink">{item.name}</span>
            ) : (
              <Link
                href={getNetworkGuideHref(item.slug, locale)}
                className="text-paper-ink/80 no-underline hover:text-brand-700"
                style={{ textDecoration: "none" }}
              >
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
