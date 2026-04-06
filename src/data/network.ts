import { roNetworkApproachTranslations, roNetworkGuideTranslations } from "@/data/network-ro";
import { type Locale } from "@/lib/locale";

export type NetworkApproachId =
  | "built-in-router-controls"
  | "dns-filtering"
  | "isp-controls";

export interface NetworkApproach {
  id: NetworkApproachId;
  name: string;
  icon: string;
  description: string;
  homepageDescription: string;
}

export interface NetworkGuide {
  slug: string;
  name: string;
  approach: NetworkApproachId;
  description: string;
  difficulty: string;
  cost: string;
  coverageMetrics: Array<{ label: string; value: string }>;
  whatItBlocks: string[];
  whatItCannotBlock: string[];
  setupSteps: Array<{ title: string; action: string }>;
  tip: string;
  warning?: string;
  highlightedSection?: {
    title: string;
    items: string[];
  };
}

const networkUiCopy = {
  en: {
    categoryLabel: "Home Network",
    overviewTitle: "Home Network & Router Controls",
    overviewSubtitle:
      "The most powerful parental control layer most parents never use — applies to every device in your home simultaneously.",
    selectorEyebrow: "Choose your setup path",
    selectorTitle: "Pick the layer that matches your router, patience level, and need for control.",
    selectorLevelOne: "1. Choose an approach",
    selectorLevelTwo: "2. Choose a specific guide",
    overviewGridTitle: "Available guides in this approach",
    overviewGridSubtitle:
      "Open the guide that matches your router brand or filtering style. The setup details are different enough that it is worth choosing the right one.",
    infoBanner:
      "Router and DNS controls apply to every device on your home network simultaneously — phones, tablets, laptops, smart TVs, and gaming consoles — without installing anything on each device. They are the highest-leverage parental control layer available to parents.",
    warningBanner:
      "⚠️ What network controls cannot do: They do not work when children switch to mobile data (4G/5G) instead of home WiFi. A VPN app on a child's phone bypasses DNS filtering. HTTPS prevents routers from reading page content — they can only block or allow entire domains, not individual pieces of content within a site.",
    difficultyLabel: "Difficulty",
    costLabel: "Cost",
    approachLabel: "Approach",
    coverageTitle: "Coverage at a glance",
    whatItBlocksTitle: "What it blocks",
    whatItCannotBlockTitle: "What it cannot block",
    guideEyebrow: "Step-by-step setup",
    guideTitle: "Complete setup guide",
    tipTitle: "Tip",
    warningTitle: "Warning",
    highlightedTitle: "Highlighted guidance",
    backToOverview: "Back to network overview",
    openGuide: "Open full guide",
    guideCount: (count: number) => `${count} ${count === 1 ? "guide" : "guides"}`,
    breadcrumbHome: "Digital Parents",
    breadcrumbOverview: "Home Network",
    browseAll: "Browse all network guides"
  },
  ro: {
    categoryLabel: "Reteaua de acasa",
    overviewTitle: "Reteaua de acasa si controalele routerului",
    overviewSubtitle:
      "Cel mai puternic strat de control parental pe care majoritatea parintilor nu il folosesc niciodata — se aplica simultan tuturor dispozitivelor din casa.",
    selectorEyebrow: "Alege traseul potrivit",
    selectorTitle:
      "Alege stratul care se potriveste routerului tau, rabdarii tale si nivelului de control de care ai nevoie.",
    selectorLevelOne: "1. Alege o abordare",
    selectorLevelTwo: "2. Alege un ghid concret",
    overviewGridTitle: "Ghiduri disponibile pentru aceasta abordare",
    overviewGridSubtitle:
      "Deschide ghidul care se potriveste routerului sau stilului tau de filtrare. Detaliile de configurare difera suficient de mult incat merita sa alegi varianta corecta.",
    infoBanner:
      "Controalele din router si filtrele DNS se aplica simultan tuturor dispozitivelor din reteaua de acasa — telefoane, tablete, laptopuri, smart TV-uri si console — fara sa instalezi nimic pe fiecare dispozitiv in parte. Sunt stratul de control parental cu cel mai mare efect pentru un parinte.",
    warningBanner:
      "⚠️ Ce nu pot face controalele de retea: nu functioneaza cand copiii trec pe date mobile (4G/5G) in loc de WiFi-ul de acasa. O aplicatie VPN de pe telefonul copilului ocoleste filtrarea DNS. HTTPS impiedica routerele sa citeasca continutul paginilor — pot doar sa blocheze sau sa permita domenii intregi, nu bucati individuale de continut din interiorul unui site.",
    difficultyLabel: "Dificultate",
    costLabel: "Cost",
    approachLabel: "Abordare",
    coverageTitle: "Acoperire pe scurt",
    whatItBlocksTitle: "Ce blocheaza",
    whatItCannotBlockTitle: "Ce nu poate bloca",
    guideEyebrow: "Configurare pas cu pas",
    guideTitle: "Ghid complet de configurare",
    tipTitle: "Sfat util",
    warningTitle: "Limitare importanta",
    highlightedTitle: "Ghidare evidentiata",
    backToOverview: "Inapoi la reteaua de acasa",
    openGuide: "Deschide ghidul complet",
    guideCount: (count: number) => `${count} ${count === 1 ? "ghid" : "ghiduri"}`,
    breadcrumbHome: "Digital Parents",
    breadcrumbOverview: "Reteaua de acasa",
    browseAll: "Vezi toate ghidurile de retea"
  }
} as const;

const networkMetricLabels: Record<Locale, Record<string, string>> = {
  en: {
    "All WiFi devices": "All WiFi devices",
    "Mobile data": "Mobile data",
    "Bypass resistance": "Bypass resistance",
    "Setup time": "Setup time"
  },
  ro: {
    "All WiFi devices": "Toate dispozitivele pe WiFi",
    "Mobile data": "Date mobile",
    "Bypass resistance": "Rezistenta la ocolire",
    "Setup time": "Timp de configurare"
  }
};

export const networkApproaches: NetworkApproach[] = [
  {
    id: "built-in-router-controls",
    name: "Built-in Router Controls",
    icon: "🔌",
    description:
      "Use parental controls already built into your TP-Link, ASUS, or Netgear router. Free and surprisingly powerful.",
    homepageDescription:
      "Use parental controls already built into your TP-Link, ASUS, or Netgear router. Free and surprisingly powerful."
  },
  {
    id: "dns-filtering",
    name: "DNS Filtering",
    icon: "🌐",
    description:
      "Change two numbers in your router settings to block adult content across every device in your home. Free and takes 5 minutes.",
    homepageDescription:
      "Change two numbers in your router settings to block adult content across every device in your home. Free and takes 5 minutes."
  },
  {
    id: "isp-controls",
    name: "ISP Controls",
    icon: "📡",
    description:
      "Your internet provider likely has free parental controls you have never activated. Start here if you want the easiest possible first step.",
    homepageDescription:
      "Your internet provider likely has free parental controls you have never activated. Start here if you want the easiest possible first step."
  }
];

export const networkGuides: NetworkGuide[] = [
  {
    slug: "router-tplink",
    name: "TP-Link (HomeCare / Parental Controls)",
    approach: "built-in-router-controls",
    description:
      "Most TP-Link routers include HomeCare — a built-in parental controls system managed from your phone via the Tether app.",
    difficulty: "Easy",
    cost: "Free (built into router)",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Yes" },
      { label: "Mobile data", value: "No — does not apply when child uses 4G/5G" },
      { label: "Bypass resistance", value: "Low-Medium" },
      { label: "Setup time", value: "15–20 minutes" }
    ],
    whatItBlocks: [
      "Adult content through the built-in category filter.",
      "Custom blocked websites you add manually.",
      "Internet access during scheduled time windows such as school hours or bedtime.",
      "Per-device internet pause for immediate stop times."
    ],
    whatItCannotBlock: [
      "VPN apps installed on the child's device.",
      "Mobile data usage outside home WiFi.",
      "Content inside allowed HTTPS domains.",
      "Apps using hardcoded DNS."
    ],
    setupSteps: [
      {
        title: "Download the TP-Link Tether app",
        action:
          "Install Tether on your phone (iOS or Android) and connect to your home WiFi. Open the app and select your router from the device list."
      },
      {
        title: "Navigate to Parental Controls",
        action:
          "In Tether, tap your router → Parental Controls. If you do not see this, your router model may use the older interface at tplinkwifi.net in a browser."
      },
      {
        title: "Create a profile for your child",
        action:
          "Tap + to create a new profile. Name it after your child. Assign their devices to it by selecting from the list of connected devices. Identify devices by name, for example Luca's iPhone."
      },
      {
        title: "Enable Content Filtering",
        action:
          "Within the profile, enable Content Filtering and select Adult Content at minimum. You can add specific websites to the blocklist manually if the preset misses anything."
      },
      {
        title: "Set a Time Limit schedule",
        action:
          "Configure school hours, for example 8am–3pm blocked on weekdays, and bedtime, for example 10pm–7am blocked, as separate schedule blocks. The child's devices lose internet access during these windows."
      },
      {
        title: "Pin Pause Internet to your home screen",
        action:
          "The Pause button cuts internet for a specific profile instantly. Add it as a widget or shortcut. It replaces arguments about screen time with a single tap during dinner, homework, or bedtime."
      }
    ],
    tip:
      "Pause Internet is the most-used feature after setup. It gives you immediate leverage without negotiation — internet stops when you say it stops, regardless of what the child is doing on their device.",
    warning:
      "TP-Link HomeCare is bypassed if your child switches to mobile data or installs a VPN. Pair it with a device-level rule that VPN apps require your approval."
  },
  {
    slug: "router-asus",
    name: "ASUS (AiProtection / Family Zone)",
    approach: "built-in-router-controls",
    description:
      "ASUS routers with AiProtection (powered by Trend Micro) offer one of the strongest built-in filtering systems in any consumer router.",
    difficulty: "Medium",
    cost: "Free on routers that include AiProtection — check your model at asus.com/aiprotection",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Yes" },
      { label: "Mobile data", value: "No" },
      { label: "Bypass resistance", value: "Medium-High" },
      { label: "Setup time", value: "20–30 minutes" }
    ],
    whatItBlocks: [
      "Malicious sites and malware across all devices.",
      "Adult content, violence, gambling, phishing, and custom category blocks.",
      "Time-based access per device with per-day scheduling."
    ],
    whatItCannotBlock: [
      "VPN bypass.",
      "Mobile data outside the home network.",
      "DNS-over-HTTPS if manually enabled on the device."
    ],
    setupSteps: [
      {
        title: "Log into your ASUS router admin panel",
        action:
          "Open a browser and go to router.asus.com or 192.168.1.1. Log in with your admin credentials. If you never changed them, do that first."
      },
      {
        title: "Enable AiProtection security features first",
        action:
          "Go to AiProtection and enable Malicious Sites Blocking and Two-Way IPS. These protect every device from malware regardless of parental settings, so enable them even if you skip everything else."
      },
      {
        title: "Go to Parental Controls → Family Zone",
        action:
          "Create a new profile, name it after your child, and assign their devices to it."
      },
      {
        title: "Set a Time Schedule",
        action:
          "Configure blocked periods for school hours and nighttime. ASUS allows different schedules per day of the week, which lets you set a different weekend bedtime."
      },
      {
        title: "Enable Web Filtering",
        action:
          "Select content categories to block. At minimum choose Adult, Gambling, and Violence. ASUS uses Trend Micro's database, so you do not need to maintain a blocklist manually."
      },
      {
        title: "Enable Instant Guard if available",
        action:
          "Some ASUS routers include Instant Guard, which extends protection to the child's device on mobile data via a VPN tunnel. It is limited but adds a layer beyond the home network."
      }
    ],
    tip:
      "AiProtection's malware blocking applies to every device on your network regardless of age or parental settings. Enable it for the whole family — it protects your devices too.",
    warning:
      "ASUS AiProtection requires a router model that supports it. Check asus.com/aiprotection before spending time on setup."
  },
  {
    slug: "router-netgear",
    name: "NETGEAR (Smart Parental Controls / Circle integration)",
    approach: "built-in-router-controls",
    description:
      "Netgear Nighthawk and Orbi routers integrate with Circle, giving you per-app time limits, content categories, and bedtime enforcement from a polished app.",
    difficulty: "Medium",
    cost: "Free basic tier via Circle integration; Circle Premium $9.99/month for per-app limits and mobile data coverage",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Yes" },
      { label: "Mobile data", value: "Yes with Circle Go (premium subscription required)" },
      { label: "Bypass resistance", value: "Medium-High" },
      { label: "Setup time", value: "20–30 minutes" }
    ],
    whatItBlocks: [
      "50+ content categories.",
      "Specific apps by name such as TikTok, YouTube, and Instagram individually.",
      "Per-app time limits, bedtime per profile, and usage summaries."
    ],
    whatItCannotBlock: [
      "Determined VPN bypass.",
      "Mobile data if Circle Go is not installed."
    ],
    setupSteps: [
      {
        title: "Download the Circle app",
        action:
          "Install Circle on your phone. If your Netgear router supports it, the app detects it automatically. Otherwise enable it through the router admin page under Parental Controls → Circle."
      },
      {
        title: "Create profiles per family member",
        action:
          "Add a profile for each child. Assign their devices by selecting from the detected network device list. Use MAC address matching for reliability if the option exists."
      },
      {
        title: "Set a Filter Level as a baseline",
        action:
          "Choose the Little Kid, Kid, or Teen preset for the profile. This creates a starting restriction level that you can customise further."
      },
      {
        title: "Set per-app Time Limits",
        action:
          "Set YouTube to 45 minutes per day, TikTok to 30 minutes, gaming to 90 minutes, and so on. Circle tracks and enforces those independently of overall screen time."
      },
      {
        title: "Set Bedtime per profile",
        action:
          "Internet access is cut for all devices in that profile at the set time automatically. No negotiation, no override."
      },
      {
        title: "Enable Circle Go for mobile data coverage",
        action:
          "If you are on the premium plan, install the Circle Go app on the child's device. This extends content filtering and time limits to mobile data, but it does require their cooperation during the initial install."
      }
    ],
    tip:
      "Per-app time limits are more precise and less confrontational than blanket screen time. TikTok is done for today is a simpler conversation than you have used too much screen time."
  },
  {
    slug: "dns-cloudflare",
    name: "Cloudflare for Families (1.1.1.3)",
    approach: "dns-filtering",
    description:
      "Change two numbers in your router settings to block adult content and malware across every device in your home. Free, takes 5 minutes, and requires no ongoing maintenance.",
    difficulty: "Easy",
    cost: "Free",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Yes — including smart TVs, gaming consoles, tablets" },
      { label: "Mobile data", value: "No" },
      { label: "Bypass resistance", value: "Medium" },
      { label: "Setup time", value: "5 minutes" }
    ],
    whatItBlocks: [
      "Adult content using Cloudflare's maintained database.",
      "Malware and phishing domains.",
      "Sites distributing child sexual abuse material (CSAM)."
    ],
    whatItCannotBlock: [
      "Content within allowed domains such as individual YouTube videos or Instagram posts.",
      "VPN bypass.",
      "DNS-over-HTTPS if manually enabled on a device.",
      "Mobile data."
    ],
    setupSteps: [
      {
        title: "Log into your router admin panel",
        action:
          "Open a browser and go to 192.168.1.1 or 192.168.0.1. The username and password are printed on the label attached to your router. Look for a sticker on the back or bottom."
      },
      {
        title: "Find the DNS settings",
        action:
          "Look for a menu item called Internet, WAN, Advanced, Network, or DNS. The exact location varies by router brand. Find the fields labelled Primary DNS and Secondary DNS."
      },
      {
        title: "Enter the Cloudflare for Families addresses",
        action:
          "Set Primary DNS to 1.1.1.3 and Secondary DNS to 1.0.0.3. These are different from standard Cloudflare DNS. The .3 addresses specifically include family filtering."
      },
      {
        title: "Save settings and restart the router",
        action:
          "Click Save or Apply, then restart the router by unplugging it for 10 seconds. The change applies to every device on your WiFi automatically."
      },
      {
        title: "Test that it is working",
        action:
          "On any device connected to your WiFi, try to visit a known adult site. It should be blocked with a Cloudflare block page. That confirms the filter is active."
      },
      {
        title: "Note the limitation for conversations",
        action:
          "Tell your child that the home WiFi now filters adult content. Frame it as a household standard, not a punishment. They will likely discover it on their own, so it is better that they hear it from you first."
      }
    ],
    tip:
      "This is the highest-impact action on the page relative to the effort required. Five minutes, free, and it protects every device simultaneously, including the PlayStation and smart TV that no app-based control reaches.",
    warning:
      "Cloudflare for Families does not work when your child switches to mobile data. It also cannot inspect content inside a site — it blocks or allows entire domains. A child on filtered WiFi can still access inappropriate YouTube videos because YouTube itself is an allowed domain."
  },
  {
    slug: "dns-opendns",
    name: "OpenDNS FamilyShield (208.67.222.123)",
    approach: "dns-filtering",
    description:
      "A free DNS filter from Cisco that blocks adult content, phishing, and — uniquely — proxy and anonymiser sites children use to bypass other filters.",
    difficulty: "Easy",
    cost: "Free (FamilyShield). Free account at opendns.com unlocks a configuration dashboard.",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Yes" },
      { label: "Mobile data", value: "No" },
      { label: "Bypass resistance", value: "Medium (higher than Cloudflare for Families due to proxy blocking)" },
      { label: "Setup time", value: "5 minutes" }
    ],
    whatItBlocks: [
      "Adult content.",
      "Phishing sites and malware.",
      "Proxy sites and anonymisers used to bypass filters.",
      "Some VPN provider domains."
    ],
    whatItCannotBlock: [
      "VPN apps with hardcoded IP addresses.",
      "Mobile data.",
      "DNS-over-HTTPS bypass.",
      "Content within allowed HTTPS domains."
    ],
    setupSteps: [
      {
        title: "Log into your router admin panel",
        action:
          "Open 192.168.1.1 in a browser. The credentials are usually on the router label. Find DNS settings under Internet, WAN, or Advanced."
      },
      {
        title: "Enter the OpenDNS FamilyShield addresses",
        action:
          "Set Primary DNS to 208.67.222.123 and Secondary DNS to 208.67.220.123, then save and restart the router."
      },
      {
        title: "Test by visiting a blocked category site",
        action:
          "Try a known adult site. It should redirect to the OpenDNS block page confirming that the filter is active."
      },
      {
        title: "Create a free OpenDNS account for the dashboard",
        action:
          "Go to opendns.com/home-internet-security and create a free account. Link it to your home IP address following the on-screen instructions. This gives you a real-time log of blocked requests and allows custom category control."
      },
      {
        title: "Use the dashboard to add custom blocks",
        action:
          "In your OpenDNS dashboard, add any specific websites you want blocked that are not already covered by the default categories."
      },
      {
        title: "Whitelist any school or educational sites that get blocked",
        action:
          "Some legitimate educational sites are occasionally over-blocked. The dashboard lets you whitelist specific domains without weakening the rest of the filter."
      }
    ],
    tip:
      "OpenDNS blocks proxy and anonymiser sites by default — these are the tools children often use to bypass basic content filters. That makes it meaningfully harder to circumvent than Cloudflare for Families alone."
  },
  {
    slug: "dns-nextdns",
    name: "NextDNS",
    approach: "dns-filtering",
    description:
      "The most customisable DNS filtering option available. Block specific apps like TikTok or Instagram at the network level with a single toggle. See every domain every device in your home contacts.",
    difficulty: "Medium",
    cost: "Free up to 300,000 queries per month (enough for most families). $19.90 per year for unlimited.",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Yes" },
      { label: "Mobile data", value: "Yes via NextDNS app installed on device" },
      { label: "Bypass resistance", value: "High" },
      { label: "Setup time", value: "20–30 minutes" }
    ],
    whatItBlocks: [
      "Adult content, malware, tracking, and advertising through network-wide ad blocking.",
      "Specific apps by name such as TikTok, Instagram, Snapchat, and Discord with individual toggles.",
      "Phishing, gambling, dating sites, and cryptocurrency mining scripts.",
      "Custom domain lists you choose yourself."
    ],
    whatItCannotBlock: [
      "Content within allowed HTTPS domains.",
      "Manual DNS override on a device if the router does not force DNS."
    ],
    setupSteps: [
      {
        title: "Create a free NextDNS account",
        action:
          "Go to nextdns.io and create an account. You will receive a unique configuration ID, for example abc123. Keep the dashboard open for the rest of setup."
      },
      {
        title: "Enter your NextDNS addresses in the router admin panel",
        action:
          "Go to 192.168.1.1 → DNS settings. Your exact NextDNS DNS addresses are shown in your dashboard under Setup → Router. Enter them as Primary and Secondary DNS, then save and restart the router."
      },
      {
        title: "Configure Security settings in the dashboard",
        action:
          "In the Security tab, enable Threat Intelligence Feeds, Google Safe Browsing, Cryptojacking Protection, and DNS Rebinding Protection. These activate automatically with no ongoing maintenance."
      },
      {
        title: "Add blocklists in the Privacy tab",
        action:
          "Open Privacy → Blocklists → Add, then add OISD Full and Steven Black Unified. These block millions of known ad, tracking, and harmful domains automatically."
      },
      {
        title: "Configure Parental Controls",
        action:
          "Open the Parental Control tab and use the individual app toggles. You can block TikTok, Snapchat, Instagram, or Discord at the DNS level with one click."
      },
      {
        title: "Enable Logs and review weekly",
        action:
          "Turn on Logs in the Analytics tab. This shows every domain every device in your home contacted, organised by device and time. Use it as a conversation tool rather than covert surveillance."
      }
    ],
    tip:
      "The per-app blocking in the Parental Control tab is the feature that makes NextDNS worth the setup time. No TikTok on home WiFi becomes a single toggle instead of an argument about app deletion.",
    warning:
      "NextDNS logs every DNS query made by every device on your network. Be transparent with your child that the home network has monitoring. Use it as a conversation tool, not covert surveillance."
  },
  {
    slug: "isp-controls",
    name: "ISP Parental Controls",
    approach: "isp-controls",
    description:
      "Your internet provider almost certainly offers free parental controls you have never activated. The weakest option on this page — but the easiest, and better than nothing.",
    difficulty: "Easy",
    cost: "Free — included with your broadband subscription",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Yes" },
      { label: "Mobile data", value: "No" },
      { label: "Bypass resistance", value: "Low" },
      { label: "Setup time", value: "10–15 minutes" }
    ],
    whatItBlocks: [
      "Basic adult content categories using the ISP's maintained blocklist.",
      "Some custom site additions if the router or ISP dashboard allows it.",
      "Basic time scheduling on providers that expose it."
    ],
    whatItCannotBlock: [
      "VPN apps.",
      "Mobile data.",
      "HTTPS content inspection.",
      "Sites not already on the ISP's blocklist.",
      "DNS bypass."
    ],
    setupSteps: [
      {
        title: "Access your router admin panel",
        action:
          "Open a browser and type 192.168.1.1 or 192.168.0.1. The username and password are usually on the sticker on the back or bottom of your router. Common defaults are admin/admin or admin plus your WiFi password."
      },
      {
        title: "Find Parental Controls in the menu",
        action:
          "Look for Parental Controls, Access Control, Content Filtering, or Child Protection in the navigation menu. The exact location varies by ISP and router model."
      },
      {
        title: "Enable the filter and select the strongest preset",
        action:
          "Choose the strongest preset available, usually Family, Child Safe, or Strict. Save the setting so the ISP's basic content blocklist applies to all devices on your network."
      },
      {
        title: "Add specific websites to the blocklist manually",
        action:
          "If the admin panel supports custom blocked sites, add any specific sites or platforms your child should not access. This supplements the ISP's own blocklist."
      },
      {
        title: "Set an access schedule if available",
        action:
          "If your router offers time-based blocking, set a rule that cuts internet access between 10pm and 7am for child devices. Not all ISP routers support this, so skip it if the option is missing."
      },
      {
        title: "Immediately add Cloudflare for Families DNS alongside this",
        action:
          "In the same DNS settings screen, change Primary DNS to 1.1.1.3 and Secondary DNS to 1.0.0.3. It takes 30 seconds and significantly strengthens the filtering at no extra cost."
      }
    ],
    tip:
      "ISP controls alone are easy to bypass. But combined with Cloudflare for Families DNS in the same admin session, they cover the most common methods children use to get around basic filters.",
    warning:
      "ISP parental controls are the weakest option on this page. Use them as a starting layer paired with DNS filtering, not as a standalone solution.",
    highlightedSection: {
      title: "Romania-specific guidance",
      items: [
        "DIGI Romania / RCS&RDS: Access router admin at 192.168.1.1 → Advanced Settings → Parental Control. Assign devices to a filtered profile. This enables a basic adult-content filter and schedule.",
        "Orange Romania: Use the My Orange app → Router Settings → Parental Control to enable the basic filter and per-device time limits.",
        "Telekom Romania: Use the router admin at 192.168.1.1 → Parental Controls. Expect basic site blocking and time scheduling, with the exact interface varying by router model.",
        "UPC / Vodafone Romania: Open the admin page at 192.168.0.1 → Advanced → Access Control or Parental Controls."
      ]
    }
  }
];

export function getNetworkCopy(locale: Locale = "en") {
  return networkUiCopy[locale];
}

function localizeNetworkApproach(approach: NetworkApproach, locale: Locale) {
  if (locale === "en") {
    return approach;
  }

  const translation = roNetworkApproachTranslations[approach.id];
  return translation ? { ...approach, ...translation } : approach;
}

function localizeNetworkGuide(guide: NetworkGuide, locale: Locale) {
  if (locale === "en") {
    return guide;
  }

  const translation = roNetworkGuideTranslations[guide.slug];
  return translation ? { ...guide, ...translation } : guide;
}

export function getNetworkMetricLabel(label: string, locale: Locale = "en") {
  return networkMetricLabels[locale][label] ?? label;
}

export function getNetworkApproaches(locale: Locale = "en") {
  return networkApproaches.map((approach) => localizeNetworkApproach(approach, locale));
}

export function isNetworkApproach(value?: string): value is NetworkApproachId {
  return networkApproaches.some((approach) => approach.id === value);
}

export function getDefaultNetworkApproach() {
  return networkApproaches[0].id;
}

export function getNetworkOverviewHref(
  locale: Locale = "en",
  approach?: NetworkApproachId
) {
  const base = locale === "ro" ? "/ro/network" : "/network";
  return approach ? `${base}?approach=${approach}` : base;
}

export function getNetworkGuideHref(slug: string, locale: Locale = "en") {
  const base = locale === "ro" ? "/ro/network" : "/network";
  return `${base}/${slug}`;
}

export function getNetworkGuide(slug: string, locale: Locale = "en") {
  const guide = networkGuides.find((value) => value.slug === slug);
  return guide ? localizeNetworkGuide(guide, locale) : undefined;
}

export function getNetworkGuidesByApproach(
  approach: NetworkApproachId,
  locale: Locale = "en"
) {
  return networkGuides
    .filter((guide) => guide.approach === approach)
    .map((guide) => localizeNetworkGuide(guide, locale));
}

export function getNetworkApproach(approach: NetworkApproachId, locale: Locale = "en") {
  const value = networkApproaches.find((item) => item.id === approach);
  return value ? localizeNetworkApproach(value, locale) : undefined;
}

export function getNetworkGuideStaticParams() {
  return networkGuides.map((guide) => ({
    slug: guide.slug
  }));
}

export function getFirstGuideForApproach(
  approach: NetworkApproachId,
  locale: Locale = "en"
) {
  return getNetworkGuidesByApproach(approach, locale)[0];
}
