import { type Entry } from "@/data/entries";
import { GameController, YoutubeLogo, SnapchatLogo, InstagramLogo, TiktokLogo, DiscordLogo, Crosshair, Cube, Robot, Sparkle, ChatCircle, TelegramLogo, MaskHappy, WhatsappLogo, TwitchLogo, SteamLogo, AppleLogo, AndroidLogo, WindowsLogo, Laptop, DeviceMobile, DeviceTablet, Desktop, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const entryIcons = {
  roblox: GameController, youtube: YoutubeLogo, snapchat: SnapchatLogo,
  instagram: InstagramLogo, tiktok: TiktokLogo, discord: DiscordLogo,
  fortnite: Crosshair, minecraft: Cube, chatgpt: Robot, gemini: Sparkle,
  "meta-ai": ChatCircle, telegram: TelegramLogo, "character-ai": MaskHappy,
  whatsapp: WhatsappLogo, twitch: TwitchLogo, steam: SteamLogo,
  ios: AppleLogo, android: AndroidLogo, windows: WindowsLogo, macos: Laptop,
  smartphone: DeviceMobile, tablet: DeviceTablet, laptop: Laptop, desktop: Desktop
};

export function EntryIcon({ entry, className = "", size = "md" }: {
  entry: Pick<Entry, "slug" | "name">; className?: string; size?: "sm" | "md" | "lg";
}) {
  const Icon = entryIcons[entry.slug as keyof typeof entryIcons] ?? ShieldCheck;
  const sizeClass = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  return <span className={`inline-flex flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700 ${sizeClass} ${className}`} aria-hidden="true" title={entry.name}>
    <Icon size={size === "sm" ? 22 : 28} weight="regular" />
  </span>;
}
