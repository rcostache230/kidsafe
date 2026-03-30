"use client";

import Link from "next/link";
import { useState } from "react";

import { IconApps, IconDevices, IconOS } from "@/components/category-icons";
import { EntryCard } from "@/components/entry-card";
import { getEntriesByCategory, type Entry } from "@/data/entries";

const quickPicks = [
  {
    href: "/os/ios",
    icon: "🍎",
    label: "My child just got an iPhone"
  },
  {
    href: "/os/android",
    icon: "🤖",
    label: "My child just got an Android phone"
  },
  {
    href: "/devices/tablet",
    icon: "📋",
    label: "My child just got a tablet"
  },
  {
    href: "/devices/laptop",
    icon: "💻",
    label: "My child just got a laptop"
  }
];

function filterEntries(entries: Entry[], query: string) {
  if (!query.trim()) {
    return entries;
  }

  const normalized = query.trim().toLowerCase();
  return entries.filter((entry) => entry.name.toLowerCase().includes(normalized));
}

export function HomeDirectory() {
  const [query, setQuery] = useState("");

  const apps = filterEntries(getEntriesByCategory("apps"), query);
  const operatingSystems = filterEntries(getEntriesByCategory("os"), query);
  const devices = filterEntries(getEntriesByCategory("devices"), query);
  const hasResults = apps.length > 0 || operatingSystems.length > 0 || devices.length > 0;

  return (
    <div className="page-shell py-10 sm:py-14">
      <div className="space-y-8 sm:space-y-10">
        <section className="overflow-hidden rounded-[32px] border border-[rgba(20,184,166,0.10)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(240,253,250,0.92))] p-6 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,118,110,0.18))] sm:p-8 lg:p-10">
          <div className="max-w-4xl space-y-6">
            <div className="space-y-4">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                Digital safety for real families
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Your child&apos;s apps, devices, and settings — explained in plain
                language.
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                Step-by-step safety guides from a cybersecurity professional and
                parent. No jargon, no scare tactics — just what to do first.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {quickPicks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-[76px] items-center gap-3 rounded-[22px] border border-[rgba(20,184,166,0.14)] bg-white/90 px-4 py-3 text-left text-sm font-medium text-slate-800 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-teal-400"
                >
                  <span className="text-xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="leading-5">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <label
            htmlFor="directory-search"
            className="text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Find the guide you need
          </label>
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base"
            >
              🔍
            </span>
            <input
              id="directory-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for an app, device, or system..."
              className="w-full rounded-full border border-[rgba(148,163,184,0.24)] bg-white/90 py-3.5 pl-12 pr-4 text-sm text-slate-900 shadow-[0_16px_40px_-36px_rgba(15,23,42,0.45)] outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-900/40"
            />
          </div>
        </section>

        {!hasResults ? (
          <section className="rounded-[28px] border border-[rgba(148,163,184,0.18)] bg-white/85 p-6 text-sm leading-7 text-slate-600 shadow-[0_18px_48px_-40px_rgba(15,23,42,0.4)] dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
            No matches yet. Try searching for an app or device name like
            &nbsp;
            <span className="font-semibold text-slate-900 dark:text-white">
              Roblox
            </span>
            ,
            &nbsp;
            <span className="font-semibold text-slate-900 dark:text-white">
              Android
            </span>
            , or
            &nbsp;
            <span className="font-semibold text-slate-900 dark:text-white">
              Laptop
            </span>
            .
          </section>
        ) : null}

        {apps.length ? (
          <section
            id="apps"
            className="scroll-mt-24 space-y-5 rounded-[28px] border border-[rgba(148,163,184,0.14)] bg-white/80 p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.38)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/55 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="category-icon inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                <IconApps className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  Apps your child probably uses
                </h2>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Start with the apps that shape how they talk, scroll, play, and
                  spend time online.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {apps.map((entry) => (
                <EntryCard key={entry.slug} entry={entry} compact />
              ))}
            </div>
          </section>
        ) : null}

        {operatingSystems.length ? (
          <section
            id="operating-systems"
            className="scroll-mt-24 space-y-5 rounded-[28px] border border-[rgba(148,163,184,0.14)] bg-white/80 p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.38)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/55 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="category-icon inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                <IconOS className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  Lock down the operating system
                </h2>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  These built-in controls do the most work before any app-specific
                  setting does.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {operatingSystems.map((entry) => (
                <EntryCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </section>
        ) : null}

        {devices.length ? (
          <section
            id="devices"
            className="scroll-mt-24 space-y-5 rounded-[28px] border border-[rgba(148,163,184,0.14)] bg-white/80 p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.38)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/55 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="category-icon inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                <IconDevices className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  Device setup guides
                </h2>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Use these first-time setup checklists when a new device enters the
                  house.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {devices.map((entry) => (
                <EntryCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </section>
        ) : null}

        <section
          id="about"
          className="scroll-mt-24 rounded-[30px] border border-[rgba(20,184,166,0.12)] bg-[linear-gradient(135deg,rgba(240,253,250,0.88),rgba(255,255,255,0.94))] p-6 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.42)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,rgba(15,118,110,0.14),rgba(15,23,42,0.96))] sm:p-8"
        >
          <div className="grid gap-6 md:grid-cols-[auto,1fr] md:items-start">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/80 bg-white text-xl font-semibold text-teal-700 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.4)] dark:border-slate-700 dark:bg-slate-900 dark:text-teal-300">
              RC
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  Built by a parent who works in cybersecurity
                </h2>
                <p className="text-base leading-8 text-slate-700 dark:text-slate-200">
                  I&apos;m Razvan Costache — Director of Innovation at Bitdefender
                  with 14+ years in consumer cybersecurity. I built this guide
                  because I needed it myself. When my child got their first device,
                  I wanted one place with clear answers — not 50 blog posts and a
                  YouTube rabbit hole.
                </p>
                <p className="text-base leading-8 text-slate-700 dark:text-slate-200">
                  Every guide is written from direct experience with these
                  platforms and informed by professional threat research.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/rcostache/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-teal-200 bg-white px-4 py-2.5 text-sm font-medium text-teal-700 shadow-[0_16px_36px_-28px_rgba(13,148,136,0.6)] transition-colors hover:border-teal-300 hover:text-teal-800 dark:border-teal-800 dark:bg-slate-900 dark:text-teal-300 dark:hover:border-teal-700"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
