import { type Entry } from "@/data/entries";

const entryIcons: Record<string, string> = {
  roblox: "🎮",
  youtube: "▶️",
  snapchat: "👻",
  instagram: "📷",
  tiktok: "🎵",
  discord: "💬",
  fortnite: "🎯",
  minecraft: "⛏️",
  chatgpt: "🤖",
  "character-ai": "🎭",
  whatsapp: "💬",
  twitch: "🎮",
  steam: "🕹️",
  ios: "🍎",
  android: "🤖",
  windows: "🪟",
  macos: "💻",
  smartphone: "📱",
  tablet: "📋",
  laptop: "💻",
  desktop: "🖥️"
};

export function getEntryIcon(slug: Entry["slug"]) {
  return entryIcons[slug] ?? "🛡️";
}

export function EntryIcon({
  entry,
  className = "",
  size = "md"
}: {
  entry: Pick<Entry, "slug" | "name">;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "lg"
      ? "h-14 w-14 text-[1.7rem]"
      : size === "sm"
        ? "h-10 w-10 text-xl"
        : "h-12 w-12 text-2xl";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(236,253,250,0.92))] shadow-[0_16px_30px_-22px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(15,118,110,0.18))] ${sizeClass} ${className}`}
      aria-hidden="true"
      title={entry.name}
    >
      {getEntryIcon(entry.slug)}
    </span>
  );
}
