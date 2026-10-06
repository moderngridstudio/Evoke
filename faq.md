[← Documentation home](index.md)

# Frequently asked questions

---

## Setup

### I changed a color but nothing happened

Evoke uses color schemes. A section may have its own color override set, which wins over the scheme. Select the section and check its color settings before changing the scheme again.

### Where do I set my logo?

On the header section, not in theme settings. Click the header in the editor, then set **Logo image** and **Logo width**.

### Why is there a separate font setting for prices?

Because decorative fonts make numbers hard to read at small sizes, and prices are where misreading costs money. Keeping the price font plain protects legibility without limiting your heading font.

### My mega menu isn't appearing

The block's **Menu item** must match a top-level item in your navigation menu **exactly**, including capitalization. "Shop" and "shop" are different values.

### Can I add my own languages?

Yes. Evoke ships with English, French, German, Spanish, Italian, Dutch and Portuguese (Brazil), and all customer-facing text is translatable. Add any other language through Shopify's **Translate & Adapt** app — no code changes needed.

---

## Products

### The variant picker or quantity selector stopped working

The **buy buttons** block carries the form both of them submit to. If it's been removed from the product section, add it back.

### Stock levels aren't showing

Stock only displays for products whose inventory is tracked by Shopify. Check the product's inventory settings, and confirm **Show stock level** is on in **Theme settings → Inventory**.

### Product ratings aren't showing

Evoke reads the standard product review metafields that compatible review apps provide. Nothing displays until a review app is installed **and** has actual ratings. Evoke does not collect reviews itself.

### Color swatches are showing the wrong color

Set swatch images or colors per option value in Shopify admin — those always take priority over the theme's swatch style.

If you're relying on the theme to draw swatches, use **Product photo** rather than a color chip. A color named "Blue" on a teal garment, or a name like "Ocean Drift" that isn't a CSS color, can't be drawn accurately as a chip.

### Can product cards show color swatches?

Yes. **Theme settings → Product cards → Show color swatches** (on by default) adds a row of swatches under the price for products in two colors or more. Choosing one shows that color's image on the card and opens the product in that color. **Maximum swatches** sets how many show; the rest appear as a count, such as +3.

Cards use the same color option as the product page: one with swatches set in Shopify admin, or one named Color, Colour, Finish or Shade. They also follow **Theme settings → Color swatches → Swatch style**.

### How do I show product information in tabs?

In the product section, set **Collapsible tab style** to **Tabs**. **Description**, **Collapsible tab** and **Collapsible tab + image** blocks placed one after another then show as one set of tabs, with the first tab open. Any other block between them starts a new set, and in the two-column layout a set stays within one column.

### Complementary products aren't appearing

Complementary products are configured in Shopify's **Search & Discovery** app. Related products are chosen automatically from order history and product data, and need no setup — but new stores often have no data yet.

If the section is empty on a new store, turn on **Fall back to the product's collection** so it shows other products from the same collection instead of hiding.

### Can each product have its own size chart?

Yes. Point the product's `custom.size_chart` metafield at a **Size chart** metaobject — reusable across every product that shares it — or at a page. For a single odd product, type its rows into `custom.size_chart_rows` instead.

A product with none of these falls back to the store-wide table in **Theme settings → Size guide**. Full walkthrough in [Product content](product-content.md).

### Can each product have its own FAQs?

Yes. Add a `custom.faqs` metafield of type **Metaobject reference → Product FAQ** with **List of values** turned on, so questions can be written once and attached to many products. For a one-off, `custom.faqs_text` takes one `Question | Answer` per line.

A product with FAQs of its own shows only those, whether or not **Show FAQ section** is on. Full walkthrough in [Product content](product-content.md).

FAQs appear inside **Quick Look**, not on the product page.

### How do I add my own badges, like "Best seller"?

Tag the product `badge:Best seller`. The text after the prefix becomes a badge on product cards, the product page and Quick look, up to two per product. Change or clear the prefix in **Theme settings → Product cards → Custom badge tag prefix**.

Tags aren't translated, so a custom badge reads the same in every language. The **"New" badge tag** setting works the same way, but its badge text is translated.

---

## Collections and search

### Filters aren't showing

Filters are configured in Shopify's **Search & Discovery** app, not in the theme. Once set up there, enable **Enable filtering** on the collection section.

For filters on the search results page, they must be configured for search results specifically in the same app.

### How do I show color swatches in the filters?

Swatches are switched on per filter in the **Search & Discovery** app. Add or edit a filter based on a category metafield such as **Color**, choose **Manage values**, and tick **Include swatch**. A filter based on your own metafield offers **Include visual**, with a swatch or an image.

Evoke then shows each value as a swatch, with its name and the number of products. **Swatch filter layout** on the collection and search sections puts them in a list or a grid. Filters left as text keep their checkboxes.

### Long product titles are being cut in half

Turn on **Show full product title**. When it's off, titles containing a colon or dash are split according to the **Structured title handling** setting — which is useful for titles formatted like "Product Name — Color", and unhelpful otherwise.

---

## Cart

### The free shipping bar isn't giving free shipping

It's a progress indicator only. Set the actual free shipping rate in **Settings → Shipping**. The threshold in theme settings just tells the customer what to aim for — keep the two matched.

### How do I offer paid gift wrapping?

Create a product for it, for example **Gift wrap** at $5, and choose it in **Theme settings → Cart → Gift wrap product**. The cart drawer and the cart page then show a checkbox with the product's title and price: ticking it adds the product to the cart, unticking removes it, and it shows in the cart like any other line.

To keep the product out of collections, don't add it to any. To hide it from search results too, give it the `seo.hidden` metafield with the value `1`.

### Can customers add a note or gift message?

Yes. The cart drawer has **Show order note** (on by default), and the cart page section has **Enable order note** and **Enable gift message**. The drawer and the cart page edit the same note, and it goes through to checkout from either.

---

## Layout and display

### My section title is hidden behind the header

Your header is set to **Over content**. Turn on **Offset for overlay header** (or **Add space for transparent header**) on the section, which adds top padding equal to the header height.

### Parallax isn't working

Parallax needs a minimum height above **Original** to have anything to move within, and only runs on desktop. It's also disabled automatically for visitors who have "Reduce motion" enabled in their operating system — that's intentional and shouldn't be worked around.

### Animations aren't playing for me

Same reason: Evoke respects the system-level reduced-motion preference everywhere. If you have it enabled, you'll see the static version. This is an accessibility requirement, not a bug.

### The countdown ends at a different time for different customers

By design. The countdown runs in each visitor's **local** timezone, so "ends at 23:59" means their 23:59. If you need one global moment for everyone, a countdown isn't the right tool.

---

## Performance

### How do I keep my store fast?

The theme is built to be light, but the largest factor is your images. Upload them at a sensible size — Evoke generates responsive versions automatically, but it can't undo a 6 MB original.

Also worth knowing: Quick Look's CSS and JavaScript aren't loaded until a customer first interacts with a product card, so pages without Quick Look don't pay for it.

### Do I need any apps?

No. Everything documented here is built in. Review apps and translation apps are optional integrations, not requirements.

---

## Still stuck?

[Contact support](support.md) — we reply within a few business days.
