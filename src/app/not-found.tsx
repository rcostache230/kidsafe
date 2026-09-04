"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, localizeHref } from "@/lib/locale";

export default function NotFound() {
  const locale = getLocaleFromPathname(usePathname());
  return <div className="page-shell py-16" lang={locale}>
    <div className="mx-auto max-w-2xl space-y-5">
      <p className="eyebrow">404</p>
      <h1 className="font-display text-4xl font-semibold">{locale === "ro" ? "Nu am găsit acest ghid." : "We couldn't find that guide."}</h1>
      <p>{locale === "ro" ? "Caută aplicația sau dispozitivul pe pagina cu ghiduri." : "Search for the app or device in the guide directory."}</p>
      <Link href={localizeHref("/", locale)} className="btn-primary">{locale === "ro" ? "Înapoi la ghiduri" : "Back to guides"}</Link>
    </div>
  </div>;
}
