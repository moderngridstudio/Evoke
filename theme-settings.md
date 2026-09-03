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
- [Size guide](#size-guide)
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
| Primary | Font |  | inter_n4 |  |
| Heading font | Font |  | cormorant_n4 |  |
| Price font | Font |  | work_sans_n4 | Used for prices, totals, and cart line items. A plain sans-serif is recommended so numbers stay legible even if your primary font is decorative. |
| Body text size | Slider | 14–20 px | 16 |  |
| Heading letter case | Choice | Original · Uppercase · Lowercase | none |  |


**Logo**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text size | Slider | 12–48 px | 16 | Applies when no logo image is uploaded — your shop name is shown as text instead. |

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
| Button letter case | Choice | Original · Uppercase · Lowercase | none |  |
| Button text size | Slider | 12–20 px | 14 |  |
| Button border width | Slider | 0–3 px | 1 |  |

## Colors

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| color_schemes | Color schemes |  |  |  |

## Product cards

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Maximum title lines | Slider | 0–4 L | 0 | Trim card titles to this many lines and end them with an ellipsis. Set to 0 to let titles wrap freely. |
| Show sale badges | On / off |  | true |  |
| Show sold out badges | On / off |  | true |  |
| "New" badge tag | Text |  | new | Products carrying this tag show a "New" badge on product cards, on the product page and in Quick look. Upper or lower case makes no difference. Leave empty to turn the badge off. |
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
| Button position | Choice | Corner · Bar — centered at bottom · Overlay — image center | bottom-bar | Where the Quick Look button appears on the product card. |
| Corner | Choice | Bottom right · Bottom left · Top right · Top left | bottom-right |  |
| Button style | Choice | Icon + text · Icon only · Text only | icon_text |  |
| Button label | Text |  | Quick Look | Applies when button style includes text. |
| Show button on hover only | On / off |  | true | When off, the button is always visible without needing to hover the card. |
| Button icon size | Slider | 12–24 px | 16 |  |
| Button padding | Choice | Small — compact · Medium — default · Large — spacious | small |  |
| Button corner radius | Slider | 0–100 px | 100 | 0 is square, 100 is a full pill. Applies on both desktop and mobile. |


**Card button — mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button position (mobile) | Choice | Corner · Bar — centered at bottom · Overlay — image center | corner | Overrides button position on screens below 750px. |
| Corner (mobile) | Choice | Bottom right · Bottom left · Top right · Top left | bottom-right |  |
| Button style (mobile) | Choice | Icon + text · Icon only · Text only | icon | Overrides button style on screens below 750px. Icon only is recommended for compact cards. |
| Show button on hover only (mobile) | On / off |  | false | Mobile devices have no hover state, so leaving this off keeps the button always visible on touch screens. |


**Modal**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Modal width | Slider | 640–1200 px | 960 | Maximum width of the Quick Look panel. Automatically shrinks on smaller screens. |
| Modal height | Slider | 400–800 px | 680 | Fixed height of the Quick Look panel. The right-side details scroll within this height. |
| Gallery style | Choice | Classic — hero image + thumbnails · Scroll — images stacked vertically · Grid — 2-column editorial layout | grid |  |
| Image ratio (scroll and grid) | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | portrait | Applies when Gallery style is Scroll or Grid. |
| Show quantity selector | On / off |  | true | Lets a shopper choose how many to add without leaving the modal. |


**Product description**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show product description | On / off |  | true | Shows the product's own description under the price, shortened with a Read more link. |
| Lines before Read more | Slider | 2–10 L | 3 | How much of the description stays visible while it is collapsed. |


**Highlights**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show highlights row | On / off |  | true | The three short selling points shown under the buy buttons. |
| Icon | Choice | Shipping · Returns · Secure · Globe · Gift · Check | globe |  |
| Highlight 1 | Text |  | Worldwide shipping |  |
| Icon | Choice | Shipping · Returns · Secure · Globe · Gift · Check | returns |  |
| Highlight 2 | Text |  | Easy returns |  |
| Icon | Choice | Shipping · Returns · Secure · Globe · Gift · Check | gift |  |
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

## Size guide


> Adds a size guide link beside the matching option, on the product page and inside Quick Look. Pick the page holding your size chart — its content opens in a panel, so the shopper never leaves what they were looking at.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show size guide | On / off |  | false | Off until you turn it on, so the example measurements below are never shown to shoppers by mistake. |
| Size guide page | Page |  |  | Used by every product unless one names its own chart in the custom.size_chart metafield. Leave empty to hide the link. |
| Size option name | Text |  | Size | Must match the product option, for example Size. Case and spacing are ignored. |
| Link label | Text |  | Size guide |  |


**Or build a table here**


> Fill this in instead of picking a page, if all you need is a table. Anything typed here is used unless a product names its own size chart page.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Column headings | Text |  | Size, Chest, Waist, Length | Separated by commas. |
| Rows | Text (multi-line) |  | XS, 81, 61, 66 S, 86, 66, 68 M, 91, 71, 70 L, 96, 76, 72 XL, 101, 81, 74 | One size per line, cells separated by commas. The first cell of each line is the size. |
| Unit label | Text |  | cm |  |
| Rows in a second unit | Text (multi-line) |  | XS, 32, 24, 26 S, 34, 26, 26.5 M, 36, 28, 27.5 L, 38, 30, 28.5 XL, 40, 32, 29 | Optional. Fill this in to give shoppers a toggle — the same sizes converted. Leave empty for no toggle. |
| Second unit label | Text |  | in |  |
| Note below the table | Rich text |  | &lt;p&gt;Measurements are of the garment laid flat, doubled where relevant. If you are between sizes, size up for a relaxed fit.&lt;/p&gt; | Optional. Somewhere to explain how to measure. |

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
| Free shipping threshold | Slider | 0–500 $ | 150 | Set to 0 to hide. Does not automatically apply a shipping discount — configure that separately in Settings &gt; Shipping. |

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
| Favicon | Image |  |  | Use a square .png or .ico image. |

## Animations

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable theme animations | On / off |  | true | System reduced-motion preferences are always respected. |

## Back to top

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show back-to-top button | On / off |  | true |  |

