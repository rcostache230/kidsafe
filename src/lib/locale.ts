export type Locale = "en" | "ro";

export const defaultLocale: Locale = "ro";

export function getLocaleFromPathname(pathname?: string | null): Locale {
  if (
    pathname === "/en" ||
    pathname?.startsWith("/en/") ||
    pathname === "/blog/en" ||
    pathname?.startsWith("/blog/en/")
  ) {
    return "en";
  }

  return "ro";
}

export function stripLocalePrefix(pathname?: string | null) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  if (pathname === "/en" || pathname === "/ro") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.slice(3);
  }

  if (pathname.startsWith("/ro/")) {
    return pathname.slice(3);
  }

  if (pathname === "/blog/en") {
    return "/blog";
  }

  if (pathname.startsWith("/blog/en/")) {
    return `/blog${pathname.slice(8)}`;
  }

  return pathname;
}

export function localizeHref(href: string, locale: Locale) {
  if (href === "/blog" || href.startsWith("/blog/")) {
    if (locale === "en") {
      return href === "/blog" ? "/blog/en" : href.replace(/^\/blog/, "/blog/en");
    }

    return href.replace(/^\/blog\/en/, "/blog").replace(/^\/blog\/ro/, "/blog");
  }

  if (href === "/") {
    return locale === "en" ? "/en" : "/";
  }

  if (locale === "en") {
    return href.startsWith("/en") ? href : `/en${href}`;
  }

  return href.replace(/^\/en/, "").replace(/^\/ro/, "") || "/";
}

export function getOppositeLocale(locale: Locale): Locale {
  return locale === "en" ? "ro" : "en";
}
