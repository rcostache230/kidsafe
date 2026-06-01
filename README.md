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

- Next.js 16, React 19, TypeScript, Tailwind CSS (App Router, static generation)
- Astro 5 + Content Collections (MDX) for the `/blog` section, under `apps/blog`
- Editorial light theme (Fraunces + Inter) with a warm-paper palette

## Getting started

1. Install dependencies for both apps:

```bash
npm run install:all
```

2. Start the main Next.js site:

```bash
npm run dev
```

3. (Optional) Run the Astro blog in dev mode on a separate port:

```bash
npm run dev:blog
```

4. Open [http://localhost:3000](http://localhost:3000)

## Available scripts

```bash
npm run dev          # Next.js dev server
npm run dev:blog     # Astro dev server (apps/blog)
npm run build        # Builds the blog into public/blog, then builds Next
npm run build:blog   # Astro build only → public/blog
npm run build:next   # Next build only
npm run start        # Next production server
```

Note: `npm run lint` is currently wired to `next lint`, which is no longer valid in this repo's current Next.js 16 setup and will need to be updated before it can be used.

## Project structure

```text
src/                            # Next.js app (guides directory)
  app/
    page.tsx                    # EN homepage
    ro/page.tsx                 # RO homepage
    apps/[slug]/page.tsx        # app detail pages
    os/[slug]/page.tsx          # OS detail pages
    devices/[slug]/page.tsx     # device detail pages
    network/[slug]/page.tsx     # network/router guides
    globals.css                 # design tokens (paper/brand/accent) + base styles
  components/
    site-header.tsx             # primary nav with Articles link + RO/EN switch
    home-directory.tsx          # hero, search, partner tips, category sections
    partner-tips.tsx            # "Be a partner, not a guard" tip set (PDF-inspired)
    entry-page.tsx              # shared detail-page layout
    entry-card.tsx              # cards for apps/devices/OS
    footer.tsx                  # editorial footer with share + Articles link
  data/                         # all guide content
  lib/                          # site metadata + locale helpers

apps/blog/                      # Astro 5 blog (Content Collections, MDX)
  astro.config.mjs              # outputs to ../../public/blog with base /blog
  src/content/posts/            # EN posts at root, RO posts under ro/
  src/layouts/Base.astro        # shared header/footer for the blog
  src/pages/
    index.astro                 # EN article index
    ro/index.astro              # RO article index
    [...slug].astro             # individual post page (EN + RO)
    rss.xml.ts                  # RSS feed

next.config.ts                  # rewrites + cache headers for /blog
```

## Visual design

The site uses a warm-paper, editorial light theme inspired by the
Salvați Copiii / EU te iubesc parent-safety guide:

- Background: cream paper (`#FBF7EF`) with soft warm/teal radial accents
- Typography: Fraunces (display serif) + Inter (body) at 17px / 1.7
- Palette: deep brand teal (`#106B5A`), warm coral accent (`#E8794B`), sage + sun for callouts
- Dark mode is intentionally disabled — parents browsing on phones with
  OS-level dark mode were getting an unreadable layout. The site is
  light-only.

Tokens live in `tailwind.config.ts` and `src/app/globals.css`. The blog
mirrors them in `apps/blog/src/styles/global.css`.

## Adding a blog post

Drop an MDX file into `apps/blog/src/content/posts/` (EN) or
`apps/blog/src/content/posts/ro/` (RO). Frontmatter schema is in
`apps/blog/src/content.config.ts`. See `apps/blog/README.md` for details.

## Editing with Pages CMS

This repository includes a Pages CMS config at `.pages.yml`. Use
https://app.pagescms.org, sign in with GitHub, install the Pages CMS GitHub App
for this repository, then open the repo from the dashboard.

Editable collections:

- `Blog posts (Romanian)` writes MDX files to `apps/blog/src/content/posts/ro`.
- `Blog posts (English)` writes MDX files to `apps/blog/src/content/posts`.
- Uploaded blog images go to `public/uploads/blog` and are referenced as
  `/uploads/blog/...`.

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
