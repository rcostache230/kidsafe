"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

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
      await navigator.clipboard.writeText(new URL("/", window.location.origin).toString());
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  return (
    <footer className="border-t border-[rgba(148,163,184,0.16)] bg-[rgba(236,253,250,0.48)] py-10 dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="page-shell space-y-6">
        <p className="max-w-3xl text-sm italic leading-7 text-slate-700 dark:text-slate-200">
          &quot;Settings matter most when they are paired with routines, visible
          screens, and regular conversations.&quot;
        </p>

        <nav className="flex flex-col gap-3 text-sm font-medium sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
          <Link href="/#apps">Apps</Link>
          <Link href="/#operating-systems">Operating Systems</Link>
          <Link href="/#devices">Devices</Link>
          <Link href="/#about">About</Link>
        </nav>

        <div className="flex flex-col gap-4 rounded-[24px] border border-[rgba(20,184,166,0.14)] bg-white/88 p-4 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.42)] dark:border-slate-800 dark:bg-slate-900/60 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Know a parent who needs this? Share this site.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Send them the homepage so they can jump straight to the guide they
              need.
            </p>
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center rounded-full bg-teal-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-800 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
            >
              Copy link
            </button>
            {copyState !== "idle" ? (
              <span
                role="status"
                aria-live="polite"
                className="absolute right-0 top-full mt-2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-lg dark:bg-white dark:text-slate-900"
              >
                {copyState === "copied" ? "Link copied" : "Couldn't copy"}
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[rgba(148,163,184,0.16)] pt-5 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Digital Parents. Independent project by Razvan Costache.</p>
          <a
            className="font-medium"
            href="https://www.linkedin.com/in/rcostache/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn →
          </a>
        </div>
      </div>
    </footer>
  );
}
