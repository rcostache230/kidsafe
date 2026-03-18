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
      <div className="space-y-4 sm:space-y-5">
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
        </section>

        <section
          id="apps"
          className="space-y-5 rounded-2xl bg-slate-50 p-5 dark:bg-slate-900"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="category-icon text-slate-500 opacity-50 dark:text-slate-400">
                <IconApps className="h-4 w-4" />
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {categoryLabels.apps}
              </h2>
            </div>
            <div className="flex flex-wrap gap-1">
              {legendOrder.map((level) => (
                <span
                  key={level}
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  <RiskDot level={level} className="h-1.5 w-1.5" />
                  <span className={riskMeta[level].textClass}>{riskMeta[level].label}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} compact />
            ))}
          </div>
        </section>

        <section
          id="operating-systems"
          className="space-y-5 rounded-2xl bg-slate-50 p-5 dark:bg-slate-900"
        >
          <div className="flex items-center gap-2.5">
            <span className="category-icon text-slate-500 opacity-50 dark:text-slate-400">
              <IconOS className="h-4 w-4" />
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

        <section
          id="devices"
          className="space-y-5 rounded-2xl bg-slate-50 p-5 dark:bg-slate-900"
        >
          <div className="flex items-center gap-2.5">
            <span className="category-icon text-slate-500 opacity-50 dark:text-slate-400">
              <IconDevices className="h-4 w-4" />
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
      </div>
    </div>
  );
}
