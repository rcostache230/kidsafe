import type { Metadata } from "next";

import { IconApps, IconDevices, IconOS } from "@/components/category-icons";
import { EntryCard } from "@/components/entry-card";
import { RiskDot } from "@/components/risk-dot";
import {
  categoryLabels,
  getEntriesByCategory,
  riskMeta,
  type RiskLevel
} from "@/data/entries";
import { createHomeMetadata } from "@/lib/site";

export const metadata: Metadata = createHomeMetadata();

const legendOrder: RiskLevel[] = ["critical", "high", "medium", "low"];

export default function HomePage() {
  const devices = getEntriesByCategory("devices");
  const operatingSystems = getEntriesByCategory("os");
  const apps = getEntriesByCategory("apps");

  return (
    <div className="page-shell py-10 sm:py-14">
      <div className="space-y-14">
        <section className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              A clearer way to judge digital risk at home.
            </h1>
            <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
              Browse dedicated pages for the devices, operating systems, and apps
              your child uses so you can spot the risks quickly and start with the
              most useful changes.
            </p>
          </div>

          <div className="inline-flex max-w-full flex-wrap gap-3 rounded-full bg-slate-100/90 px-4 py-3 dark:bg-slate-900/70">
            {legendOrder.map((level) => (
              <span
                key={level}
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${riskMeta[level].textClass}`}
              >
                <RiskDot level={level} withRing />
                {riskMeta[level].label}
              </span>
            ))}
          </div>
        </section>

        <section id="devices" className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="category-icon inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-300">
              <IconDevices className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {categoryLabels.devices}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {devices.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </section>

        <section id="operating-systems" className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="category-icon inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-300">
              <IconOS className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {categoryLabels.os}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {operatingSystems.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </section>

        <section id="apps" className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="category-icon inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-300">
              <IconApps className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {categoryLabels.apps}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} compact />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
