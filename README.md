# Digital Parents

Digital Parents is a public-facing Next.js guide for parents who want clear, practical help setting up safer devices, operating systems, and apps for children.

Live site: [https://digitalparents.xyz](https://digitalparents.xyz)

## What this project contains

- App guides for services like Roblox, YouTube, Snapchat, Instagram, TikTok, Discord, Fortnite, Minecraft, and ChatGPT
- Operating system setup guides for iOS, Android, Windows, and macOS
- Device setup guides for smartphones, tablets, laptops, and desktop PCs
- Parent-friendly summaries, quick actions, warning signs, and step-by-step setup flows
- Generated Open Graph images for the homepage and detail pages

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Static generation with App Router

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Available scripts

```bash
npm run dev
npm run build
npm run start
```

Note: `npm run lint` is currently wired to `next lint`, which is no longer valid in this repo's current Next.js 16 setup and will need to be updated before it can be used.

## Project structure

```text
src/
  app/
    page.tsx                    # homepage
    apps/[slug]/page.tsx        # app detail pages
    os/[slug]/page.tsx          # OS detail pages
    devices/[slug]/page.tsx     # device detail pages
    opengraph-image.tsx         # homepage OG image
  components/
    home-directory.tsx          # homepage hero, search, and directory sections
    entry-page.tsx              # shared detail-page layout
    entry-card.tsx              # homepage cards
    footer.tsx                  # footer and share button
  data/
    entries.ts                  # all guide content and metadata
  lib/
    site.ts                     # site metadata helpers
    og.tsx                      # OG image components
```

## Where the content lives

All guide content is stored in [`src/data/entries.ts`](./src/data/entries.ts).

Each entry includes:

- `summary`
- `description`
- `quickActions`
- `watchFor`
- `setupGuide`
- `related`
- app-specific metadata like `ageRating`, `platform`, and `riskBarPosition`

If you want to add or update a guide, start there first.

## Main UI files

- [`src/components/home-directory.tsx`](./src/components/home-directory.tsx): homepage hero, quick-pick buttons, search, section headers, and trust section
- [`src/components/entry-card.tsx`](./src/components/entry-card.tsx): cards for apps, devices, and operating systems
- [`src/components/entry-page.tsx`](./src/components/entry-page.tsx): shared layout for all detail pages
- [`src/components/footer.tsx`](./src/components/footer.tsx): expanded footer with share action
- [`src/app/globals.css`](./src/app/globals.css): global typography, color, and base styling

## Deployment

This site is designed to deploy cleanly on Vercel as a static App Router site.

Production builds can be verified with:

```bash
npm run build
```

## Content and presentation principles

- Keep URLs, slugs, and route structure stable
- Prefer presentation changes over data model changes
- Preserve the practical, plain-language tone for parents
- Keep the content actionable: what to do first matters more than abstract risk scoring

## License

See [`LICENSE`](./LICENSE).
