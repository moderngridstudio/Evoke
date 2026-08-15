[← Documentation home](index.md)

# Getting started

This walks through setting up Evoke from a fresh install. Budget about 30 minutes for the basics.

---

## 1. Install and preview

1. In Shopify admin, go to **Online Store → Themes**
2. Add Evoke to your theme library
3. Click **Customize** to open the theme editor

Evoke installs with a demo homepage already built. Nothing is published to customers until you click **Publish**, so you can work through everything below safely.

---

## 2. Logo and favicon

**Customize → Theme settings**

- **Icons → Favicon image** — the small icon in the browser tab. Use a square PNG or ICO.
- The logo lives on the header section, not in theme settings. Click the header in the editor, then set **Logo image** and **Logo width**.

If you don't set a logo, your store name shows as text — which is a legitimate choice for a wordmark-led brand.

---

## 3. Colors

**Customize → Theme settings → Colors**

Evoke uses **color schemes** rather than one global palette. Each scheme is a set of colors that work together: background, foreground, accent, borders, and so on. Sections then pick a scheme instead of setting individual colors.

This is what keeps a store visually coherent. Set up two or three schemes — typically a light one, a dark one, and an accent one — and assign them per section.

Every scheme pairs a background with a matching foreground, so text stays readable whichever scheme a section uses.

> **Tip:** if a section looks wrong after you change a scheme, check whether that section has its own color override set. Section-level colors win over the scheme.

---

## 4. Typography

**Customize → Theme settings → Typography**

Three fonts:

- **Primary font** — body text and most interface copy
- **Heading font** — headings, where you can afford more personality
- **Price font** — prices, totals and cart line items

The price font exists as a separate setting for a reason. If your primary font is decorative, numbers often become hard to read at small sizes. Keeping prices in a plain sans-serif protects legibility exactly where mistakes cost money.

Also here: body text size, heading letter case, and the button type settings.

---

## 5. Build your homepage

**Customize** with the **Home page** template selected.

Click **Add section** to see the 31 sections you can place anywhere. A common opening sequence:

1. **Slideshow** or **Image with text overlay** — the hero
2. **Featured collection**, **Featured collection tabs** or **Collection list** — what you sell
3. **Collage** — an editorial break with mixed content
4. **Shop the look** — a styled photograph with its products attached
5. **Social proof** — testimonials and rating
6. **Rich text** or **Brand introduction** — your story
7. **Blog posts** — recent articles, if you publish them

Every section has **Top spacing** and **Bottom spacing**. Use these rather than empty sections to control rhythm.

### Featured collection, or Featured collection tabs?

They solve different problems. **Featured collection** shows one collection — pick it, choose how many products to show (2–12) and how many per row (2–5). **Featured collection tabs** puts several collections behind one strip of tabs, for a store where the same customer might reasonably want any of them.

Both offer **Stacked** and **Carousel** layouts, set separately for desktop and mobile. The defaults are deliberate: carousel on desktop, stacked on mobile, because horizontal scrolling is harder to discover on a phone.

Use tabs when the collections are genuine alternatives. Use the single version when you're leading with one.

### Working with Shop the look

Shop the look is built from **Look** blocks — up to six, each one image with up to **five** products attached.

Inside a look, each product has its own **horizontal** and **vertical position** sliders that place its hotspot on the image. Set the product first, then move the two sliders until the marker sits on the item.

Section-wide controls that apply to every look:

- **Layout** — *Overlay* puts the product cards on top of the image; *Split* sets the image beside them, with **Image position** (left or right) and a width slider
- **Hotspot style** — dot, plus, or number. Number is the clearest when a look has four or five products close together
- **Hotspot size**, **pulse animation**, and **tooltip on hover**
- **Card style** — *Auto* follows the layout, or force *Compact* (thumbnail beside text) or *Standard* (image above text)

Pick a photograph with the products reasonably separated. Five hotspots on a tightly cropped shot end up overlapping, and no hotspot style fixes that.

### Working with Collage

Collage is the most flexible section and the one worth learning first. It's a grid of up to six blocks, each of which can be an image, product, collection, text, video or countdown.

You control each block's **width** (1/4, 1/3, 1/2, 2/3, 3/4, full) and **height** independently, which is how you get asymmetric editorial layouts rather than an even grid.

---

## 6. Product pages

Click any product in the editor to open the product template.

The main product section is built from **blocks** — price, vendor, variant picker, quantity, buy buttons, description, collapsible tabs, share, and more. Drag to reorder, or remove what you don't need.

Two things to know:

- The **buy buttons** block carries the form that the variant picker and quantity selector submit to. Removing it breaks both.
- **Product information layout** switches between one and two columns. In two-column mode each block gains a **Block position** choice so you can decide which column it sits in. Mobile is always single column.

### Quick Look

Quick Look is a product modal that opens from a product card, so customers can add to cart without leaving the collection page.

Its button and modal are styled **once** in **Theme settings → Quick Look**, and that styling applies everywhere it appears. You then switch it on or off per section — collection page, search, featured collection tabs, product recommendations, collage.

---

## 7. Navigation

Menus themselves are managed in Shopify admin under **Content → Menus**. Evoke reads them and adds layout on top.

To add a mega menu, add a **Mega menu** block to the header and set its **Menu item** to exactly match a top-level item in your navigation menu — including capitalization. The columns and links come from that item's existing structure automatically.

There's also a **Mega menu — Collection** block, which shows live products from a collection instead of menu links. It updates on its own as the collection changes, and works even when the menu item has no sub-links.

---

## 8. Cart

**Theme settings → Cart**

- **Cart drawer** — the slide-out cart. Configure it by selecting the cart drawer in the editor.
- **Free shipping progress bar** — set your threshold. This displays the threshold only; it does **not** create the discount. Configure the actual free shipping rate in **Settings → Shipping**.
- **Order notes** and **gift messages** are toggled on the cart page section.

---

## 9. Before you publish

- [ ] Favicon set
- [ ] Color schemes defined and assigned
- [ ] All three fonts chosen
- [ ] Homepage sections filled with real content
- [ ] Product page blocks ordered the way you want
- [ ] Menus built and mega menus matched to the right items
- [ ] Social media URLs filled in under **Theme settings → Social media**
- [ ] **Show demo products** turned **off** in product recommendations
- [ ] Free shipping threshold matches your actual shipping settings
- [ ] Checked on a real phone, not just the editor's mobile preview

Then **Publish**.

---

Next: **[Theme settings](theme-settings.md)** · **[Sections reference](sections-reference.md)** · **[FAQ](faq.md)**
