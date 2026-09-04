import { roEntryTranslations } from "@/data/entries-ro";
import { type Locale } from "@/lib/locale";

export type RiskLevel = "critical" | "high" | "medium" | "low";
export type Category = "devices" | "os" | "apps" | "network";

export interface EntryLink {
  category: Category;
  slug: string;
}

export interface Entry {
  slug: string;
  name: string;
  category: Category;
  riskLevel: RiskLevel;
  riskLabelText: string;
  homeBadgeLabel?: string;
  summary: string;
  description: string;
  quickActions: Array<{ title: string; description: string }>;
  watchFor: Array<{ title: string; description: string; severity: RiskLevel }>;
  setupGuide: Array<{ title: string; steps: string[] }>;
  setupGuideIntro?: string;
  ageRating?: string;
  userCount?: string;
  platform?: string;
  ageRecommendation?: string;
  riskBarPosition?: number;
  appMetrics?: Array<{ label: string; value: string }>;
  callouts?: Array<{ type: "warning" | "tip"; title: string; description: string }>;
  editorialReview?: {
    checkedAt: string;
    availability: string;
    sources: Array<{ title: string; url: string }>;
  };
  related: EntryLink[];
}

export const categoryLabels: Record<Category, string> = {
  "devices": "Devices",
  "os": "Operating systems",
  "apps": "Apps",
  "network": "Home network"
};

const categoryLabelsByLocale: Record<Locale, Record<Category, string>> = {
  en: categoryLabels,
  ro: {
    devices: "Dispozitive",
    os: "Sisteme de operare",
    apps: "Aplicatii",
    network: "Retea de acasa"
  }
};

export const categoryDirectoryHref: Record<Category, string> = {
  "devices": "/#devices",
  "os": "/#operating-systems",
  "apps": "/#apps",
  "network": "/#network"
};

const localizedRiskLabels: Record<Locale, Record<RiskLevel, string>> = {
  en: {
    critical: "Critical",
    high: "High",
    medium: "Medium",
    low: "Low"
  },
  ro: {
    critical: "Critic",
    high: "Ridicat",
    medium: "Mediu",
    low: "Scazut"
  }
};

const localizedParentRiskLabels: Record<Locale, Record<RiskLevel, string>> = {
  en: {
    critical: "Needs daily attention",
    high: "Set up controls first",
    medium: "Worth monitoring",
    low: "Low concern"
  },
  ro: {
    critical: "Necesita atentie zilnica",
    high: "Seteaza controalele mai intai",
    medium: "Merita monitorizat",
    low: "Nivel redus de ingrijorare"
  }
};

export const riskMeta: Record<
  RiskLevel,
  {
    label: string;
    parentLabel: string;
    hexColor: string;
    ringShadow: string;
    dotClass: string;
    textClass: string;
    badgeClass: string;
    surfaceClass: string;
    borderClass: string;
  }
> = {
  "critical": {
    "label": "Critical",
    "parentLabel": "Needs daily attention",
    "hexColor": "#DC2626",
    "ringShadow": "0 0 0 2px rgba(220, 38, 38, 0.20)",
    "dotClass": "bg-[#DC2626]",
    "textClass": "text-[#DC2626] dark:text-[#fca5a5]",
    "badgeClass": "bg-[rgba(220,38,38,0.10)] text-[#DC2626] dark:bg-[rgba(220,38,38,0.18)] dark:text-[#fca5a5]",
    "surfaceClass": "bg-[rgba(220,38,38,0.08)] dark:bg-[rgba(220,38,38,0.14)]",
    "borderClass": "border-[rgba(220,38,38,0.22)] dark:border-[rgba(220,38,38,0.35)]"
  },
  "high": {
    "label": "High",
    "parentLabel": "Set up controls first",
    "hexColor": "#EA580C",
    "ringShadow": "0 0 0 2px rgba(234, 88, 12, 0.20)",
    "dotClass": "bg-[#EA580C]",
    "textClass": "text-[#EA580C] dark:text-[#fdba74]",
    "badgeClass": "bg-[rgba(234,88,12,0.10)] text-[#EA580C] dark:bg-[rgba(234,88,12,0.18)] dark:text-[#fdba74]",
    "surfaceClass": "bg-[rgba(234,88,12,0.08)] dark:bg-[rgba(234,88,12,0.14)]",
    "borderClass": "border-[rgba(234,88,12,0.22)] dark:border-[rgba(234,88,12,0.35)]"
  },
  "medium": {
    "label": "Medium",
    "parentLabel": "Worth monitoring",
    "hexColor": "#D97706",
    "ringShadow": "0 0 0 2px rgba(217, 119, 6, 0.20)",
    "dotClass": "bg-[#D97706]",
    "textClass": "text-[#D97706] dark:text-[#fcd34d]",
    "badgeClass": "bg-[rgba(217,119,6,0.10)] text-[#D97706] dark:bg-[rgba(217,119,6,0.18)] dark:text-[#fcd34d]",
    "surfaceClass": "bg-[rgba(217,119,6,0.08)] dark:bg-[rgba(217,119,6,0.14)]",
    "borderClass": "border-[rgba(217,119,6,0.22)] dark:border-[rgba(217,119,6,0.35)]"
  },
  "low": {
    "label": "Low",
    "parentLabel": "Low concern",
    "hexColor": "#059669",
    "ringShadow": "0 0 0 2px rgba(5, 150, 105, 0.20)",
    "dotClass": "bg-[#059669]",
    "textClass": "text-[#059669] dark:text-[#6ee7b7]",
    "badgeClass": "bg-[rgba(5,150,105,0.10)] text-[#059669] dark:bg-[rgba(5,150,105,0.18)] dark:text-[#6ee7b7]",
    "surfaceClass": "bg-[rgba(5,150,105,0.08)] dark:bg-[rgba(5,150,105,0.14)]",
    "borderClass": "border-[rgba(5,150,105,0.22)] dark:border-[rgba(5,150,105,0.35)]"
  }
};

export const entries: Entry[] = [
  {
    "slug": "smartphone",
    "name": "Smartphone",
    "category": "devices",
    "riskLevel": "critical",
    "riskLabelText": "Critical risk",
    "summary": "A smartphone puts messaging, the internet, a camera, payments, and location sharing in one pocket-sized device.",
    "description": "A smartphone puts messaging, the internet, a camera, payments, and location sharing in one pocket-sized device. That makes it the fastest route to constant distraction, private contact, and content a parent never sees unless the setup is locked down first.",
    "quickActions": [
      {
        "title": "Enable Screen Time or Family Link",
        "description": "Do this before adding new apps so the rules exist first, not after a problem starts."
      },
      {
        "title": "Require download approval",
        "description": "A child should not be able to install chat, video, or anonymous apps without your sign-off."
      },
      {
        "title": "Disable location for all apps by default",
        "description": "Then turn it back on only for essentials such as maps or family location tools."
      }
    ],
    "watchFor": [
      {
        "title": "Addictive design",
        "description": "Notifications, streaks, autoplay, and short-form feeds are built to keep a child checking the phone again and again.",
        "severity": "high"
      },
      {
        "title": "Unrestricted internet access",
        "description": "A child can reach adult content, search for harmful topics, or open links from strangers within seconds if web filters are not active.",
        "severity": "critical"
      },
      {
        "title": "Location tracking by apps",
        "description": "Games, social apps, and shopping apps often ask for location even when it is not needed, creating a running record of where a child goes.",
        "severity": "high"
      },
      {
        "title": "Stranger contact through downloaded apps",
        "description": "A phone becomes a private chat device the moment apps with direct messages, voice chat, or group invites are allowed.",
        "severity": "critical"
      },
      {
        "title": "In-app purchases",
        "description": "Stored payment details and one-tap buying can turn small impulses into repeated charges.",
        "severity": "medium"
      }
    ],
    "setupGuideIntro": "Use the Apple path for iPhone and the Google path for Android. The goal is the same on both: limits live behind a parent-only code.",
    "setupGuide": [
      {
        "title": "Turn on the native family tool",
        "steps": [
          "iPhone: Settings → Screen Time → Turn On Screen Time. Android: install Google Family Link on the parent phone and connect the child's Google account."
        ]
      },
      {
        "title": "Lock the settings with a parent code",
        "steps": [
          "Set a Screen Time passcode or Family Link parent approval method your child does not know."
        ]
      },
      {
        "title": "Require approval for every install",
        "steps": [
          "iPhone: Settings → Screen Time → Content & Privacy Restrictions → iTunes & App Store Purchases. Android: Family Link → Controls → Content restrictions → Google Play."
        ]
      },
      {
        "title": "Add time limits and a bedtime lock",
        "steps": [
          "iPhone: Settings → Screen Time → App Limits and Downtime. Android: Family Link → Controls → Screen time → Daily limit and Bedtime."
        ]
      },
      {
        "title": "Shut off location access by default",
        "steps": [
          "iPhone: Settings → Privacy & Security → Location Services. Android: Settings → Location → App permissions. Only turn location on for the few apps that truly need it."
        ]
      }
    ],
    "related": [
      {
        "category": "os",
        "slug": "ios"
      },
      {
        "category": "os",
        "slug": "android"
      },
      {
        "category": "apps",
        "slug": "snapchat"
      }
    ]
  },
  {
    "slug": "tablet",
    "name": "Tablet",
    "category": "devices",
    "riskLevel": "high",
    "riskLabelText": "High risk",
    "summary": "A tablet often feels safer than a phone because it stays in the house, but it can be just as open once the browser, video apps, and app store are live.",
    "description": "A tablet often feels safer than a phone because it stays in the house, but it can be just as open once the browser, video apps, and app store are live. Shared family use also creates a common problem: children inherit adult logins, adult browsing history, and adult permissions.",
    "quickActions": [
      {
        "title": "Create a child profile",
        "description": "Avoid handing over a tablet that is still signed in as an adult."
      },
      {
        "title": "Disable the browser or use restricted mode",
        "description": "If the tablet is mostly for video or school, shut down open browsing first."
      },
      {
        "title": "Enable time limits per app",
        "description": "Video and game apps need their own caps, not just a whole-device limit."
      }
    ],
    "watchFor": [
      {
        "title": "Shared device means shared data",
        "description": "If an adult profile stays logged in, a child may inherit open email, saved passwords, and full app store access.",
        "severity": "medium"
      },
      {
        "title": "Restrictions are easy to bypass on an unlocked device",
        "description": "If the tablet is not protected by a parent-only passcode, a child can often disable limits or switch to a less restricted account.",
        "severity": "high"
      },
      {
        "title": "YouTube autoplay keeps children watching",
        "description": "One harmless video can quickly turn into a chain of louder, faster, or more extreme content.",
        "severity": "high"
      },
      {
        "title": "App stores stay open unless blocked",
        "description": "Children can install chat apps, browsers, or games that bring in strangers and spending pressure.",
        "severity": "high"
      }
    ],
    "setupGuideIntro": "On tablets, hardware lock matters as much as software rules. If the child can switch accounts or use an unlocked family device, restrictions are easy to dodge.",
    "setupGuide": [
      {
        "title": "Create a child setup, not a shared adult setup",
        "steps": [
          "iPad: Settings → Screen Time → Turn On Screen Time and choose This is My Child's iPad. Android tablet: add a supervised Google account through Family Link."
        ]
      },
      {
        "title": "Use a parent-only passcode",
        "steps": [
          "Lock Screen Time or Family Link with a code your child does not know, and disable Guest access if the tablet offers it."
        ]
      },
      {
        "title": "Restrict browsing and video defaults",
        "steps": [
          "Turn on web content restrictions and use Restricted Mode in YouTube before handing the tablet over."
        ]
      },
      {
        "title": "Limit the app store",
        "steps": [
          "Require approval for App Store or Google Play downloads and hide the store entirely if the tablet is mainly for games or school apps."
        ]
      },
      {
        "title": "Set limits for the highest-use apps",
        "steps": [
          "Use Screen Time → App Limits or Family Link → Screen time to cap video, games, and browser use separately."
        ]
      }
    ],
    "related": [
      {
        "category": "os",
        "slug": "ios"
      },
      {
        "category": "os",
        "slug": "android"
      },
      {
        "category": "apps",
        "slug": "youtube"
      }
    ]
  },
  {
    "slug": "laptop",
    "name": "Laptop",
    "category": "devices",
    "riskLevel": "critical",
    "riskLabelText": "Critical risk",
    "summary": "A laptop looks like a school tool, but it behaves like a full internet terminal.",
    "description": "A laptop looks like a school tool, but it behaves like a full internet terminal. Browsers, downloads, gaming clients, VPNs, and chat apps can all exist side by side, which makes a child far harder to supervise once the machine leaves a shared room.",
    "quickActions": [
      {
        "title": "Create a limited child OS account",
        "description": "A standard account blocks many installs and settings changes right away."
      },
      {
        "title": "Install DNS filtering",
        "description": "Cloudflare for Families 1.1.1.3 is a simple first layer for adult content blocking."
      },
      {
        "title": "Enable OS-level screen time",
        "description": "Use the built-in scheduler so the laptop locks at bedtime even if the child forgets."
      }
    ],
    "watchFor": [
      {
        "title": "Unrestricted browser access",
        "description": "A laptop can reach almost anything on the internet, including adult sites, harmful forums, and unmoderated video streams.",
        "severity": "critical"
      },
      {
        "title": "File downloads",
        "description": "Children can install programs, mods, cracked games, and browser extensions that open new risks quickly.",
        "severity": "high"
      },
      {
        "title": "VPN bypass",
        "description": "Once a VPN is installed, a child can often step around home filters and school restrictions.",
        "severity": "high"
      },
      {
        "title": "Gaming addiction",
        "description": "Because a laptop is portable, late-night gaming and hidden use can grow faster than on a family desktop.",
        "severity": "high"
      },
      {
        "title": "Discord and private chat apps",
        "description": "Many laptops become a hub for voice chat, private servers, and friend-of-a-friend contact that parents never hear.",
        "severity": "high"
      }
    ],
    "setupGuideIntro": "For laptops, the most important choice is to keep the child's account standard, not administrator. That one decision blocks many workarounds.",
    "setupGuide": [
      {
        "title": "Create a limited child account",
        "steps": [
          "Windows: Settings → Accounts → Family. macOS: System Settings → Users & Groups → Add User and make it a standard account."
        ]
      },
      {
        "title": "Connect the family control system",
        "steps": [
          "Windows: add the child to Microsoft Family Safety through family.microsoft.com. macOS: System Settings → Screen Time and turn it on for the child's account."
        ]
      },
      {
        "title": "Filter web traffic at the network level",
        "steps": [
          "Set DNS to Cloudflare for Families 1.1.1.3 on the laptop or your router so adult sites are blocked before the browser even opens."
        ]
      },
      {
        "title": "Put installs behind your password",
        "steps": [
          "Keep admin rights with the parent so new browsers, VPNs, chat clients, and game launchers cannot be added freely."
        ]
      },
      {
        "title": "Set screen time for browsers, games, and chat apps",
        "steps": [
          "Use Family Safety or Screen Time to place separate limits on the browser, gaming apps, and communication tools."
        ]
      }
    ],
    "related": [
      {
        "category": "os",
        "slug": "windows"
      },
      {
        "category": "os",
        "slug": "macos"
      },
      {
        "category": "apps",
        "slug": "discord"
      }
    ]
  },
  {
    "slug": "desktop",
    "name": "Desktop PC",
    "category": "devices",
    "riskLevel": "critical",
    "riskLabelText": "Critical risk",
    "summary": "A desktop PC often feels easier to supervise because it stays in one place, but that advantage disappears if it lives in a bedroom.",
    "description": "A desktop PC often feels easier to supervise because it stays in one place, but that advantage disappears if it lives in a bedroom. Once the screen is unsupervised, gaming platforms, browsers, chat tools, and late-night use can become much harder to spot than on a phone.",
    "quickActions": [
      {
        "title": "Move the PC to a common area",
        "description": "Visibility cuts down hidden use more than almost any software setting."
      },
      {
        "title": "Enable Windows Family Safety or macOS Screen Time",
        "description": "Turn on the native tool before adding game stores, browsers, or chat apps."
      },
      {
        "title": "Keep the account password to yourself",
        "description": "A child should not have the password that approves installs or removes limits."
      }
    ],
    "watchFor": [
      {
        "title": "Unsupervised room use",
        "description": "A bedroom desktop makes it easy to hide late-night gaming, explicit content, and private chats.",
        "severity": "critical"
      },
      {
        "title": "No mobile screen time habits",
        "description": "Families often remember to limit phones but forget the desktop entirely, creating a second unmonitored screen.",
        "severity": "medium"
      },
      {
        "title": "Gaming platforms like Steam",
        "description": "Desktop gaming stores bring mature games, social features, voice chat, and constant sales pressure.",
        "severity": "high"
      },
      {
        "title": "Discord and community chat",
        "description": "Desktop use often shifts children toward servers and voice channels where adults can join quietly.",
        "severity": "high"
      }
    ],
    "setupGuideIntro": "Desktop safety depends heavily on location. Native parental controls work better when the machine is visible and shared, not isolated.",
    "setupGuide": [
      {
        "title": "Create a child-only login",
        "steps": [
          "Windows: Settings → Accounts → Family. macOS: System Settings → Users & Groups → Add User and keep it as a standard account."
        ]
      },
      {
        "title": "Turn on the family dashboard",
        "steps": [
          "Windows: link the child to Microsoft Family Safety. macOS: System Settings → Screen Time and apply limits to the child's account."
        ]
      },
      {
        "title": "Keep software installs behind your password",
        "steps": [
          "Do not share the administrator password. Steam, Discord, VPNs, and second browsers are much harder to add without it."
        ]
      },
      {
        "title": "Add browser and gaming schedules",
        "steps": [
          "Use Family Safety or Screen Time to set time windows for the browser, games, and chat apps."
        ]
      },
      {
        "title": "Review activity once a week",
        "steps": [
          "Look at screen time reports, installed apps, and recent friend or server activity before it becomes a surprise."
        ]
      }
    ],
    "related": [
      {
        "category": "os",
        "slug": "windows"
      },
      {
        "category": "os",
        "slug": "macos"
      },
      {
        "category": "apps",
        "slug": "fortnite"
      }
    ]
  },
  {
    "slug": "ios",
    "name": "iOS",
    "category": "os",
    "riskLevel": "critical",
    "riskLabelText": "Critical risk",
    "summary": "iOS feels polished and safe, which can make families assume the defaults are enough.",
    "description": "iOS feels polished and safe, which can make families assume the defaults are enough. In practice, AirDrop, iMessage, app installs, and Screen Time settings all need active setup if the phone or iPad belongs to a child.",
    "quickActions": [
      {
        "title": "Set a separate Screen Time passcode",
        "description": "This is the difference between Screen Time looking active and actually staying active."
      },
      {
        "title": "Turn on Communication Limits",
        "description": "It reduces the chance of unknown numbers reaching your child in Messages or FaceTime."
      },
      {
        "title": "Set AirDrop to Contacts Only or Off",
        "description": "Do this before school events, sports practice, or any crowded public setting."
      }
    ],
    "watchFor": [
      {
        "title": "iMessage contact from strangers",
        "description": "If communication settings are open, unknown numbers can reach a child directly through Messages.",
        "severity": "high"
      },
      {
        "title": "AirDrop from strangers",
        "description": "Nearby people can send unwanted images or files if AirDrop is left open.",
        "severity": "high"
      },
      {
        "title": "Screen Time can be bypassed if the child knows the Apple ID password",
        "description": "Once a child can reset or change controls, the rest of the setup quickly loses value.",
        "severity": "critical"
      },
      {
        "title": "App downloads and spending stay easy by default",
        "description": "Without Ask to Buy and purchase limits, a child can add social apps or spend money faster than many parents expect.",
        "severity": "medium"
      }
    ],
    "setupGuideIntro": "Menu path: Settings → Screen Time. Use a Screen Time passcode that is different from the device unlock code and from the child's Apple ID password.",
    "setupGuide": [
      {
        "title": "Turn on Screen Time",
        "steps": [
          "Open Settings → Screen Time and choose This is My Child's iPhone or iPad."
        ]
      },
      {
        "title": "Set a separate Screen Time passcode",
        "steps": [
          "Use a code your child does not know so they cannot change restrictions in the moment."
        ]
      },
      {
        "title": "Enable Communication Limits",
        "steps": [
          "Settings → Screen Time → Communication Limits. Restrict who can contact them during allowed time and downtime."
        ]
      },
      {
        "title": "Turn on Content & Privacy Restrictions",
        "steps": [
          "Settings → Screen Time → Content & Privacy Restrictions. Lock app installs, purchases, and age-inappropriate content."
        ]
      },
      {
        "title": "Add Downtime and app limits",
        "steps": [
          "Settings → Screen Time → Downtime and App Limits. Use both so bedtime and category limits work together."
        ]
      },
      {
        "title": "Shut down AirDrop exposure",
        "steps": [
          "Settings → General → AirDrop. Set it to Contacts Only or Receiving Off."
        ]
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "smartphone"
      },
      {
        "category": "devices",
        "slug": "tablet"
      },
      {
        "category": "apps",
        "slug": "snapchat"
      }
    ]
  },
  {
    "slug": "android",
    "name": "Android",
    "category": "os",
    "riskLevel": "critical",
    "riskLabelText": "Critical risk",
    "summary": "Android gives families useful control tools, but it also gives children more routes around them if the setup is loose.",
    "description": "Android gives families useful control tools, but it also gives children more routes around them if the setup is loose. Sideloading, different manufacturer menus, and open browser access mean the safest Android device is one attached to supervised Google accounts from the start.",
    "quickActions": [
      {
        "title": "Set up Google Family Link",
        "description": "Do not wait until after a child has already added apps and contacts."
      },
      {
        "title": "Turn off Install unknown apps",
        "description": "This closes one of the biggest Android bypass routes."
      },
      {
        "title": "Require approval for every install",
        "description": "That includes free games, chat apps, and add-on stores."
      }
    ],
    "watchFor": [
      {
        "title": "Sideloading APKs bypasses Play Store controls",
        "description": "A child can install apps from links, files, or third-party stores even if you have restricted the official store.",
        "severity": "critical"
      },
      {
        "title": "A Google account opens broad access",
        "description": "Email, YouTube, Drive, Maps, Chrome, and app sync all become active together unless the account is supervised tightly.",
        "severity": "high"
      },
      {
        "title": "Family Link coverage is strongest for under-13 accounts",
        "description": "As children get older, some settings become easier to challenge, delay, or work around.",
        "severity": "medium"
      },
      {
        "title": "Browser exposure stays wide unless filtered",
        "description": "Even if app installs are approved, Chrome can still become the fastest route to explicit or harmful content.",
        "severity": "high"
      }
    ],
    "setupGuideIntro": "Family Link is strongest for supervised child accounts, especially under 13. Older teens may only get parts of the control set through Digital Wellbeing and parent agreements.",
    "setupGuide": [
      {
        "title": "Enable Family Link first",
        "steps": [
          "Install Google Family Link on the parent phone and connect the child's Google account before the child personalizes the device."
        ]
      },
      {
        "title": "Approve every app install",
        "steps": [
          "Open Family Link → Controls → Content restrictions → Google Play and require approval for installs and purchases."
        ]
      },
      {
        "title": "Set daily limits and bedtime lock",
        "steps": [
          "Go to Family Link → Controls → Screen time and set both a Daily limit and Bedtime schedule."
        ]
      },
      {
        "title": "Turn off unknown app installs",
        "steps": [
          "Open Settings → Apps → Special app access → Install unknown apps and set every app source to Not allowed."
        ]
      },
      {
        "title": "Review browser and YouTube access",
        "steps": [
          "Use Family Link to set age filters for Chrome and YouTube, then test the phone yourself from the child's account."
        ]
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "smartphone"
      },
      {
        "category": "devices",
        "slug": "tablet"
      },
      {
        "category": "apps",
        "slug": "tiktok"
      }
    ]
  },
  {
    "slug": "windows",
    "name": "Windows",
    "category": "os",
    "riskLevel": "critical",
    "riskLabelText": "Critical risk",
    "summary": "Windows is powerful, flexible, and common in bedrooms and school setups, which is exactly why it needs clear family rules.",
    "description": "Windows is powerful, flexible, and common in bedrooms and school setups, which is exactly why it needs clear family rules. It gives children access to full browsers, file downloads, game launchers, and private chat tools unless a parent creates a true child account and keeps admin rights to themselves.",
    "quickActions": [
      {
        "title": "Create a child Microsoft account",
        "description": "That one step makes Family Safety reporting and scheduling much stronger."
      },
      {
        "title": "Turn on web content filters",
        "description": "Do this before trusting the desktop or laptop for homework use."
      },
      {
        "title": "Set a fixed screen time schedule",
        "description": "A bedtime lock is easier to enforce than repeated verbal reminders."
      }
    ],
    "watchFor": [
      {
        "title": "No built-in app store gate by default",
        "description": "Programs can be downloaded from websites directly, not just from the Microsoft Store.",
        "severity": "high"
      },
      {
        "title": "Steam and gaming clients install easily",
        "description": "A child can add large gaming libraries, voice chat, and late-night play if installs are not restricted.",
        "severity": "high"
      },
      {
        "title": "Browser access is effectively unlimited without filters",
        "description": "Windows turns into an open web machine quickly if browser rules are not enforced.",
        "severity": "critical"
      },
      {
        "title": "Multiple accounts and browsers create blind spots",
        "description": "Parents often secure one browser while a second browser or second profile remains wide open.",
        "severity": "medium"
      }
    ],
    "setupGuideIntro": "Use family.microsoft.com as the control center. It works best when the child signs in with their own Microsoft account on the PC.",
    "setupGuide": [
      {
        "title": "Create a child Microsoft account",
        "steps": [
          "Open Settings → Accounts → Family and add the child as a family member."
        ]
      },
      {
        "title": "Link the device in Family Safety",
        "steps": [
          "Go to family.microsoft.com, confirm the child is connected, and make sure they sign in on the PC with that account."
        ]
      },
      {
        "title": "Set a screen time schedule",
        "steps": [
          "Use Family Safety → Screen time to define allowed hours and total time for weekdays and weekends."
        ]
      },
      {
        "title": "Enable content filters",
        "steps": [
          "Use Family Safety → Content filters to block adult sites and keep browsing tied to the allowed browser setup."
        ]
      },
      {
        "title": "Review weekly activity reports",
        "steps": [
          "Turn on reporting so app use, search patterns, and browser activity show up before they become hidden habits."
        ]
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "laptop"
      },
      {
        "category": "devices",
        "slug": "desktop"
      },
      {
        "category": "apps",
        "slug": "discord"
      }
    ]
  },
  {
    "slug": "macos",
    "name": "macOS",
    "category": "os",
    "riskLevel": "high",
    "riskLabelText": "High risk",
    "summary": "macOS is clean and dependable, but it can still become an unrestricted browser and app machine if the child's account is not limited.",
    "description": "macOS is clean and dependable, but it can still become an unrestricted browser and app machine if the child's account is not limited. Screen Time is useful here, but only when the passcode is separate and the child's login is not allowed to install software freely.",
    "quickActions": [
      {
        "title": "Turn on Screen Time with a separate passcode",
        "description": "The passcode matters as much as the settings themselves."
      },
      {
        "title": "Enable Content & Privacy restrictions",
        "description": "This is the fastest way to lock down web content and installs."
      },
      {
        "title": "Use a standard child account",
        "description": "Do not give the child's login the ability to approve its own software."
      }
    ],
    "watchFor": [
      {
        "title": "App gating is weaker on older macOS setups",
        "description": "If the Mac is older or the child has broad permissions, software can be added more easily than parents expect.",
        "severity": "medium"
      },
      {
        "title": "Browser use is wide open without content restrictions",
        "description": "Safari and other browsers can become the main route to adult sites, self-harm forums, or unmoderated communities.",
        "severity": "high"
      },
      {
        "title": "A standard user account is often skipped",
        "description": "If the child signs in as an administrator, Screen Time limits can lose much of their force.",
        "severity": "high"
      },
      {
        "title": "Shared Apple services can blur adult and child use",
        "description": "A Mac tied too closely to a parent's Apple setup can expose personal data and make clean supervision harder.",
        "severity": "medium"
      }
    ],
    "setupGuideIntro": "Menu path: System Settings → Screen Time. On older Macs, also double-check whether app installs are gated the way you expect.",
    "setupGuide": [
      {
        "title": "Turn on Screen Time",
        "steps": [
          "Open System Settings → Screen Time and select the child's account."
        ]
      },
      {
        "title": "Set a separate Screen Time passcode",
        "steps": [
          "Use a code that is different from the Mac login password and known only to the parent."
        ]
      },
      {
        "title": "Add App Limits",
        "steps": [
          "System Settings → Screen Time → App Limits. Cap browsers, games, and chat apps individually."
        ]
      },
      {
        "title": "Enable Communication Limits",
        "steps": [
          "System Settings → Screen Time → Communication Safety or Communication Limits, depending on macOS version."
        ]
      },
      {
        "title": "Turn on Content & Privacy",
        "steps": [
          "System Settings → Screen Time → Content & Privacy. Restrict app installs, web content, and account changes."
        ]
      },
      {
        "title": "Schedule Downtime",
        "steps": [
          "System Settings → Screen Time → Downtime and set a consistent evening lock."
        ]
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "laptop"
      },
      {
        "category": "devices",
        "slug": "desktop"
      },
      {
        "category": "apps",
        "slug": "chatgpt"
      }
    ]
  },
  {
    "slug": "roblox",
    "name": "Roblox",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "High risk",
    "summary": "A platform of user-created games. Start with a linked parent account, then review games, communication and spending for your child’s age.",
    "description": "A platform of user-created games. Start with a linked parent account, then review games, communication and spending for your child’s age.",
    "quickActions": [
      {
        "title": "Link your own parent account",
        "description": "On the child’s account, open Settings → Parental Controls → Add parent and follow the invitation."
      },
      {
        "title": "Review communication",
        "description": "From your linked account, select your child and review Communication. Turn off chat options you do not want them using."
      },
      {
        "title": "Agree on games and a budget",
        "description": "Choose games together. Review the available content, time and spending controls before buying Robux."
      }
    ],
    "watchFor": [
      {
        "title": "Contact beyond the game",
        "description": "An online player may ask for secrets or try to move a conversation to another app. Make it easy for your child to tell you.",
        "severity": "critical"
      },
      {
        "title": "Unexpected game content",
        "description": "Review a game together when its theme or behaviour surprises your child.",
        "severity": "high"
      },
      {
        "title": "Robux pressure and scams",
        "description": "Treat promises of free currency in exchange for a password or login code as a reason to stop.",
        "severity": "high"
      },
      {
        "title": "Sessions running late",
        "description": "Agree on stopping points and check whether play is displacing sleep or other activities.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Connect parent and child accounts",
        "steps": [
          "Accept the invitation using your own Roblox account and complete the parent verification. Manage the child from Settings → Parental Controls."
        ]
      },
      {
        "title": "Understand Kids and Select",
        "steps": [
          "Roblox announced global availability on 16 June 2026. Placement uses age information; it is not simply a tier you choose. Age-checked children aged 5–8 use Kids, and ages 9–15 use Select. Self-declared accounts have more restrictions, including no chat."
        ]
      },
      {
        "title": "Check chat permissions",
        "steps": [
          "Chat requires an age check. Review the communication options shown for your child rather than assuming all chat is friends-only. Available controls depend on age and region."
        ]
      },
      {
        "title": "Review games",
        "steps": [
          "Under Content restrictions, review Content maturity and Blocked games. Check any requests to allow a game together."
        ]
      },
      {
        "title": "Check spending and time limits",
        "steps": [
          "Review Spending and Screen time where available. Monthly spending limits do not cover gift-card redemption. Do not assume every control continues through age 15; availability differs by control and region."
        ]
      },
      {
        "title": "Keep checking in",
        "steps": [
          "Ask what they played and who they met. Agree that requests for passwords, gifts or private contact elsewhere are reasons to pause and tell you."
        ]
      }
    ],
    "ageRating": "Experience ratings vary; Kids 5–8 / Select 9–15",
    "userCount": "Children, teens and adults",
    "platform": "iOS, Android, Xbox, PlayStation, PC",
    "ageRecommendation": "Our recommendation: 10+ with active supervision",
    "riskBarPosition": 75,
    "appMetrics": [
      {
        "label": "Younger accounts",
        "value": "Kids / Select"
      },
      {
        "label": "Chat access",
        "value": "Age check required"
      },
      {
        "label": "Parent access",
        "value": "Linked account"
      },
      {
        "label": "Purchases",
        "value": "Robux and subscriptions"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "What controls cannot do",
        "description": "Age checks and filters are not guarantees about another player’s identity or behaviour. Keep reporting and conversations part of the routine."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Use your own linked parent account to review the settings that actually apply to your child."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "tablet"
      },
      {
        "category": "devices",
        "slug": "smartphone"
      },
      {
        "category": "os",
        "slug": "windows"
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "Kids and Select are globally available. Individual controls vary by age, account and region.",
      "sources": [
        {
          "title": "Roblox: parental controls",
          "url": "https://about.roblox.com/parental-controls"
        },
        {
          "title": "Roblox: Kids and Select availability",
          "url": "https://about.roblox.com/newsroom/2026/06/age-based-roblox-kids-and-select-accounts-now-globally-available"
        },
        {
          "title": "Roblox: monthly spending limits",
          "url": "https://en.help.roblox.com/hc/en-us/articles/4409558125460-Monthly-Spending-Limits-and-Notifications-FAQ"
        }
      ]
    }
  },
  {
    "slug": "youtube",
    "name": "YouTube",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "High risk",
    "summary": "A video platform driven by a powerful recommendation engine, autoplay, and largely unfiltered comments.",
    "description": "A video platform driven by a powerful recommendation engine, autoplay, and largely unfiltered comments.",
    "quickActions": [
      {
        "title": "Enable Restricted Mode everywhere",
        "description": "Account icon → Restricted Mode → ON. Repeat this on every browser and every device because it is not account-wide."
      },
      {
        "title": "Use YouTube Kids for children under 13",
        "description": "Switch younger children to the YouTube Kids app and review settings at kids.youtube.com/settings."
      },
      {
        "title": "Turn off Autoplay",
        "description": "Account icon → Settings → Autoplay → OFF so videos stop instead of rolling into the next recommendation."
      },
      {
        "title": "Limit or switch off the Shorts feed",
        "description": "For supervised teen accounts, open Family Center → your child → Time management and set a daily Shorts limit. Setting it to 0 minutes removes the Shorts feed entirely (added January 2026)."
      }
    ],
    "watchFor": [
      {
        "title": "Algorithm rabbit holes",
        "description": "A child can move from harmless clips into extremist, violent, or self-harm content quickly because the system rewards continued watching.",
        "severity": "critical"
      },
      {
        "title": "Comment sections expose children to adults and explicit content",
        "description": "Comments often include sexual language, harassment, scams, and direct contact attempts with little meaningful moderation.",
        "severity": "high"
      },
      {
        "title": "YouTube Kids is not fully safe",
        "description": "The child version reduces risk but still allows age-inappropriate videos, misleading channels, and algorithm mistakes to slip through.",
        "severity": "high"
      },
      {
        "title": "Autoplay removes natural stopping points",
        "description": "Without a clear stopping cue, a planned short watch can turn into an hour or more of passive viewing.",
        "severity": "high"
      },
      {
        "title": "Misleading health and money advice",
        "description": "Confident creators can sound expert while sharing harmful health claims, get-rich promises, or other bad advice.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Enable Restricted Mode everywhere",
        "steps": [
          "Account icon → Restricted Mode → ON. Repeat this on every browser and every device because it is not account-wide."
        ]
      },
      {
        "title": "Use YouTube Kids for children under 13",
        "steps": [
          "Switch younger children to the YouTube Kids app and review settings at kids.youtube.com/settings."
        ]
      },
      {
        "title": "Turn off Autoplay",
        "steps": [
          "Account icon → Settings → Autoplay → OFF so videos stop instead of rolling into the next recommendation."
        ]
      },
      {
        "title": "Disable Search for younger children",
        "steps": [
          "YouTube Kids app → profile icon → Settings → disable Search for children under 8 so the app serves a narrower set of videos."
        ]
      },
      {
        "title": "Review watch history weekly",
        "steps": [
          "Account → History and look through what the recommendation system has been serving your child."
        ]
      },
      {
        "title": "Limit or switch off the Shorts feed",
        "steps": [
          "On a supervised teen account, open Family Center → select your child → Time management and set a daily limit on the Shorts feed. Setting it to 0 minutes removes the endless Shorts feed from their app (rolled out January 2026)."
        ]
      },
      {
        "title": "Know the new live-streaming age rule",
        "steps": [
          "Since July 2025, YouTube only lets 16+ users livestream. Children aged 13-15 can stream only while visibly supervised by an adult on the same channel, so check before allowing any live broadcasts."
        ]
      },
      {
        "title": "Set an app-specific time limit",
        "steps": [
          "Use iPhone Screen Time or Android Digital Wellbeing and target the YouTube app itself rather than only setting whole-device limits."
        ]
      }
    ],
    "ageRating": "13+ for accounts",
    "userCount": "Massive global audience",
    "platform": "iOS, Android, Web, TV",
    "ageRecommendation": "Use YouTube Kids for under-13s, but supervise closely",
    "riskBarPosition": 72,
    "appMetrics": [
      {
        "label": "Avg teen daily use",
        "value": "80 min/day"
      },
      {
        "label": "Algorithm power",
        "value": "Extreme"
      },
      {
        "label": "Comment sections",
        "value": "Unmoderated"
      },
      {
        "label": "YouTube Kids",
        "value": "Not fully safe"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "YouTube's recommendation algorithm is trained to maximize watch time, not wellbeing. A child watching one mildly edgy video can be served increasingly extreme content within 30 minutes, and this can happen on YouTube Kids too."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Restricted Mode has to be enabled separately on every browser and every device. It does not sync automatically."
      },
      {
        "type": "tip",
        "title": "New in 2026",
        "description": "Parents of supervised teen accounts can now cap the Shorts feed by the minute — set it to 0 in Family Center → Time management to remove the endless short-video feed completely."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "tablet"
      },
      {
        "category": "devices",
        "slug": "smartphone"
      },
      {
        "category": "os",
        "slug": "android"
      }
    ]
  },
  {
    "slug": "snapchat",
    "name": "Snapchat",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "High risk",
    "summary": "A photo and messaging app built around disappearing messages, quick sharing, and live location features.",
    "description": "A photo and messaging app built around disappearing messages, quick sharing, and live location features.",
    "quickActions": [
      {
        "title": "Turn on Ghost Mode",
        "description": "Snap Map → gear icon → Ghost Mode ON. Do this before your child builds a friend list."
      },
      {
        "title": "Limit who can contact them",
        "description": "Settings → Privacy Controls → Contact Me and set it to Friends only."
      },
      {
        "title": "Purge the friend list",
        "description": "Profile → My Friends and remove anyone your child cannot clearly identify offline."
      },
      {
        "title": "Set up Family Center",
        "description": "From your own (18+) account link to your teen's account in Family Center to see recent contacts, filter sensitive Stories, and turn off the My AI chatbot."
      }
    ],
    "watchFor": [
      {
        "title": "Snap Map location sharing",
        "description": "Real-time location can show where a child lives, goes to school, or is hanging out right now.",
        "severity": "critical"
      },
      {
        "title": "Sexting feels safer than it is",
        "description": "The disappearing message format lowers a child's guard, even though screenshots and second devices make saving easy.",
        "severity": "critical"
      },
      {
        "title": "Drug solicitation",
        "description": "Snapchat is widely used for local contact and can expose teens to offers or coded posts they are not ready for.",
        "severity": "high"
      },
      {
        "title": "Sextortion scams",
        "description": "A child may be pressured into sending an image and then blackmailed with threats to share it widely.",
        "severity": "high"
      },
      {
        "title": "Streak anxiety and FOMO",
        "description": "Daily streaks push constant checking and make ordinary friendships feel like an always-on performance.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Turn on Ghost Mode",
        "steps": [
          "Snap Map → gear icon → Ghost Mode ON. Do this before your child builds a friend list."
        ]
      },
      {
        "title": "Limit who can contact them",
        "steps": [
          "Settings → Privacy Controls → Contact Me and set it to Friends only."
        ]
      },
      {
        "title": "Purge the friend list",
        "steps": [
          "Profile → My Friends and remove anyone your child cannot clearly identify offline."
        ]
      },
      {
        "title": "Disable Quick Add",
        "steps": [
          "Settings → Privacy Controls → See Me in Quick Add → OFF so the account is less visible to strangers."
        ]
      },
      {
        "title": "Teach that screenshots are permanent",
        "steps": [
          "Open any chat together and explain that disappearing is a design feature, not a guarantee."
        ]
      },
      {
        "title": "Link Family Center and use the new insights",
        "steps": [
          "From your own account (18+) open Family Center and invite your teen (13-17) to link. As of January 2026 you can see their weekly average screen time broken down by feature and get trust signals showing how they may know each new friend they add."
        ]
      },
      {
        "title": "Turn on Content Controls and disable My AI",
        "steps": [
          "Inside Family Center, enable Content Controls to filter out Stories from creators flagged as sensitive or suggestive, and switch off the My AI chatbot if you do not want your child chatting with it."
        ]
      },
      {
        "title": "Review Memories regularly",
        "steps": [
          "Memories tab → check saved snaps together so private content does not quietly build up over time."
        ]
      }
    ],
    "ageRating": "13+ official",
    "userCount": "Very popular with teens",
    "platform": "iOS, Android",
    "ageRecommendation": "Recommended 15+ with active oversight",
    "riskBarPosition": 80,
    "appMetrics": [
      {
        "label": "Primary age group",
        "value": "13-17"
      },
      {
        "label": "Snap Map",
        "value": "On by default"
      },
      {
        "label": "Disappearing messages",
        "value": "False safety"
      },
      {
        "label": "Content pressure",
        "value": "Very high"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "Snap Map can broadcast precise location to all friends by default. Turning on Ghost Mode should happen before anything else."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Ghost Mode is the single highest-impact Snapchat setting. Turn it on before the first friend request."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "smartphone"
      },
      {
        "category": "os",
        "slug": "ios"
      },
      {
        "category": "apps",
        "slug": "instagram"
      }
    ]
  },
  {
    "slug": "instagram",
    "name": "Instagram",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "High risk",
    "summary": "A social platform driven by visual identity, algorithmic recommendations, public feedback, and direct messages.",
    "description": "A social platform driven by visual identity, algorithmic recommendations, public feedback, and direct messages.",
    "quickActions": [
      {
        "title": "Switch to a private account",
        "description": "Settings → Account Privacy → Private Account. This should be the starting point, not an afterthought."
      },
      {
        "title": "Restrict incoming DMs",
        "description": "Settings → Messages → Message Controls → Don't receive requests from Others."
      },
      {
        "title": "Turn on Family Centre supervision",
        "description": "Settings → Family Centre and connect the parent account for under-18 supervision tools."
      },
      {
        "title": "Confirm they are on a Teen Account",
        "description": "All under-18 users now default to a protected Teen Account (private, restricted DMs, PG-13 content). Check the birthday is correct so the protections actually apply."
      }
    ],
    "watchFor": [
      {
        "title": "Body image and eating disorder pressure",
        "description": "Repeated appearance-focused content can reshape how a child sees normal bodies, food, and self-worth.",
        "severity": "high"
      },
      {
        "title": "Stranger DMs and grooming",
        "description": "Public accounts and open message controls make it easy for adults to start private conversations.",
        "severity": "high"
      },
      {
        "title": "Cyberbullying through public metrics",
        "description": "Likes, comments, tags, and story replies can turn normal social conflict into a public scoreboard.",
        "severity": "high"
      },
      {
        "title": "Explore content spirals",
        "description": "A few clicks on provocative or upsetting posts can quickly reshape the whole recommendation feed.",
        "severity": "medium"
      },
      {
        "title": "Financial scams from fake influencers",
        "description": "Giveaways, fake shops, and influencer-style messages can pressure teens into sharing payment details or personal data.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Switch to a private account",
        "steps": [
          "Settings → Account Privacy → Private Account. This should be the starting point, not an afterthought."
        ]
      },
      {
        "title": "Restrict incoming DMs",
        "steps": [
          "Settings → Messages → Message Controls → Don't receive requests from Others."
        ]
      },
      {
        "title": "Turn on Family Centre supervision",
        "steps": [
          "Settings → Family Centre and connect the parent account for under-18 supervision tools."
        ]
      },
      {
        "title": "Verify the Teen Account protections",
        "steps": [
          "Since 2024 every under-18 account defaults to a Teen Account: private by default, strictest message settings, and (from October 2025) a PG-13 content default. Under-16s cannot loosen these without a linked parent approving via Family Centre, so make sure supervision is connected. Instagram also now uses age-detection to move accounts that listed an adult birthday back into Teen protections."
        ]
      },
      {
        "title": "Turn on the strictest content setting",
        "steps": [
          "In Family Centre you can keep the PG-13 default or switch on the stricter Limited Content setting, which filters more material and removes the ability to see or leave comments. Parents are also alerted if a teen repeatedly searches suicide or self-harm terms (added February 2026)."
        ]
      },
      {
        "title": "Clear search history monthly",
        "steps": [
          "Settings → Your Activity → Recent Searches or Clear Search History and review what the algorithm has been learning."
        ]
      },
      {
        "title": "Set a daily time limit",
        "steps": [
          "Settings → Your Activity → Time Spent → Daily Limit and choose a cap you will enforce consistently."
        ]
      },
      {
        "title": "Approve tags manually",
        "steps": [
          "Settings → Privacy → Tags → Manually Approve Tags so your child is not attached to posts without warning."
        ]
      }
    ],
    "ageRating": "13+ official",
    "userCount": "Massive teen and young adult audience",
    "platform": "iOS, Android, Web",
    "ageRecommendation": "Not recommended under 16 without supervision",
    "riskBarPosition": 70,
    "appMetrics": [
      {
        "label": "Body image risk",
        "value": "Very high"
      },
      {
        "label": "Content default (teens)",
        "value": "PG-13"
      },
      {
        "label": "Stranger DMs (teens)",
        "value": "Restricted by default"
      },
      {
        "label": "Teen Accounts",
        "value": "Default for under-18s"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "The algorithm is the main risk on Instagram, not just the people using it. Once the feed learns insecurity or obsession, it can keep serving more of the same."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "A private account plus restricted DMs closes most stranger contact routes right away."
      },
      {
        "type": "tip",
        "title": "New since 2024",
        "description": "Teen Accounts are now the default for everyone under 18 and apply private mode, strict DMs, and PG-13 content automatically. Link a parent account in Family Centre so under-16s cannot turn the protections off."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "smartphone"
      },
      {
        "category": "os",
        "slug": "ios"
      },
      {
        "category": "apps",
        "slug": "tiktok"
      }
    ]
  },
  {
    "slug": "tiktok",
    "name": "TikTok",
    "category": "apps",
    "riskLevel": "critical",
    "riskLabelText": "Very high risk",
    "summary": "A short-video platform powered by one of the strongest recommendation algorithms children commonly use.",
    "description": "A short-video platform powered by one of the strongest recommendation algorithms children commonly use.",
    "quickActions": [
      {
        "title": "Enable Family Pairing",
        "description": "Settings → Family Pairing and link the parent's account to the child's account."
      },
      {
        "title": "Set a hard daily limit",
        "description": "Family Pairing → Screen Time and cap use at 60 minutes or less for younger teens, protected by a parent code."
      },
      {
        "title": "Restrict DMs",
        "description": "Family Pairing → Direct Messages and limit contact to Friends or disable it if the account does not need messaging."
      }
    ],
    "watchFor": [
      {
        "title": "Self-harm and eating disorder content spirals",
        "description": "The algorithm can learn vulnerability fast and keep feeding more extreme material with very little effort from the user.",
        "severity": "critical"
      },
      {
        "title": "Infinite scroll and extreme time loss",
        "description": "The feed has almost no stopping cues, which makes short sessions stretch far beyond what a child intended.",
        "severity": "critical"
      },
      {
        "title": "Predatory contact through DMs and Duets",
        "description": "Public posting and social tools can create contact with strangers even if a child never seeks it out.",
        "severity": "high"
      },
      {
        "title": "Disinformation and radicalisation",
        "description": "Fast emotional content is rewarded, which can make misleading or extreme viewpoints spread especially well.",
        "severity": "high"
      },
      {
        "title": "TikTok Shop impulse spending",
        "description": "Short videos can move directly into shopping behavior before a child has time to think about cost or quality.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Enable Family Pairing",
        "steps": [
          "Settings → Family Pairing and link the parent's account to the child's account."
        ]
      },
      {
        "title": "Set a hard daily limit",
        "steps": [
          "Family Pairing → Screen Time and cap use at 60 minutes or less for younger teens, protected by a parent code."
        ]
      },
      {
        "title": "Restrict DMs",
        "steps": [
          "Family Pairing → Direct Messages and limit contact to Friends or disable it if the account does not need messaging."
        ]
      },
      {
        "title": "Turn on Restricted Mode",
        "steps": [
          "Settings → Digital Wellbeing → Restricted Mode and lock it with the parent code."
        ]
      },
      {
        "title": "Make the account private and block stranger Duets",
        "steps": [
          "Settings → Privacy → Private Account, then Privacy → Duet and choose a friends-only option."
        ]
      },
      {
        "title": "Use the newer Family Pairing controls",
        "steps": [
          "Family Pairing now (since July 2025) lets you schedule Time Away windows that block the app during school or night hours, get notified when your teen posts a public video, block specific accounts, and see who they follow, who follows them, and which topics shape their feed. Review these together in Family Pairing settings."
        ]
      },
      {
        "title": "Shape the feed actively",
        "steps": [
          "Long-press unwanted videos → Not Interested so the recommendation engine receives corrective feedback."
        ]
      }
    ],
    "ageRating": "13+ official",
    "userCount": "Massive global audience",
    "platform": "iOS, Android, Web",
    "ageRecommendation": "Not recommended under 16 without strict controls",
    "riskBarPosition": 90,
    "appMetrics": [
      {
        "label": "Avg teen daily use",
        "value": "95 min"
      },
      {
        "label": "Algorithm power",
        "value": "Extreme"
      },
      {
        "label": "Mental health link",
        "value": "Strongest"
      },
      {
        "label": "Data collection",
        "value": "Extensive"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "TikTok's recommendation engine is the product risk. The app is built to maximize time spent, and time limits are the most effective control a parent has."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Family Pairing gives parents meaningful control without taking the child's password. Set it up before anything else."
      },
      {
        "type": "tip",
        "title": "New since 2025",
        "description": "Family Pairing added Time Away scheduling, alerts when your teen posts publicly, the ability to block specific accounts, and visibility into who they follow and what shapes their feed. Under-16 accounts are also private by default with a 60-minute daily limit."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "smartphone"
      },
      {
        "category": "os",
        "slug": "android"
      },
      {
        "category": "apps",
        "slug": "youtube"
      }
    ]
  },
  {
    "slug": "discord",
    "name": "Discord",
    "category": "apps",
    "riskLevel": "critical",
    "riskLabelText": "Very high risk",
    "summary": "A service for group communities, direct messages and voice calls. Link Family Center and review who can contact your teen alongside the servers they use.",
    "description": "A service for group communities, direct messages and voice calls. Link Family Center and review who can contact your teen alongside the servers they use.",
    "quickActions": [
      {
        "title": "Connect Family Center",
        "description": "Open Family Center in account settings. Complete the link together in the mobile app; your teen needs to accept."
      },
      {
        "title": "Restrict direct messages",
        "description": "In Content & Social, turn off Direct messages from server members and apply the change to existing servers when prompted."
      },
      {
        "title": "Review servers together",
        "description": "Ask what each community is for, who runs it and what your teen enjoys there. Leave communities that feel unsafe."
      }
    ],
    "watchFor": [
      {
        "title": "Private approaches",
        "description": "A shared community is not proof that someone is trustworthy. Pay attention to requests for secrecy or a move to another service.",
        "severity": "critical"
      },
      {
        "title": "Harmful communities",
        "description": "Leave and report communities that encourage harassment, exploitation or violence.",
        "severity": "high"
      },
      {
        "title": "Unfamiliar links and downloads",
        "description": "Pause before opening a promised gift or game download. Never share login codes.",
        "severity": "high"
      },
      {
        "title": "Uncomfortable calls",
        "description": "Agree that your teen can leave a call immediately if someone pressures or frightens them.",
        "severity": "high"
      }
    ],
    "setupGuide": [
      {
        "title": "Link supervision",
        "steps": [
          "Use the Family Center linking instructions below. Explain that it shows recent activity and selected settings, not the contents of private conversations."
        ]
      },
      {
        "title": "Review contact settings",
        "steps": [
          "Open Settings → Content & Social. Review Direct messages, individual server permissions and Friend Requests; limit who can send requests."
        ]
      },
      {
        "title": "Check sensitive-media settings",
        "steps": [
          "Review the sexual and graphic media filters. Use blocking in DMs where available and blurring in servers. Filters can miss content; blurring is not the same as blocking."
        ]
      },
      {
        "title": "Separate teen protections from the global rollout",
        "steps": [
          "Discord’s February update delayed global age assurance to the second half of 2026. That announcement does not establish completion. Check the current account’s settings and country-specific requirements; not everyone is asked for ID or a face scan."
        ]
      },
      {
        "title": "Review activity and limits",
        "steps": [
          "Use Family Center to discuss recent activity. Where shown, check Screen Downtime and the monthly spending cap; the cap excludes subscriptions. Review those separately."
        ]
      },
      {
        "title": "Practice reporting",
        "steps": [
          "Agree that your teen can show you a troubling message without being blamed. Review the in-app report and block options together."
        ]
      }
    ],
    "ageRating": "13+ or the higher minimum in your country",
    "userCount": "Community and gaming users",
    "platform": "iOS, Android, PC, Console",
    "ageRecommendation": "Our recommendation: direct supervision for younger teens",
    "riskBarPosition": 85,
    "appMetrics": [
      {
        "label": "Parent tools",
        "value": "Family Center"
      },
      {
        "label": "Message content",
        "value": "Private"
      },
      {
        "label": "Media filters",
        "value": "Check account settings"
      },
      {
        "label": "Global age assurance",
        "value": "Rollout status varies"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "What controls cannot do",
        "description": "A family dashboard is not a full conversation history. Keep discussing the people and communities behind the activity."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Connect Family Center and review contact permissions together before joining more servers."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "laptop"
      },
      {
        "category": "devices",
        "slug": "desktop"
      },
      {
        "category": "os",
        "slug": "windows"
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "Global age assurance was postponed to the second half of 2026; completion is not confirmed by the cited announcement. Check local availability.",
      "sources": [
        {
          "title": "Discord: age-assurance rollout update",
          "url": "https://discord.com/safety/how-discord-is-building-safer-experiences-for-teens"
        },
        {
          "title": "Discord: Family Center for parents",
          "url": "https://support.discord.com/hc/en-us/articles/14155043715735-Family-Center-for-Parents-and-Guardians"
        },
        {
          "title": "Discord: privacy and contact settings",
          "url": "https://support.discord.com/hc/en-us/articles/217916488-Blocking-Privacy-Settings"
        },
        {
          "title": "Discord: sensitive-content filters",
          "url": "https://support.discord.com/hc/en-us/articles/18210995019671-Discord-Sensitive-Content-Filters"
        }
      ]
    }
  },
  {
    "slug": "fortnite",
    "name": "Fortnite",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "Medium-high risk",
    "summary": "A multiplayer game with player communication and purchases. Check both the Epic account and the console or store used to pay.",
    "description": "A multiplayer game with player communication and purchases. Check both the Epic account and the console or store used to pay.",
    "quickActions": [
      {
        "title": "Set an Epic parent PIN",
        "description": "Open Parental Controls in the Epic Account Portal and keep the PIN private."
      },
      {
        "title": "Restrict communication",
        "description": "Choose Nobody or a limited friends option for voice and text chat in Epic parental controls."
      },
      {
        "title": "Check each payment route",
        "description": "Review Epic payment approval and the console’s own purchase controls. Agree on a budget for existing V-Bucks too."
      }
    ],
    "watchFor": [
      {
        "title": "Pressure from other players",
        "description": "Your child should be able to mute or leave a conversation that becomes threatening or uncomfortable.",
        "severity": "high"
      },
      {
        "title": "Currency feels less like money",
        "description": "Discuss the real cost before buying currency and before spending it.",
        "severity": "high"
      },
      {
        "title": "Fake reward offers",
        "description": "Do not enter passwords or login codes on pages promising free V-Bucks.",
        "severity": "medium"
      },
      {
        "title": "One more match",
        "description": "Check whether matches repeatedly push bedtime later than agreed.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Review the account age",
        "steps": [
          "Below 13 or the local digital-consent age, whichever is higher, Epic uses a Cabined Account. Voice and free-text chat remain unavailable pending parental consent. Review permissions before consenting."
        ]
      },
      {
        "title": "Set contact boundaries",
        "steps": [
          "In Epic parental controls, review voice chat, text chat and the PIN requirement for adding friends. Agree who your child may play and talk with."
        ]
      },
      {
        "title": "Protect real-money purchases",
        "steps": [
          "Enable the PIN requirement for Epic payments. It does not control purchases through other platform stores or spending existing V-Bucks; review those separately."
        ]
      },
      {
        "title": "Understand the $100 threshold",
        "steps": [
          "For under-13 accounts, Epic describes a $100 daily Epic-payment threshold that a parent PIN can override. It excludes other platform payments and in-game currency. It is not your family’s spending budget."
        ]
      },
      {
        "title": "Review random-item spending",
        "steps": [
          "Where offered, turn off Allow Paid Random Items if you do not want V-Bucks spent on random rewards. This is not a block on every V-Bucks purchase."
        ]
      },
      {
        "title": "Agree on stopping points",
        "steps": [
          "Choose session end times and review spending together. Check the store used for each payment when investigating an unexpected charge."
        ]
      }
    ],
    "ageRating": "12+ / Teen; experience ratings vary",
    "userCount": "Players across PC, consoles and mobile",
    "platform": "PC, Console, Mobile",
    "ageRecommendation": "Our recommendation: 12+ with agreed chat and spending rules",
    "riskBarPosition": 60,
    "appMetrics": [
      {
        "label": "Parent access",
        "value": "Epic PIN"
      },
      {
        "label": "Chat",
        "value": "Review permissions"
      },
      {
        "label": "Epic payment PIN",
        "value": "Not all payment routes"
      },
      {
        "label": "V-Bucks",
        "value": "Separate spending rules"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "What controls cannot do",
        "description": "A purchase PIN for one store does not cover every way of paying. Review the console store and currency already in the account."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Set the Epic parent PIN, then agree on chat permissions and a real-money budget together."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "desktop"
      },
      {
        "category": "os",
        "slug": "windows"
      },
      {
        "category": "apps",
        "slug": "discord"
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "Epic controls and other platform-store controls are separate. Some options depend on age and region.",
      "sources": [
        {
          "title": "Epic: payment, chat and parental controls",
          "url": "https://safety.epicgames.com/en-US/parental-controls"
        },
        {
          "title": "Epic: Cabined Accounts",
          "url": "https://www.epicgames.com/site/cabinedaccounts?lang=en"
        }
      ]
    }
  },
  {
    "slug": "minecraft",
    "name": "Minecraft",
    "category": "apps",
    "riskLevel": "medium",
    "riskLabelText": "Medium risk",
    "summary": "A creative sandbox game that is low risk in single-player but very different once public servers and downloads enter the picture.",
    "description": "A creative sandbox game that is low risk in single-player but very different once public servers and downloads enter the picture.",
    "quickActions": [
      {
        "title": "Check whether they use Java or Bedrock",
        "description": "Java Edition on PC has no meaningful built-in parental controls. Bedrock on consoles, mobile, and Windows can be controlled through Xbox Family Safety."
      },
      {
        "title": "Use Microsoft Family Safety for Bedrock",
        "description": "Go to family.microsoft.com (the controls moved here) and restrict multiplayer, purchases, and screen time for any Bedrock account."
      },
      {
        "title": "Keep Java players on Realms only",
        "description": "Use minecraft.net/realms and set up a private, invite-only Realm with known friends instead of public servers."
      }
    ],
    "watchFor": [
      {
        "title": "Public servers expose children to adults",
        "description": "Third-party multiplayer servers allow strangers to join, with little age verification and very mixed moderation.",
        "severity": "high"
      },
      {
        "title": "Public chat is often unfiltered",
        "description": "Server chat can include sexual language, harassment, scams, and other material far outside the PEGI 7 rating.",
        "severity": "high"
      },
      {
        "title": "Mods and texture packs can deliver malware",
        "description": "Third-party downloads are a common route for malicious files, fake installers, and account-stealing tools.",
        "severity": "high"
      },
      {
        "title": "Free Minecraft scams",
        "description": "Phishing pages and fake account generators often target children who want the game, capes, or premium content for free.",
        "severity": "medium"
      },
      {
        "title": "Marketplace spending",
        "description": "Bedrock edition adds purchases through Minecoins and marketplace content, though this is usually less intense than in live-service shooters.",
        "severity": "low"
      }
    ],
    "setupGuide": [
      {
        "title": "Check whether they use Java or Bedrock",
        "steps": [
          "Java Edition on PC has no meaningful built-in parental controls. Bedrock on consoles, mobile, and Windows can be controlled through Xbox Family Safety."
        ]
      },
      {
        "title": "Use Microsoft Family Safety for Bedrock",
        "steps": [
          "Minecraft's controls now live in Microsoft Family Safety (family.microsoft.com) and Xbox account settings, not inside the game. Under the Online Safety tab allow or block multiplayer and clubs (this also gates Realms); under the Privacy tab set who can communicate by voice, text, or invite; and turn on Needs approval to buy things for purchases. Settings apply across Windows, mobile, and console."
        ]
      },
      {
        "title": "Keep Java players on Realms only",
        "steps": [
          "Use minecraft.net/realms and set up a private, invite-only Realm with known friends instead of public servers."
        ]
      },
      {
        "title": "Limit downloads to trusted mod sites",
        "steps": [
          "Only allow modrinth.com or curseforge.com for mods or texture packs. Treat other sources as high risk."
        ]
      },
      {
        "title": "Add a launcher cutoff time",
        "steps": [
          "Use Windows Family Safety or macOS Screen Time to block the Minecraft launcher after a set hour."
        ]
      }
    ],
    "ageRating": "7+ official",
    "userCount": "Huge global player base",
    "platform": "PC, Console, Mobile",
    "ageRecommendation": "Single-player suits younger children; multiplayer needs supervision",
    "riskBarPosition": 50,
    "appMetrics": [
      {
        "label": "Single-player risk",
        "value": "Low"
      },
      {
        "label": "Public server risk",
        "value": "High"
      },
      {
        "label": "Mod downloads",
        "value": "Malware vector"
      },
      {
        "label": "Creative mode",
        "value": "Educational"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "Minecraft Realms are far safer than third-party public servers. For many families, the difference between low and high risk is not the game itself but where the child is playing it."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Restricting multiplayer to private Realms only is the most effective change because it removes stranger contact while keeping the game enjoyable."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "tablet"
      },
      {
        "category": "devices",
        "slug": "desktop"
      },
      {
        "category": "os",
        "slug": "windows"
      }
    ]
  },
  {
    "slug": "chatgpt",
    "name": "ChatGPT",
    "category": "apps",
    "riskLevel": "medium",
    "riskLabelText": "Medium risk",
    "summary": "An AI chatbot that can be helpful for learning but also blurs the line between support, shortcut, and authority.",
    "description": "An AI chatbot that can be helpful for learning but also blurs the line between support, shortcut, and authority.",
    "quickActions": [
      {
        "title": "Turn off training usage",
        "description": "Settings → Data Controls → Improve the model → OFF so conversations are not used to improve the model."
      },
      {
        "title": "Disable Memory",
        "description": "Settings → Personalization → Memory → OFF if you want fewer saved details across chats."
      },
      {
        "title": "Link a parent account",
        "description": "Settings → Parental controls → Add family member to link your account to your teen's (13-18). This unlocks quiet hours, content protections, and distress alerts (launched September 2025)."
      },
      {
        "title": "Agree on school rules first",
        "description": "Check your child's school AI policy and write simple family rules for homework, citations, and when AI help is allowed."
      }
    ],
    "watchFor": [
      {
        "title": "Jailbreak prompts to bypass safeguards",
        "description": "Children can find or share prompt tricks that try to unlock unsafe, biased, or age-inappropriate responses.",
        "severity": "high"
      },
      {
        "title": "Academic cheating",
        "description": "The tool can write essays, solve homework, and produce polished answers faster than a parent or teacher may notice.",
        "severity": "high"
      },
      {
        "title": "Emotional over-reliance",
        "description": "Some children may begin to use the chatbot as a substitute for real support, feedback, or social contact.",
        "severity": "medium"
      },
      {
        "title": "Confident misinformation",
        "description": "ChatGPT can sound certain while still being wrong, which is risky when a child treats it like a search engine plus tutor.",
        "severity": "medium"
      },
      {
        "title": "Conversation data retention",
        "description": "If settings stay at the default, children may share personal details without understanding how their conversations are stored.",
        "severity": "low"
      }
    ],
    "setupGuide": [
      {
        "title": "Turn off training usage",
        "steps": [
          "Settings → Data Controls → Improve the model → OFF so conversations are not used to improve the model."
        ]
      },
      {
        "title": "Disable Memory",
        "steps": [
          "Settings → Personalization → Memory → OFF if you want fewer saved details across chats."
        ]
      },
      {
        "title": "Agree on school rules first",
        "steps": [
          "Check your child's school AI policy and write simple family rules for homework, citations, and when AI help is allowed."
        ]
      },
      {
        "title": "Teach that the model can make things up",
        "steps": [
          "Use a few test questions together and verify the answers so your child sees that fluent does not always mean correct."
        ]
      },
      {
        "title": "Set up the new parental controls",
        "steps": [
          "OpenAI launched native parental controls in September 2025. In ChatGPT go to Settings → Parental controls → Add family member and send your teen (13-18) an invite they accept. Once linked, content protections (less graphic content, no sexual/violent roleplay) turn on automatically and your teen cannot switch them off. You can also set Quiet hours, turn off Voice mode, Memory, and image generation, and opt out of model training."
        ]
      },
      {
        "title": "Understand the distress-alert system",
        "steps": [
          "With a linked account, if OpenAI's systems detect possible signs of acute distress or self-harm, trained reviewers may notify you by email, text, or push. You can opt out, but for many families it is worth leaving on. There is a parent guide at chatgpt.com/parent-resources."
        ]
      },
      {
        "title": "Disable optional browsing tools if enabled",
        "steps": [
          "Settings → Beta Features and turn off extras you do not want the child using independently."
        ]
      },
      {
        "title": "Use it together for the first week",
        "steps": [
          "Sit with your child for early sessions so they learn how to ask for help, verify answers, and stop when the tool becomes a shortcut."
        ]
      }
    ],
    "ageRating": "13+ official",
    "userCount": "Massive student and adult user base",
    "platform": "Web, iOS, Android",
    "ageRecommendation": "Best used with clear rules about homework and fact-checking",
    "riskBarPosition": 45,
    "appMetrics": [
      {
        "label": "Social exposure",
        "value": "None"
      },
      {
        "label": "Academic risk",
        "value": "High"
      },
      {
        "label": "Content risk",
        "value": "Moderate"
      },
      {
        "label": "Emotional dependency",
        "value": "Emerging"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "The goal with ChatGPT is usually honest use, not blocking. Children need rules about what the tool can help with and what still has to be their own work."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "A clear family rule about homework and fact-checking is usually more effective than trying to ban the tool entirely."
      },
      {
        "type": "tip",
        "title": "New since 2025",
        "description": "ChatGPT now has real parental controls: link a teen account in Settings → Parental controls to apply content protections they cannot disable, set quiet hours, and receive alerts if signs of distress are detected."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "laptop"
      },
      {
        "category": "devices",
        "slug": "smartphone"
      },
      {
        "category": "os",
        "slug": "macos"
      }
    ]
  },
  {
    "slug": "character-ai",
    "name": "Character.AI",
    "category": "apps",
    "riskLevel": "critical",
    "riskLabelText": "Very high risk",
    "homeBadgeLabel": "Urgent attention needed",
    "summary": "An AI character and entertainment service. Character.AI says it has removed open-ended character chat for under-18s; review the account’s age and the experience actually available to your child.",
    "description": "An AI character and entertainment service. Character.AI says it has removed open-ended character chat for under-18s; review the account’s age and the experience actually available to your child.",
    "quickActions": [
      {
        "title": "Check the account together",
        "description": "Ask how your child accesses Character.AI, including the website, and check that their age information is accurate."
      },
      {
        "title": "Review the available experience",
        "description": "If a minor can still access open-ended character chat, contact official support about the account’s age protections."
      },
      {
        "title": "Ask what they get from it",
        "description": "Discuss creative use, companionship and anything that makes them uncomfortable. Agree on boundaries together."
      }
    ],
    "watchFor": [
      {
        "title": "Replacing everyday relationships",
        "description": "Pay attention if AI conversations repeatedly displace friends, family or ordinary activities.",
        "severity": "high"
      },
      {
        "title": "Pressure to keep secrets",
        "description": "Encourage your child to show you responses that request secrecy or make them feel dependent.",
        "severity": "high"
      },
      {
        "title": "Advice treated as authority",
        "description": "AI responses can be wrong. Important personal decisions deserve human help and reliable information.",
        "severity": "high"
      },
      {
        "title": "Different access than expected",
        "description": "If the account offers features intended for adults, pause and review the age information and support options.",
        "severity": "high"
      }
    ],
    "setupGuide": [
      {
        "title": "Start with a conversation",
        "steps": [
          "Ask your child to show you what they use and why. Avoid treating disclosure as a reason for punishment."
        ]
      },
      {
        "title": "Check age protections",
        "steps": [
          "The company’s September 2026 update reaffirms the under-18 open-chat removal. Do not enter an adult birthday to obtain access."
        ]
      },
      {
        "title": "Review more than the installed app",
        "steps": [
          "Look together at browser access and any other accounts. A device limit on one app is not a family agreement about every service."
        ]
      },
      {
        "title": "Set privacy boundaries",
        "steps": [
          "Agree not to share passwords, identifying school details or private images with a chatbot."
        ]
      },
      {
        "title": "Set time boundaries",
        "steps": [
          "Use the parent-managed limits on the child’s device and agree on time away from AI, especially before bed."
        ]
      },
      {
        "title": "Keep human support available",
        "steps": [
          "If the child describes distress, listen and help them reach a trusted person or appropriate professional support. Do not rely on a chatbot to manage a crisis."
        ]
      }
    ],
    "ageRating": "Open-ended character chat: 18+",
    "userCount": "AI character and creative-tool users",
    "platform": "iOS, Android, Web",
    "ageRecommendation": "Our recommendation: no AI relationship chat for minors",
    "riskBarPosition": 88,
    "appMetrics": [
      {
        "label": "Under-18 open chat",
        "value": "Removed by platform"
      },
      {
        "label": "Age information",
        "value": "Check together"
      },
      {
        "label": "Other access",
        "value": "Review browser too"
      },
      {
        "label": "Support",
        "value": "Keep people involved"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "What controls cannot do",
        "description": "An age check or a safety response is not a guarantee that every interaction is appropriate. A chatbot cannot replace trusted human support."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Check the child’s actual account experience together and agree what AI is useful for in your family."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "smartphone"
      },
      {
        "category": "devices",
        "slug": "laptop"
      },
      {
        "category": "apps",
        "slug": "chatgpt"
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "The platform confirms removal of under-18 open-ended character chat. Review age assurance and account access with official support if needed.",
      "sources": [
        {
          "title": "Character.AI: under-18 chat announcement",
          "url": "https://blog.character.ai/u18-chat-announcement/"
        },
        {
          "title": "Character.AI: September 2026 safety update",
          "url": "https://blog.character.ai/continuing-to-build-upon-our-safety-priorities/"
        },
        {
          "title": "eSafety: AI companion guidance",
          "url": "https://www.esafety.gov.au/educators/training-for-professionals/professional-learning-program-teachers/ai-companions-information-sheet"
        }
      ]
    }
  },
  {
    "slug": "whatsapp",
    "name": "WhatsApp",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "Medium-high risk",
    "homeBadgeLabel": "Set up controls first",
    "summary": "A messaging and calling app used for family and group conversations. Check whether the account is standard or parent-managed, then review contacts, group invitations and reporting.",
    "description": "A messaging and calling app used for family and group conversations. Check whether the account is standard or parent-managed, then review contacts, group invitations and reporting.",
    "quickActions": [
      {
        "title": "Check the account type",
        "description": "For a pre-teen, check whether parent-managed setup is available in your region. Do not use an older birthday to create a standard account."
      },
      {
        "title": "Restrict group additions",
        "description": "On a standard account, review Settings → Privacy → Groups and choose My Contacts or My Contacts Except…. Review invitations together."
      },
      {
        "title": "Know how to report",
        "description": "Show your child the report and block options in a chat. They can ask for help even if the conversation started with someone they know."
      }
    ],
    "watchFor": [
      {
        "title": "Unwanted invitations",
        "description": "Restricting group additions does not mean every invitation or known contact is safe.",
        "severity": "high"
      },
      {
        "title": "Humiliating messages or images",
        "description": "Help your child avoid forwarding harmful material and ask for support when a group turns against someone.",
        "severity": "high"
      },
      {
        "title": "Impersonation and login-code requests",
        "description": "Verify unusual requests through another trusted channel. Do not share login codes.",
        "severity": "high"
      },
      {
        "title": "Pressure to be always available",
        "description": "Agree that family and class messages do not require replies throughout the night.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Check age eligibility",
        "steps": [
          "Standard registration requires at least 13, or a higher local minimum. Parent-managed accounts have a separate route for younger children; availability is rolling out."
        ]
      },
      {
        "title": "Set up supervision where available",
        "steps": [
          "Follow the official parent-managed instructions with both phones present. Protect the parent PIN and review contact requests and group invitations. If setup is unavailable, use another age-appropriate way to stay in touch."
        ]
      },
      {
        "title": "Review group invitations",
        "steps": [
          "For standard accounts, restrict who can add the child in Privacy → Groups. People outside the allowed set may still send private invitations, so discuss which to accept."
        ]
      },
      {
        "title": "Review profile visibility",
        "steps": [
          "Check the audience for profile details and Status. Agree what is appropriate to share with classmates and wider groups."
        ]
      },
      {
        "title": "Report abusive contact",
        "steps": [
          "Reporting an individual chat can send WhatsApp up to five recent messages from the reported person. Read the report prompt together; encryption does not prevent reporting."
        ]
      },
      {
        "title": "Agree on quiet time",
        "steps": [
          "Use the device’s parent-managed time limits where needed. Make it clear that your child can leave a distressing group and come to you for help."
        ]
      }
    ],
    "ageRating": "Standard accounts: 13+ or higher locally; managed accounts differ",
    "userCount": "Family, school and community groups",
    "platform": "iOS, Android, Web, Desktop",
    "ageRecommendation": "Use an age-eligible account; review groups together",
    "riskBarPosition": 65,
    "appMetrics": [
      {
        "label": "Personal conversations",
        "value": "End-to-end encrypted"
      },
      {
        "label": "Reporting",
        "value": "Messages can be submitted"
      },
      {
        "label": "Parent-managed accounts",
        "value": "Regional rollout"
      },
      {
        "label": "Group additions",
        "value": "Privacy controls"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "What controls cannot do",
        "description": "Parent-managed accounts do not let a parent read private conversations through a dashboard. Keep discussing who your child talks with and how they feel."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Check the account type and group permissions before joining the first class group."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "smartphone"
      },
      {
        "category": "os",
        "slug": "ios"
      },
      {
        "category": "os",
        "slug": "android"
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "Parent-managed accounts are rolling out. Availability in Romania is not confirmed by the global announcement.",
      "sources": [
        {
          "title": "WhatsApp: registration requirements",
          "url": "https://faq.whatsapp.com/240694875565320"
        },
        {
          "title": "WhatsApp: parent-managed accounts",
          "url": "https://blog.whatsapp.com/introducing-parent-managed-accounts-on-whatsapp"
        },
        {
          "title": "WhatsApp: managed-account help",
          "url": "https://faq.whatsapp.com/899820539143195/"
        },
        {
          "title": "WhatsApp: group invitations",
          "url": "https://faq.whatsapp.com/1139252413769848/"
        },
        {
          "title": "WhatsApp: reporting and blocking",
          "url": "https://faq.whatsapp.com/414631957536067/"
        }
      ]
    }
  },
  {
    "slug": "twitch",
    "name": "Twitch",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "Medium-high risk",
    "homeBadgeLabel": "Worth monitoring",
    "summary": "A live video streaming platform dominated by gaming content — but with real-time unmoderated chat, gambling streams, and heavy parasocial relationship dynamics.",
    "description": "A live video streaming platform dominated by gaming content — but with real-time unmoderated chat, gambling streams, and heavy parasocial relationship dynamics.",
    "quickActions": [
      {
        "title": "Set Content Preferences and the right age",
        "description": "Confirm the account birthday is under 18 so labelled mature streams are hidden by default, then keep each Content Classification Label filtered under Settings → Content Preferences."
      },
      {
        "title": "Build a pre-approved streamer list",
        "description": "Pick 5 to 10 streamers together and watch from Following rather than Browse or Discovery."
      },
      {
        "title": "Remove saved payment methods",
        "description": "Delete stored cards so subscriptions and Bits purchases cannot happen impulsively."
      }
    ],
    "watchFor": [
      {
        "title": "Live chat exposes children to unmoderated adult content in real time",
        "description": "Popular streams move thousands of messages per minute. Hate speech, sexual content, grooming attempts, and harassment appear and disappear before any moderation system can act. A child sees it before it is removed.",
        "severity": "high"
      },
      {
        "title": "Gambling and sports betting content normalises gambling for minors",
        "description": "Gambling streams are a significant content category on Twitch. Regular exposure to gambling presented as entertainment normalises it for young viewers during a formative period.",
        "severity": "high"
      },
      {
        "title": "Twitch raids flood a channel with unexpected users",
        "description": "A raid sends a streamer's entire audience to another channel simultaneously. This can expose children watching smaller streamers to sudden, uncontrolled, and often hostile audiences.",
        "severity": "medium"
      },
      {
        "title": "Subscription and donation spending pressure",
        "description": "Streamers actively encourage viewers to subscribe and send Bits. Children develop loyalty to streamers and feel social pressure to financially support them.",
        "severity": "medium"
      },
      {
        "title": "Parasocial relationships with streamers create susceptibility",
        "description": "Children feel they know streamers personally. This creates trust that streamers and anyone who appears on their streams do not merit and makes children susceptible to influence, products, and ideologies promoted by people they feel attached to.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Set Content Preferences and check the age on the account",
        "steps": [
          "Twitch now uses Content Classification Labels (Sexual Themes; Drugs/Intoxication; Violent/Graphic; Gambling; Mature-rated Game). For accounts registered as under 18, streams carrying those labels are hidden by default. Confirm the birthday is set correctly, then open Settings → Content Preferences to keep each labelled category filtered. The catch: labels rely on streamers self-tagging, so 'hidden by default' is not a guarantee."
        ]
      },
      {
        "title": "Block whispers from strangers",
        "steps": [
          "Settings → Security and Privacy → Block Whispers from Strangers stops private messages from users who do not follow each other. This is on by default, but verify it is still enabled."
        ]
      },
      {
        "title": "Build a list of pre-approved streamers and bookmark them",
        "steps": [
          "Together with your child, identify 5 to 10 specific streamers whose content you have watched and found appropriate. Add them to Following. Direct viewing to this list rather than Browse or Discovery."
        ]
      },
      {
        "title": "Disable open browsing of the Discover and Browse pages",
        "steps": [
          "There is no parental lock for Browse, so the practical solution is an agreement: watched content comes from the Following list, not from browsing. Frame it as a starting point, not a permanent restriction."
        ]
      },
      {
        "title": "Remove saved payment methods from the account",
        "steps": [
          "Settings → Payments → remove all cards. Without a saved payment method, subscriptions and Bits purchases require re-entering card details, which creates a natural pause that eliminates impulse spending."
        ]
      },
      {
        "title": "Discuss parasocial relationships directly",
        "steps": [
          "Explain that streamers are entertainers, not friends. They do not know your child exists. The relationship is one-directional. This conversation is more protective than any setting Twitch offers."
        ]
      },
      {
        "title": "Set viewing time using device-level controls",
        "steps": [
          "Use iOS Screen Time or Android Digital Wellbeing to set a daily limit on the Twitch app itself. Sixty to ninety minutes is a reasonable ceiling for a school day."
        ]
      }
    ],
    "ageRating": "13+ official",
    "userCount": "Massive live-streaming audience",
    "platform": "Web, iOS, Android, Smart TV, Console",
    "ageRecommendation": "Only with a curated streamer list and device-level time limits",
    "riskBarPosition": 62,
    "appMetrics": [
      {
        "label": "Content moderation",
        "value": "Real-time — effectively impossible to pre-screen"
      },
      {
        "label": "Gambling streams",
        "value": "Common and normalising"
      },
      {
        "label": "Chat speed (popular streams)",
        "value": "Unreadable, unmoderable"
      },
      {
        "label": "Spending pressure",
        "value": "Subscriptions + Bits donations"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "Twitch live chat moves too fast for any moderation system to catch harmful content before a child sees it. There is no pre-screening of live content. What appears in chat cannot be un-seen."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Directing your child to a curated list of pre-approved streamers and removing saved payment methods are the two most effective actions. Twitch's own settings offer very limited parental control."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "desktop"
      },
      {
        "category": "devices",
        "slug": "laptop"
      },
      {
        "category": "apps",
        "slug": "discord"
      }
    ]
  },
  {
    "slug": "steam",
    "name": "Steam",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "Medium-high risk",
    "homeBadgeLabel": "Set up controls first",
    "summary": "The world's largest PC gaming platform — with adult content accessible via a checkbox, unmoderated community forums, and a thriving scam ecosystem targeting young players.",
    "description": "The world's largest PC gaming platform — with adult content accessible via a checkbox, unmoderated community forums, and a thriving scam ecosystem targeting young players.",
    "quickActions": [
      {
        "title": "Set up Steam Families",
        "description": "Steam Families (which replaced Family View and Family Sharing in 2024-2025) lets a parent account set playtime limits, restrict store and community access, and approve purchase requests for a child member."
      },
      {
        "title": "Block Steam Community access",
        "description": "Turn off Steam Community and Online Features because those are the highest-risk surfaces and children do not need them to play local games."
      },
      {
        "title": "Remove saved payment methods",
        "description": "Delete stored cards and use gift cards or wallet credit instead so spending stays inside a fixed budget."
      }
    ],
    "watchFor": [
      {
        "title": "Adult and violent game content accessible via false birthdate",
        "description": "Steam's adult content filter requires only clicking I am over 18 to bypass. There is no verification. Explicitly sexual games are available in the same store a 10-year-old can browse.",
        "severity": "high"
      },
      {
        "title": "Steam Community forums contain unmoderated content",
        "description": "Game discussion boards, community hubs, and Workshop comments contain adult content, hate speech, extremist rhetoric, and contact attempts. These are not separated from the core game experience.",
        "severity": "high"
      },
      {
        "title": "Trading and marketplace scams specifically target young players",
        "description": "Fake item trade offers, Steam Support impersonation, and phishing links shared in game chat or Community are specifically engineered to target young players who do not recognise the patterns. Account takeover and item theft are common.",
        "severity": "high"
      },
      {
        "title": "Sale mechanics and bundle design drive compulsive spending",
        "description": "Steam sales like Summer Sale and Winter Sale create artificial urgency. Children with access to stored payment methods regularly spend significant amounts during sale events without fully registering the real-money cost.",
        "severity": "medium"
      },
      {
        "title": "Friend requests from strangers in multiplayer games",
        "description": "Players from shared game lobbies can send friend requests. Strangers on a child's friend list can then message them, see their game activity, and invite them to other games.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Set up Steam Families (this replaced Family View)",
        "steps": [
          "Steam now uses Steam Families instead of the old PIN-based Family View. From your own adult account go to Steam menu → Settings → Family and create a Family (up to 6 members), then add your child as a child-role member. Restrictions are now tied to the child's account role rather than a guessable PIN, and you can set playtime/screentime limits, restrict store and community features, and approve or deny each purchase request. Any old Family View settings carry over automatically when you migrate."
        ]
      },
      {
        "title": "Block Steam Community and forums entirely",
        "steps": [
          "In the Steam Families parental controls, restrict access to Online Features and the Steam Community. These are the highest-risk areas and children do not need them to play games."
        ]
      },
      {
        "title": "Remove all saved payment methods from their account",
        "steps": [
          "Open Steam → account name → Account Details → remove all payment methods. Establish a gift card system by buying Steam Wallet cards with a set monthly value so they keep autonomy within a fixed budget."
        ]
      },
      {
        "title": "Review the Friends list together",
        "steps": [
          "Open Steam → profile → Friends and remove anyone they cannot identify by name from real life or from a confirmed mutual gaming context."
        ]
      },
      {
        "title": "Restrict which games the child can launch",
        "steps": [
          "In Steam Families parental controls, limit the child's access to an approved set of games so you review any title before it is played for the first time. Children can send a request to add a new game, which you approve or deny."
        ]
      },
      {
        "title": "Check installed games against their age ratings",
        "steps": [
          "Open the Library, right-click any game, then open its store page to check the PEGI or ESRB rating. Games above the child's age should be discussed, not ignored."
        ]
      }
    ],
    "ageRating": "13+ for accounts",
    "userCount": "The largest PC gaming platform",
    "platform": "PC, Mac, Linux, Mobile companion app",
    "ageRecommendation": "Treat adult content access as open until Family Controls are enabled",
    "riskBarPosition": 63,
    "appMetrics": [
      {
        "label": "Adult content gate",
        "value": "Checkbox birthdate only"
      },
      {
        "label": "Community forums",
        "value": "Largely unmoderated"
      },
      {
        "label": "Scam targeting",
        "value": "Young players are primary targets"
      },
      {
        "label": "Spending triggers",
        "value": "Sales, bundles, limited-time offers"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "Steam's adult content toggle is a checkbox that any child can tick. There is no technical barrier between a child's account and explicit content — only a yes or no prompt they can answer themselves."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Setting up Steam Families (the system that replaced Family View) and removing saved payment methods are the two controls that matter most. Steam Families restrictions are tied to the child's account role, so they are harder to bypass than the old PIN."
      }
    ],
    "related": [
      {
        "category": "devices",
        "slug": "desktop"
      },
      {
        "category": "os",
        "slug": "windows"
      },
      {
        "category": "apps",
        "slug": "minecraft"
      }
    ]
  },
];

function localizeEntry(entry: Entry, locale: Locale): Entry {
  if (locale === "en") {
    return entry;
  }

  const translation = roEntryTranslations[entry.slug];

  if (!translation) {
    return entry;
  }

  return {
    ...entry,
    ...translation
  };
}

export function getCategoryLabel(category: Category, locale: Locale = "en") {
  return categoryLabelsByLocale[locale][category];
}

export function getCategoryDirectoryHref(category: Category, locale: Locale = "en") {
  const href = categoryDirectoryHref[category];
  return locale === "en" ? `/en${href}` : href;
}

export function getRiskMeta(level: RiskLevel, locale: Locale = "en") {
  const meta = riskMeta[level];

  return {
    ...meta,
    label: localizedRiskLabels[locale][level],
    parentLabel: localizedParentRiskLabels[locale][level]
  };
}

export function getEntriesByCategory(category: Category, locale: Locale = "en") {
  return entries
    .filter((entry) => entry.category === category)
    .map((entry) => localizeEntry(entry, locale));
}

export function getEntry(category: Category, slug: string, locale: Locale = "en") {
  const entry = entries.find((value) => value.category === category && value.slug === slug);
  return entry ? localizeEntry(entry, locale) : undefined;
}

export function getEntryHref(
  link: Pick<Entry, "category" | "slug"> | EntryLink,
  locale: Locale = "en"
) {
  const href = "/" + link.category + "/" + link.slug;
  return locale === "en" ? `/en${href}` : href;
}

export function getEntriesForStaticParams(category: Category) {
  return getEntriesByCategory(category).map((entry) => ({
    slug: entry.slug
  }));
}

export function getRelatedEntries(entry: Entry, locale: Locale = "en") {
  return entry.related
    .map((link) => getEntry(link.category, link.slug, locale))
    .filter((value): value is Entry => Boolean(value));
}
