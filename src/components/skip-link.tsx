"use client";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/locale";

export function SkipLink() {
  const locale = getLocaleFromPathname(usePathname());
  return <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
    {locale === "ro" ? "Sari la conținut" : "Skip to content"}
  </a>;
}
