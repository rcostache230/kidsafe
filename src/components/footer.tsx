"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getCopy } from "@/lib/copy";
import { getLocaleFromPathname, localizeHref } from "@/lib/locale";

export function Footer() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = getCopy(locale);
  const blogLabel = locale === "ro" ? "Articole" : "Articles";

  useEffect(() => {
    if (copyState === "idle") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCopyState("idle");
    }, 2200);

    return () => window.clearTimeout(timeoutId);
  }, [copyState]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(
        new URL(localizeHref("/", locale), window.location.origin).toString()
      );
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  return (
    <footer className="mt-16 border-t border-paper-line bg-paper-200/40">
      <div className="page-shell space-y-8 py-12">
        <p className="max-w-3xl font-display text-xl italic leading-relaxed text-paper-ink/90">
          {copy.footer.quote}
        </p>

        <nav
          aria-label="Footer"
          className="flex flex-col gap-3 text-sm font-medium sm:flex-row sm:flex-wrap sm:items-center sm:gap-6"
        >
          <Link
            href={localizeHref("/#apps", locale)}
            className="text-paper-ink/85 no-underline hover:text-brand-700"
            style={{ textDecoration: "none" }}
          >
            {copy.footer.apps}
          </Link>
          <Link
            href={localizeHref("/#operating-systems", locale)}
            className="text-paper-ink/85 no-underline hover:text-brand-700"
            style={{ textDecoration: "none" }}
          >
            {copy.footer.os}
          </Link>
          <Link
            href={localizeHref("/#devices", locale)}
            className="text-paper-ink/85 no-underline hover:text-brand-700"
            style={{ textDecoration: "none" }}
          >
            {copy.footer.devices}
          </Link>
          <Link
            href={localizeHref("/#network", locale)}
            className="text-paper-ink/85 no-underline hover:text-brand-700"
            style={{ textDecoration: "none" }}
          >
            {copy.footer.network}
          </Link>
          <Link
            href={localizeHref("/blog", locale)}
            className="text-paper-ink/85 no-underline hover:text-brand-700"
            style={{ textDecoration: "none" }}
          >
            {blogLabel}
          </Link>
          <Link
            href={localizeHref("/#about", locale)}
            className="text-paper-ink/85 no-underline hover:text-brand-700"
            style={{ textDecoration: "none" }}
          >
            {copy.footer.about}
          </Link>
        </nav>

        <div className="flex flex-col gap-4 rounded-card border border-paper-line bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="space-y-1">
            <p className="font-display text-lg font-semibold text-paper-ink">
              {copy.footer.shareTitle}
            </p>
            <p className="text-sm text-paper-ink/75">
              {copy.footer.shareBody}
            </p>
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={handleCopy}
              className="btn-primary"
            >
              {copy.footer.copy}
            </button>
            {copyState !== "idle" ? (
              <span
                role="status"
                aria-live="polite"
                className="absolute right-0 top-full mt-2 whitespace-nowrap rounded-full bg-paper-ink px-3 py-1 text-xs font-medium text-white shadow-lift"
              >
                {copyState === "copied" ? copy.footer.copied : copy.footer.copyFailed}
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-paper-line pt-6 text-sm text-paper-ink/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{copy.footer.copyright}</p>
          <a
            className="font-medium text-brand-700 no-underline hover:text-brand-600"
            href="https://www.linkedin.com/in/rcostache/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            {copy.footer.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
}
