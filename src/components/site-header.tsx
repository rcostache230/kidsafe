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
  const navItems = [
    { href: localizeHref("/#apps", locale), label: nav.guides },
    { href: blogHref, label: nav.blog },
    { href: localizeHref("/#about", locale), label: nav.about }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-paper-line bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div className="page-shell py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href={homeHref}
              className="inline-flex items-center sm:hidden no-underline"
              aria-label="digitalparents.xyz"
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 text-[15px] font-medium text-paper-ink/80 no-underline hover:bg-brand-50 hover:text-brand-700"
                style={{ textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
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

        <nav
          aria-label="Primary mobile"
          className="grid grid-cols-3 gap-2 pt-3 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-paper-line bg-white px-2 text-center text-sm font-medium text-paper-ink no-underline shadow-soft hover:border-brand-600 hover:text-brand-700"
              style={{ textDecoration: "none" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
