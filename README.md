# Evoke — theme documentation

The documentation website for the Evoke Shopify theme.

This folder is **not** part of the theme. Keep it outside `Evoke/` so it never
ends up in the submission zip. It is self-contained — push it to its own repo
and GitHub Pages serves it as-is.

## How it fits together

```
theme schemas  →  gen-docs.js  →  Markdown  →  build.js  →  static HTML
```

- **`gen-docs.js`** reads the theme's own `sections/*.liquid`, `config/settings_schema.json`
  and `locales/en.default.schema.json`, resolves every `t:` key to its English
  text, and writes `sections-reference.md` and `theme-settings.md`. Those two
  files are **generated — do not hand-edit them**, or they will drift from the code.
- **`build.js`** turns all the Markdown into the website in `site/`. Every `## `
  heading becomes its own article page, which is what gives the category cards
  their article counts.

The hand-written pages — `index.md`, `getting-started.md`, `faq.md`,
`support.md` — are safe to edit directly.

## Build and preview

```bash
node build.js docs
```

Then just open `docs/index.html` in a browser — every path in the output is
page-relative, so the site works straight off disk with no server. The one
exception is **search**, which fetches `search-index.json`; browsers block
`fetch()` between `file://` URLs, so searching needs the site served:

```bash
node serve.js
```

Then open <http://localhost:4321>. Both scripts are plain Node with **zero
dependencies** — there is no `npm install` step.

After any change to the theme's schemas, regenerate the reference pages first.
`gen-docs.js` reads the theme's `sections/`, `config/` and `locales/` from the
working directory, so run it **from the theme root** and point it at this repo.

The theme and this repo are separate checkouts, so the paths are absolute:

```bash
cd /d D:\Shopify\Github-Clone\Dev-Project\Evoke-Dev && node D:\Shopify\Github-Clone\Docs\Evoke\gen-docs.js D:\Shopify\Github-Clone\Docs\Evoke
```

It prints what it found — `sections documented: 57 (41 addable)` — which is
the quickest way to confirm it read the theme you meant.

Then rebuild the site from this folder:

```bash
node build.js docs
```

`sections-reference.md` and `theme-settings.md` are the generated files. If they
ever look stale, it is because that first command hasn't been run since the
theme changed.

## Before this goes live

`site.config.json` holds everything the site needs that isn't in the Markdown.
Values beginning with `TODO` are placeholders:

| Key | What it is |
|---|---|
| `company` | Your company or author name — appears in the footer |
| `supportEmail` | A real inbox you monitor |
| `contactFormUrl` | Embed URL for a free form — Tally, Google Forms and Notion all work |
| `country` | Used to define "business days" on the response-times page |
| `themeStoreUrl` | Your Shopify Theme Store listing |

`build.js` prints every unfilled placeholder at the end of each build, and they
render on the site in red with a dashed underline — so an unfilled value cannot
ship unnoticed. When the build ends with *"No placeholders left — ready to
publish"*, you're clear.

The Markdown can also reference these with `{{ TOKEN }}` — `{{ SUPPORT_EMAIL }}`,
`{{ SUPPORT_FORM_EMBED_URL }}`, `{{ YOUR_COUNTRY }}` and so on. The mapping from
token name to config key is the `TOKENS` table at the top of `build.js`.

## Publishing on GitHub Pages (free, no domain needed)

1. Create a **public** repo, e.g. `Evoke` (Pages is free only on public repos —
   on a private one GitHub disables it and offers a paid upgrade instead)
2. Run `node build.js docs` (this is the default output — `docs/` is one of only
   two folders GitHub Pages can serve from)
3. Push this folder to the repo
4. Repo **Settings → Pages → Source: Deploy from a branch**, branch `main`,
   folder `/docs`
5. The site publishes at <https://moderngridstudio.github.io/Evoke/>

Nothing needs configuring for the subdirectory. The output is entirely
page-relative, so the same build serves correctly from a project subdirectory,
a user site, a custom domain, or your own disk.

The build writes a `.nojekyll` file, so GitHub serves the output as-is rather
than running it through Jekyll.

Put the published URL in `Evoke/config/settings_schema.json` →
`theme_info.theme_documentation_url`.

## What the site includes

- Home page with search and a category card per section of the docs
- A category page per Markdown source, listing its articles
- An article page per `## ` heading, with sidebar navigation, an on-page
  contents list, and previous/next links
- Client-side search across every article — a JSON index built at compile time
  and fetched only when someone focuses the search field. Press `/` anywhere to
  jump to it.
- Light and dark themes, following the visitor's system setting
- Responsive down to 375px; the wide settings tables restack as cards on phones
- No webfonts, no CDN, no tracking — the site makes zero external requests
