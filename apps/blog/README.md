# Digital Parents — Blog (Astro)

The blog lives in this folder as a standalone Astro project so writing
content is fast, content collections do the heavy lifting, and the main
Next.js site stays untouched.

## How it integrates with the main site

In production, `astro build` writes the static site into
`<repo>/public/blog`. The Next.js site at the repo root then serves
those files automatically at `digitalparents.xyz/blog/*` — no rewrites,
no extra deployment, no second domain.

Locally, you can either:

- run `npm run dev` here (port 4321) for hot-reload while writing posts, or
- run `npm run build:blog` from the repo root, then `npm run dev` in the
  Next app — `/blog` will serve the built static files.

## Authoring a post

Drop an MDX file into `src/content/posts/` (EN) or
`src/content/posts/ro/` (RO). Frontmatter is validated against the
schema in `src/content.config.ts`:

```mdx
---
title: "Your post title"
description: "One-sentence summary used in cards and SEO."
lang: "en"          # or "ro"
publishedAt: 2026-06-01
tags: ["screen time", "routines"]
featured: false
draft: false
---

Write the post body in MDX. Astro components are available, but the
default styling lives in `src/styles/global.css` under `.prose`.
```

Set `draft: true` to keep a post hidden from listings until you're ready.

## Editing in Pages CMS

The root `.pages.yml` file exposes the blog to Pages CMS:

- `Blog posts (Romanian)` edits `src/content/posts/ro`.
- `Blog posts (English)` edits `src/content/posts`.
- Blog image uploads are stored in `../../public/uploads/blog`.

Open https://app.pagescms.org, sign in with GitHub, install the Pages CMS
GitHub App on this repository, and choose the collection you want to edit.

## Languages

- `/blog` lists RO posts
- `/blog/en` lists EN posts
- Switching languages in the header toggles between the two listings

## Scripts

- `npm run dev` — Astro dev server (independent port)
- `npm run build` — Static build into `../../public/blog`
- `npm run preview` — Preview the production build locally
