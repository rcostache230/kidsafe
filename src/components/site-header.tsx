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
  const blogHref = localizeHref("/blog", locale);

  const navLabels = {
    en: {
      guides: "Guides",
      blog: "Articles",
      about: "About"
    },
    ro: {
      guides: "Ghiduri",
      blog: "Articole",
      about: "Despre"
    }
  } as const;
  const nav = navLabels[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-paper-line bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div className="page-shell flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <Link
            href={homeHref}
            className="inline-flex items-center sm:hidden no-underline"
            aria-label="Digital Parents"
            style={{ textDecoration: "none" }}
          >
            <BrandMark />
          </Link>
          <div className="hidden sm:block">
            <BrandLogo href={homeHref} />
          </div>
        </div>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          <Link
            href={localizeHref("/#apps", locale)}
            className="rounded-full px-3.5 py-1.5 text-[15px] font-medium text-paper-ink/80 no-underline hover:bg-brand-50 hover:text-brand-700"
            style={{ textDecoration: "none" }}
          >
            {nav.guides}
          </Link>
          <Link
            href={blogHref}
            className="rounded-full px-3.5 py-1.5 text-[15px] font-medium text-paper-ink/80 no-underline hover:bg-brand-50 hover:text-brand-700"
            style={{ textDecoration: "none" }}
          >
            {nav.blog}
          </Link>
          <Link
            href={localizeHref("/#about", locale)}
            className="rounded-full px-3.5 py-1.5 text-[15px] font-medium text-paper-ink/80 no-underline hover:bg-brand-50 hover:text-brand-700"
            style={{ textDecoration: "none" }}
          >
            {nav.about}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={blogHref}
            className="inline-flex items-center rounded-full border border-paper-line bg-white px-3 py-1.5 text-sm font-medium text-paper-ink no-underline hover:border-brand-600 hover:text-brand-700 md:hidden"
            style={{ textDecoration: "none" }}
          >
            {nav.blog}
          </Link>
          <Link
            href={switchHref}
            hrefLang={otherLocale}
            className="inline-flex items-center rounded-full border border-paper-line bg-white px-3 py-1.5 text-sm font-semibold text-brand-700 no-underline hover:border-brand-600"
            style={{ textDecoration: "none" }}
            aria-label={otherLocale === "ro" ? "Switch to Romanian" : "Switch to English"}
          >
            {copy.header.switchTo}
          </Link>
        </div>
      </div>
    </header>
  );
}
