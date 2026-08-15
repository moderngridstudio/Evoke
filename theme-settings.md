# Theme settings

Settings that apply across the whole store. Find them in *Customize → Theme settings*.

## Contents

- [Typography](#typography)
- [Layout](#layout)
- [Colors](#colors)
- [Product cards](#product-cards)
- [Inventory](#inventory)
- [Color swatches](#color-swatches)
- [Quick look](#quick-look)
- [Cart](#cart)
- [Social media](#social-media)
- [Icons](#icons)
- [Animations](#animations)
- [Back to top](#back-to-top)

---

## Typography


**Fonts**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Primary | Font |  | work_sans_n4 |  |
| Heading font | Font |  | cormorant_n4 |  |
| Price font | Font |  | work_sans_n4 | Used for prices, totals, and cart line items. A plain sans-serif is recommended so numbers stay legible even if your primary font is decorative. |
| Body text size | Slider | 14–20 px | 16 |  |
| Heading letter case | Choice | Original · Uppercase | none |  |

## Layout

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Page width | Choice | Narrow · Wide | 90rem |  |
| Page margin | Slider | 10–100 px | 20 |  |


**Corners**


> Sets the corner radius for the whole theme — form fields, buttons, cards, media, badges, drawers and popups all scale from this one value. Set it to 0 for square corners everywhere. Circular icon buttons and pill-shaped elements keep their shape.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Input corner radius | Slider | 0–24 px | 4 |  |


**Buttons**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button letter case | Choice | Original · Uppercase | none |  |
| Button text size | Slider | 12–20 px | 14 |  |
| Button border width | Slider | 0–3 px | 1 |  |

## Colors

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| color_schemes | Color schemes |  |  |  |

## Product cards

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show sale badges | On / off |  | true |  |
| Show sold out badges | On / off |  | true |  |
| Show product ratings when available | On / off |  | true | Uses the standard product review metafields provided by compatible review apps. |

## Inventory


> Applies to the product page and Quick Look. Stock levels only display for products whose inventory is tracked by Shopify.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show stock level | On / off |  | true |  |
| Low stock threshold | Slider | 1–20 | 5 | Show an 'Only X left' warning when inventory falls at or below this number. |

## Color swatches


> Applies to color options on the product page and in Quick Look. Swatch images and colors set per option value in your admin always take priority over both choices below.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Swatch style | Choice | Product photo — uses each color's own variant image · Color chip — flat circle of color | photo | Product photo is the more reliable of the two: a color named "Blue" on a teal garment, or a name like "Ocean Drift" that is not a CSS color, cannot be drawn as a chip accurately. |
| Show color name on hover | On / off |  | true |  |

## Quick look


> Controls how the Quick Look button and modal look everywhere they appear. Turn Quick Look on or off per section (Collection page, Search, Featured collection tabs, Product recommendations, Shop the look, Collage).


**Card button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button position | Choice | Corner — bottom right · Bar — centered at bottom · Overlay — image center | bottom-bar | Where the Quick Look button appears on the product card. |
| Button style | Choice | Icon + text · Icon only · Text only | icon_text |  |
| Button label | Text |  | Quick Look | Applies when button style includes text. |
| Show button on hover only | On / off |  | true | When off, the button is always visible without needing to hover the card. |
| Button icon size | Slider | 12–24 px | 16 |  |
| Button padding | Choice | Small — compact · Medium — default · Large — spacious | small |  |


**Card button — mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button position (mobile) | Choice | Corner — bottom right · Bar — centered at bottom · Overlay — image center | corner | Overrides button position on screens below 750px. |
| Button style (mobile) | Choice | Icon + text · Icon only · Text only | icon | Overrides button style on screens below 750px. Icon only is recommended for compact cards. |
| Show button on hover only (mobile) | On / off |  | false | Mobile devices have no hover state, so leaving this off keeps the button always visible on touch screens. |


**Modal**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Modal width | Slider | 640–1200 px | 960 | Maximum width of the Quick Look panel. Automatically shrinks on smaller screens. |
| Modal height | Slider | 400–800 px | 680 | Fixed height of the Quick Look panel. The right-side details scroll within this height. |
| Gallery style | Choice | Classic — hero image + thumbnails · Scroll — images stacked vertically · Grid — 2-column editorial layout | grid |  |
| Image ratio (scroll and grid) | Choice | Square (1:1) · Portrait (4:5) | portrait | Applies when Gallery style is Scroll or Grid. |


**Highlights**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show highlights row | On / off |  | true | The three short selling points shown under the buy buttons. |
| Highlight 1 | Text |  | Worldwide shipping |  |
| Highlight 2 | Text |  | Easy returns |  |
| Highlight 3 | Text |  | Send as a gift |  |


**FAQs**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show FAQ section | On / off |  | true |  |
| FAQ 1 — question | Text |  | How long does delivery take? |  |
| FAQ 1 — answer | Text (multi-line) |  | Orders are processed within 1–2 business days. Delivery times vary by destination. |  |
| FAQ 2 — question | Text |  | What is your return policy? |  |
| FAQ 2 — answer | Text (multi-line) |  | We offer hassle-free returns within 30 days of purchase — no questions asked. |  |
| FAQ 3 — question | Text |  | Do you ship internationally? |  |
| FAQ 3 — answer | Text (multi-line) |  | Yes! We ship to over 100 countries. Shipping times and costs vary by destination. |  |
| FAQ 4 — question | Text |  | Is gift wrapping available? |  |
| FAQ 4 — answer | Text (multi-line) |  | Absolutely. Add a gift note at checkout and we will wrap it beautifully for you. |  |

## Cart

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable cart notes | On / off |  | false |  |
| Show shipping and tax notice | On / off |  | true |  |


**Free shipping bar**


> Shown in both the cart drawer and on the cart page, so a shopper is told the same threshold wherever they check.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable free shipping progress bar | On / off |  | false |  |
| Free shipping threshold | Slider | 0–500 $ | 100 | Set to 0 to hide. Does not automatically apply a shipping discount — configure that separately in Settings &gt; Shipping. |

## Social media

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Instagram URL | Text |  |  |  |
| Facebook URL | Text |  |  |  |
| TikTok URL | Text |  |  |  |
| YouTube URL | Text |  |  |  |
| Pinterest URL | Text |  |  |  |
| X URL | Text |  |  |  |
| LinkedIn URL | Text |  |  |  |
| Threads URL | Text |  |  |  |
| Snapchat URL | Text |  |  |  |
| WhatsApp URL | Text |  |  | Use a wa.me link, for example https://wa.me/15551234567 |

## Icons

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Favicon image | Image |  |  | Use a square PNG or ICO image. |

## Animations

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable theme animations | On / off |  | true | System reduced-motion preferences are always respected. |

## Back to top

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show back-to-top button | On / off |  | true |  |

