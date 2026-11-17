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
    apps: "Aplicații",
    network: "Rețeaua de acasă"
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
    low: "Scăzut"
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
    critical: "Necesită atenție zilnică",
    high: "Setează controalele mai întâi",
    medium: "Merită urmărit",
    low: "Nivel redus de îngrijorare"
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
    "summary": "A phone combines messaging, browsing, a camera, payments and location sharing.",
    "description": "A phone combines messaging, browsing, a camera, payments and location sharing. Set it up before handing it over to reduce distractions, private contact and access to content you may not see.",
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
    "summary": "A tablet has the same browsers, video apps and app stores as a phone, even when it stays at home.",
    "description": "A tablet has the same browsers, video apps and app stores as a phone, even when it stays at home. On a shared tablet, check that your child cannot use an adult’s login, browsing history or permissions.",
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
    "summary": "A laptop used for school also gives access to browsers, downloads, games, VPNs and chat.",
    "description": "A laptop used for school also gives access to browsers, downloads, games, VPNs and chat. It can be harder to supervise once it leaves a shared room. Start with a standard child account and keep administrator access yourself.",
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
    "summary": "A desktop stays in one place. Choose a shared room where you can see how it is used.",
    "description": "A desktop stays in one place. Choose a shared room where you can see how it is used. In a bedroom, games, browsing, private chats and late-night use are easier to miss.",
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
        "description": "Desktop use often shifts children toward servers and voice channels where adults can join unnoticed.",
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
    "summary": "Check Screen Time, AirDrop, messaging and app approvals before handing an iPhone or iPad to a child.",
    "description": "Check Screen Time, AirDrop, messaging and app approvals before handing an iPhone or iPad to a child. The default settings do not cover every family’s needs.",
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
    "summary": "Use Family Link to supervise an Android device, and check browser access and installs from outside the Play Store.",
    "description": "Use Family Link to supervise an Android device from the start. Check browser access and installs from outside the Play Store, which can bypass store restrictions. Menu names vary by manufacturer.",
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
    "summary": "Set up a child account and Family Safety on the Windows computer your child uses for school or games.",
    "description": "Windows gives access to browsers, downloads, game launchers and private chats. Set up a child account and Family Safety, and keep administrator permissions on your own account.",
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
    "summary": "Use a standard child account and protect Screen Time with a separate passcode on the Mac.",
    "description": "Use a standard child account and protect Screen Time with a separate passcode. Without these limits, the child may have unrestricted browser access and be able to install software freely.",
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
    "setupGuideIntro": "Menu path: System Settings → Screen Time. On older Macs, also double-check whether app installs require approval as expected.",
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
          "Kids accounts cover ages 5 to 8 and Select covers ages 9 to 15. Placement follows age information, not a product tier chosen by the parent. Accounts without an age check have less access and cannot chat."
        ]
      },
      {
        "title": "Check chat permissions",
        "steps": [
          "An age check is required for chat. Chat is off by default under 9; a parent can adjust the standard settings. Review the options for the child’s age and region."
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
    "ageRating": "Experience ratings vary; Kids 5 to 8 / Select 9 to 15",
    "userCount": "Children, teens and adults",
    "platform": "iOS, Android, Xbox, PlayStation, PC",
    "ageRecommendation": "Our recommendation: 10+ with active supervision",
    "riskBarPosition": 75,
    "appMetrics": [
      {
        "label": "Kids and Select accounts",
        "value": "Younger players use Kids or Select accounts, with settings based on their age."
      },
      {
        "label": "Who can use chat?",
        "value": "Players must complete an age check before they can use chat. Check the permissions available for your child."
      },
      {
        "label": "Managing your child’s settings",
        "value": "Use your own linked parent account to review and change the controls available for your child."
      },
      {
        "label": "Robux and subscriptions",
        "value": "Check both currency purchases and subscriptions when agreeing on a spending budget."
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
        "title": "Start here",
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
      "checkedAt": "2026-11-03",
      "availability": "Kids and Select are globally available. Chat requires an age check and is off by default under 9. Other controls vary by age, account and region.",
      "sources": [
        {
          "title": "Roblox: Kids, Select and chat settings",
          "url": "https://about.roblox.com/newsroom/2026/06/age-based-roblox-kids-and-select-accounts-now-globally-available"
        },
        {
          "title": "Roblox: safety FAQs",
          "url": "https://about.roblox.com/safety-faqs"
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
    "summary": "A video app with recommendations, Shorts and comments. Choose a supervised experience for your child and check what they watch together.",
    "description": "A video app with recommendations, Shorts and comments. Choose a supervised experience for your child and check what they watch together.",
    "quickActions": [
      {
        "title": "Choose a supervised experience",
        "description": "Use YouTube Kids for younger children or review the supervised account options together. Filters can still miss unsuitable videos."
      },
      {
        "title": "Limit the Shorts feed",
        "description": "In the YouTube app, open Settings → Family Center → your child → Time management. Choose a daily Shorts limit; 0 minutes turns off the scrolling feed."
      },
      {
        "title": "Turn off Autoplay",
        "description": "Check Autoplay in the app settings so one video does not automatically lead to another."
      }
    ],
    "watchFor": [
      {
        "title": "Recommendations that become upsetting",
        "description": "A few videos can lead to more of the same subject. Ask your child to tell you when their feed becomes frightening or uncomfortable.",
        "severity": "critical"
      },
      {
        "title": "Unwanted contact in comments",
        "description": "Comments can contain harassment, sexual language, scams or attempts to start a private conversation.",
        "severity": "high"
      },
      {
        "title": "Unsuitable videos in YouTube Kids",
        "description": "The children’s app filters content, but a video can still be misclassified.",
        "severity": "high"
      },
      {
        "title": "Watching past the agreed time",
        "description": "Shorts and Autoplay can make it easy to lose track of time.",
        "severity": "high"
      },
      {
        "title": "Misleading advice",
        "description": "Check health, money and other consequential claims with a reliable source before acting on them.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Choose the account together",
        "steps": [
          "Use the correct birthday. Review YouTube Kids or a supervised YouTube account rather than relying only on Restricted Mode."
        ]
      },
      {
        "title": "Set the Shorts limit",
        "steps": [
          "From your linked parent account in the YouTube app, open Settings → Family Center → select your child → Time management → daily Shorts feed limit. YouTube confirmed the zero-minute option in Europe in April 2026. This controls the scrolling feed, not every way of watching a short video."
        ]
      },
      {
        "title": "Review content settings",
        "steps": [
          "In Family Center, select your child and review Content Settings. In YouTube Kids, consider turning off Search or choosing approved content for a narrower selection."
        ]
      },
      {
        "title": "Check Autoplay and Restricted Mode",
        "steps": [
          "Turn off Autoplay. If you use Restricted Mode, check each browser and device separately; it is an extra filter, not a replacement for a supervised account."
        ]
      },
      {
        "title": "Look at watch history together",
        "steps": [
          "Ask about the creators your child enjoys and review unfamiliar recommendations. Block or report unsuitable content."
        ]
      },
      {
        "title": "Check livestreaming eligibility",
        "steps": [
          "YouTube’s livestreaming minimum is 16. A younger teen taking part in a stream must follow YouTube’s adult-presence rules; a linked parent account alone does not grant permission."
        ]
      },
      {
        "title": "Set a whole-app limit separately",
        "steps": [
          "Use the device’s parental controls if you also want to limit total YouTube time. Teen supervision can be turned off by the teen; discuss that boundary together."
        ]
      }
    ],
    "ageRating": "Standard accounts: local Google minimum age; supervised options differ",
    "userCount": "Massive global audience",
    "platform": "iOS, Android, Web, TV",
    "ageRecommendation": "Choose YouTube Kids or supervised YouTube to fit the child’s age",
    "riskBarPosition": 72,
    "appMetrics": [
      {
        "label": "Daily Shorts limit",
        "value": "A linked parent can set how long a supervised account can scroll the Shorts feed each day."
      },
      {
        "label": "What does 0 minutes do?",
        "value": "It turns off the scrolling Shorts feed. Other ways of watching YouTube videos remain available."
      },
      {
        "label": "Comments",
        "value": "Whether your child can see or use comments depends on the account and the video."
      },
      {
        "label": "Content filters",
        "value": "Filters can miss unsuitable videos. Review recommendations and watch some videos together."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "What the limit covers",
        "description": "A Shorts feed limit does not block all YouTube viewing. Review content settings and total app time separately."
      },
      {
        "type": "tip",
        "title": "Start here",
        "description": "Choose a supervised account, then set a Shorts limit and watch a few recommended videos together."
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
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "The zero-minute Shorts feed limit is documented for Europe. Mobile and desktop menus differ. Teen supervision can be ended by the teen.",
      "sources": [
        {
          "title": "YouTube: teen supervision and Shorts settings",
          "url": "https://support.google.com/youtubekids/answer/15190245?co=GENIE.Platform%3DiOS&hl=en"
        },
        {
          "title": "YouTube: Shorts controls available in Europe",
          "url": "https://blog.youtube/news-and-events/new-youtube-shorts-parental-controls-europe/"
        }
      ]
    }
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
        "title": "Check Ghost Mode",
        "description": "In Snap Map, open the settings gear and check Ghost Mode. Location sharing is off by default; confirm whether it has been enabled since."
      },
      {
        "title": "Limit who can contact them",
        "description": "Settings → Privacy Controls → Contact Me and set it to Friends only."
      },
      {
        "title": "Review the friend list together",
        "description": "Open Profile → My Friends and ask about people your child does not recognise. Remove or block unwanted contacts."
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
        "title": "Check location sharing",
        "steps": [
          "Location sharing is off by default. In Snap Map → settings gear, review Ghost Mode and any chosen audience. Check separate live-location sharing and the phone’s location permissions too."
        ]
      },
      {
        "title": "Limit who can contact them",
        "steps": [
          "Settings → Privacy Controls → Contact Me and set it to Friends only."
        ]
      },
      {
        "title": "Review the friend list together",
        "steps": [
          "Open Profile → My Friends and ask about people your child does not recognise. Remove or block unwanted contacts."
        ]
      },
      {
        "title": "Check Find Friends visibility",
        "steps": [
          "In Settings, look for See Me in Find Friends and turn it off if you want fewer friend suggestions. Find Friends is the current name for Quick Add."
        ]
      },
      {
        "title": "Explain how messages can be saved",
        "steps": [
          "Screenshots or another camera can preserve a message even when it disappears from the chat. Discuss what your child is comfortable sending."
        ]
      },
      {
        "title": "Link Family Center",
        "steps": [
          "Invite your teen from your own eligible adult account. Family Center shows recent contacts, average daily use over the previous week and a breakdown by feature. Friend signals offer context, not proof that someone is trustworthy. It does not reveal private messages."
        ]
      },
      {
        "title": "Turn on Content Controls and disable My AI",
        "steps": [
          "In Family Center, review restrictions on sensitive Stories and Spotlight content. Disable My AI if you do not want it used. These controls do not filter every message or image sent by friends."
        ]
      },
      {
        "title": "Review Memories regularly",
        "steps": [
          "Memories tab → check saved snaps together so private content does not build up over time."
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
        "label": "Location sharing on Snap Map",
        "value": "Location sharing is off by default. Check whether your child has since turned it on and who can see them."
      },
      {
        "label": "What Family Center shows",
        "value": "You can see recent contacts and information about time spent in the app."
      },
      {
        "label": "Can parents read messages?",
        "value": "Family Center does not show the contents of your teen’s private conversations."
      },
      {
        "label": "Disappearing images",
        "value": "Someone can save an image with a screenshot or another camera, even if it disappears from the chat."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Check location sharing",
        "description": "Location sharing is off by default. If it has been enabled, check the audience and any separate live-location sharing. Review phone location permissions too."
      },
      {
        "type": "tip",
        "title": "Start here",
        "description": "Review Ghost Mode and the friend list together, then link Family Center."
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
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Location sharing is opt-in. Family Center provides contacts and usage insights, not message contents. Check the current app version for Find Friends settings.",
      "sources": [
        {
          "title": "Snapchat: Family Center insights",
          "url": "https://newsroom.snap.com/deeper-insights-with-family-center"
        },
        {
          "title": "Snapchat: location privacy",
          "url": "https://help.snapchat.com/hc/en-gb/articles/24547077410580-Snap-Map-Privacy-Safety-Reminder"
        },
        {
          "title": "Snapchat: Quick Add is now Find Friends",
          "url": "https://help.snapchat.com/hc/en-gb/articles/34691800487316-What-happened-to-Quick-Add"
        }
      ]
    }
  },
  {
    "slug": "bump",
    "name": "Bump by amo",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "High risk",
    "summary": "A social map for sharing live location with friends. Review who can see your teen’s movements and what their profile reveals.",
    "description": "Bump lets friends see one another on a live map, chat and see places they have visited. With background location enabled, accepted friends can keep seeing your teen’s location while your teen uses other apps. Review the friend list, location permissions and public profile together.",
    "ageRating": "App Store Romania: 13+. Google Play: Parental Guidance in Romania.",
    "userCount": "10M+ downloads on Google Play",
    "platform": "iOS, Android",
    "ageRecommendation": "Our recommendation: 16+ and only with trusted friends",
    "quickActions": [
      {
        "title": "Check Bump’s signup age",
        "description": "Bump says the minimum is 16 in most countries. Ages 13–15 are allowed in some countries. Check the local rule during signup and enter the real age."
      },
      {
        "title": "Review friends before sharing location",
        "description": "Accept only people your teen knows and trusts in person. New friends can see live location by default. Turn on Private Mode to limit incoming requests."
      },
      {
        "title": "Agree when to turn location off",
        "description": "Make it normal to pause sharing. Use the phone’s app permissions to stop Bump receiving new location data when your teen wants to stop sharing with everyone."
      }
    ],
    "watchFor": [
      {
        "title": "Home and school routines",
        "description": "A friend who can see your teen’s live pin and how long they stay in one place can work out their daily routine.",
        "severity": "high"
      },
      {
        "title": "Pressure to stay visible",
        "description": "Repeated checks, questions about where your teen went or demands to keep sharing can be signs of controlling behavior. Agree that your teen can turn sharing off at any time.",
        "severity": "high"
      },
      {
        "title": "A public profile and school directory",
        "description": "Other Bump users can view the profile. Joining a school adds a badge and puts your teen in that school’s directory.",
        "severity": "high"
      },
      {
        "title": "Chat and screenshots",
        "description": "Friends can send messages and media in individual or group chats. Anyone who can see a pin or a profile can capture and forward what they see.",
        "severity": "medium"
      }
    ],
    "appMetrics": [
      {
        "label": "Live location",
        "value": "Accepted friends can see live location by default, including in the background when the phone allows it. The pin can also show how long someone has been there."
      },
      {
        "label": "Private Mode",
        "value": "Only people in your phone contacts can send you friend requests when it’s on. Bump describes profiles as public. Review what yours shows."
      },
      {
        "label": "Ghost Mode",
        "value": "It freezes your last shared location for one friend at a time. Scratch Map and Nights can still record location history."
      },
      {
        "label": "Scratch Map history",
        "value": "Friends can see a detailed record of places you’ve explored. Other Bump users can see a less detailed version. amo says deleting location history requires deleting the account."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "With background access, live tracking can continue outside the app. Accepting a friend can give them immediate access to your teen’s location."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Decide together whether your teen wants a map that updates throughout the day. If they want to stop all new tracking, revoke Bump’s location permission on the phone."
      }
    ],
    "setupGuide": [
      {
        "title": "Limit friend requests and review the profile",
        "steps": [
          "In Bump, open your profile → Friending Settings → Private Mode. Review existing friends separately and remove anyone your teen does not know and trust.",
          "Review the profile photo, saved places and school badge. To leave a school, tap its name on the profile, open the school’s settings and choose Leave school."
        ]
      },
      {
        "title": "Pause live sharing with one friend",
        "steps": [
          "On the map, tap the friend’s pin, tap the ghost icon and turn on Ghost Mode for that friend. They can still see the last location shared with them."
        ]
      },
      {
        "title": "Stop location access on the phone",
        "steps": [
          "On iPhone, open Settings → Privacy & Security → Location Services → Bump and choose Never.",
          "On Android, open Settings → Apps → Bump → Permissions → Location and choose Don’t allow.",
          "This stops Bump from getting new locations from that phone. The live map and Scratch Map updates depend on location permission. Review account deletion separately if you want to erase stored history."
        ]
      },
      {
        "title": "Block or report unwanted contact",
        "steps": [
          "Open the person’s profile, tap the three-dot menu and choose Block or Report. Bump says blocked people can still appear in group chats you both belong to. Review those chats too."
        ]
      },
      {
        "title": "Delete the account if you stop using Bump",
        "steps": [
          "In Bump, open Settings → Privacy and terms → Delete my account and confirm. Bump says it deactivates the account immediately and signing back in within 30 days reactivates it."
        ]
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-17",
      "availability": "Listed for iOS and Android in Romania. App-store ratings and Bump’s signup rules are separate. Bump’s public help describes country-dependent access for ages 13–15. We could not confirm the signup result for those ages in Romania or find documentation for a linked parent account.",
      "sources": [
        {
          "title": "Bump: signup age by country",
          "url": "https://help.bumpmaps.com/en/articles/11421368-age-requirements-for-using-bump"
        },
        {
          "title": "Apple App Store Romania: Bump listing and age rating",
          "url": "https://apps.apple.com/ro/app/bump-hart%C4%83-pt-prieteni/id6471519217?l=ro"
        },
        {
          "title": "Google Play: Bump’s Romanian listing",
          "url": "https://play.google.com/store/apps/details?hl=ro&id=co.amo.android.location"
        },
        {
          "title": "amo: live location and defaults for new friends",
          "url": "https://amo.co/services/"
        },
        {
          "title": "Bump: Private Mode and friend requests",
          "url": "https://help.bumpmaps.com/en/articles/14736924-private-mode"
        },
        {
          "title": "Bump: Ghost Mode",
          "url": "https://help.bumpmaps.com/en/articles/11604192-ghost-mode"
        },
        {
          "title": "Bump: public profiles, places and chat",
          "url": "https://help.bumpmaps.com/en/articles/11420926-how-bump-works"
        },
        {
          "title": "Bump: school directory and leaving a school",
          "url": "https://help.bumpmaps.com/en/articles/13369606-school"
        },
        {
          "title": "Bump: location history and Scratch Map visibility",
          "url": "https://help.bumpmaps.com/en/articles/11604738-scratch-map"
        },
        {
          "title": "Bump: blocking and reporting",
          "url": "https://help.bumpmaps.com/en/articles/12141158-community-guidelines"
        },
        {
          "title": "Bump: what happens after you block someone",
          "url": "https://help.bumpmaps.com/en/articles/11458996-block-someone"
        },
        {
          "title": "Bump: deleting an account",
          "url": "https://help.bumpmaps.com/en/articles/11459030-want-to-delete-your-bump-account"
        },
        {
          "title": "amo: privacy policy and location data",
          "url": "https://amo.co/privacy-policy"
        },
        {
          "title": "Apple: app location permissions on iPhone",
          "url": "https://support.apple.com/en-us/102647"
        },
        {
          "title": "Google: app location permissions on Android",
          "url": "https://support.google.com/android/answer/6179507?hl=en-GB"
        }
      ]
    },
    "related": [
      {
        "category": "apps",
        "slug": "snapchat"
      },
      {
        "category": "os",
        "slug": "ios"
      },
      {
        "category": "os",
        "slug": "android"
      }
    ]
  },
  {
    "slug": "instagram",
    "name": "Instagram",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "High risk",
    "summary": "A social app with photos, videos, recommendations and direct messages. Check Teen Account protections, supervision and who can contact your teen.",
    "description": "A social app with photos, videos, recommendations and direct messages. Check Teen Account protections, supervision and who can contact your teen.",
    "quickActions": [
      {
        "title": "Check the Teen Account",
        "description": "Use the correct birthday and review the account’s privacy, message and content settings together."
      },
      {
        "title": "Link parental supervision",
        "description": "Open Family Center and connect your parent account with your teen’s agreement."
      },
      {
        "title": "Review the content level",
        "description": "Check the default 13+ content setting or choose Limited Content for stronger filtering. These settings cannot guarantee that every post is suitable."
      }
    ],
    "watchFor": [
      {
        "title": "Appearance and body-image pressure",
        "description": "Ask how repeated posts about appearance, food or fitness make your teen feel.",
        "severity": "high"
      },
      {
        "title": "Unwanted private contact",
        "description": "Review unfamiliar followers and message requests. Make it easy to tell you about pressure or requests for secrecy.",
        "severity": "high"
      },
      {
        "title": "Bullying through comments and tags",
        "description": "Comments, tags and story replies can make conflict public. Practise blocking and reporting together.",
        "severity": "high"
      },
      {
        "title": "Upsetting recommendations",
        "description": "If the feed keeps returning to a distressing subject, review it together and use content controls.",
        "severity": "medium"
      },
      {
        "title": "Fake shops and giveaways",
        "description": "Pause before sharing payment details or personal information with an unfamiliar account.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Review privacy and messages",
        "steps": [
          "Check Account privacy and message controls together. Teen Accounts include restrictions on contact; review existing followers as well as new requests."
        ]
      },
      {
        "title": "Connect Family Center",
        "steps": [
          "Follow the supervision invitation in Family Center. Review which controls apply to the teen’s age and account."
        ]
      },
      {
        "title": "Choose the content setting",
        "steps": [
          "Meta calls the default teen content setting 13+, inspired by movie ratings. Under-18s need parental permission to opt out. Limited Content filters more material and restricts comments; neither setting certifies every post as suitable."
        ]
      },
      {
        "title": "Check the October alert update",
        "steps": [
          "On 29 October 2026, Meta announced a global rollout of alerts to supervising parents for repeated suicide or self-harm searches on Instagram and Facebook, and concerning Meta AI chats on Instagram, Facebook and Messenger. Check the linked account; an alert cannot detect every concern."
        ]
      },
      {
        "title": "Review time and tags",
        "steps": [
          "Use supervision or device controls for a daily time limit. Review tag and mention permissions and decide which posts need approval."
        ]
      },
      {
        "title": "Talk about the feed",
        "steps": [
          "Look at recommendations together. Use Not interested, blocking or reporting when appropriate, and ask how the posts make your teen feel."
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
        "label": "Default teen content setting",
        "value": "Teen Accounts use the 13+ content setting by default. Unsuitable posts can still appear."
      },
      {
        "label": "Limited Content",
        "value": "This stricter option filters more material and restricts comments."
      },
      {
        "label": "Who can send messages?",
        "value": "Teen Accounts limit incoming contact. Review message permissions and existing followers together."
      },
      {
        "label": "Safety alerts for parents",
        "value": "Meta has announced a global rollout of distress alerts. Check the options in your teen’s supervised account."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Filters have limits",
        "description": "Private accounts and content filters reduce some risks. They cannot prevent every harmful post or unwanted interaction."
      },
      {
        "type": "tip",
        "title": "Start here",
        "description": "Connect supervision and review the account’s privacy, messages and content level together."
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
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "The 13+ content setting has expanded internationally. Meta announced a global alert rollout on 29 October; confirm options in the supervised account.",
      "sources": [
        {
          "title": "Meta: 13+ and Limited Content settings",
          "url": "https://about.fb.com/news/2026/04/instagram-expands-teen-accounts-inspired-by-13-content-ratings/"
        },
        {
          "title": "Meta: parent alerts, updated 29 October 2026",
          "url": "https://about.fb.com/news/2026/07/keeping-parents-informed-teens-distress-conversations-meta-ai/"
        }
      ]
    }
  },
  {
    "slug": "tiktok",
    "name": "TikTok",
    "category": "apps",
    "riskLevel": "critical",
    "riskLabelText": "Very high risk",
    "summary": "A short-video app whose personalised recommendations can keep children watching for long periods.",
    "description": "A short-video app whose personalised recommendations can keep children watching for long periods.",
    "quickActions": [
      {
        "title": "Link Family Pairing",
        "description": "Open Settings and privacy → Family Pairing and connect your account to your teen’s."
      },
      {
        "title": "Choose a daily limit together",
        "description": "Use Family Pairing to set a daily screen-time limit and schedule Time Away. Choose a limit that fits your child’s routine."
      },
      {
        "title": "Review messaging for their age",
        "description": "Direct messages are unavailable under 16. For older teens, review the messaging controls in Family Pairing and restrict unwanted requests."
      }
    ],
    "watchFor": [
      {
        "title": "Upsetting recommendations",
        "description": "Ask whether videos about self-harm, eating or appearance keep returning and how they affect your child.",
        "severity": "critical"
      },
      {
        "title": "Watching past the agreed time",
        "description": "The scrolling feed offers few natural stopping points. Check whether use is displacing sleep or other activities.",
        "severity": "critical"
      },
      {
        "title": "Contact from strangers",
        "description": "Public posts and social features can bring unwanted interactions even without direct messages.",
        "severity": "high"
      },
      {
        "title": "Misleading information",
        "description": "Check important claims before trusting or sharing them.",
        "severity": "high"
      },
      {
        "title": "Impulse purchases",
        "description": "Discuss the real cost of products and gifts promoted in videos, where available.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Connect Family Pairing",
        "steps": [
          "Open Settings and privacy → Family Pairing and connect your account to your teen’s."
        ]
      },
      {
        "title": "Set time boundaries",
        "steps": [
          "Use Family Pairing to set a daily screen-time limit and schedule Time Away. Choose a limit that fits your child’s routine."
        ]
      },
      {
        "title": "Review direct messages",
        "steps": [
          "Direct messages are unavailable under 16. For older teens, review the messaging controls in Family Pairing and restrict unwanted requests."
        ]
      },
      {
        "title": "Check content and privacy",
        "steps": [
          "In Family Pairing, review Restricted Mode, private-account settings and the available controls for comments and reused videos. Options depend on age."
        ]
      },
      {
        "title": "Review followers and blocked accounts",
        "steps": [
          "Check the follower and following lists together. Family Pairing includes public-post notifications and tools to block specific accounts; the blocking feature was introduced first in Europe."
        ]
      },
      {
        "title": "Shape the feed together",
        "steps": [
          "Review Manage Topics and keyword filters where available. Use Not interested on unwanted videos; it does not guarantee that similar content will never appear."
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
        "label": "Family Pairing",
        "value": "Link your account to your teen’s to manage the available time, privacy and content controls."
      },
      {
        "label": "Who can use direct messages?",
        "value": "Direct messages are unavailable under 16. For older teens, review who can send messages or requests."
      },
      {
        "label": "Daily limits and Time Away",
        "value": "Set a daily time limit and schedule periods when your teen cannot use the app."
      },
      {
        "label": "Shaping the feed",
        "value": "Topic preferences and keyword filters help adjust recommendations. They cannot guarantee that every video will be suitable."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Check the account’s age",
        "description": "Messaging, privacy and video-sharing options depend on age. An adult birthday can leave a teen without the expected protections."
      },
      {
        "type": "tip",
        "title": "Start here",
        "description": "Link Family Pairing and agree on a daily limit and times away from the app."
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
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Family Pairing controls vary by age and region. Direct messages are for ages 16+. Check the current options in the linked account.",
      "sources": [
        {
          "title": "TikTok: Family Pairing controls",
          "url": "https://newsroom.tiktok.com/supportingfamilies-with-new-family-pairing-features?lang=en-GB"
        },
        {
          "title": "TikTok: teen privacy and messaging settings",
          "url": "https://support.tiktok.com/en/account-and-privacy/account-privacy-settings/privacy-and-safety-settings-for-users-under-age-18"
        },
        {
          "title": "TikTok: 2026 teen safety tools",
          "url": "https://newsroom.tiktok.com/tiktok-reinforces-commitment-to-teen-safety-with-over-50-preset-safety-and-privacy-features?lang=en-PH"
        }
      ]
    }
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
        "title": "Link Family Center",
        "description": "In Family Center, use your teen’s invitation link or QR code and have them accept the connection. Setup works on web, desktop or mobile."
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
        "title": "Check the account’s age group",
        "steps": [
          "Open User Settings → Account Status. Discord’s 22 September update introduced age groups estimated from account signals, with additional restrictions for teens. Most users are not asked for ID or a selfie. If the group is wrong, use the official correction process."
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
        "label": "Family Center",
        "value": "Link accounts to see recent activity and manage the safety settings available for your teen."
      },
      {
        "label": "Can parents read messages?",
        "value": "Family Center does not show the contents of private conversations."
      },
      {
        "label": "Image and media filters",
        "value": "Check the account’s sensitive-content filters. Blurring an image is different from blocking it, and filters can miss content."
      },
      {
        "label": "Checking the age group",
        "value": "Open User Settings → Account Status to see the age group Discord has applied to the account."
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
        "title": "Start here",
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
      "checkedAt": "2026-11-03",
      "availability": "The 22 September age-group update replaces the February postponement notice. Account Status shows the group applied to an account; verification options and legal requirements vary.",
      "sources": [
        {
          "title": "Discord: September age-assurance approach",
          "url": "https://discord.com/blog/safer-for-teens-same-discord-for-adults"
        },
        {
          "title": "Discord: Family Center for parents",
          "url": "https://support.discord.com/hc/en-us/articles/14155043715735-Family-Center-for-Parents-and-Guardians"
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
        "title": "Set play and create time limits",
        "steps": [
          "In Epic parental controls, review Time Limit Controls for Fortnite and UEFN. You can set schedules and separate Play Time from Create Time. Limits follow the same Epic account across devices; console limits can restrict time further."
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
        "label": "Epic parental PIN",
        "value": "Keep the parent PIN private. It protects the parental controls and approvals you configure."
      },
      {
        "label": "Voice and text chat",
        "value": "Review who your child can talk to in Epic’s chat settings. Permissions depend on age."
      },
      {
        "label": "Which payments does the PIN cover?",
        "value": "The Epic payment PIN covers real-money purchases through Epic. Other stores and existing V-Bucks need separate checks."
      },
      {
        "label": "Spending existing V-Bucks",
        "value": "Agree on a budget for currency already in the account. The real-money payment PIN does not control these purchases."
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
        "title": "Start here",
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
      "checkedAt": "2026-11-03",
      "availability": "Epic payment approval excludes other stores and existing V-Bucks. Paid-random-item controls depend on region. Play and create limits follow the same Epic account across devices.",
      "sources": [
        {
          "title": "Epic: parental controls, payments and time limits",
          "url": "https://safety.epicgames.com/en-US/parental-controls"
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
    "summary": "A building and exploration game. Single-player, private Realms and public servers offer different experiences; check the edition, account and people your child plays with.",
    "description": "A building and exploration game. Single-player, private Realms and public servers offer different experiences; check the edition, account and people your child plays with.",
    "quickActions": [
      {
        "title": "Check the edition and Microsoft account",
        "description": "Current Java and Bedrock editions support Microsoft account controls. Check that your child uses their own child account."
      },
      {
        "title": "Review multiplayer and communication",
        "description": "Use the Microsoft family group and Xbox privacy and online safety settings to check multiplayer and contact permissions for the child."
      },
      {
        "title": "Choose who can join",
        "description": "For multiplayer, consider a private Realm with people you know. Check the member list and invitations together."
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
        "title": "Check the edition and account",
        "steps": [
          "Current Java and Bedrock editions support Microsoft account controls. Check that your child uses their own child account."
        ]
      },
      {
        "title": "Review Microsoft and Xbox permissions",
        "steps": [
          "Use the parent account to review the child’s Xbox privacy and online safety settings, including multiplayer and communication. These matter for both current editions, even on a non-Xbox device."
        ]
      },
      {
        "title": "Check purchases and time separately",
        "steps": [
          "Review the store and device used for purchases and time limits. A Microsoft account setting does not replace PlayStation, Nintendo, Apple or Google payment controls."
        ]
      },
      {
        "title": "Review a Realm’s members",
        "steps": [
          "For multiplayer, consider a private Realm with people you know. Check the member list and invitations together."
        ]
      },
      {
        "title": "Check downloads before installing",
        "steps": [
          "Use established mod sites such as Modrinth or CurseForge, then check the uploader and file. A familiar download site does not guarantee that every mod is safe."
        ]
      },
      {
        "title": "Know the limits of older or modified versions",
        "steps": [
          "Minecraft says its parental control features do not cover versions earlier than Java 1.16.4 or modded versions. Check the game actually launched, not just the launcher."
        ]
      },
      {
        "title": "Practise reporting",
        "steps": [
          "Find the in-game reporting and blocking options together. Moderation and chat behaviour differ between Realms and third-party servers."
        ]
      }
    ],
    "ageRating": "PEGI 7 content rating; account and store requirements differ",
    "userCount": "Huge global player base",
    "platform": "PC, Console, Mobile",
    "ageRecommendation": "Single-player suits younger children; multiplayer needs supervision",
    "riskBarPosition": 50,
    "appMetrics": [
      {
        "label": "Single-player",
        "value": "Your child plays without contact with other players inside the game."
      },
      {
        "label": "Public servers",
        "value": "Rules and moderation vary by server. Check who can join and how chat is managed."
      },
      {
        "label": "Controls for Java and Bedrock",
        "value": "Supported versions of both editions use Microsoft account controls. Check multiplayer and communication permissions."
      },
      {
        "label": "Mods and downloads",
        "value": "Check the source and file before installing a mod. A familiar download site does not guarantee that every file is safe."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Account controls have limits",
        "description": "A private Realm limits membership, but its safety still depends on who is invited and how they behave. Check modifications and external chat apps too."
      },
      {
        "type": "tip",
        "title": "Start here",
        "description": "Use a child Microsoft account, review multiplayer permissions and choose the people your child plays with."
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
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Microsoft account controls apply to supported Java and Bedrock versions. Minecraft excludes versions earlier than Java 1.16.4 and modded versions from its parental-control support. Store and device controls are separate.",
      "sources": [
        {
          "title": "Minecraft: parental controls and supported versions",
          "url": "https://www.minecraft.net/en-us/article/parental-controls"
        },
        {
          "title": "Minecraft: child accounts and social features",
          "url": "https://help.minecraft.net/hc/en-us/articles/360058605852"
        }
      ]
    }
  },
  {
    "slug": "chatgpt",
    "name": "ChatGPT",
    "category": "apps",
    "riskLevel": "medium",
    "riskLabelText": "Medium risk",
    "summary": "An AI chatbot that can help with learning. Children need to check its answers and understand the limits of its advice.",
    "description": "An AI chatbot that can help with learning. Children need to check its answers and understand the limits of its advice.",
    "quickActions": [
      {
        "title": "Link a parent account",
        "description": "Open Settings → Parental controls → Add family member. Your teen must accept the invitation; then select them to review available controls."
      },
      {
        "title": "Review data and memory",
        "description": "Check model-training and saved-memory settings in parental controls. Turning them off does not delete existing chats or every previously saved detail."
      },
      {
        "title": "Set study and quiet hours",
        "description": "Study hours starts eligible new chats in study mode. Quiet hours limits access during scheduled times; the two settings do different jobs."
      },
      {
        "title": "Agree on school rules",
        "description": "Check the school’s AI policy and agree when help is allowed, how to cite it and which work must be completed independently."
      }
    ],
    "watchFor": [
      {
        "title": "Jailbreak prompts to bypass safeguards",
        "description": "Children can find or share prompts intended to get around safeguards. Ask them to show you responses that feel unsafe or inappropriate.",
        "severity": "high"
      },
      {
        "title": "Homework completed without understanding",
        "description": "A finished answer can hide gaps in learning. Ask your child to explain the reasoning in their own words.",
        "severity": "high"
      },
      {
        "title": "Emotional over-reliance",
        "description": "Some children may begin to use the chatbot as a substitute for real support, feedback, or social contact.",
        "severity": "medium"
      },
      {
        "title": "Confident misinformation",
        "description": "A fluent answer can be wrong. Verify important claims before relying on them.",
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
        "title": "Check the teen experience",
        "steps": [
          "ChatGPT for Teens applies automatically to eligible accounts identified as under 18. Where shown, review Settings → Account → Age together."
        ]
      },
      {
        "title": "Connect parental controls",
        "steps": [
          "Open Settings → Parental controls → Add family member. Your teen must accept the invitation; then select them to review available controls."
        ]
      },
      {
        "title": "Review available features",
        "steps": [
          "Review sensitive-content safeguards, model training, saved memory, Voice, images and Health where available. For ChatGPT Work, review code network access and Cloud browser separately; neither is a switch for all search or plugins."
        ]
      },
      {
        "title": "Separate study time from downtime",
        "steps": [
          "Study hours affects eligible new chats in the main experience, not GPT or Project chats. Quiet hours restricts access. Some setting changes apply only to new conversations."
        ]
      },
      {
        "title": "Understand privacy and unlinking",
        "steps": [
          "You cannot read your teen’s chats through parental controls. Either person can unlink; if your teen does, you are notified and linked controls and alerts stop."
        ]
      },
      {
        "title": "Understand safety notifications",
        "steps": [
          "Alerts may follow reviewed self-harm concerns, disordered-eating concerns in Chat, or violence-related account deactivation. They can miss problems and are not live monitoring. Review notification contacts after linking."
        ]
      },
      {
        "title": "Check answers together",
        "steps": [
          "Ask your teen to explain an answer and verify important claims against a reliable source. Agree on what help is allowed for homework."
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
        "label": "Teen protections",
        "value": "ChatGPT turns these on automatically for eligible accounts identified as belonging to someone under 18."
      },
      {
        "label": "Can parents read chats?",
        "value": "No. Linking accounts does not let you read your teen’s conversations."
      },
      {
        "label": "Study hours",
        "value": "New chats in the main ChatGPT experience start in study mode at the times you choose. GPTs and Projects are excluded. Access stays open."
      },
      {
        "label": "Quiet hours",
        "value": "Stops your teen from using ChatGPT during the times you set."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Alerts have limits",
        "description": "A linked account does not provide access to chats or continuous monitoring. Keep talking with your teen and respond to concerns even without an alert."
      },
      {
        "type": "tip",
        "title": "October 2026 update",
        "description": "OpenAI announced further limits on weapons-related information for teens on 30 October. These safeguards do not guarantee that every answer is correct or appropriate."
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
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Controls apply to eligible linked personal accounts and end when the teen unlinks or moves to the adult experience. Features vary by account and region. Study hours and ChatGPT Work controls have separate scopes.",
      "sources": [
        {
          "title": "OpenAI: current parental controls",
          "url": "https://help.openai.com/en/articles/12315553-managing-parental-controls-in-chatgpt"
        },
        {
          "title": "OpenAI: ChatGPT for Teens",
          "url": "https://help.openai.com/en/articles/20001421-chatgpt-for-teens"
        },
        {
          "title": "OpenAI: 30 October teen safety update",
          "url": "https://openai.com/index/community-safety-report-and-new-protections-for-teens/"
        }
      ]
    }
  },
  {
    "slug": "character-ai",
    "name": "Character.AI",
    "category": "apps",
    "riskLevel": "critical",
    "riskLabelText": "Very high risk",
    "homeBadgeLabel": "Urgent attention needed",
    "summary": "An AI character and entertainment service. Under-18 open-ended chat has been removed. An October sale-process announcement makes it worth checking subscriptions, saved data and service notices together.",
    "description": "An AI character and entertainment service. Under-18 open-ended chat has been removed. An October sale-process announcement makes it worth checking subscriptions, saved data and service notices together.",
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
      },
      {
        "title": "Review the October service update",
        "steps": [
          "On 12 October 2026, Character.AI announced a Chapter 11 process seeking a sale. The announcement says the service remains running and subscriptions continue billing, but warns of a wind-down if no suitable bid emerges. Check current notices and review export, deletion and subscription options together."
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
        "label": "Open-ended chat for under-18s",
        "value": "Character.AI says it has removed open-ended character chat for users under 18."
      },
      {
        "label": "Checking the account’s age",
        "value": "Review the birthday and available features together. Contact support if your child can access adult-only features."
      },
      {
        "label": "Access through a browser",
        "value": "Check website access as well as the installed app. An app limit alone does not cover every way of using the service."
      },
      {
        "label": "Support from real people",
        "value": "Keep trusted people involved. A chatbot cannot replace human support when your child is struggling."
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
        "title": "Start here",
        "description": "Check the child’s actual account experience together and agree what AI is useful for in your family."
      },
      {
        "type": "warning",
        "title": "Service status can change",
        "description": "The October announcement describes continued operation during a sale process. It does not promise that the platform or paid features will remain available."
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
      "checkedAt": "2026-11-03",
      "availability": "Under-18 open chat remains removed in the September safety update. The 12 October announcement says services and billing continue during a proposed sale process; future operation is uncertain.",
      "sources": [
        {
          "title": "Character.AI: September safety update",
          "url": "https://blog.character.ai/continuing-to-build-upon-our-safety-priorities/"
        },
        {
          "title": "Character.AI: 12 October service and subscription update",
          "url": "https://blog.character.ai/an-update-on-character-ai/"
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
        "label": "Privacy of personal conversations",
        "value": "Personal chats and calls use end-to-end encryption. This does not make every contact trustworthy."
      },
      {
        "label": "Reporting unwanted messages",
        "value": "You can report abusive messages to WhatsApp. Reporting can send recent messages to the service for review."
      },
      {
        "label": "Parent-managed accounts",
        "value": "Availability is rolling out. Check whether setup is offered on your phones before relying on these controls."
      },
      {
        "label": "Who can add your child to groups?",
        "value": "Review group privacy settings. Parent-managed accounts also let parents decide which groups the child can join."
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
        "title": "Start here",
        "description": "Check the account type and group permissions before joining the first class group."
      },
      {
        "type": "tip",
        "title": "Rollout checked in November 2026",
        "description": "The official announcement still describes gradual availability. If parent-managed setup is absent, do not use an adult birthday to register a child."
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
      "availability": "The parent-managed account announcement describes a gradual rollout, not a confirmed completion date for Romania. Check setup on both phones; managed accounts limit use to messaging and calling.",
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
    "summary": "A live-streaming platform focused on gaming. Check live chat, gambling content, spending and the attachment a child may develop to streamers.",
    "description": "A live-streaming platform focused on gaming. Check live chat, gambling content, spending and the attachment a child may develop to streamers.",
    "quickActions": [
      {
        "title": "Check content preferences and account age",
        "description": "In Content Preferences, review each label filter. Four sensitive-content categories are filtered by default for under-18s, but teens can change them; Mature-rated Games is a separate choice."
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
        "title": "Harmful messages in live chat",
        "description": "On busy channels, a child may see harassment, sexual language or manipulation before moderators remove it.",
        "severity": "high"
      },
      {
        "title": "Gambling presented as entertainment",
        "description": "Review the gambling filter and discuss streams that make betting look routine.",
        "severity": "high"
      },
      {
        "title": "Unexpected audiences after raids",
        "description": "A raid moves viewers to another channel. The new channel and its chat may feel very different.",
        "severity": "medium"
      },
      {
        "title": "Pressure to subscribe or buy Bits",
        "description": "A child may feel obliged to spend money on a streamer they like.",
        "severity": "medium"
      },
      {
        "title": "Attachment to streamers",
        "description": "Discuss how feeling close to a creator can affect trust in the products or opinions they promote.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Review each content filter",
        "steps": [
          "Under-18 defaults filter Sexual Themes, Drugs/Intoxication, Violent/Graphic Depictions and Gambling. Check Mature-rated Games separately. These are changeable account preferences, not a parent-locked guarantee; labels and live moderation can miss content."
        ]
      },
      {
        "title": "Block Whispers from strangers",
        "steps": [
          "In Security and Privacy, check Block Whispers from Strangers. Twitch’s definition includes exceptions such as accounts you follow or have messaged; it is not a mutual-follow-only rule."
        ]
      },
      {
        "title": "Build a list of pre-approved streamers and bookmark them",
        "steps": [
          "Together with your child, identify 5 to 10 specific streamers whose content you have watched and found appropriate. Add them to Following. Direct viewing to this list rather than Browse or Discovery."
        ]
      },
      {
        "title": "Agree how to use Browse",
        "steps": [
          "Twitch has no parent lock for Browse. Start with a Following list you have chosen together and revisit the agreement as your child gains experience."
        ]
      },
      {
        "title": "Review payment methods",
        "steps": [
          "Remove saved cards and check app-store payments and active subscriptions separately. This adds a pause before some purchases, but does not block every payment route."
        ]
      },
      {
        "title": "Talk about attachment to streamers",
        "steps": [
          "A child can feel close to a streamer who does not know them personally. Discuss how that feeling can influence purchases and whose advice they trust."
        ]
      },
      {
        "title": "Set a viewing limit on the device",
        "steps": [
          "Use the child’s device parental controls to set an app limit. Agree on a duration that fits school, sleep and other activities."
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
        "label": "Content filters",
        "value": "Your teen can change these preferences. They are not settings that only a parent can unlock."
      },
      {
        "label": "Live moderation",
        "value": "A moderator may remove harmful content after your child has already seen it."
      },
      {
        "label": "Private messages: Whispers",
        "value": "Check Block Whispers from Strangers in Security and Privacy. The rule has exceptions, including some existing contacts."
      },
      {
        "label": "Subscriptions and Bits",
        "value": "Both can involve real spending. Review payment methods and active subscriptions together."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Live content can change quickly",
        "description": "Filters and moderators cannot review an entire live stream in advance. A child may see a message before it is removed."
      },
      {
        "type": "tip",
        "title": "Start here",
        "description": "Choose streamers together, check the label filters and agree on spending and viewing limits."
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
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Under-18 defaults filter four sensitive-content labels. Mature-rated Games is separate, and teens can adjust preferences. These settings are not a parental lock. The help portal returned a loading error; label details were checked in indexed official guidance.",
      "sources": [
        {
          "title": "Twitch: content display preferences",
          "url": "https://help.twitch.tv/s/article/how-to-customize-content"
        },
        {
          "title": "Twitch: parent and educator guide",
          "url": "https://safety.twitch.tv/s/article/Guide-Parents-Educators?language=en_US"
        },
        {
          "title": "Twitch: safety and Whisper defaults",
          "url": "https://safety.twitch.tv/s/article/Safety-at-Twitch?language=en_US"
        }
      ]
    }
  },
  {
    "slug": "steam",
    "name": "Steam",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "Medium-high risk",
    "homeBadgeLabel": "Set up controls first",
    "summary": "A PC gaming store and community. Review access to adult games, community discussions, trades and purchases.",
    "description": "A PC gaming store and community. Review access to adult games, community discussions, trades and purchases.",
    "quickActions": [
      {
        "title": "Set up Steam Families",
        "description": "Create a Steam Family from your adult account and add your child with the child role. Enable parental controls for their account."
      },
      {
        "title": "Review Community and chat access",
        "description": "Restrict Community, Store or chat access in the child’s parental controls where you do not want those features used."
      },
      {
        "title": "Remove saved payment methods",
        "description": "Delete stored cards and use gift cards or wallet credit instead so spending stays inside a fixed budget."
      }
    ],
    "watchFor": [
      {
        "title": "Games outside the agreed age range",
        "description": "Review allowed games in Steam Families. Store content preferences alone do not decide which games are suitable for your child.",
        "severity": "high"
      },
      {
        "title": "Unwanted contact in Community and chat",
        "description": "Community posts and messages can contain harassment, adult material or scams. Review these permissions separately from the game list.",
        "severity": "high"
      },
      {
        "title": "Trade and account scams",
        "description": "Treat unexpected trade links or messages claiming to be Steam Support cautiously. Never share login codes.",
        "severity": "high"
      },
      {
        "title": "Spending during sales",
        "description": "Discounts and bundles can make it easy to spend beyond the agreed budget. Review saved cards and wallet credit.",
        "severity": "medium"
      },
      {
        "title": "Friend requests from game lobbies",
        "description": "Ask who your child adds and review unfamiliar contacts together.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Create the family and child role",
        "steps": [
          "In Steam Settings → Family, create or manage your Steam Family and add your child as a child member. Enable their parental controls and review the allowed games, Store, Community and chat access."
        ]
      },
      {
        "title": "Review Community and chat access",
        "steps": [
          "In Steam Families parental controls, choose whether the child can use the Store, Community and chat. Review the settings inside each permitted game too."
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
      },
      {
        "title": "Set playtime and review requests",
        "steps": [
          "Steam Families supports playtime limits, schedules and requests for more time or purchases. These controls do not replace a game’s own chat and privacy settings."
        ]
      }
    ],
    "ageRating": "13+ for accounts",
    "userCount": "The largest PC gaming platform",
    "platform": "PC, Mac, Linux, Mobile companion app",
    "ageRecommendation": "Review allowed games and Community access before independent use",
    "riskBarPosition": 63,
    "appMetrics": [
      {
        "label": "Steam Families",
        "value": "Add your child with the child role, then enable the parental controls for their account."
      },
      {
        "label": "Choosing allowed games",
        "value": "You can choose which games your child may play from the available library."
      },
      {
        "label": "Community and chat access",
        "value": "Review these permissions separately from the game list. A permitted game can also have its own chat settings."
      },
      {
        "label": "Playtime limits",
        "value": "Set time limits and schedules. Your child can send requests for extra time for you to review."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Check each game too",
        "description": "Steam Families controls access to Steam features. A permitted game can still have its own multiplayer, purchases or external account."
      },
      {
        "type": "tip",
        "title": "Start here",
        "description": "Add the child role, enable parental controls and choose the games and community features together."
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
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Steam Families replaces Family View and Family Sharing. Family eligibility and game sharing have their own rules; game-level chat and purchases need separate review. The help portal returned a limited page during this check; the guide and replacement notice were checked in indexed official text.",
      "sources": [
        {
          "title": "Steam: Families user guide and parental controls",
          "url": "https://help.steampowered.com/en/faqs/view/054C-3167-DD7F-49D4"
        },
        {
          "title": "Steam: Family View replacement notice",
          "url": "https://help.steampowered.com/en/faqs/view/6B1A-66BE-E911-3D98"
        }
      ]
    }
  },
  {
    "slug": "gemini",
    "name": "Gemini",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "High risk",
    "summary": "Google’s AI assistant for questions, writing and learning. Check the account type and country before relying on Family Link controls.",
    "description": "Google’s AI assistant for questions, writing and learning. Check the account type and country before relying on Family Link controls.",
    "ageRating": "Eligibility varies by country and account type",
    "userCount": "Learners and general AI users",
    "platform": "Web, Android, iOS",
    "ageRecommendation": "Our recommendation: eligible accounts, with agreed privacy and learning rules",
    "quickActions": [
      {
        "title": "Check eligibility first",
        "description": "Google currently excludes supervised Gemini Apps accounts in the EEA, including Romania, as well as the UK and Switzerland."
      },
      {
        "title": "Check the account being used",
        "description": "Look together at whether it is a personal, supervised or school account. School access depends on the institution’s administrator."
      },
      {
        "title": "Agree what stays private",
        "description": "Keep passwords, private photos and identifying details out of prompts. Ask for explanations, then check important answers."
      }
    ],
    "setupGuide": [
      {
        "title": "Identify the account",
        "steps": [
          "Open the account menu together. A school login and a personal login can have different access and data rules; ask the school how its account is managed."
        ]
      },
      {
        "title": "Use Family Link only where supported",
        "steps": [
          "For an eligible supervised account outside the excluded regions: Family Link → select child → Controls → Gemini → Gemini Apps. Review whether access is on or off. Do not remove supervision or change a birthday to bypass eligibility."
        ]
      },
      {
        "title": "Review privacy settings",
        "steps": [
          "Read the Gemini Privacy Hub for the account in use. Where Keep Activity is available, review it together; turning it off does not mean every chat is immediately deleted or that no safety review occurs."
        ]
      },
      {
        "title": "Review connected services and uploads",
        "steps": [
          "Before allowing access to another app or uploading a file, discuss what information the task needs. Avoid sharing documents containing other people’s personal details."
        ]
      },
      {
        "title": "Practice checking an answer",
        "steps": [
          "Try a school question together and ask the child to explain the answer in their own words. Check claims using a textbook or a reliable original source."
        ]
      },
      {
        "title": "Report a concerning response",
        "steps": [
          "Use the response feedback option for inappropriate or incorrect output. Agree that the child can stop a conversation and ask a trusted person for help."
        ]
      }
    ],
    "watchFor": [
      {
        "title": "Confident errors",
        "description": "A clear explanation can still be wrong. Check before acting on an important answer.",
        "severity": "high"
      },
      {
        "title": "Private information in prompts",
        "description": "An uploaded worksheet or screenshot may include names, photos or other details that were not needed.",
        "severity": "high"
      },
      {
        "title": "A tool becoming a confidant",
        "description": "Notice when AI use replaces asking people for help or spending time with friends.",
        "severity": "high"
      },
      {
        "title": "Another account bypassing expectations",
        "description": "Review actual access together rather than assuming one device setting covers every login.",
        "severity": "high"
      }
    ],
    "appMetrics": [
      {
        "label": "Supervised accounts in Romania",
        "value": "Google does not offer Gemini Apps to supervised accounts in Romania, which is part of the EEA."
      },
      {
        "label": "School accounts",
        "value": "The school’s administrator decides whether Gemini is available for a school account."
      },
      {
        "label": "Privacy settings",
        "value": "Data settings depend on the account type. Check the rules for the account your child actually uses."
      },
      {
        "label": "Checking answers",
        "value": "Gemini can give a confident answer that is wrong. Verify important claims with a reliable source."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Romania and supervised accounts",
        "description": "Do not follow a US Family Link walkthrough as if it enables Gemini Apps for a supervised account in Romania. Google’s current help excludes the EEA."
      },
      {
        "type": "tip",
        "title": "Start here",
        "description": "Check the account and choose one useful learning task to try together before allowing independent use."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Google still excludes supervised Gemini Apps accounts in the EEA, UK and Switzerland. Romania is in the EEA. School accounts have separate administrator rules; the Privacy Hub was updated on 26 October.",
      "sources": [
        {
          "title": "Google: supervised Gemini Apps accounts",
          "url": "https://support.google.com/gemini/answer/16109150?hl=en"
        },
        {
          "title": "Google: account eligibility",
          "url": "https://support.google.com/gemini/answer/13278668?hl=en"
        },
        {
          "title": "Google: Gemini Privacy Hub",
          "url": "https://support.google.com/gemini/answer/13594961?hl=en"
        }
      ]
    },
    "related": [
      {
        "category": "apps",
        "slug": "chatgpt"
      },
      {
        "category": "os",
        "slug": "android"
      },
      {
        "category": "apps",
        "slug": "meta-ai"
      }
    ]
  },
  {
    "slug": "meta-ai",
    "name": "Meta AI",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "High risk",
    "summary": "Meta’s AI assistant can appear inside apps your teen already uses. Check which app and account they use; parental visibility and alerts are not identical everywhere.",
    "description": "Meta’s AI assistant can appear inside apps your teen already uses. Check which app and account they use; parental visibility and alerts are not identical everywhere.",
    "ageRating": "Check the host app’s minimum age and regional AI eligibility",
    "userCount": "Users of Meta apps and AI tools",
    "platform": "Meta AI app and web; Instagram, Facebook, Messenger and WhatsApp availability varies",
    "ageRecommendation": "Our recommendation: eligible teen accounts with supervision and clear boundaries",
    "quickActions": [
      {
        "title": "Identify where AI is used",
        "description": "Ask your teen to show you which Meta app or website they use for AI. Do not assume an Instagram setting covers WhatsApp or a separate login."
      },
      {
        "title": "Review supervision",
        "description": "Open Family Center for the teen account and check the available AI insights and content settings together."
      },
      {
        "title": "Explain the limits of alerts",
        "description": "A parent alert is an extra signal, not a promise that every worrying conversation will be detected."
      }
    ],
    "setupGuide": [
      {
        "title": "Check the account’s age and app",
        "steps": [
          "Use accurate age information and the app’s age-appropriate account. Distinguish the Meta AI assistant from user-created AI characters; controls for one are not automatically controls for the other."
        ]
      },
      {
        "title": "Review AI topics and app supervision",
        "steps": [
          "Meta’s 5 October update makes supervision available globally in the Meta AI app. Linked parents can see topics from the previous seven days, not transcripts. Review the relevant account in Family Center."
        ]
      },
      {
        "title": "Check stricter content settings",
        "steps": [
          "In the Meta AI app, a supervising parent can choose Limited Content instead of the default 13+ setting. Check each app separately; this does not disable every AI feature."
        ]
      },
      {
        "title": "Check the October alert rollout",
        "steps": [
          "Meta’s 29 October update announces alerts to supervising parents globally for possible suicide or self-harm risk in Meta AI chats on Instagram, Facebook and Messenger. Check the linked account; this announcement does not establish equivalent alerts for WhatsApp or the standalone Meta AI app."
        ]
      },
      {
        "title": "Agree on private information and sharing",
        "steps": [
          "Avoid putting private photos, passwords or other people’s personal information in a prompt. Before sharing an AI result, check its accuracy and whether anyone shown has agreed."
        ]
      },
      {
        "title": "Make room for human help",
        "steps": [
          "Ask how the conversation felt, not just which topic appeared in a dashboard. If an alert arrives, talk calmly with your teen and seek appropriate support; do not wait for another alert."
        ]
      }
    ],
    "watchFor": [
      {
        "title": "Trusting the assistant too much",
        "description": "A friendly answer can be inaccurate or unsuitable for a personal decision.",
        "severity": "high"
      },
      {
        "title": "Personal disclosures",
        "description": "Discuss what your teen would not want to share with an online service before they send it.",
        "severity": "high"
      },
      {
        "title": "Different apps, different visibility",
        "description": "A summary for one supervised account does not describe all AI use on a device.",
        "severity": "high"
      },
      {
        "title": "Misleading generated content",
        "description": "Check images and claims before forwarding them or treating them as evidence.",
        "severity": "high"
      }
    ],
    "appMetrics": [
      {
        "label": "What parents can see",
        "value": "Supervision can show topics from recent AI conversations, without giving parents the full chats."
      },
      {
        "label": "Limited Content",
        "value": "In Instagram and the Meta AI app, this setting narrows the content or conversations available to a teen."
      },
      {
        "label": "Safety alerts for parents",
        "value": "Meta has announced a global alert rollout for supervised Instagram, Facebook and Messenger accounts. Check the relevant account."
      },
      {
        "label": "Which apps do controls cover?",
        "value": "Controls depend on the app and account. An Instagram setting does not automatically cover WhatsApp or another login."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "No alert does not mean no problem",
        "description": "Do not rely on an alert system to assess your teen’s wellbeing. Keep ordinary conversations and trusted people involved."
      },
      {
        "type": "tip",
        "title": "Start here",
        "description": "Look at the AI feature your teen actually uses and review supervision for that account together."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Meta AI app supervision is documented globally from 5 October. The 29 October global alert rollout covers supervised Instagram, Facebook and Messenger accounts; coverage differs by app.",
      "sources": [
        {
          "title": "Meta: AI app supervision, updated 5 October 2026",
          "url": "https://about.fb.com/news/2026/04/helping-parents-understand-conversations-their-teens-are-having-with-ai/"
        },
        {
          "title": "Meta: alerts, updated 29 October 2026",
          "url": "https://about.fb.com/news/2026/07/keeping-parents-informed-teens-distress-conversations-meta-ai/"
        }
      ]
    },
    "related": [
      {
        "category": "apps",
        "slug": "instagram"
      },
      {
        "category": "apps",
        "slug": "whatsapp"
      },
      {
        "category": "apps",
        "slug": "gemini"
      }
    ]
  },
  {
    "slug": "telegram",
    "name": "Telegram",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "High risk",
    "summary": "A messaging service with groups, broadcast channels and third-party bots. Telegram’s EU terms require users to be 18+; this guide helps parents understand and respond to existing use.",
    "description": "A messaging service with groups, broadcast channels and third-party bots. Telegram’s EU terms require users to be 18+; this guide helps parents understand and respond to existing use.",
    "ageRating": "18+ to sign up in the EU; check local terms elsewhere",
    "userCount": "Messaging, groups and channel audiences",
    "platform": "Android, iOS, desktop, web",
    "ageRecommendation": "Our recommendation: choose an age-appropriate alternative for minors in the EU",
    "quickActions": [
      {
        "title": "Check age eligibility",
        "description": "In Romania and other EU countries, Telegram’s terms require 18+ to sign up. If a child already uses it, discuss how to move important contacts to an age-appropriate service."
      },
      {
        "title": "Review existing contacts together",
        "description": "Ask about unfamiliar chats, groups, channels and bots. Make it easy to disclose pressure, threats or unwanted material."
      },
      {
        "title": "Reduce exposure while you respond",
        "description": "Review privacy settings and report concerning messages before deciding the next steps together."
      }
    ],
    "setupGuide": [
      {
        "title": "Start with the existing situation",
        "steps": [
          "Ask why your child uses Telegram and who invited them. These checks help with an existing account; they are not instructions to register a child below the service’s minimum age."
        ]
      },
      {
        "title": "Review phone-number visibility",
        "steps": [
          "Open Settings → Privacy and Security → Phone Number. Review visibility and discovery options; a hidden number does not stop contact through shared groups or a public username."
        ]
      },
      {
        "title": "Review groups and channels",
        "steps": [
          "Check group-invitation permissions in Privacy and Security. Review memberships together. A channel is a broadcast feed; a linked discussion group can add conversations with other users."
        ]
      },
      {
        "title": "Check bots before sharing",
        "steps": [
          "Bots and mini apps can be run by third parties. Sending a bot a message can share data with its developer. Avoid sending private files or login codes."
        ]
      },
      {
        "title": "Understand chat privacy",
        "steps": [
          "Regular cloud chats and groups are not end-to-end encrypted. Secret Chats use end-to-end encryption and are device-specific, but do not guarantee a trustworthy recipient or prevent someone photographing a screen."
        ]
      },
      {
        "title": "Report unwanted or illegal content",
        "steps": [
          "Use the message’s Report option: tap on Android, press and hold on iOS, or right-click on desktop. Block unwanted contacts and ask for help if there are threats; do not forward abusive material."
        ]
      }
    ],
    "watchFor": [
      {
        "title": "Moving a conversation into secrecy",
        "description": "A request to leave a game or social app for a private chat deserves a conversation about who is asking and why.",
        "severity": "high"
      },
      {
        "title": "Harmful group or channel content",
        "description": "An invitation from a friend is not a guarantee that all members or posts are safe.",
        "severity": "high"
      },
      {
        "title": "Bots requesting private data",
        "description": "Treat a bot as a separate service with its own operator and privacy practices.",
        "severity": "high"
      },
      {
        "title": "Fake gifts, downloads or login requests",
        "description": "Do not share login codes or open unfamiliar downloads to claim a promised reward.",
        "severity": "high"
      }
    ],
    "appMetrics": [
      {
        "label": "Minimum age in the EU",
        "value": "Telegram’s EU terms require users to be at least 18 to sign up. This applies in Romania."
      },
      {
        "label": "Regular chats",
        "value": "Regular chats and groups use cloud encryption. They do not have end-to-end encryption."
      },
      {
        "label": "Secret Chats",
        "value": "These use end-to-end encryption and stay on the devices involved. Encryption does not establish that the other person is trustworthy."
      },
      {
        "label": "Bots and mini apps",
        "value": "These can be run by third parties. Sending information to a bot can share it with that service’s operator."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Encryption is not a safety rating",
        "description": "Privacy features protect particular data flows. They do not establish who is on the other end or whether a group is suitable for a child."
      },
      {
        "type": "tip",
        "title": "Start here",
        "description": "Understand existing use without blame, address unwanted contact and agree on an age-appropriate way to stay in touch."
      },
      {
        "type": "tip",
        "title": "EU terms checked in November 2026",
        "description": "Telegram’s current EU terms still require users to be at least 18 to sign up. This applies in Romania."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "The EU minimum age applies to Romania. Privacy and reporting menus vary by client. This guide is for reviewing existing use and reducing harm, not recommending underage registration.",
      "sources": [
        {
          "title": "Telegram: EU terms and minimum age",
          "url": "https://telegram.org/tos/eu"
        },
        {
          "title": "Telegram: privacy, chat types and reporting FAQ",
          "url": "https://telegram.org/faq"
        },
        {
          "title": "Telegram: privacy and third-party bots",
          "url": "https://telegram.org/privacy"
        },
        {
          "title": "Telegram: channels and discussion groups",
          "url": "https://telegram.org/faq_channels"
        },
        {
          "title": "Telegram: group invitation control",
          "url": "https://translations.telegram.org/en/android/settings/PrivacyInvitesInfo"
        }
      ]
    },
    "related": [
      {
        "category": "apps",
        "slug": "whatsapp"
      },
      {
        "category": "apps",
        "slug": "discord"
      },
      {
        "category": "devices",
        "slug": "smartphone"
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
