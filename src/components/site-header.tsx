"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo, BrandMark } from "@/components/brand";
import { getCopy } from "@/lib/copy";
import {
  getLocaleFromPathname,
  getOppositeLocale,
  localizeHref,
  stripLocalePrefix
} from "@/lib/locale";

export function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const otherLocale = getOppositeLocale(locale);
  const copy = getCopy(locale);
  const basePath = stripLocalePrefix(pathname);
  const homeHref = localizeHref("/", locale);
  const switchHref = localizeHref(basePath, otherLocale);

  return (
    <header className="border-b border-[rgba(148,163,184,0.16)] bg-[rgba(250,250,248,0.92)] backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="page-shell flex items-center justify-between gap-4 py-5">
        <div className="flex items-center gap-3">
          <Link href={homeHref} className="inline-flex items-center sm:hidden" aria-label="Digital Parents">
            <BrandMark />
          </Link>
          <div className="hidden sm:block">
            <BrandLogo href={homeHref} />
          </div>
        </div>

        <Link
          href={switchHref}
          hrefLang={otherLocale}
          className="inline-flex items-center rounded-full border border-[rgba(20,184,166,0.18)] bg-white/85 px-3 py-1.5 text-sm font-semibold text-teal-700 shadow-[0_14px_28px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-teal-300 hover:text-teal-800 dark:border-slate-700 dark:bg-slate-900/70 dark:text-teal-300 dark:hover:border-teal-500 dark:hover:text-teal-200"
        >
          {copy.header.switchTo}
        </Link>
      </div>
    </header>
  );
}
