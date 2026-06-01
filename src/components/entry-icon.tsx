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
      className={`inline-flex items-center justify-center rounded-2xl border border-paper-line bg-paper-50 ${sizeClass} ${className}`}
      aria-hidden="true"
      title={entry.name}
    >
      {getEntryIcon(entry.slug)}
    </span>
  );
}
