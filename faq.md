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

Yes. Evoke ships with English, French, German and Spanish, and all customer-facing text is translatable. Add any other language through Shopify's **Translate & Adapt** app — no code changes needed.

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

### Complementary products aren't appearing

Complementary products are configured in Shopify's **Search & Discovery** app. Related products are chosen automatically from order history and product data, and need no setup — but new stores often have no data yet.

If the section is empty on a new store, turn on **Fall back to the product's collection** so it shows other products from the same collection instead of hiding.

---

## Collections and search

### Filters aren't showing

Filters are configured in Shopify's **Search & Discovery** app, not in the theme. Once set up there, enable **Enable filtering** on the collection section.

For filters on the search results page, they must be configured for search results specifically in the same app.

### Long product titles are being cut in half

Turn on **Show full product title**. When it's off, titles containing a colon or dash are split according to the **Structured title handling** setting — which is useful for titles formatted like "Product Name — Color", and unhelpful otherwise.

---

## Cart

### The free shipping bar isn't giving free shipping

It's a progress indicator only. Set the actual free shipping rate in **Settings → Shipping**. The threshold in theme settings just tells the customer what to aim for — keep the two matched.

### Can customers add a note or gift message?

Yes, both. Toggle **Enable order note** and **Enable gift message** on the cart page section.

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

[Contact support](support.md) — we reply within two business days.
