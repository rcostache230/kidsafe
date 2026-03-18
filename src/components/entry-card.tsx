import Link from "next/link";

import { type Entry, getEntryHref } from "@/data/entries";

import {
  IconDeviceDesktop,
  IconDeviceLaptop,
  IconDeviceSmartphone,
  IconDeviceTablet,
  IconOSAndroid,
  IconOSIos,
  IconOSMac,
  IconOSWindows
} from "./category-icons";
import { RiskDot } from "./risk-dot";

const directorySubtitles: Partial<Record<Entry["slug"], string>> = {
  smartphone: "Setup guide + 8 risk flags",
  tablet: "Setup guide + 5 risk flags",
  laptop: "Setup guide + 6 risk flags",
  desktop: "Setup guide + 4 risk flags",
  ios: "Screen Time + Family controls",
  android: "Family Link + Digital Wellbeing",
  windows: "Family Safety setup",
  macos: "Screen Time on desktop"
};

function CardIcon({ entry }: { entry: Entry }) {
  const className = "text-slate-600 dark:text-slate-300";

  switch (entry.slug) {
    case "smartphone":
      return <IconDeviceSmartphone className={className} />;
    case "tablet":
      return <IconDeviceTablet className={className} />;
    case "laptop":
      return <IconDeviceLaptop className={className} />;
    case "desktop":
      return <IconDeviceDesktop className={className} />;
    case "ios":
      return <IconOSIos className={className} />;
    case "android":
      return <IconOSAndroid className={className} />;
    case "windows":
      return <IconOSWindows className={className} />;
    case "macos":
      return <IconOSMac className={className} />;
    default:
      return null;
  }
}

export function EntryCard({
  entry,
  compact = false
}: {
  entry: Entry;
  compact?: boolean;
}) {
  const isAppCard = entry.category === "apps" || compact;
  const subtitle = directorySubtitles[entry.slug];
  const cardPadding = isAppCard ? "p-4" : "p-5";

  return (
    <Link
      href={getEntryHref(entry)}
      className={`group block rounded-xl border border-slate-200 bg-white ${cardPadding} transition-all duration-200 hover:-translate-y-px hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/70 dark:hover:border-slate-700`}
    >
      {isAppCard ? (
        <div className="flex items-center gap-3">
          <RiskDot level={entry.riskLevel} className="h-[7px] w-[7px]" />
          <h3 className="text-base font-semibold text-slate-950 dark:text-white">
            {entry.name}
          </h3>
        </div>
      ) : (
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950">
            <CardIcon entry={entry} />
          </div>
          <div className="min-w-0 space-y-1.5">
            <h3 className="text-base font-semibold text-slate-950 dark:text-white">
              {entry.name}
            </h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              {subtitle ?? entry.summary}
            </p>
          </div>
        </div>
      )}
    </Link>
  );
}
