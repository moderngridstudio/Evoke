#!/usr/bin/env node
/* Builds the Evoke documentation website from the Markdown sources in this
   folder. Zero dependencies — plain Node, no install step.

     node build.js            # writes ./site
     node build.js ../public  # writes somewhere else

   The Markdown files stay the single source of truth. Two of them
   (sections-reference.md, theme-settings.md) are themselves generated from the
   theme's schemas by gen-docs.js, so the chain is:

     theme schemas → gen-docs.js → Markdown → build.js → static HTML

   Each `## ` heading in a source file becomes its own article page, which is
   what gives the category cards their article counts. */

const fs = require('fs');
const path = require('path');

const SRC = __dirname;
const OUT = path.resolve(process.argv[2] || path.join(SRC, 'site'));

/* ── Config ─────────────────────────────────────────────────────────────── */

const cfg = JSON.parse(fs.readFileSync(path.join(SRC, 'site.config.json'), 'utf8'));
const todos = Object.entries(cfg).filter(([k, v]) => typeof v === 'string' && v.startsWith('TODO'));

/* Which Markdown file becomes which category, in nav order. `blurb` is the
   card copy on the home page — the Markdown files do not carry one. */
const CATEGORIES = [
  {
    slug: 'getting-started',
    file: 'getting-started.md',
    title: 'Getting started',
    blurb: 'Install the theme and get your store looking like yours — logo, colors, fonts and a first homepage.',
  },
  {
    slug: 'theme-settings',
    file: 'theme-settings.md',
    title: 'Theme settings',
    blurb: 'Every store-wide setting, group by group: typography, layout, color schemes, product cards, cart and more.',
  },
  {
    slug: 'sections',
    file: 'sections-reference.md',
    title: 'Sections reference',
    blurb: 'Every section in the theme and all of its settings, including their blocks.',
  },
  {
    slug: 'faq',
    file: 'faq.md',
    title: 'FAQs',
    blurb: 'Answers to the questions that come up most, and the things people get stuck on.',
  },
  {
    slug: 'support',
    file: 'support.md',
    title: 'Support',
    blurb: 'How to reach us, what support covers, and what to include so we can help on the first reply.',
  },
];

/* Headings that are navigation scaffolding inside the Markdown rather than
   real articles — the site builds its own contents lists. */
const SKIP_HEADINGS = new Set(['contents']);

/* ── Small helpers ──────────────────────────────────────────────────────── */

const slug = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'section';

/* The Markdown sources already contain entities — gen-docs.js escapes schema
   values on the way in, so "<p>" arrives as "&lt;p&gt;". Re-escaping a bare &
   would double it, hence the negative lookahead. */
const esc = (s) =>
  String(s)
    .replace(/&(?!#?\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const escAttr = (s) => esc(s).replace(/"/g, '&quot;');

/* ── Markdown → HTML ────────────────────────────────────────────────────── */

/* Resolves a Markdown link target to a site URL. Cross-file links such as
   `support.md` or `faq.md#cart` point at category pages once built. */
let linkMap = {};
function resolveLink(href) {
  const m = href.match(/^([\w.-]+\.md)(#.*)?$/);
  if (m) {
    if (m[1] === 'index.md') return url('') + (m[2] || '');
    const cat = linkMap[m[1]];
    if (cat) return url(cat + '/') + (m[2] || '');
  }
  if (/^(https?:|mailto:|#|\/)/.test(href)) return href;
  return href;
}

/* `{{ TOKEN }}` in the Markdown resolves against site.config.json, so the
   contact form, support inbox and country live in exactly one place. Tokens
   are named in the Markdown's own vocabulary and mapped to config keys here. */
const TOKENS = {
  SUPPORT_FORM_EMBED_URL: 'contactFormUrl',
  SUPPORT_EMAIL: 'supportEmail',
  YOUR_COUNTRY: 'country',
  COMPANY_NAME: 'company',
  COMPANY_URL: 'companyUrl',
  THEME_NAME: 'themeName',
  THEME_STORE_URL: 'themeStoreUrl',
};

const unresolved = new Set();

function fillTokens(src) {
  return src.replace(/\{\{\s*([A-Z0-9_]+)\s*\}\}/g, (whole, name) => {
    const key = TOKENS[name];
    const v = key ? cfg[key] : undefined;
    if (typeof v !== 'string' || v.startsWith('TODO')) {
      unresolved.add(key ? `${name} → site.config.json "${key}"` : `${name} → no config key mapped`);
      /* A bare marker, with no Markdown syntax of its own: the surrounding
         Markdown may already wrap the token in ** or a link, and inline()
         styles the marker on the way out. URL tokens resolve to about:blank
         so an unfilled iframe renders empty instead of loading the 404 page. */
      return /URL$/.test(name) ? `about:blank#TODO_${name}` : `TODO_${name}`;
    }
    return v;
  });
}

function inline(s) {
  /* Code spans come out first so their contents are never treated as markup. */
  const codes = [];
  s = s.replace(/`([^`]+)`/g, (_, c) => `@@${codes.push(c) - 1}@@`);

  s = esc(s);

  s = s.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (_, text, href) => {
      const to = resolveLink(href);
      const ext = /^https?:/.test(to) ? ' target="_blank" rel="noopener"' : '';
      return `<a href="${escAttr(to)}"${ext}>${text}</a>`;
    }
  );

  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*\w])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  s = s.replace(/(^|[\s(])_([^_\n]+)_(?=[\s.,)!?:;]|$)/g, '$1<em>$2</em>');

  /* Unfilled config tokens, flagged so they are impossible to miss on the page. */
  s = s.replace(/\bTODO_[A-Z0-9_]+\b/g, (m) => `<span class="todo">${m}</span>`);

  return s.replace(/@@(\d+)@@/g, (_, i) => `<code>${esc(codes[i])}</code>`);
}

/* Splits a table row on unescaped pipes. gen-docs.js writes `\|` for pipes that
   belong to the cell text. */
const cells = (row) =>
  row
    .replace(/^\s*\|/, '')
    .replace(/\|\s*$/, '')
    .split(/(?<!\\)\|/)
    .map((c) => c.trim().replace(/\\\|/g, '|'));

function mdToHtml(src, headings) {
  const lines = src.split(/\r?\n/);
  const out = [];
  let i = 0;

  const isBlockStart = (l) =>
    /^\s*$/.test(l) || /^(#{1,6}\s|>|\||```|---\s*$|\s*[-*+]\s|\s*\d+\.\s)/.test(l);

  while (i < lines.length) {
    const line = lines[i];

    if (/^\s*$/.test(line)) { i++; continue; }

    if (/^```/.test(line)) {
      const lang = line.slice(3).trim();
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(
        `<pre><code${lang ? ` class="language-${escAttr(lang)}"` : ''}>${esc(buf.join('\n'))}</code></pre>`
      );
      continue;
    }

    if (/^(---|\*\*\*|___)\s*$/.test(line)) { out.push('<hr>'); i++; continue; }

    /* Raw HTML block — the support page embeds a contact form iframe. Passed
       through verbatim until a blank line. */
    if (/^\s*<(iframe|div|details|figure|video|img|table|section|picture|form)\b/i.test(line)) {
      const buf = [];
      while (i < lines.length && !/^\s*$/.test(lines[i])) buf.push(lines[i++]);
      out.push(buf.join('\n'));
      continue;
    }

    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      const text = h[2].trim();
      const id = slug(text);
      if (headings && level <= 3) headings.push({ level, text, id });
      out.push(`<h${level} id="${escAttr(id)}">${inline(text)}</h${level}>`);
      i++;
      continue;
    }

    if (/^\s*>/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) buf.push(lines[i++].replace(/^\s*>\s?/, ''));
      out.push(`<blockquote>${mdToHtml(buf.join('\n'))}</blockquote>`);
      continue;
    }

    /* Table: a header row, a divider row of dashes, then body rows. */
    if (/^\s*\|/.test(line) && /^\s*\|[\s:|-]+\|?\s*$/.test(lines[i + 1] || '')) {
      const head = cells(lines[i]);
      i += 2;
      const body = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) body.push(cells(lines[i++]));
      const th = head.map((c) => `<th>${inline(c)}</th>`).join('');
      const tr = body
        .map(
          (r) =>
            `<tr>${head
              .map((hd, n) => `<td data-label="${escAttr(hd)}">${inline(r[n] || '')}</td>`)
              .join('')}</tr>`
        )
        .join('');
      /* The wrapper is what scrolls — the page body never does. */
      out.push(`<div class="table-wrap"><table><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table></div>`);
      continue;
    }

    const ol = /^\s*\d+\.\s+/.test(line);
    if (ol || /^\s*[-*+]\s+/.test(line)) {
      const items = [];
      const marker = ol ? /^\s*\d+\.\s+/ : /^\s*[-*+]\s+/;
      while (i < lines.length && marker.test(lines[i])) {
        const buf = [lines[i].replace(marker, '')];
        i++;
        /* Continuation lines: indented, and not the start of a new block. */
        while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !marker.test(lines[i])) {
          buf.push(lines[i++].trim());
        }
        items.push(`<li>${inline(buf.join(' '))}</li>`);
      }
      out.push(`<${ol ? 'ol' : 'ul'}>${items.join('')}</${ol ? 'ol' : 'ul'}>`);
      continue;
    }

    const buf = [line];
    i++;
    while (i < lines.length && !isBlockStart(lines[i])) buf.push(lines[i++]);
    out.push(`<p>${inline(buf.join(' '))}</p>`);
  }

  return out.join('\n');
}

/* ── Parse the sources into categories and articles ─────────────────────── */

for (const c of CATEGORIES) linkMap[c.file] = c.slug;

function parseCategory(cat) {
  const file = path.join(SRC, cat.file);
  if (!fs.existsSync(file)) {
    console.error(`  ! missing source: ${cat.file}`);
    return { ...cat, intro: '', articles: [] };
  }
  /* Comments are stripped before tokens are filled — author notes to self
     mention {{ PLACEHOLDER }} and would otherwise be reported as unresolved. */
  const raw = fillTokens(
    fs
      .readFileSync(file, 'utf8')
      .replace(/<!--[\s\S]*?-->/g, '')
      /* The Markdown files carry a "back to home" link for reading them on
         GitHub; the site has breadcrumbs and a nav instead. */
      .replace(/^\[[←<-].*\]\(index\.md\)\s*$/gm, '')
  );

  /* Everything before the first `## ` is the category intro; each `## ` after
     that opens an article that runs to the next `## `. */
  const parts = raw.split(/^## /m);
  const head = parts.shift();
  const intro = head.replace(/^#\s+.*$/m, '').trim();

  const articles = [];
  for (const part of parts) {
    const nl = part.indexOf('\n');
    const title = (nl === -1 ? part : part.slice(0, nl)).trim();
    if (SKIP_HEADINGS.has(title.toLowerCase())) continue;
    const body = (nl === -1 ? '' : part.slice(nl + 1))
      .replace(/^\s*---\s*$/gm, '')   /* the generated files end each article with a rule */
      .trim();
    articles.push({ title, slug: slug(title), body });
  }

  return { ...cat, intro, articles };
}

const cats = CATEGORIES.map(parseCategory);

/* index.md is the home page's long-form content — what the theme includes,
   which Shopify features it supports, requirements. Its "Start here" table is
   dropped: the category cards already do that job, and better. */
const home = parseCategory({ file: 'index.md', slug: '', title: 'Home', blurb: '' });
const homeSections = home.articles.filter((a) => !/^start here$/i.test(a.title));

/* ── Templates ──────────────────────────────────────────────────────────── */

/* Every link and asset is written root-absolute here ("/assets/docs.css"), then
   rewritten to a page-relative path by write() below. Keeping one canonical
   form through the templates means the 20-odd call sites don't each have to
   know how deep their page sits. */
const url = (p) => '/' + String(p).replace(/^\//, '');

const year = new Date().getFullYear();
const copyright =
  cfg.copyrightStartYear && cfg.copyrightStartYear < year
    ? `${cfg.copyrightStartYear}–${year}`
    : String(cfg.copyrightStartYear || year);

/* A TODO value renders in a marker span so an unfilled placeholder is obvious
   on the page, not just in the build log. */
function val(key, fallback) {
  const v = cfg[key];
  if (typeof v === 'string' && v.startsWith('TODO')) {
    return `<span class="todo" title="Set ${key} in site.config.json">${esc(fallback || v)}</span>`;
  }
  return esc(v == null ? '' : v);
}

function nav(active) {
  return cats
    .map(
      (c) =>
        `<a class="nav__link${c.slug === active ? ' is-active' : ''}" href="${url(c.slug + '/')}">${esc(c.title)}</a>`
    )
    .join('');
}

function layout({ title, description, active, main, bodyClass = '' }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escAttr(title)}</title>
<meta name="description" content="${escAttr(description || cfg.tagline)}">
<link rel="stylesheet" href="${url('assets/docs.css')}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23111'/><text x='16' y='23' font-family='Georgia,serif' font-size='20' fill='%23f4f1ec' text-anchor='middle'>E</text></svg>">
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">Skip to content</a>

<header class="topbar">
  <div class="topbar__inner">
    <a class="brand" href="${url('')}">
      <span class="brand__mark">${esc(cfg.themeName)}</span>
      <span class="brand__sub">docs</span>
    </a>
    <button class="navtoggle" type="button" aria-expanded="false" aria-controls="sitenav">
      <span></span><span></span><span></span>
      <em class="vh">Menu</em>
    </button>
    <nav class="nav" id="sitenav">
      ${nav(active)}
      <a class="nav__link nav__link--cta" href="${url('support/')}">Contact</a>
    </nav>
  </div>
</header>

<main id="main">
${main}
</main>

<footer class="footer">
  <div class="footer__inner">
    <p class="footer__copy">© ${copyright} ${val('company', 'TODO — company name')}. ${esc(cfg.themeName)} theme documentation.</p>
    <nav class="footer__links">
      <a href="${url('')}">Home</a>
      <a href="${url('support/')}">Support</a>
      ${
        typeof cfg.themeStoreUrl === 'string' && !cfg.themeStoreUrl.startsWith('TODO')
          ? `<a href="${escAttr(cfg.themeStoreUrl)}" target="_blank" rel="noopener">Theme Store</a>`
          : `<span class="todo" title="Set themeStoreUrl in site.config.json">TODO — Theme Store link</span>`
      }
    </nav>
  </div>
</footer>

<script src="${url('assets/docs.js')}" defer></script>
</body>
</html>
`;
}

/* ── Pages ──────────────────────────────────────────────────────────────── */

function homePage() {
  const cards = cats
    .map(
      (c) => `
    <a class="card" href="${url(c.slug + '/')}">
      <h2 class="card__title">${esc(c.title)}</h2>
      <p class="card__blurb">${esc(c.blurb)}</p>
      <span class="card__meta">${c.articles.length} article${c.articles.length === 1 ? '' : 's'}</span>
    </a>`
    )
    .join('');

  return layout({
    title: `${cfg.themeName} theme documentation`,
    description: cfg.tagline,
    active: '',
    bodyClass: 'page-home',
    main: `
<section class="hero">
  <div class="wrap">
    <p class="eyebrow">${esc(cfg.themeName)} — Shopify theme</p>
    <h1 class="hero__title">${esc(cfg.tagline)}</h1>
    <p class="hero__sub">${esc(cfg.heroSubtitle)}</p>
    ${searchBox()}
  </div>
</section>

<section class="wrap">
  <div class="cards">${cards}</div>
</section>

<section class="wrap">
  <div class="overview">
    ${homeSections
      .map(
        (s) => `<section class="overview__block">
      <h2 class="overview__title">${esc(s.title)}</h2>
      <div class="prose prose--compact">${mdToHtml(s.body)}</div>
    </section>`
      )
      .join('')}
  </div>
</section>

<section class="wrap">
  <div class="cta">
    <div>
      <h2 class="cta__title">Can't find an answer?</h2>
      <p class="cta__body">Send us the store URL and what you're trying to do, and we'll take a look.</p>
    </div>
    <a class="btn" href="${url('support/')}">Contact support</a>
  </div>
</section>`,
  });
}

function searchBox() {
  return `
    <form class="search" role="search" onsubmit="return false">
      <label class="vh" for="q">Search the documentation</label>
      <input id="q" class="search__input" type="search" autocomplete="off"
             placeholder="Search the documentation…" data-search>
      <div class="search__results" data-search-results hidden></div>
    </form>`;
}

function categoryPage(cat) {
  const list = cat.articles
    .map(
      (a) => `
      <li class="artlist__item">
        <a class="artlist__link" href="${url(cat.slug + '/' + a.slug + '/')}">
          <span class="artlist__title">${esc(a.title)}</span>
          <span class="artlist__arrow" aria-hidden="true">→</span>
        </a>
      </li>`
    )
    .join('');

  return layout({
    title: `${cat.title} — ${cfg.themeName} docs`,
    description: cat.blurb,
    active: cat.slug,
    bodyClass: 'page-category',
    main: `
<section class="pagehead">
  <div class="wrap">
    ${crumbs([{ label: cat.title }])}
    <h1 class="pagehead__title">${esc(cat.title)}</h1>
    <p class="pagehead__sub">${esc(cat.blurb)}</p>
    <p class="pagehead__count">${cat.articles.length} article${cat.articles.length === 1 ? '' : 's'}</p>
  </div>
</section>

<section class="wrap">
  ${cat.intro ? `<div class="prose prose--intro">${mdToHtml(cat.intro)}</div>` : ''}
  <ul class="artlist">${list}</ul>
</section>`,
  });
}

function articlePage(cat, article, index) {
  const headings = [];
  const html = mdToHtml(article.body, headings);
  const subs = headings.filter((h) => h.level === 3);

  const sidebar = cat.articles
    .map(
      (a) =>
        `<a class="sidenav__link${a.slug === article.slug ? ' is-current' : ''}" href="${url(
          cat.slug + '/' + a.slug + '/'
        )}">${esc(a.title)}</a>`
    )
    .join('');

  const toc = subs.length
    ? `<nav class="toc" aria-label="On this page">
         <p class="toc__title">On this page</p>
         ${subs.map((h) => `<a class="toc__link" href="#${escAttr(h.id)}">${esc(h.text)}</a>`).join('')}
       </nav>`
    : '';

  const prev = cat.articles[index - 1];
  const next = cat.articles[index + 1];
  const pager =
    prev || next
      ? `<nav class="pager">
          ${
            prev
              ? `<a class="pager__link pager__link--prev" href="${url(cat.slug + '/' + prev.slug + '/')}">
                   <span class="pager__dir">Previous</span><span class="pager__title">${esc(prev.title)}</span></a>`
              : '<span></span>'
          }
          ${
            next
              ? `<a class="pager__link pager__link--next" href="${url(cat.slug + '/' + next.slug + '/')}">
                   <span class="pager__dir">Next</span><span class="pager__title">${esc(next.title)}</span></a>`
              : '<span></span>'
          }
        </nav>`
      : '';

  return layout({
    title: `${article.title} — ${cat.title} — ${cfg.themeName} docs`,
    description: `${article.title} — ${cat.title} for the ${cfg.themeName} Shopify theme.`,
    active: cat.slug,
    bodyClass: 'page-article',
    main: `
<div class="wrap wrap--doc">
  <aside class="sidebar">
    <p class="sidebar__title">${esc(cat.title)}</p>
    <nav class="sidenav">${sidebar}</nav>
  </aside>

  <article class="doc">
    ${crumbs([{ label: cat.title, href: url(cat.slug + '/') }, { label: article.title }])}
    <h1 class="doc__title">${esc(article.title)}</h1>
    ${toc}
    <div class="prose">${html}</div>
    ${pager}
    <div class="helpful">
      <p>Still stuck? <a href="${url('support/')}">Contact support</a> and include your store URL.</p>
    </div>
  </article>
</div>`,
  });
}

function crumbs(items) {
  const parts = [`<a href="${url('')}">Docs</a>`].concat(
    items.map((i) => (i.href ? `<a href="${i.href}">${esc(i.label)}</a>` : `<span>${esc(i.label)}</span>`))
  );
  return `<nav class="crumbs" aria-label="Breadcrumb">${parts.join('<em aria-hidden="true">/</em>')}</nav>`;
}

function notFoundPage() {
  return layout({
    title: `Page not found — ${cfg.themeName} docs`,
    active: '',
    bodyClass: 'page-404',
    main: `
<section class="pagehead">
  <div class="wrap">
    <p class="eyebrow">404</p>
    <h1 class="pagehead__title">That page isn't here</h1>
    <p class="pagehead__sub">It may have moved. Try a search, or start from the <a href="${url('')}">documentation home</a>.</p>
    ${searchBox()}
  </div>
</section>`,
  });
}

/* ── Search index ───────────────────────────────────────────────────────── */

/* Strips Markdown to plain text for indexing. Table pipes become spaces so
   setting names stay searchable as words. */
const plain = (md) =>
  md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[|#>*_`\\]/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/&(?:amp|lt|gt|quot|#\d+);/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/* Result URLs are stored relative to the site root, with no leading slash, and
   resolved against that root by docs.js at click time. They can't be baked in
   as relative paths the way the HTML ones are: one index is shared by pages at
   three different depths. */
function searchIndex() {
  const docs = [];
  const su = (p) => p.replace(/^\//, '').replace(/\/*$/, '/') + 'index.html';
  for (const c of cats) {
    docs.push({
      t: c.title,
      c: c.title,
      u: su(c.slug),
      x: plain(c.blurb + ' ' + c.intro).slice(0, 400),
    });
    for (const a of c.articles) {
      docs.push({
        t: a.title,
        c: c.title,
        u: su(c.slug + '/' + a.slug),
        x: plain(a.body).slice(0, 1200),
      });
    }
  }
  return docs;
}

/* ── Write ──────────────────────────────────────────────────────────────── */

/* Turns the root-absolute paths the templates emit into page-relative ones.

   "/assets/docs.css" only resolves when something serves the site from a root.
   Opened straight off disk, the browser resolves it against the drive root —
   D:/assets/docs.css — so the page loads with no stylesheet, no script and
   dead navigation. Relative paths resolve the same way everywhere: from disk,
   from a domain root, and from a GitHub Pages project subdirectory. That last
   case is why there is no baseHref setting any more; there is nothing left to
   configure and nothing left to get wrong.

   Directory links also gain an explicit index.html. Servers infer it; file://
   does not, and shows a directory listing instead. */
function relativise(html, rel) {
  const depth = rel.split('/').length - 1;
  const prefix = depth === 0 ? './' : '../'.repeat(depth);

  return html.replace(/\b(href|src)="\/([^"]*)"/g, (_, attr, rest) => {
    if (rest !== '' && !/\.[a-z0-9]+$/i.test(rest) && !rest.includes('#') && !rest.includes('?')) {
      rest = rest.replace(/\/*$/, '/') + 'index.html';
    } else if (rest === '') {
      rest = 'index.html';
    }
    return `${attr}="${prefix}${rest}"`;
  });
}

function write(rel, content) {
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, rel.endsWith('.html') ? relativise(String(content), rel) : content);
}

fs.rmSync(OUT, { recursive: true, force: true });

write('index.html', homePage());
write('404.html', notFoundPage());

let pages = 2;
for (const c of cats) {
  write(`${c.slug}/index.html`, categoryPage(c));
  pages++;
  c.articles.forEach((a, n) => {
    write(`${c.slug}/${a.slug}/index.html`, articlePage(c, a, n));
    pages++;
  });
}

write('search-index.json', JSON.stringify(searchIndex()));
for (const asset of fs.readdirSync(path.join(SRC, 'assets'))) {
  write(`assets/${asset}`, fs.readFileSync(path.join(SRC, 'assets', asset)));
}
/* Stops GitHub Pages running the output through Jekyll, which would drop
   files and folders beginning with an underscore. */
write('.nojekyll', '');

/* ── Report ─────────────────────────────────────────────────────────────── */

console.log(`\nBuilt ${pages} pages → ${OUT}`);
for (const c of cats) console.log(`  ${String(c.articles.length).padStart(3)}  ${c.title}`);

if (todos.length || unresolved.size) {
  if (todos.length) {
    console.log(`\n  ${todos.length} placeholder${todos.length === 1 ? '' : 's'} still to fill in site.config.json:`);
    for (const [k, v] of todos) console.log(`    TODO  ${k}  (currently "${v}")`);
  }
  if (unresolved.size) {
    console.log(`\n  ${unresolved.size} unresolved {{ TOKEN }} in the Markdown:`);
    for (const u of unresolved) console.log(`    TODO  ${u}`);
  }
  console.log('\n  All of these render as visible TODOs on the site, so they cannot ship unnoticed.\n');
} else {
  console.log('\n  No placeholders left — ready to publish.\n');
}
