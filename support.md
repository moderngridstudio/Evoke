[← Documentation home](index.md)

# Support

<!-- ────────────────────────────────────────────────────────────────────
     TODO BEFORE PUBLISHING — replace every {{ PLACEHOLDER }} below.
     Do not leave any of them in place; this page is read by Shopify
     reviewers and by merchants.
     ──────────────────────────────────────────────────────────────────── -->

## Contact us

The fastest way to reach us is the form below. It works on phones and tablets as well as desktop.

<!-- Keep the iframe: Shopify requires a working contact form on this page.

     No height attribute — .support-form in docs.css sets it per breakpoint.
     The form gets taller as it gets narrower, because the paired fields stack:
     907px at the ~565px it renders at on desktop, 979px at 375px, 1003px at
     320px. A single height that cleared the widest case left a gap on desktop,
     and one that fitted desktop put a scrollbar back on phones.

     dynamicHeight=1 and the loader in assets/docs.js still apply on top, for
     the cases no fixed height can predict: a validation error growing the
     form, or the short thank-you after submitting. The CSS is what guarantees
     no scrollbar if that resize never fires. -->

<iframe
  class="support-form"
  data-tally-src="{{ SUPPORT_FORM_EMBED_URL }}"
  loading="lazy"
  width="100%"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  title="Evoke theme support form">
  Loading…
</iframe>

<!-- The loader lives in assets/docs.js, not here: the Markdown renderer escapes
     <script> blocks, so an inline one would print itself onto the page as text
     instead of running. -->


Prefer email? Write to **{{ SUPPORT_EMAIL }}**.

---

## Response times

We reply to every request within **a few business days**.

Business days are Monday to Friday, excluding public holidays in {{ YOUR_COUNTRY }}. Requests sent over a weekend are answered on the next business day.

Critical bugs — anything that breaks checkout, the cart, or the ability to display products — are treated as urgent and fixed as a priority rather than queued.

---

## What support covers

We help with:

- Installing, configuring and updating Evoke
- Any Evoke setting, section or block behaving differently than documented
- Bugs in the theme
- Compatibility problems between Evoke and Shopify's own features
- Pointing you to the right part of this documentation

## What support does not cover

We can't help with:

- **Custom code changes.** We can tell you where something lives, but writing custom modifications is outside support. A modified theme also can't be updated without losing those changes.
- **Third-party apps.** If an app conflicts with Evoke we'll help identify the cause, but the app's own behavior is its developer's responsibility.
- **Shopify platform issues** — billing, payments, shipping configuration, domains. Contact [Shopify Support](https://help.shopify.com/) for those.
- **Design, copywriting or SEO consulting.**
- **Content problems.** Product photography, descriptions and pricing are yours to manage.

---

## Before you contact us

Most questions are answered faster by checking these first:

1. The **[FAQ](faq.md)** — it covers the things people most often get stuck on
2. The **[sections reference](sections-reference.md)** — every setting, with its notes
3. Whether the behavior is intentional. Several things that look like bugs are deliberate: reduced-motion respecting the visitor's system settings, countdowns running in local time, stock levels only appearing for Shopify-tracked inventory.

## What to include in your message

The more of this you give us, the faster we can help:

- Your store URL, and a preview link if the theme isn't published yet
- Which page and section the problem is on
- What you expected, and what happened instead
- A screenshot or screen recording
- Which device and browser, and whether it happens on both mobile and desktop
- Any apps installed that touch the affected area

---

## Theme updates

When a new version of Evoke is released, you'll find it in **Online Store → Themes** in your Shopify admin.

Your settings and content are preserved across updates. Custom code changes are **not** — if you've edited the theme files directly, keep a record of what you changed so you can reapply it.

We recommend updating on a duplicate of your theme first, checking it, then publishing.

---

## Documentation

- **[Getting started](getting-started.md)**
- **[Theme settings](theme-settings.md)**
- **[Sections reference](sections-reference.md)**
- **[FAQ](faq.md)**
