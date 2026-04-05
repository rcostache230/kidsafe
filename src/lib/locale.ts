export type Locale = "en" | "ro";

export const defaultLocale: Locale = "en";

export function getLocaleFromPathname(pathname?: string | null): Locale {
  if (pathname === "/ro" || pathname?.startsWith("/ro/")) {
    return "ro";
  }

  return "en";
}

export function stripLocalePrefix(pathname?: string | null) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  if (pathname === "/ro") {
    return "/";
  }

  if (pathname.startsWith("/ro/")) {
    return pathname.slice(3);
  }

  return pathname;
}

export function localizeHref(href: string, locale: Locale) {
  if (locale === "en") {
    return href;
  }

  if (href === "/") {
    return "/ro";
  }

  return href.startsWith("/ro") ? href : `/ro${href}`;
}

export function getOppositeLocale(locale: Locale): Locale {
  return locale === "en" ? "ro" : "en";
}
