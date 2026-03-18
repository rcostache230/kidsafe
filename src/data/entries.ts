export type RiskLevel = "critical" | "high" | "medium" | "low";
export type Category = "devices" | "os" | "apps";

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
  related: EntryLink[];
}

export const categoryLabels: Record<Category, string> = {
  "devices": "Devices",
  "os": "Operating systems",
  "apps": "Apps"
};

export const categoryDirectoryHref: Record<Category, string> = {
  "devices": "/#devices",
  "os": "/#operating-systems",
  "apps": "/#apps"
};

export const riskMeta: Record<
  RiskLevel,
  {
    label: string;
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
    "summary": "A game platform built on user-created worlds, chat, and constant social interaction.",
    "description": "A game platform built on user-created worlds, chat, and constant social interaction.",
    "quickActions": [
      {
        "title": "Enable Account Restrictions",
        "description": "Settings → Privacy → Account Restrictions. Turn this on before your child starts adding friends or exploring new games."
      },
      {
        "title": "Set chat to friends only",
        "description": "Settings → Privacy → Contact Settings and reduce chat and messaging access to Friends only."
      },
      {
        "title": "Add a parent PIN for spending and settings",
        "description": "Settings → Parent Controls and create a PIN so purchases and privacy changes need your approval."
      }
    ],
    "watchFor": [
      {
        "title": "Grooming through in-game chat",
        "description": "Children can be approached in chat, private messages, or friend requests by adults pretending to be other children.",
        "severity": "critical"
      },
      {
        "title": "Inappropriate user-created content",
        "description": "Because users build the worlds, humor, language, themes, and visuals can shift far beyond what a parent expects from the age label.",
        "severity": "high"
      },
      {
        "title": "Robux spending pressure",
        "description": "Cosmetics, upgrades, and social status cues push children toward repeated spending and requests for more currency.",
        "severity": "high"
      },
      {
        "title": "Fake free Robux scams",
        "description": "Children are commonly targeted with phishing links, fake codes, and promises that ask for passwords or personal details.",
        "severity": "medium"
      },
      {
        "title": "Sleep disruption",
        "description": "The game loop and social pull make it easy for sessions to stretch far past the planned stop time.",
        "severity": "low"
      }
    ],
    "setupGuide": [
      {
        "title": "Enable Account Restrictions",
        "steps": [
          "Settings → Privacy → Account Restrictions. Turn this on before your child starts adding friends or exploring new games."
        ]
      },
      {
        "title": "Set chat to friends only",
        "steps": [
          "Settings → Privacy → Contact Settings and reduce chat and messaging access to Friends only."
        ]
      },
      {
        "title": "Add a parent PIN for spending and settings",
        "steps": [
          "Settings → Parent Controls and create a PIN so purchases and privacy changes need your approval."
        ]
      },
      {
        "title": "Link your parent email",
        "steps": [
          "Visit roblox.com/parents and attach a parent email so you receive account notices and recovery options."
        ]
      },
      {
        "title": "Review the friend list every month",
        "steps": [
          "Friends tab → open the full friend list together and remove anyone your child cannot identify in real life."
        ]
      },
      {
        "title": "Set device-level time limits",
        "steps": [
          "Use iPhone Screen Time, Android Family Link, Windows Family Safety, or macOS Screen Time to put Roblox on a hard stop."
        ]
      }
    ],
    "ageRating": "7+ official",
    "userCount": "Huge child and teen player base",
    "platform": "iOS, Android, Xbox, PlayStation, PC",
    "ageRecommendation": "Recommended 10+ with active supervision",
    "riskBarPosition": 75,
    "appMetrics": [
      {
        "label": "Avg daily use",
        "value": "2.5h"
      },
      {
        "label": "Stranger exposure",
        "value": "Millions"
      },
      {
        "label": "In-app purchases",
        "value": "Robux"
      },
      {
        "label": "Moderation",
        "value": "Weak"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "Roblox moderation cannot catch all predatory behaviour. Controls reduce risk, but regular conversations about chat, gifts, and strangers still matter."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Account Restrictions plus Friends-only chat removes most casual stranger contact risk immediately."
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
    ]
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
        "label": "Algorithm by default",
        "value": "Unfiltered"
      },
      {
        "label": "Stranger DMs",
        "value": "Allowed"
      },
      {
        "label": "Explore page",
        "value": "Uncontrolled"
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
    "summary": "A chat platform centered on servers, gaming communities, voice channels, and direct messages that are hard for parents to see.",
    "description": "A chat platform centered on servers, gaming communities, voice channels, and direct messages that are hard for parents to see.",
    "quickActions": [
      {
        "title": "Review every server together",
        "description": "Open the server list and leave anything your child cannot explain or that you cannot inspect clearly: left-click server → Leave Server."
      },
      {
        "title": "Turn off DMs from server members",
        "description": "User Settings → Privacy & Safety → Allow direct messages from server members → OFF."
      },
      {
        "title": "Limit friend requests",
        "description": "User Settings → Privacy & Safety → Friend Requests and uncheck Everyone so strangers cannot add them easily."
      }
    ],
    "watchFor": [
      {
        "title": "Direct messages from strangers",
        "description": "Children in shared servers can receive private messages from adults or older teens they have never met.",
        "severity": "critical"
      },
      {
        "title": "Adult or extremist communities",
        "description": "Many servers have no age checks and can host explicit content, hate speech, or harmful communities in plain view.",
        "severity": "critical"
      },
      {
        "title": "Grooming in game-related servers",
        "description": "Adults can use shared gaming interests to build trust slowly and move conversations into DMs or voice chat.",
        "severity": "critical"
      },
      {
        "title": "File sharing creates malware risk",
        "description": "Children can be sent suspicious files, cracked games, or illegal content directly inside chats and servers.",
        "severity": "high"
      },
      {
        "title": "Voice chat is unlogged and hard to monitor",
        "description": "Live voice channels create contact risk without a clear record for a parent to review afterward.",
        "severity": "high"
      }
    ],
    "setupGuide": [
      {
        "title": "Review every server together",
        "steps": [
          "Open the server list and leave anything your child cannot explain or that you cannot inspect clearly: left-click server → Leave Server."
        ]
      },
      {
        "title": "Turn off DMs from server members",
        "steps": [
          "User Settings → Privacy & Safety → Allow direct messages from server members → OFF."
        ]
      },
      {
        "title": "Limit friend requests",
        "steps": [
          "User Settings → Privacy & Safety → Friend Requests and uncheck Everyone so strangers cannot add them easily."
        ]
      },
      {
        "title": "Disable age-restricted content",
        "steps": [
          "User Settings → Privacy & Safety → age-restricted content → OFF."
        ]
      },
      {
        "title": "Enable two-factor authentication",
        "steps": [
          "User Settings → My Account → Enable Two-Factor Auth so the account is harder to hijack."
        ]
      },
      {
        "title": "Set a standing review rule",
        "steps": [
          "Agree that you can check the server list at any time without notice, because server membership is the main safety issue."
        ]
      }
    ],
    "ageRating": "13+ official",
    "userCount": "Large gaming and community audience",
    "platform": "iOS, Android, PC, Console",
    "ageRecommendation": "Not recommended under 16 without direct supervision",
    "riskBarPosition": 85,
    "appMetrics": [
      {
        "label": "Primary use",
        "value": "Gaming communities"
      },
      {
        "label": "Direct DMs",
        "value": "On by default"
      },
      {
        "label": "Server age verification",
        "value": "None"
      },
      {
        "label": "Moderation",
        "value": "Inconsistent"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "Discord has no platform-wide moderation of server content. The safety of any server depends almost entirely on its administrators, and there is no reliable way to verify who your child is speaking to in voice chat."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Reviewing the full server list matters more than any single setting. One harmful server can outweigh every privacy toggle you enable."
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
    ]
  },
  {
    "slug": "fortnite",
    "name": "Fortnite",
    "category": "apps",
    "riskLevel": "high",
    "riskLabelText": "Medium-high risk",
    "summary": "A fast-paced multiplayer game with open voice chat, heavy cosmetic spending pressure, and long competitive sessions.",
    "description": "A fast-paced multiplayer game with open voice chat, heavy cosmetic spending pressure, and long competitive sessions.",
    "quickActions": [
      {
        "title": "Turn off voice chat first",
        "description": "Settings → Audio → Voice Chat → OFF, or set it to Friends Only if you want to allow limited team communication."
      },
      {
        "title": "Enable Epic parental controls",
        "description": "Go to epicgames.com/account, open Parental Controls, and set a PIN your child does not know."
      },
      {
        "title": "Protect purchases with the PIN",
        "description": "Use Epic Parental Controls to require the PIN for all purchases or to place a monthly V-Bucks spending limit."
      }
    ],
    "watchFor": [
      {
        "title": "Voice chat with strangers",
        "description": "Children can hear and talk to random players, including adults, during live matches unless chat is disabled.",
        "severity": "high"
      },
      {
        "title": "V-Bucks spending pressure",
        "description": "Limited-time cosmetics, battle passes, and social status cues create repeated pressure to spend real money.",
        "severity": "high"
      },
      {
        "title": "Competitive toxicity",
        "description": "Live matches can include insults, aggressive teammates, and verbal abuse that younger children are not ready for.",
        "severity": "high"
      },
      {
        "title": "Free V-Bucks scams",
        "description": "Children are heavily targeted with fake codes, phishing pages, and account-stealing offers built around V-Bucks.",
        "severity": "medium"
      },
      {
        "title": "Sleep disruption",
        "description": "Matches and social momentum can make it difficult for children to stop at a sensible time without an external limit.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Turn off voice chat first",
        "steps": [
          "Settings → Audio → Voice Chat → OFF, or set it to Friends Only if you want to allow limited team communication."
        ]
      },
      {
        "title": "Enable Epic parental controls",
        "steps": [
          "Go to epicgames.com/account, open Parental Controls, and set a PIN your child does not know."
        ]
      },
      {
        "title": "Protect purchases with the PIN",
        "steps": [
          "Use Epic Parental Controls to require the PIN for all purchases or to place a monthly V-Bucks spending limit."
        ]
      },
      {
        "title": "Reduce cross-platform stranger contact",
        "steps": [
          "Turn off Cross-Platform Communication in Parental Controls so random players from other platforms cannot reach them as easily."
        ]
      },
      {
        "title": "Use device-level stop times",
        "steps": [
          "Set a firm session end with Screen Time, Family Link, Windows Family Safety, or console controls rather than relying on your child to stop voluntarily."
        ]
      },
      {
        "title": "Review transaction history monthly",
        "steps": [
          "Check epicgames.com/account/transactions so spending patterns and surprise charges do not build up quietly."
        ]
      }
    ],
    "ageRating": "12+ / Teen",
    "userCount": "Huge cross-platform player base",
    "platform": "PC, Console, Mobile",
    "ageRecommendation": "Treat it as 12+ even if younger children are already playing",
    "riskBarPosition": 60,
    "appMetrics": [
      {
        "label": "Avg session",
        "value": "90+ min"
      },
      {
        "label": "Voice chat",
        "value": "On by default"
      },
      {
        "label": "V-Bucks spending",
        "value": "High pressure"
      },
      {
        "label": "Competitive stress",
        "value": "Significant"
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "Voice chat is enabled by default and can place children into matches with random adult players. That is the primary contact risk and should be the first setting you change."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "The Epic Games Parental Controls PIN is the master control. Set it first and keep it private."
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
    ]
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
        "title": "Use Xbox Family Safety for Bedrock",
        "description": "Go to family.xbox.com and restrict multiplayer, purchases, and screen time for any Bedrock account."
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
        "title": "Use Xbox Family Safety for Bedrock",
        "steps": [
          "Go to family.xbox.com and restrict multiplayer, purchases, and screen time for any Bedrock account."
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
  }
];

export function getRiskMeta(level: RiskLevel) {
  return riskMeta[level];
}

export function getEntriesByCategory(category: Category) {
  return entries.filter((entry) => entry.category === category);
}

export function getEntry(category: Category, slug: string) {
  return entries.find((entry) => entry.category === category && entry.slug === slug);
}

export function getEntryHref(link: Pick<Entry, "category" | "slug"> | EntryLink) {
  return "/" + link.category + "/" + link.slug;
}

export function getEntriesForStaticParams(category: Category) {
  return getEntriesByCategory(category).map((entry) => ({
    slug: entry.slug
  }));
}

export function getRelatedEntries(entry: Entry) {
  return entry.related
    .map((link) => getEntry(link.category, link.slug))
    .filter((value): value is Entry => Boolean(value));
}
