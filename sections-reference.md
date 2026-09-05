# Sections reference

Every section in Evoke, with all of its settings.

Sections marked **Add via theme editor** can be added to any page from *Customize → Add section*. The rest are fixed parts of a specific template (the product page's main section, the header, the footer, and so on).

## Contents

- [Announcement bar](#announcement-bar)
- [Apps](#apps)
- [Article](#article)
- [Before/after comparison](#before-after-comparison)
- [Blog](#blog)
- [Blog posts](#blog-posts)
- [Brand introduction](#brand-introduction)
- [Cart drawer](#cart-drawer)
- [Cart page](#cart-page)
- [Cart recommendations](#cart-recommendations)
- [Collage](#collage)
- [Collection list](#collection-list)
- [Collections](#collections)
- [Collections with products](#collections-with-products)
- [Contact form](#contact-form)
- [Countdown timer](#countdown-timer)
- [Custom HTML](#custom-html)
- [Custom Liquid](#custom-liquid)
- [Dynamic text (with image)](#dynamic-text-with-image)
- [Email signup strip](#email-signup-strip)
- [FAQ](#faq)
- [Featured collection](#featured-collection)
- [Featured collection tabs](#featured-collection-tabs)
- [Featured product](#featured-product)
- [Footer](#footer)
- [Gallery](#gallery)
- [Gift card](#gift-card)
- [Header](#header)
- [Image with text](#image-with-text)
- [Image with text overlay](#image-with-text-overlay)
- [Info columns](#info-columns)
- [Logo bar](#logo-bar)
- [Map](#map)
- [Not found](#not-found)
- [Page](#page)
- [Page hero](#page-hero)
- [Password](#password)
- [Pickup availability](#pickup-availability)
- [Predictive search results](#predictive-search-results)
- [Product](#product)
- [Product recommendations](#product-recommendations)
- [Promotional popup](#promotional-popup)
- [Quick look](#quick-look)
- [Recently viewed](#recently-viewed)
- [Rich text](#rich-text)
- [Scrolling banner](#scrolling-banner)
- [Scrolling text](#scrolling-text)
- [Search results](#search-results)
- [Shop the look](#shop-the-look)
- [Slideshow](#slideshow)
- [Social feed](#social-feed)
- [Social proof](#social-proof)
- [Testimonials](#testimonials)
- [Text adverts](#text-adverts)
- [Text adverts with icon](#text-adverts-with-icon)
- [Video](#video)
- [Video popup](#video-popup)

---

## Announcement bar

*File: `sections/announcement-bar.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-2 |  |
| Text size | Slider | 11–18 px | 13 |  |
| Text size on mobile | Slider | 9–16 px | 11 | Smaller than the desktop size so a normal-length announcement stays on one line. |
| Vertical padding | Slider | 4–24 px | 10 |  |


**Multiple announcements**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Transition | Choice | None · Fade · Slide up | fade | Skipped for visitors who have asked their system for reduced motion. |
| Rotate automatically | On / off |  | true | Ignored when a visitor has asked their system for reduced motion — they get the arrows instead. |
| Seconds per announcement | Slider | 3–12 s | 5 |  |
| Show previous / next arrows | On / off |  | true |  |


**Social media**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show social media icons | On / off |  | false | Uses the links from Theme settings → Social media. Hidden while none are filled in. |


**Country and language**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show country/region selector | On / off |  | false | Shown once you sell in more than one country or region. |
| Show language selector | On / off |  | false | Shown once your store is translated into more than one language. |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show social icons and selectors on mobile | On / off |  | false | They move to a second line below the announcement. Left off, phones get the announcement on its own. |


**Dismissal**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Let visitors close the bar | On / off |  | false | Once a visitor closes it, it stays closed for them until you change the announcement text. Always visible here in the editor. |

### Blocks

#### Announcement

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text | Text |  | Free shipping on orders over $150 |  |
| Link | Link |  |  |  |
| Icon | Choice | None · Cake · Checkmark · Clock · Crown · Customer service · Delivery · Eco · Email · Exchange · Fire · Gift · Globe · Heart · Info · Map pin · Phone · Price tag · Sparkles · Star · Store · Truck · Wallet | none |  |

---

## Apps

*File: `sections/apps.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Make section full width | On / off |  | false |  |
| Spacing between apps | Slider | 0–60 px | 16 |  |
| Top spacing | Slider | 0–100 px | 40 |  |
| Bottom spacing | Slider | 0–100 px | 40 |  |
| Color scheme | Color scheme |  |  |  |

> Supports app blocks — apps you install can add their own content here.

---

## Article

*File: `sections/article.liquid`* — fixed template section

### Settings


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Content width | Choice | Narrow · Medium · Wide | narrow |  |
| Add space for transparent header | On / off |  | false | Turn on when this template uses an overlay header and no page hero above this section. |
| Top spacing | Slider | 0–120 px | 48 |  |
| Bottom spacing | Slider | 0–120 px | 64 |  |


**Header**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show article title | On / off |  | true | Turn off if a page hero section above already shows the title. |
| Header alignment | Choice | Left · Center | left |  |
| Show 'back to blog' link | On / off |  | true |  |
| 'Back to blog' label | Text |  |  | Leave blank to use the blog's own title. |
| Show tags | On / off |  | true |  |
| Show date | On / off |  | true |  |
| Show author | On / off |  | true |  |
| Show reading time | On / off |  | true |  |
| Show comment count | On / off |  | false |  |


**Featured image**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show featured image | On / off |  | true |  |
| Image ratio | Choice | Original · Landscape (3:2) · Wide (16:9) · Square (1:1) | landscape |  |

### Blocks

#### Share buttons

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | Share |  |
| Facebook | On / off |  | true |  |
| X (Twitter) | On / off |  | true |  |
| Pinterest | On / off |  | true |  |
| Email | On / off |  | true |  |

#### Related posts


> Hidden on the storefront when no other post qualifies.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Keep reading |  |
| Choose posts by | Choice | Shared tags · Most recent | tags |  |
| Posts to show | Slider | 2–6 | 3 |  |
| Image ratio | Choice | Landscape (3:2) · Wide (16:9) · Square (1:1) · Portrait (4:5) | landscape |  |
| Show date | On / off |  | true |  |

#### Previous / next post

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Previous label | Text |  | Previous |  |
| Next label | Text |  | Next |  |
| Show date | On / off |  | false |  |

#### Comments


> Comments are turned on per blog in Shopify admin. This block is hidden on the storefront until they are enabled.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Alignment | Choice | Left · Center | left |  |

> Supports app blocks — apps you install can add their own content here.

---

## Before/after comparison

*File: `sections/before-after-slider.liquid`* — **Add via theme editor**

### Settings


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  |  |  |
| Description | Rich text |  |  |  |
| Heading alignment | Choice | Left · Center · Right | center |  |
| Spacing below heading | Slider | 0–80 px | 40 |  |


**Images**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Before image | Image |  |  |  |
| After image | Image |  |  |  |
| Aspect ratio (desktop) | Choice | 16:9 · 4:3 · 3:2 · 1:1 · 2:3 · 3:4 | 16 / 9 |  |
| Aspect ratio (mobile) | Choice | 16:9 · 4:3 · 3:2 · 1:1 · 2:3 · 3:4 · 9:16 | 1 / 1 |  |
| Desktop width | Slider | 50–100 % | 100 |  |
| Border radius | Slider | 0–40 px | 0 |  |
| Colors | Color scheme |  | scheme-1 |  |


**Handle**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Initial position | Slider | 0–100 % | 50 |  |
| Enable auto play | On / off |  | false |  |
| Auto play speed | Slider | 1–10 | 3 | Lower = faster |


**Divider**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Width | Slider | 1–10 px | 3 |  |
| Color | Color |  | #FFFFFF |  |


**Handle**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Size | Slider | 30–80 px | 50 |  |
| Background color | Color |  | #FFFFFF |  |
| Icon color | Color |  | #111111 |  |


**Labels**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show labels | On / off |  | true |  |
| Before label | Text |  | Before |  |
| After label | Text |  | After |  |
| Font size | Slider | 10–24 px | 14 |  |
| Font weight | Choice | Normal · Medium · Semi bold · Bold | 600 |  |
| Padding vertical | Slider | 4–20 px | 8 |  |
| Padding horizontal | Slider | 8–32 px | 16 |  |
| Border radius | Slider | 0–20 px | 4 |  |
| Background color | Color |  | #111111 |  |
| Text color | Color |  | #FFFFFF |  |
| Fade threshold | Slider | 5–30 % | 15 | How close the handle must get before a label fades out |
| Offset vertical | Slider | 10–50 px | 20 |  |
| Offset horizontal | Slider | 10–50 px | 20 |  |


**Overlay**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show gradient overlay | On / off |  | false |  |
| Overlay opacity | Slider | 0–0.5 | 0.2 |  |


**Section spacing**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Padding top | Slider | 0–120 px | 0 |  |
| Padding bottom | Slider | 0–120 px | 0 |  |
| Padding sides | Slider | 0–80 px | 0 |  |

---

## Blog

*File: `sections/blog.liquid`* — fixed template section

### Settings


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Section width | Choice | Page width · Full width | page |  |
| Add space for transparent header | On / off |  | false | Turn on when this template uses an overlay header and no page hero above this section. |
| Top spacing | Slider | 0–120 px | 48 |  |
| Bottom spacing | Slider | 0–120 px | 64 |  |


**Header**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show blog title | On / off |  | true | Turn off if a page hero section above already shows the title. |
| Subheading | Rich text |  |  |  |
| Header alignment | Choice | Left · Center | left |  |


**Sidebar**


> The sidebar appears as soon as you add a sidebar block below. With a sidebar on, 2 posts per row usually reads best.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Sidebar position | Choice | Right · Left | right |  |

### Blocks

#### Tag navigation


> Links to every tag used in this blog. Hidden on the storefront until at least one post is tagged.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Alignment | Choice | Left · Center | left |  |
| 'All' label | Text |  | All |  |

#### Post grid

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Posts per page | Slider | 3–24 | 9 |  |
| Feature the newest post | On / off |  | true | Shows the first post on page 1 in a wide layout. |
| Posts per row — desktop | Choice | 2 · 3 · 4 | 3 |  |
| Posts per row — mobile | Choice | 1 · 2 | 1 |  |


**Card**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show featured image | On / off |  | true |  |
| Image ratio | Choice | Landscape (3:2) · Wide (16:9) · Square (1:1) · Portrait (4:5) | landscape |  |
| Text alignment | Choice | Left · Center | left |  |
| Show tags | On / off |  | true |  |
| Show date | On / off |  | true |  |
| Show author | On / off |  | false |  |
| Show comment count | On / off |  | false |  |
| Show excerpt | On / off |  | true |  |
| Excerpt length | Slider | 8–60 wd | 24 |  |
| Show 'read more' link | On / off |  | true |  |
| 'Read more' label | Text |  | Read more |  |


**Empty state**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Message when the blog has no posts | Text |  | No posts yet — check back soon. |  |

#### Sidebar — newsletter

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Join our mailing list |  |
| Description | Rich text |  | &lt;p&gt;New posts and store news, straight to your inbox.&lt;/p&gt; |  |
| Field placeholder | Text |  | Email |  |
| Button label | Text |  | Subscribe |  |
| Success message | Text |  | Thanks for subscribing. |  |

#### Sidebar — recent posts

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Recent posts |  |
| Posts to show | Slider | 2–8 | 4 |  |
| Show thumbnails | On / off |  | true |  |
| Show date | On / off |  | true |  |

#### Sidebar — tags


> Hidden on the storefront until at least one post is tagged.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Browse by topic |  |
| 'All' label | Text |  | All |  |

#### Sidebar — text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | About |  |
| Text | Rich text |  | &lt;p&gt;Tell readers who writes here and what to expect.&lt;/p&gt; |  |

#### Sidebar — image

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  |  |  |
| Image | Image |  |  |  |
| Image ratio | Choice | Original · Landscape (3:2) · Square (1:1) · Portrait (4:5) | portrait |  |
| Link | Link |  |  |  |
| Caption | Text |  |  |  |

#### Sidebar — social links


> Uses the store-wide URLs in Theme settings → Social. Hidden on the storefront until at least one is filled in.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Follow along |  |

> Supports app blocks — apps you install can add their own content here.

---

## Blog posts

*File: `sections/blog-posts.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | From the blog |  |
| Heading alignment | Choice | Left · Center · Right | center |  |
| Color scheme | Color scheme |  | scheme-1 |  |


**Padding**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top padding | Slider | 0–100 px | 36 |  |
| Bottom padding | Slider | 0–100 px | 36 |  |
| Spacing below heading | Slider | 0–80 px | 36 |  |


**Grid**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Posts to show | Slider | 2–8 | 3 |  |


**Desktop**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Layout | Choice | Grid · Carousel | grid |  |
| Posts per row — desktop | Slider | 2–4 | 3 |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Layout | Choice | Grid · Carousel | slider | Applies below 750px, independently of the desktop setting above. |
| Posts per row — mobile | Choice | 1 · 2 | 1 |  |
| Text alignment | Choice | Left · Center | left |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show image | On / off |  | true |  |
| Image ratio | Choice | Adapt to image · Landscape (3:2) · Square (1:1) · Portrait (4:5) · Wide (16:9) | landscape |  |
| Show tags | On / off |  | false |  |
| Show date | On / off |  | true |  |
| Show author | On / off |  | false |  |
| Show comment count | On / off |  | false |  |
| Show excerpt | On / off |  | true |  |
| Excerpt length | Slider | 10–60 w | 20 |  |
| Show 'read more' link | On / off |  | true |  |
| 'Read more' label | Text |  | Read more |  |


**View all button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show 'View all' button | On / off |  | true |  |
| Button text | Text |  | View all |  |

### Blocks

#### Blog

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Blog | Blog |  |  |  |


> Add Blog post blocks to hand-pick articles. They replace the blog selected here.


#### Article

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Article | Article |  |  |  |

---

## Brand introduction

*File: `sections/brand-introduction.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Eyebrow | Text |  | Made for considered commerce |  |
| Heading | Text |  | A quieter way to sell. |  |
| Text | Rich text |  | &lt;p&gt;Introduce your point of view, products, and the details that make your brand worth remembering.&lt;/p&gt; |  |
| Button label | Text |  |  |  |
| Button link | Link |  |  |  |


**Padding**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top padding | Slider | 0–160 px | 80 |  |
| Bottom padding | Slider | 0–160 px | 80 |  |

---

## Cart drawer

*File: `sections/cart-drawer.liquid`* — fixed template section

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |

---

## Cart page

*File: `sections/cart.liquid`* — fixed template section

### Settings


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Heading | Text |  | Shopping cart |  |


**Line items**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show vendor | On / off |  | false |  |
| Show SKU | On / off |  | false |  |


**Notes**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable order note | On / off |  | true |  |
| Enable gift message | On / off |  | false |  |


**Checkout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show 'taxes and shipping calculated at checkout' note | On / off |  | true |  |
| Require agreement to terms before checkout | On / off |  | false |  |
| Terms and conditions link | Link |  |  |  |


**Empty cart**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Your cart is empty |  |
| Text | Rich text |  | &lt;p&gt;Looks like you haven't added anything yet.&lt;/p&gt; |  |
| Show collection recommendations | On / off |  | false |  |
| Collection | Collection |  |  |  |

---

## Cart recommendations

*File: `sections/cart-drawer-recommendations.liquid`* — fixed template section

_No section-level settings._

---

## Collage

*File: `sections/collage.liquid`* — **Add via theme editor**

### Settings


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Shop the collage |  |
| Description | Rich text |  | &lt;p&gt;Add a short description for this collage section.&lt;/p&gt; |  |
| Alignment | Choice | Left · Center · Right | left |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Width | Choice | Content width · Full width | content_width | Width applies only when the color scheme is not set to Default. |
| Space between blocks | Slider | 0–40 px | 16 |  |
| Block alignment | Choice | Top · Center · Bottom | top | Only visible when blocks in a row are different heights. |
| Top spacing | Slider | 0–120 px | 64 |  |
| Bottom spacing | Slider | 0–120 px | 64 |  |


**Grid**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| First block width | Choice | Full width · 1/2 width · 1/3 width · 2/3 width · 1/4 width · 3/4 width | third |  |
| First block height | Choice | Extra small · Small · Medium · Large · Extra large | md |  |
| Second block width | Choice | Full width · 1/2 width · 1/3 width · 2/3 width · 1/4 width · 3/4 width | third |  |
| Second block height | Choice | Extra small · Small · Medium · Large · Extra large | md |  |
| Third block width | Choice | Full width · 1/2 width · 1/3 width · 2/3 width · 1/4 width · 3/4 width | third |  |
| Third block height | Choice | Extra small · Small · Medium · Large · Extra large | md |  |
| Fourth block width | Choice | Full width · 1/2 width · 1/3 width · 2/3 width · 1/4 width · 3/4 width | half |  |
| Fourth block height | Choice | Extra small · Small · Medium · Large · Extra large | lg |  |
| Fifth block width | Choice | Full width · 1/2 width · 1/3 width · 2/3 width · 1/4 width · 3/4 width | half |  |
| Fifth block height | Choice | Extra small · Small · Medium · Large · Extra large | lg |  |
| Sixth block width | Choice | Full width · 1/2 width · 1/3 width · 2/3 width · 1/4 width · 3/4 width | full |  |
| Sixth block height | Choice | Extra small · Small · Medium · Large · Extra large | sm |  |


**Color**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  |  |  |

### Blocks

#### Image


**Desktop**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |
| Image ratio | Choice | Adapt to collage · Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | collage | Overrides the height set for this block in Grid. "Adapt to collage" keeps the grid height. |
| Vertical position | Choice | Same as section · Top · Center · Bottom | inherit | Where the block sits in its row once Image ratio makes it shorter than the grid height. Overrides Block alignment for this block. |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | bottom_right |  |
| Heading font size | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h4 |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |
| Image ratio | Choice | Adapt to collage · Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | collage | Blocks are full width on mobile, so the grid height crops tall images. Pick a ratio to show the whole photo. |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | bottom_right |  |
| Heading font size | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h4 |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Upload an image |  |
| Link | Link |  |  |  |


**Button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button label | Text |  | Shop now |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |

#### Video


**Shopify hosted video**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Video | Video |  |  |  |
| or embed video from URL | Text |  |  | Shows when no Shopify-hosted video is selected. Accepts YouTube and Vimeo. |
| Video alt text | Text |  |  | Describe the video for customers using screen readers. |
| Heading font size | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h4 |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Add a video |  |
| Link | Link |  |  |  |


**Button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button label | Text |  | Shop now |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Content position (desktop) | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | bottom_left |  |
| Content position (mobile) | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | bottom_left |  |


**Colors**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Background | Color |  | #969696 | This block has no image, so its background is a standalone color rather than the section's color scheme. |
| Button text | Color |  | #FFFFFF |  |

#### Text


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Tell your story |  |
| Include text details | On / off |  | true |  |
| Heading font size (desktop) | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h4 |  |
| Heading font size (mobile) | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h4 |  |
| Text | Rich text |  | &lt;p&gt;Use this block to add supporting copy to your collage.&lt;/p&gt; |  |
| Link | Link |  |  |  |


**Button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button label | Text |  | Shop now |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Content position (desktop) | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | top_left |  |
| Alignment | Choice | Left · Center · Right | left |  |


**Colors**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Background | Color |  | #969696 |  |
| Text | Color |  | #FFFFFF |  |
| Button background | Color |  | #111111 |  |
| Button text | Color |  | #FFFFFF |  |

#### Custom


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  |  |  |
| Heading font size (desktop) | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h4 |  |
| Heading font size (mobile) | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h4 |  |


**Code**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| HTML | HTML |  |  |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Content position (desktop) | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | bottom_right |  |
| Alignment | Choice | Left · Center · Right | left |  |


**Colors**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Background | Color |  | #969696 |  |
| Text | Color |  | #FFFFFF |  |

#### Product

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Product | Product |  |  |  |
| Image ratio | Choice | Adapt to collage · Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | collage | Overrides the height set for this block in Grid. "Adapt to collage" keeps the grid height. |
| Image ratio (mobile) | Choice | Adapt to collage · Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | collage | Blocks are full width on mobile, so the grid height crops tall images. Pick a ratio to show the whole photo. |
| Vertical position | Choice | Same as section · Top · Center · Bottom | inherit | Where the block sits in its row once Image ratio makes it shorter than the grid height. Overrides Block alignment for this block. |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | bottom_left |  |
| Show price | On / off |  | true |  |
| Show quick add button | On / off |  | true |  |
| Show Quick Look button | On / off |  | false |  |


> Button and modal styling for Quick Look is shared across the whole theme — edit it in Theme settings → Quick look.


**Add to cart button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button label | Text |  | Add to cart |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |
| Button background | Color |  | #FFFFFF |  |
| Button text | Color |  | #111111 |  |

#### Collection

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collection | Collection |  |  |  |
| Image ratio | Choice | Adapt to collage · Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | collage | Overrides the height set for this block in Grid. "Adapt to collage" keeps the grid height. |
| Image ratio (mobile) | Choice | Adapt to collage · Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | collage | Blocks are full width on mobile, so the grid height crops tall images. Pick a ratio to show the whole photo. |
| Vertical position | Choice | Same as section · Top · Center · Bottom | inherit | Where the block sits in its row once Image ratio makes it shorter than the grid height. Overrides Block alignment for this block. |
| Heading override | Text |  |  | Leave blank to use the collection title. |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | bottom_left |  |


**Button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button label | Text |  | Shop now |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |


**Colors**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button background | Color |  | #111111 |  |
| Button text | Color |  | #FFFFFF |  |

#### Countdown

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Limited time |  |
| End date | Text |  | 2026-12-31 |  |
| End time (HH:MM:SS) | Text |  | 23:59:59 |  |
| Expired message | Text |  | This offer has ended. |  |


**Background**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Background type | Choice | Solid color · Gradient · Image | image |  |
| Background image | Image |  |  | Used when Background type is Image |
| Image overlay opacity | Slider | 0–100 % | 40 |  |
| Gradient start color | Color |  | #0f2027 | Used when Background type is Gradient |
| Gradient end color | Color |  | #2c5364 | Used when Background type is Gradient |
| Gradient angle | Slider | 0–360 ° | 135 |  |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | center |  |
| Background | Color |  | #111111 |  |
| Text | Color |  | #FFFFFF |  |
| Digit card background | Color |  | #ffffff |  |
| Digit number color | Color |  | #111111 |  |

---

## Collection list

*File: `sections/collections.liquid`* — **Add via theme editor**

### Settings


**Collections**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collections shown | Choice | All collections · Selected collections | all | All lists every collection in your store, with pagination. Selected uses only the collection blocks you add below. |
| Collections per page | Slider | 4–24 | 12 | Applies when Collections shown is set to All collections. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Offset for overlay header | On / off |  | false | Enable when your header overlays the page content. Adds top padding equal to the header height. |


**Section Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show heading | On / off |  | true |  |
| Heading text | Text |  | Collections |  |
| Show subheading | On / off |  | false |  |
| Subheading text | Text |  | Browse our curated collections |  |
| Heading alignment | Choice | Left · Center · Right | left |  |
| Title size | Choice | Extra small · Small · Medium · Large · Extra large | md |  |
| Title weight | Choice | Regular · Medium · Semi-bold · Bold · Extra bold | 600 |  |


**Grid and carousel**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Desktop layout | Choice | Grid · Carousel | carousel | Carousel shows ‹ 1/5 › controls centered below the track. |
| Mobile layout | Choice | Match desktop · Always carousel · Always grid | follow | Override the desktop layout on screens below 750 px. |
| Show next card peek | On / off |  | true | Partially reveals the edge of the next card to signal scrollability. |
| Columns (desktop) | Slider | 2–5 | 3 | Controls columns in grid mode and visible cards in carousel mode. |
| Columns (mobile) | Choice | 1 column · 2 columns | 2 |  |
| Gap between cards | Slider | 0–60 px | 20 |  |


**Collection Card**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Card style (desktop) | Choice | Below image — title beneath photo · Overlay — title floats over image | below |  |
| Card style (mobile) | Choice | Match desktop · Below image — title beneath photo · Overlay — title floats over image | follow | Override the desktop card style on screens below 750 px. Useful when overlay text is hard to read on small images. |
| Enable overlay gradient | On / off |  | false | Applies when Collections shown is set to All collections. Collection blocks carry their own overlay settings. |
| Overlay | Color |  | #242424 |  |
| Overlay opacity | Slider | 0–100 % | 60 |  |
| Text | Color |  | #FFFFFF |  |
| Enable card hover effects | On / off |  | true | Controls image zoom, card lift, overlay darkening, and title slide-up on hover. |
| Enable button hover effects | On / off |  | true | Controls CTA pill brightening, arrow nudge on overlay cards, and arrow-gap animation on below-image cards. Turn off for a fully static, print-editorial feel. |
| Image aspect ratio | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Landscape (16:9) | portrait |  |
| Show collection description | On / off |  | false |  |
| Show call-to-action label | On / off |  | true |  |
| CTA label text | Text |  | Shop now |  |
| Card text alignment (below-image style) | Choice | Left · Center · Right | left |  |


**View All Button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show 'View all' button | On / off |  | false |  |
| Button label | Text |  | View all |  |
| Button URL | Link |  |  | Defaults to /collections if left empty. |
| Button style | Choice | Filled — solid block · Outline — bordered ghost · Text link — typographic only | outline |  |
| Button size | Choice | Small · Medium · Large | md |  |
| Bold label | On / off |  | false |  |
| Full width on mobile | On / off |  | false | Stretches the button edge-to-edge on screens below 750 px — recommended when using 'Filled' style. |
| Button position | Choice | Inline with title (header row) · Below the grid / carousel · Above the grid / carousel | inline |  |
| Button alignment | Choice | Left · Center · Right | center | Ignored on mobile when 'Full width on mobile' is on. |

### Blocks

#### Collection

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collection | Collection |  |  | Until a collection is selected, this block shows a placeholder. |
| Image | Image |  |  | 1600 x 1600px recommended. Optional. Overrides collection image. |
| Custom title | Text |  |  | Leave blank to use the collection's title. |
| Subheading | Text |  |  | Leave blank to use the collection's description. |
| Button label | Text |  | Shop now |  |
| Button style | Choice | Filled · Outline · Underline | filled | Applies when "Overlay content on collection" is on. |


**Overlay content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Overlay content on collection | On / off |  | false | Centers the subheading, title and button over the image. |
| Enable overlay gradient | On / off |  | false | Applies when the card style is Overlay. Turn off to remove the tint entirely. |
| Overlay | Color |  | #242424 |  |
| Overlay opacity | Slider | 0–100 % | 60 |  |
| Text | Color |  | #FFFFFF |  |

---

## Collections

*File: `sections/main-collection.liquid`* — fixed template section

### Settings


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Width | Choice | Page · Full width | page | Page constrains the section to your theme's page width. Full width stretches edge-to-edge. |
| Side padding (full width) | Slider | 0–100 px | 40 | Only applies when Width is set to Full width. |
| Apply side padding on mobile | On / off |  | false | When off, side padding is removed on screens below 750px for a true edge-to-edge mobile look. |
| Offset for overlay header | On / off |  | false | Enable when your header is set to 'Over content'. Adds top padding equal to the header height so the collection title isn't hidden behind it. |


**Collection Header**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show collection title | On / off |  | false |  |
| Show collection description | On / off |  | false |  |
| Header alignment | Choice | Left · Center · Right | left |  |


**Grid Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Products per page | Slider | 4–36 | 16 |  |
| Products per row (desktop) | Slider | 2–5 | 4 |  |
| Products per row (mobile) | Choice | 1 product · 2 products | 2 |  |
| Grid spacing | Choice | Extra small · Small · Medium · Large · Extra large | 16 |  |
| Product image ratio | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | three-four |  |
| Show secondary image on hover | On / off |  | true |  |
| Show full title, including any : or - suffix | On / off |  | true | Uncheck to keep only one side of a title that contains a colon or a dash — useful when titles carry a colour or variant suffix. Which side is kept is set below. Title length is controlled separately, in Theme settings → Product cards → Maximum title lines. |
| Structured title handling | Choice | Show part after special character · Show part before special character | after | Applies only when 'Show full product title' is unchecked. |
| Show discount percentage | On / off |  | true | Shows savings in brackets, e.g. (20% OFF), next to discounted prices. |
| Show product vendor | On / off |  | false |  |
| Product card alignment | Choice | Left · Center · Right | left |  |


**Pagination**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Pagination type | Choice | Pagination (page by page) · Infinite scroll · Load more button | pagination | Infinite scroll and Load more fetch additional pages automatically as visitors browse. |
| Show progress indicator | On / off |  | true | Displays a progress bar and "Viewed X of Y products" text above the load control. Only applies to Infinite scroll and Load more button. |


**Filtering and sorting**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable filtering | On / off |  | true |  |
| Enable sorting | On / off |  | true |  |
| Desktop filter layout | Choice | Top bar / Mobile style · Sidebar left | topbar |  |


**Layout Switcher**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show column layout switcher | On / off |  | true | Displays 3 / 4 / 5 column toggle buttons next to the sort control. |
| Default column count | Choice | 3 columns · 4 columns · 5 columns | 4 | The column count shown on first load. Visitor's choice is remembered per-browser. |


**Quick Look**


> Button and modal styling for Quick Look is shared across the whole theme — edit it in Theme settings → Quick look.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable Quick Look | On / off |  | true |  |

> Supports app blocks — apps you install can add their own content here.

---

## Collections with products

*File: `sections/collections-with-products.liquid`* — **Add via theme editor**

### Settings


**Collections**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collections shown | Choice | All collections · Selected collections | all | All lists every collection that has products, with pagination. Selected uses only the collection blocks you add below. |
| Collections to exclude | Collections |  |  | Applies when Collections shown is set to All collections. |
| Collections per page | Slider | 2–20 | 8 | Applies when Collections shown is set to All collections. |
| Pagination type | Choice | Pagination (page by page) · Infinite scroll · Load more button | pagination | Infinite scroll and Load more fetch additional pages automatically as visitors browse. |
| Show progress indicator | On / off |  | true | Displays a progress bar and "Viewed X of Y collections" text above the load control. Only applies to Infinite scroll and Load more button. |
| Space between collections | Slider | 32–128 px | 64 |  |
| Show dividers | On / off |  | true |  |


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading size | Choice | Small · Medium · Large | medium |  |
| Heading alignment | Choice | Left · Center · Right | center |  |
| Spacing below heading | Slider | 0–80 px | 32 |  |
| Show 'See more' link | On / off |  | true |  |


**Grid**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Layout (desktop) | Choice | Stacked (vertical scroll) · Carousel (one look at a time) | carousel | Stacked shows a wrapping grid. Carousel lets customers swipe through one look at a time. |
| Layout (mobile) | Choice | Stacked (vertical scroll) · Carousel (one look at a time) | stacked | Applies below 750px, independently of the desktop setting above. |
| Products per row (desktop) | Slider | 2–5 | 4 |  |
| Product alignment | Choice | Left · Center · Right | left | Applies when a collection has fewer products than Products per row. |
| Products to show | Slider | 2–12 | 8 |  |
| Product image ratio | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | portrait |  |
| Show product vendor | On / off |  | false |  |


**Quick Look**


> Button and modal styling for Quick Look is shared across the whole theme — edit it in Theme settings → Quick look.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable Quick Look | On / off |  | true |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Offset for overlay header | On / off |  | false |  |


**Padding**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top padding | Slider | 0–100 px | 48 |  |
| Bottom padding | Slider | 0–100 px | 48 |  |

### Blocks

#### Collection

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collection | Collection |  |  |  |
| Custom title | Text |  |  | Leave blank to use the collection's title. |

---

## Contact form

*File: `sections/contact-form.liquid`* — **Add via theme editor**

### Settings


> Submissions are sent to the sender email set in your Shopify admin under Settings > Store details.


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Contact us |  |
| Description | Rich text |  | &lt;p&gt;Have a question, or want a product recommendation? Get in touch.&lt;/p&gt; |  |
| Alignment | text_alignment |  | center |  |


**Spacing**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top spacing | Slider | 0–150 px | 64 |  |
| Bottom spacing | Slider | 0–150 px | 64 |  |


**Color**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |

### Blocks

#### Name field

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Required | On / off |  | true |  |
| Input width | Choice | Partial · Full | partial |  |

#### Email field

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Required | On / off |  | true |  |
| Input width | Choice | Partial · Full | partial |  |

#### Telephone field

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Required | On / off |  | false |  |
| Input width | Choice | Partial · Full | full |  |

#### Text field

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Required | On / off |  | true |  |
| Input width | Choice | Partial · Full | full |  |

#### Custom field

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | Order number |  |
| Required | On / off |  | false |  |
| Input width | Choice | Partial · Full | full |  |

#### Checkbox

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | Checkbox |  |
| Hint text | Text |  |  | Optional supporting text shown below the checkbox. |
| Required | On / off |  | false |  |
| Input width | Choice | Partial · Full | full |  |

#### Dropdown

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | Choose an option |  |
| Hint text | Text |  |  | Optional supporting text shown below the dropdown. |
| Options | Text |  | Yes, No | Comma-separated list of options, e.g. Yes, No, Maybe |
| Required | On / off |  | false |  |
| Input width | Choice | Partial · Full | full |  |

---

## Countdown timer

*File: `sections/countdown.liquid`* — **Add via theme editor**

### Settings


**Countdown**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| End date | Text |  | 2026-12-31 | Format: YYYY-MM-DD — e.g. 2026-12-31.  Counts down in each visitor's local timezone, not one global moment. |
| End time (HH:MM:SS) | Text |  | 23:59:59 | 24-hour format — e.g. 23:59:59. Uses the visitor's local timezone. |
| Start immediately | On / off |  | true | When enabled the countdown is always visible. Disable to set a future start date. |
| Start date | Text |  |  | Section stays hidden until this date/time (visitor's local timezone). Only used when "Start immediately" is off. A past date behaves the same as starting immediately. |
| Start time (HH:MM:SS) | Text |  | 00:00:00 | 24-hour format. Uses the visitor's local timezone. |
| Before-start message | Text |  | Coming soon. | Shown in place of the timer until the start date is reached. |
| Expired message | Text |  | This offer has ended. |  |
| Redirect URL on expiry | Link |  |  | Optional. Redirects 2 seconds after the timer expires. |
| Hide section when expired | On / off |  | false | Hides this section once the countdown ends. Any redirect URL set above will still fire. |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Limited Time Offer |  |
| Subheading | Rich text |  | &lt;p&gt;Don't miss out on this exclusive deal. Offer ends soon!&lt;/p&gt; |  |
| Show time unit labels | On / off |  | true |  |


**Call to action**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show button | On / off |  | true |  |
| Button label | Text |  | Shop Now |  |
| Button URL | Link |  |  |  |
| Button style | Choice | Filled · Outline · Text link | filled |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Content width | Choice | Full width · Contained | contained |  |
| Padding top | Slider | 0–120 px | 64 |  |
| Padding bottom | Slider | 0–120 px | 64 |  |


**Background**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Background type | Choice | Solid color · Gradient · Image | image |  |
| Background color | Color |  | #111111 | Used when Background type is Solid color |
| Gradient start color | Color |  | #0f2027 | Used when Background type is Gradient |
| Gradient end color | Color |  | #2c5364 | Used when Background type is Gradient |
| Gradient angle | Slider | 0–360 ° | 135 |  |
| Background image | Image |  |  | Used when Background type is Image |
| Enable parallax scroll | On / off |  | false | Fixed background effect on desktop. Automatically disabled on mobile. |
| Image overlay opacity | Slider | 0–100 % | 40 | Dark overlay to improve text legibility over images |


**Colors**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text color | Color |  | #ffffff |  |
| Digit card background | Color |  | #ffffff |  |
| Digit number color | Color |  | #111111 |  |

---

## Custom HTML

*File: `sections/custom-html.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| HTML | HTML |  |  | For embeds and static markup. Use the Custom Liquid section instead if you need theme objects or logic. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Width | Choice | Page width · Full width | page |  |
| Top spacing | Slider | 0–100 px | 32 |  |
| Bottom spacing | Slider | 0–100 px | 32 |  |
| Color scheme | Color scheme |  | scheme-1 |  |

---

## Custom Liquid

*File: `sections/custom-liquid.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Liquid code | Liquid |  |  | For app snippets and other custom code. Store and template objects work here; theme settings do not. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Width | Choice | Page width · Full width | page |  |
| Top spacing | Slider | 0–100 px | 32 |  |
| Bottom spacing | Slider | 0–100 px | 32 |  |
| Color scheme | Color scheme |  | scheme-1 |  |

---

## Dynamic text (with image)

*File: `sections/dynamic-text-with-image.liquid`* — **Add via theme editor**

### Settings


**Desktop**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  | Optional. 2000 x 900px recommended. |
| Section height | Choice | Original · Small · Medium · Large · Extra large · Fullscreen | medium |  |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | center_left |  |
| Text size | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h2 |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  | Optional. Falls back to desktop image if not set. |
| Section height | Choice | Original · Small · Medium · Large · Extra large · Fullscreen | medium |  |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | center_left |  |
| Text size | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h3 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top spacing | Slider | 0–120 px | 0 |  |
| Bottom spacing | Slider | 0–120 px | 0 |  |
| Color scheme | Color scheme |  | scheme-1 |  |

### Blocks

#### Static text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text | Rich text |  | &lt;p&gt;Shout about how&lt;/p&gt; | One line of your headline. Stack multiple Static Text and Dynamic Text blocks to build multi-line headlines. |


**Style**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text color | Color |  |  | Optional. Overrides the section color scheme. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Max width (desktop) | Slider | 0–1200 px | 0 | Set to 0 for no maximum. |
| Max width (mobile) | Slider | 0–600 px | 0 | Set to 0 for no maximum. |

#### Dynamic text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Rotating words | Text |  | amazing,fantastic,bestselling,jaw-dropping | Comma-separated list of words to cycle through. |
| Text before words | Text |  |  | Optional. Displayed inline before the rotating word (e.g. "We are"). |
| Text after words | Text |  |  | Optional. Displayed inline after the rotating word (e.g. "!"). |


**Animation**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable animation | On / off |  | true |  |
| Animation style | Choice | Fade · Slide · Flip | slide |  |
| Animation duration | Slider | 100–1000 ms | 350 |  |
| Rotation interval | Slider | 1–10 s | 3 |  |


**Style**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Word color | Color |  |  | Optional. Overrides the section color scheme. |
| Prefix / suffix color | Color |  |  | Optional. Overrides the color of the prefix and suffix text. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Max width (desktop) | Slider | 0–1200 px | 0 | Set to 0 for no maximum. |
| Max width (mobile) | Slider | 0–600 px | 0 | Set to 0 for no maximum. |

#### Button

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button link | Link |  |  |  |
| Button label | Text |  | Shop now |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |


**Override button colors**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Override button colors | On / off |  | false |  |
| Background color | Color |  | #111111 |  |
| Text color | Color |  | #ffffff |  |
| Border color | Color |  | #111111 |  |

---

## Email signup strip

*File: `sections/email-signup-strip.liquid`* — **Add via theme editor**

### Settings


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Be First to Know |  |
| Heading size | Slider | 20–60 px | 28 |  |
| Subtext | Text |  | Subscribe to get special offers and updates |  |
| Subtext size | Slider | 12–24 px | 14 |  |
| Spacing between heading and subtext | Slider | 0–20 px | 4 |  |
| Input placeholder | Text |  | Enter your email |  |
| Success message | Text |  | Thanks for subscribing! |  |


**Colors**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Background color | Color |  | #F3F3F3 |  |
| Text color | Color |  | #121212 |  |
| Button color | Color |  | #121212 |  |
| Button text color | Color |  | #ffffff |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Email field width | Slider | 30–70 % | 50 |  |
| Top margin | Slider | 0–100 px | 0 |  |
| Top padding | Slider | 10–80 px | 30 |  |
| Bottom padding | Slider | 10–80 px | 30 |  |

---

## FAQ

*File: `sections/faq.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Frequently asked questions |  |
| Heading size | Choice | Small · Medium · Large | medium |  |
| Subheading | Rich text |  | &lt;p&gt;Can't find the answer you're looking for? Reach out to our support team.&lt;/p&gt; |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Content width | Choice | Narrow · Normal | normal |  |
| Side padding (desktop) | Slider | 0–100 px | 24 | Fine-tune the content width by adding extra padding beyond the page margin. Higher values narrow the column; lower values widen it. Has no effect on mobile. |
| Question style | Choice | Plain · Divided lines · Boxed | divided |  |
| Expand first question by default | On / off |  | true |  |
| Colors | Color scheme |  | scheme-1 |  |


**SEO**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable FAQ structured data | On / off |  | true | Adds schema.org markup so search engines can display your questions directly in search results. |


**Section padding**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top padding | Slider | 0–120 px | 64 |  |
| Bottom padding | Slider | 0–120 px | 64 |  |

### Blocks

#### Question

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Question | Text |  | Add a question customers ask often |  |
| Answer | Rich text |  | &lt;p&gt;Answer the question here. Keep it short and specific so customers can act on it without contacting support.&lt;/p&gt; |  |

#### Contact link

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text | Text |  | Still have questions? |  |
| Button label | Text |  | Contact us |  |
| Button link | Link |  |  |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |
| Button background | Color |  | #111111 |  |
| Button text | Color |  | #FFFFFF |  |

---

## Featured collection

*File: `sections/featured-collection.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collection | Collection |  |  | Until a collection is selected, placeholder products are shown. |
| Heading | Text |  | Featured collection |  |
| Heading alignment | Choice | Left · Center · Right | center |  |
| Color scheme | Color scheme |  | scheme-1 |  |


**Padding**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top padding | Slider | 0–100 px | 36 |  |
| Bottom padding | Slider | 0–100 px | 36 |  |
| Spacing below heading | Slider | 0–80 px | 36 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Multiple looks layout (desktop) | Choice | Stacked (vertical scroll) · Carousel (one look at a time) | carousel | Stacked shows a wrapping grid. Carousel lets customers swipe through one look at a time. |
| Multiple looks layout (mobile) | Choice | Stacked (vertical scroll) · Carousel (one look at a time) | stacked | Applies below 750px, independently of the desktop setting above. |


**Grid**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Products per row (desktop) | Slider | 2–5 | 4 |  |
| Products to show | Slider | 2–12 | 8 |  |
| Product image ratio | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | portrait |  |
| Show product vendor | On / off |  | false |  |


**View all button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show 'View all' button | On / off |  | true |  |
| Button text | Text |  | View all |  |


**Quick Look**


> Button and modal styling for Quick Look is shared across the whole theme — edit it in Theme settings → Quick look.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable Quick Look | On / off |  | true |  |

---

## Featured collection tabs

*File: `sections/featured-collection-tabs.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Featured Collections |  |
| Heading alignment | Choice | Left · Center · Right | center |  |
| Color scheme | Color scheme |  | scheme-1 |  |


**Padding**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top padding | Slider | 0–100 px | 36 |  |
| Bottom padding | Slider | 0–100 px | 36 |  |
| Spacing below heading | Slider | 0–80 px | 36 | Controls the gap between the heading and the collection tab labels. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Multiple looks layout (desktop) | Choice | Stacked (vertical scroll) · Carousel (one look at a time) | carousel | Stacked shows a wrapping grid. Carousel lets customers swipe through one look at a time. |
| Multiple looks layout (mobile) | Choice | Stacked (vertical scroll) · Carousel (one look at a time) | stacked | Applies below 750px, independently of the desktop setting above. |


**Grid**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Products per row (desktop) | Slider | 2–5 | 4 |  |
| Products per tab | Slider | 2–12 | 6 |  |
| Product image ratio | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | portrait |  |
| Show product vendor | On / off |  | false |  |


**View all button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show 'View all' button | On / off |  | true |  |
| Button text | Text |  | View all |  |


**Quick Look**


> Button and modal styling for Quick Look is shared across the whole theme — edit it in Theme settings → Quick look.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable Quick Look | On / off |  | true |  |

### Blocks

#### Collection tab

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collection | Collection |  |  | Until a collection is selected, placeholder products are shown. |
| Custom tab label | Text |  |  | Leave blank to use the collection's title. |

---

## Featured product

*File: `sections/featured-product.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Product | Product |  |  |  |


**Media**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Media position | Choice | Left · Right | left |  |
| Spacing between images | Slider | 0–48 px | 16 | Applies to the layouts that show more than one image at a time — Grid, and Thumbnails with the strip beside the media. The layouts that show one image at a time have nothing to space. |


**Desktop**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Media layout | Choice | Grid · Thumbnails · Paginated | thumbnails | Grid shows every image at once in two columns. Thumbnails shows one image with a strip to pick from. Paginated shows one image at a time with next and previous arrows. |
| Thumbnail position | Choice | Left (vertical) · Bottom (horizontal) | left |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Media layout | Choice | Carousel · Thumbnails below · Paginated | slider | Carousel swipes sideways with the next image peeking in. Thumbnails below shows one image with a strip under it. Paginated shows one image at a time with next and previous arrows. |
| Hide dots above | Slider | 4–30 img | 10 | Products with more media than this show no dots. Past a certain count they stop reading as position and become a gray smear, and each one is too small to aim at. Swiping is unaffected. |
| Image aspect ratio | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Landscape (4:3) | three-four |  |
| Loop product videos | On / off |  | false |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show "View full details" link | On / off |  | true |  |
| Top spacing | Slider | 0–100 px | 48 |  |
| Bottom spacing | Slider | 0–100 px | 48 |  |
| Color scheme | Color scheme |  | scheme-1 |  |

### Blocks

#### Vendor


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Title

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Size | Choice | Small · Medium · Large | medium |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Price


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Description

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Shorten to an excerpt | On / off |  | true | Off shows the full description with its formatting. |
| Excerpt length | Slider | 10–100 wd | 40 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Variant picker


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Quantity


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Buy buttons

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show dynamic checkout button | On / off |  | true |  |
| Show gift card recipient form | On / off |  | true | Lets a buyer send a gift card to someone else by email, on a date they choose. Only appears on gift card products, and replaces the dynamic checkout button on them. |


> The variant picker and quantity need this block to work — it carries the form they submit to.


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Badges


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Rating


> Reads review-app metafields. Shows nothing until a review app has ratings.


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Text with icon

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | None · Arrow circle · Book · Cake · Car · Chat · Chat bubble · Chat bubble with smile · Check circle · Clock · Cross · Crown · Cup · Customer service · Delivery · Eco · Email · Exchange · Fire · Flag · Gift · Globe · Handbag · Heart · Help circle · Home with smile · Info · Map pin · Measuring tape · Moon · Phone · Plus circle · Price tag · Question and answer · Quote · Recycle · Restaurant · Smiley · Sparks · Star · Store · Sun · Takeaway · Trophy · Truck · Umbrella · Wallet · Warning circle | truck |  |
| Text | Text |  | Ships in 1–2 business days |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Image

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |
| Link | Link |  |  |  |
| Maximum width | Slider | 60–600 px | 300 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Button

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | View full details |  |
| Link | Link |  |  |  |
| Style | Choice | Filled · Outlined · Underlined | outlined |  |
| Open in a new tab | On / off |  | false |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Divider


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Collapsible tab

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Shipping and returns |  |
| Content | Rich text |  |  |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text | Rich text |  | &lt;p&gt;Add supporting copy.&lt;/p&gt; |  |
| Style | Choice | Body · Subtitle · Small | body |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Custom Liquid

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Liquid code | Liquid |  |  | For app snippets and other custom code. Store and template objects work here; theme settings do not. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 0 |  |

> Supports app blocks — apps you install can add their own content here.

---

## Footer

*File: `sections/footer.liquid`* — fixed template section

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collapsible blocks on mobile | On / off |  | true | Master switch. When off, all blocks stay expanded on mobile regardless of per-block settings. |


**Social links**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Column heading | Text |  | Follow us |  |
| Facebook URL | Link |  |  |  |
| Instagram URL | Link |  |  |  |
| Twitter / X URL | Link |  |  |  |


**Utilities bar**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Utilities bar — top padding | Slider | 0–60 px | 8 |  |
| Utilities bar — bottom padding | Slider | 0–60 px | 40 |  |
| Show Follow on Shop | On / off |  | true | Appears for logged-out customers when Follow on Shop is active in your store. |
| Show country/region selector | On / off |  | false | Requires the country-localization snippet and multiple active markets. |
| Show language selector | On / off |  | false | Requires the language-localization snippet and multiple published languages. |
| Show payment icons | On / off |  | true |  |


**Copyright bar**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Additional copyright text | Text |  | All rights reserved. |  |
| Show policy links | On / off |  | true | Pulls from your store's published legal policies. |


**Scroll to top**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show scroll-to-top button | On / off |  | true |  |
| Top padding | Slider | 0–80 px | 0 |  |
| Bottom padding | Slider | 0–80 px | 20 |  |


**Spacing**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top margin | Slider | 0–100 px | 0 |  |
| Top padding | Slider | 20–120 px | 60 |  |
| Bottom padding | Slider | 20–120 px | 40 |  |

### Blocks

#### Navigation

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Quick links |  |
| Menu | Menu |  | footer |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collapsible on mobile | On / off |  | true | Shows only the heading on mobile. Tap to expand the link list. |

#### Text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | About us |  |
| Text | Rich text |  | &lt;p&gt;Share your store details and brand story with customers.&lt;/p&gt; |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collapsible on mobile | On / off |  | true | Shows only the heading on mobile. Tap to expand the text. |

#### Brand info

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Our brand |  |
| Description | Text (multi-line) |  | A short brand description goes here. |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collapsible on mobile | On / off |  | true | Shows only the heading on mobile. Tap to expand the description. |

#### Image

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |
| Width | Slider | 40–500 px | 120 |  |
| Alignment | Choice | Left · Center · Right |  |  |

> Supports app blocks — apps you install can add their own content here.

---

## Gallery

*File: `sections/gallery.liquid`* — **Add via theme editor**

### Settings


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Gallery |  |
| Description | Rich text |  |  |  |
| Heading alignment | Choice | Left · Center · Right | left |  |
| Spacing below heading | Slider | 0–80 px | 40 |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Content position | Choice | Below image — title beneath photo · Overlay — title floats over image | below |  |
| Alignment | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | bottom_left |  |
| Button style | Choice | Filled · Outlined · Underlined | underlined |  |
| Overlay opacity | Slider | 0–90 % | 40 | Only applies when content sits over the image. |


**Grid Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Columns per row (desktop) | Choice | 2 · 3 · 4 · 5 | 3 |  |
| Columns per row (mobile) | Choice | 1 · 2 | 2 |  |
| Image ratio | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | square |  |
| Spacing between images | Slider | 0–48 px | 16 |  |
| Width | Choice | Content width · Full width | content |  |


**Media**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable lightbox | On / off |  | true | Lets customers click an image to view it full screen. |


**Section spacing**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Top spacing | Slider | 0–100 px | 56 |  |
| Bottom spacing | Slider | 0–100 px | 56 |  |

### Blocks

#### Image

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |


**Link**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Link | Link |  |  |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Subheading | Text |  |  |  |
| Heading | Text |  |  |  |
| Button label | Text |  |  | A button needs a link to appear. |

---

## Gift card

*File: `sections/gift-card.liquid`* — fixed template section

### Settings


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Top spacing | Slider | 0–120 px | 56 |  |
| Bottom spacing | Slider | 0–120 px | 64 |  |


**Branding**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Logo | Image |  |  | Falls back to the store name. |
| Logo width | Slider | 60–260 px | 130 |  |


**Card artwork**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show card artwork | On / off |  | true |  |
| Card image | Image |  |  | Falls back to Shopify's default gift card illustration. |
| Artwork panel background | Color |  |  |  |


**Text**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Here's your gift card! |  |
| Balance label | Text |  | Balance |  |
| Expiry label | Text |  | Expires |  |
| Redemption text | Text |  | Use this code to redeem your gift card at checkout |  |
| Copy button label | Text |  | Copy gift card code | Read by screen readers. |
| Copied confirmation | Text |  | Copied |  |


**QR code**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show QR code | On / off |  | true |  |
| QR code text | Text |  | Or scan the QR code in store |  |


**Actions**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show print button | On / off |  | true |  |
| Print label | Text |  | Print |  |
| Show Apple Wallet button | On / off |  | true | Only appears when Shopify provides a pass for this card. |
| Show 'start shopping' link | On / off |  | true |  |
| 'Start shopping' label | Text |  | Start shopping |  |

---

## Header

*File: `sections/header.liquid`* — fixed template section

### Settings


**Logo**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Logo image | Image |  |  |  |
| Logo width (px) | Slider | 60–300 px | 120 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Header layout | Choice | Logo left · Logo center | logo-center |  |
| Sticky header | On / off |  | true |  |
| Header position | Choice | Above content · Over content | above | "Over content" places the header on top of the first section. The header background is still fully solid. |
| Show over content on | Choice | All pages · Home page only · Choose per template | home | Over content suits templates that open with a full-bleed image. Anywhere else the header covers the top of the first section. |
| Home page | On / off |  | true |  |
| Collection pages | On / off |  | false |  |
| Product pages | On / off |  | false |  |
| Blog and article pages | On / off |  | false |  |
| Pages | On / off |  | false |  |
| Cart, search, account and other | On / off |  | false | Covers the cart, search, 404, gift card and customer account pages. |
| Curved bottom (desktop only) | On / off |  | false | Rounds the lower corners of the header. Disabled automatically on mobile. |
| Curved bottom on mobile | On / off |  | false | Rounds the lower corners of the header on mobile screens. Desktop curve is controlled separately above. |


**Scroll behavior**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Float on scroll — desktop | On / off |  | false | Shrinks header to page width with a pill shape when scrolled. Requires sticky header enabled. |
| Float on scroll — mobile | On / off |  | false | Shrinks header to page width on small screens when scrolled. Requires sticky header enabled. |
| Float offset | Slider | 0–32 px | 4 | How far the header drops from the viewport top when floating. 0 = flush with top edge. |
| Shrink width on scroll — desktop | On / off |  | false | Narrows the header visual to page width when scrolled. Works independently of float drop. |
| Shrink width on scroll — mobile | On / off |  | false | Narrows the header visual on small screens when scrolled. Works independently of float drop. |


**Navigation**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Menu | Menu |  | main-menu |  |


**Search**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show search icon | On / off |  | true |  |
| Search results include | Choice | Products, pages and articles · Products and articles · Products and pages · Products only | product,page,article | Applies to the results page. The suggestions panel always searches everything, so narrowing this makes the results page show less than the panel offered. |
| Show results as you type | On / off |  | true | Suggests search terms, products, collections, pages and articles in the search panel. Turn off to use a plain search field that submits to the search page. |

### Blocks

#### Mega menu


> Attaches a full-width mega menu to a top-level navigation item. The columns and links are pulled automatically from that item's existing menu structure — this block only adds the wide layout and, optionally, promo tiles. Works even if that menu item has no sub-links of its own, in which case the panel shows the promo tiles alone.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Menu item | Text |  |  | Must match the title of a top-level item in the header's navigation menu (e.g. "Shop"). Capitalization doesn't matter. |
| Open on | Choice | Hover · Click | hover | Hover also opens on click/tap automatically for touch and keyboard users. Click requires an actual click even with a mouse. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Link column width | Slider | 120–240 px | 160 |  |
| Promo tile shape | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | tall | Applies to both tiles, on desktop and in the mobile menu. |
| Promo area width | Slider | 25–55 % | 38 | Share of the mega menu the tiles take up. The link columns fill the rest. |


**Promo tile 1**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |
| Heading | Text |  |  |  |
| Subheading | Text |  |  |  |
| Show in mobile drawer | On / off |  | true |  |
| Overlay text on image | On / off |  | true | When off, the text sits below the image instead of layered on top of it. |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | bottom_left |  |
| Link | Link |  |  |  |
| Button label | Text |  |  | Optional. Leave blank to hide the button — the whole tile is clickable either way. |
| Button style | Choice | Primary · Secondary | primary |  |


**Promo tile 2**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |
| Heading | Text |  |  |  |
| Subheading | Text |  |  |  |
| Show in mobile drawer | On / off |  | true |  |
| Overlay text on image | On / off |  | true | When off, the text sits below the image instead of layered on top of it. |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | bottom_left |  |
| Link | Link |  |  |  |
| Button label | Text |  |  | Optional. Leave blank to hide the button — the whole tile is clickable either way. |
| Button style | Choice | Primary · Secondary | primary |  |

#### Mega menu — collection


> Attaches a full-width mega menu to a top-level navigation item that shows live products from a chosen collection instead of menu links — a "shop by collection" preview that updates automatically as the collection's products change. Works even if that menu item has no sub-links of its own.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Menu item | Text |  |  | Must match the title of a top-level item in the header's navigation menu (e.g. "New arrivals"). Capitalization doesn't matter. |
| Open on | Choice | Hover · Click | hover | Hover also opens on click/tap automatically for touch and keyboard users. Click requires an actual click even with a mouse. |


**Collection**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Collection | Collection |  |  |  |
| Heading | Text |  | Trending now |  |
| Number of products | Slider | 3–12 | 6 |  |
| Image ratio | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | square |  |
| Layout | Choice | Carousel · Stack (scrollable) | carousel | Carousel scrolls sideways with arrow buttons. Stack shows a multi-column grid that scrolls vertically. |
| Products per row | Choice | 3 · 4 | 4 |  |
| Show vendor | On / off |  | false |  |
| Show price | On / off |  | true |  |
| Show "Shop all" link | On / off |  | true |  |
| "Shop all" link text | Text |  | Shop all |  |

---

## Image with text

*File: `sections/image-with-text.liquid`* — **Add via theme editor**

### Settings


**Image**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  | 1000 x 750px recommended. |
| Image position (desktop) | Choice | Left · Right | left |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Image with text |  |
| Text | Rich text |  | &lt;p&gt;Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.&lt;/p&gt; |  |
| Alignment (desktop) | Choice | Left · Center · Right | left |  |
| Alignment (mobile) | Choice | Left · Center · Right | left |  |


**Desktop**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Section height | Choice | Auto · Small · Medium · Large · Extra large | auto | Sets the minimum height of the image. Auto matches the content column height. |
| Heading font size | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h3 |  |
| Body text size | Choice | Small · Medium · Large | medium |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Section height | Choice | Auto · Small · Medium · Large · Extra large | auto | Sets the height of the image on mobile. Auto uses a 4:3 aspect ratio. |
| Heading font size | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h3 |  |
| Body text size | Choice | Small · Medium · Large | medium |  |


**Button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button link | Link |  |  |  |
| Button label | Text |  | Shop now |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |
| Button background | Color |  | #111111 |  |
| Button text | Color |  | #FFFFFF |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Width | Choice | Content width · Full width | full_width |  |
| Top spacing | Slider | 0–120 px | 0 |  |
| Bottom spacing | Slider | 0–120 px | 0 |  |


**Color**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |

---

## Image with text overlay

*File: `sections/image-with-text-overlay.liquid`* — **Add via theme editor**

### Settings


**Desktop**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |
| Section height | Choice | Original · Small · Medium · Large · Extra large · Fullscreen | large |  |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | center |  |
| Alignment | Choice | Left · Center · Right | center |  |
| Caption max width | Slider | 200–1400 px | 600 |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |
| Section height | Choice | Original · Small · Medium · Large · Extra large · Fullscreen | original |  |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | center |  |
| Alignment | Choice | Left · Center · Right | center |  |


**Section link**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Link | Link |  |  | Optional. The link will be removed if a block with a link is added. |


**Animation**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Animation style | Choice | Parallax · Sticky content · None | none | Parallax won't trigger when 'Section height' is set to 'Original'. |
| Parallax intensity | Choice | Subtle · Medium · Strong | medium | How far the image drifts as the section scrolls past. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Width | Choice | Content width · Full width | full_width |  |
| Top spacing | Slider | 0–120 px | 0 |  |
| Bottom spacing | Slider | 0–120 px | 0 |  |


**Color**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text | Color |  | #FFFFFF |  |
| Caption background | Color |  | #000000 |  |
| Caption background opacity | Slider | 0–100 % | 0 |  |
| Overlay | Color |  | #242424 |  |
| Overlay opacity | Slider | 0–100 % | 30 |  |

### Blocks

#### Subheading

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text | Text |  | Subheading |  |
| Text size (desktop) | Choice | Extra small · Small · Medium · Large | medium |  |
| Text size (mobile) | Choice | Extra small · Small · Medium · Large | medium |  |

#### Heading

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Image with text overlay |  |
| Heading tag | Choice | H1 · H2 · H3 · H4 | h2 | Choose H1 for page hero headings for better SEO. |
| Heading font size (desktop) | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h2 |  |
| Heading font size (mobile) | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h2 |  |

#### Text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text | Rich text |  | &lt;p&gt;Use this text to share information about your brand with your customers.&lt;/p&gt; |  |

#### Button

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | Shop now |  |
| Link | Link |  |  |  |
| Style | Choice | Primary · Secondary | primary |  |

---

## Info columns

*File: `sections/info-columns.liquid`* — **Add via theme editor**

### Settings


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Why shop with us |  |
| Description | Rich text |  | &lt;p&gt;Set out the promises that matter most before a customer has to go looking for them.&lt;/p&gt; |  |
| Heading alignment | Choice | Left · Center · Right | center |  |
| Spacing below heading | Slider | 0–80 px | 40 |  |


**Media**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Maximum width | Slider | 80–600 px | 400 |  |


**Buttons**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button style | Choice | Filled · Outlined · Underlined | underlined |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |
| Button background | Color |  | #111111 |  |
| Button text | Color |  | #FFFFFF |  |


**Desktop**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Layout | Choice | Grid · Carousel | grid |  |
| Columns per row (desktop) | Slider | 1–4 | 3 |  |
| Content position | Choice | Top · Center · Bottom | top |  |
| Text alignment | Choice | Left · Center · Right | center |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Layout | Choice | Grid · Carousel | slider |  |
| Columns per row (mobile) | Choice | 1 · 2 | 1 |  |
| Alignment (mobile) | Choice | Left · Center · Right | center |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Section width | Choice | Page · Full width | page | Page constrains the section to your theme's page width. Full width stretches edge-to-edge. |
| Top padding | Slider | 0–120 px | 56 |  |
| Bottom padding | Slider | 0–120 px | 56 |  |
| Color scheme | Color scheme |  | scheme-1 |  |

### Blocks

#### Image with text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |
| Shape | Choice | Adapt to image · Circle · Square (1:1) · Portrait (3:4) · Wide (16:9) | square |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Free returns |  |
| Text | Rich text |  | &lt;p&gt;Thirty days to change your mind, with a prepaid label in every parcel.&lt;/p&gt; |  |


**Link**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Link | Link |  |  |  |
| Button label | Text |  |  |  |

#### Video with text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Video | Video |  |  |  |
| or embed video from URL | Text |  |  | Shows when no Shopify-hosted video is selected. Accepts YouTube and Vimeo. |
| Video alt text | Text |  |  | Describe the video for customers using screen readers. |
| Shape | Choice | Adapt to image · Circle · Square (1:1) · Portrait (3:4) · Wide (16:9) | wide |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | See it in use |  |
| Text | Rich text |  | &lt;p&gt;A short clip does more than a paragraph when the detail is hard to picture.&lt;/p&gt; |  |


**Link**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Link | Link |  |  |  |
| Button label | Text |  |  |  |

#### Text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Made to last |  |
| Text | Rich text |  | &lt;p&gt;Every piece is built from materials we would happily keep for a decade.&lt;/p&gt; |  |


**Link**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Link | Link |  |  |  |
| Button label | Text |  |  |  |

---

## Logo bar

*File: `sections/logo-bar.liquid`* — **Add via theme editor**

### Settings


> A still row of press, partner or payment logos. For the same logos as a moving marquee, use the Scrolling banner section instead.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | As seen in |  |
| Heading alignment | Choice | Left · Center · Right | center |  |
| Color scheme | Color scheme |  | scheme-1 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Columns per row (desktop) | Slider | 3–8 | 5 |  |
| Columns per row (mobile) | Choice | 2 columns · 3 columns | 2 |  |
| Space between logos | Slider | 8–80 px | 32 |  |


**Style**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Shape | Choice | Adapt to image · Wide (16:9) · Landscape (3:2) · Square (1:1) · Tall (3:4) | natural | Sets the box each logo fills. Logos are letterboxed inside it, so every row is the same height whatever the artwork. “Adapt to image” uses no box — logos are matched by height instead. |
| Logo height (desktop) | Slider | 20–120 px | 48 |  |
| Logo height (mobile) | Slider | 16–96 px | 32 |  |
| Space inside the box | Slider | 0–48 px | 12 | Breathing room between the logo and the edge of its box. Halved on mobile. |
| Mute logo colors | On / off |  | true | Logos return to full color on hover. |


**Padding**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top padding | Slider | 0–100 px | 40 |  |
| Bottom padding | Slider | 0–100 px | 40 |  |
| Spacing below heading | Slider | 0–80 px | 28 |  |

### Blocks

#### Logo

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  | A transparent PNG or SVG works best. Logos are matched by height, not width. |
| Brand name | Text |  |  | Used as the image's alt text when the file has none of its own. |
| Link | Link |  |  |  |

---

## Map

*File: `sections/map.liquid`* — **Add via theme editor**

### Settings


**Map source**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Google Maps embed code or URL | Text (multi-line) |  |  | In Google Maps: Share → Embed a map → copy the whole iframe code and paste it here (or just the src URL). Takes priority over the API key below. |
| Google Maps API key | Text |  |  | Alternative to embed URL. Requires the Maps Embed API to be enabled in your Google Cloud project. |
| Address for API key | Text |  |  | Only used when an API key is provided above. This address is encoded into the embed URL. |
| Fallback image | Image |  |  | Shown when no map source is configured. A static map screenshot works well here. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show map only | On / off |  | false | Hides the heading, info list, and button. The map displays full-width. Overrides the position and alignment settings below. |
| Content position (desktop) | Choice | Left · Center · Right | left | Left and Right show map and content side-by-side. Center stacks a full-width map above the content. |
| Alignment | Choice | Left · Center · Right | center |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Our store |  |


**Buttons**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Map link | Link |  |  | Link opened when the button is clicked. If left blank, auto-built from the address field above. |
| Map link label | Text |  | Get directions |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false | When enabled, the colors below replace the color scheme accent. |
| Button background | Color |  | #111111 |  |
| Button text color | Color |  | #FFFFFF |  |


**Spacing**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top spacing | Slider | 0–120 px | 60 |  |
| Bottom spacing | Slider | 0–120 px | 60 |  |


**Color scheme**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |

### Blocks

#### Info item

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | None · Map pin · Clock · Phone · Email · Globe · Store · Flag · Truck · Delivery · Car · Chat · Chat bubble · Customer service · Question and answer · Help · Info · Star · Heart · Gift | none |  |
| Text | Text |  | Enter store information |  |

---

## Not found

*File: `sections/404.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Colors | Color scheme |  | scheme-1 |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  |  | Leave blank to use the default translated title. |
| Text | Text (multi-line) |  |  | Leave blank to use the default translated message. |
| Button label | Text |  |  | Leave blank to use the default translated label. |


**Search**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show search box | On / off |  | true |  |


**Suggested collections**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Or try one of these |  |
| Collections | Collections |  |  |  |


**Section spacing**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top | Slider | 20–160 px | 96 |  |
| Bottom | Slider | 20–160 px | 96 |  |

---

## Page

*File: `sections/page.liquid`* — fixed template section

### Settings


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Content width | Choice | Narrow · Medium · Wide | medium |  |
| Heading alignment | Choice | Left · Center | left |  |
| Add space for transparent header | On / off |  | false | Turn on when this template uses an overlay header and no page hero above this section. |
| Top spacing | Slider | 0–120 px | 48 |  |
| Bottom spacing | Slider | 0–120 px | 64 |  |


**Header**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show page title | On / off |  | true | Turn off if a page hero section above already shows the title. |
| Subheading | Rich text |  |  |  |

> Supports app blocks — apps you install can add their own content here.

---

## Page hero

*File: `sections/section-page-hero.liquid`* — **Add via theme editor**

### Settings


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Offset for overlay header | On / off |  | false | Turn on when your header is set to 'Over content' so the hero title isn't hidden behind the navigation bar. |
| Show collection description | On / off |  | false | Renders the collection description below the title. Has no effect on other page types. |


**Padding — desktop**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top | Slider | 0–100 px | 48 |  |
| Bottom | Slider | 0–100 px | 48 |  |
| Side (left and right) | Slider | 0–100 px | 40 |  |


**Padding — mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top | Slider | 0–100 px | 32 |  |
| Bottom | Slider | 0–100 px | 32 |  |
| Side (left and right) | Slider | 0–100 px | 20 |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text alignment | Choice | Left · Center · Right | center | Controls text-align on the breadcrumb trail and page title as a group. Independent of the content position grid below. |


**Desktop image**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show image | On / off |  | true |  |
| Image | Image |  |  | Overrides the collection image on desktop. Leave blank to use the collection image automatically. 2000 × 900 px recommended. |
| Minimum height | Choice | Original · Narrow · Extra small · Small · Medium · Large | narrow |  |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | center |  |
| Caption max width | Choice | Small (400 px) · Medium (600 px) · Large (800 px) · Full | medium |  |


**Mobile image**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show image | On / off |  | true |  |
| Image | Image |  |  | Overrides the image on mobile. Leave blank to reuse the desktop image. 800 × 600 px recommended. |
| Minimum height | Choice | Original · Narrow · Small · Medium · Large | narrow |  |
| Content position | Choice | Top left · Top center · Top right · Center left · Center · Center right · Bottom left · Bottom center · Bottom right | center |  |


**Animation**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable parallax effect | On / off |  | false | Scrolls the background image at a slower rate than the page to create a sense of depth. Only active on desktop screens and only when a minimum height above 'Original' is set. Automatically disabled for visitors who have enabled 'Reduce motion' in their OS settings. |
| Enable content fade on scroll | On / off |  | false | Fades and lifts the breadcrumb and title as the visitor scrolls past the hero. Also respects 'Reduce motion' preferences. |

---

## Password

*File: `sections/password.liquid`* — fixed template section

### Settings


**Background**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Card color scheme | Color scheme |  | scheme-1 |  |
| Background image | Image |  |  |  |
| Background image — mobile | Image |  |  | Falls back to the desktop image. |
| Background color | Color |  | #444444 | Used when no background image is set, and behind it while it loads. |
| Image darkening | Slider | 0–90 % | 35 |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Logo | Image |  |  | Falls back to the store name. |
| Logo width | Slider | 60–300 px | 140 |  |
| Heading | Text |  | Opening soon |  |


> The message below the heading comes from Shopify admin → Online Store → Preferences → Password page.


**Email signup**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show email signup | On / off |  | true |  |
| Signup text | Text |  | Find out when we open |  |
| Field placeholder | Text |  | Email |  |
| Button label | Text |  | Subscribe | Read by screen readers. |
| Success message | Text |  | Thanks — we will be in touch. |  |


**Social**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show social links | On / off |  | true | Uses the URLs in Theme settings → Social. |


**Password entry**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Footer link label | Text |  | Enter store using password |  |
| Field placeholder | Text |  | Enter password |  |
| Store owner text | Text |  | Are you the store owner? |  |
| Store owner link label | Text |  | Log in here |  |

---

## Pickup availability

*File: `sections/pickup-availability.liquid`* — fixed template section

_No section-level settings._

---

## Predictive search results

*File: `sections/predictive-search-results.liquid`* — fixed template section

_No section-level settings._

---

## Product

*File: `sections/product.liquid`* — fixed template section

### Settings


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Product information layout | Choice | One column · Two columns | one-col | Two columns gives each block a "Block position" choice. Single column on mobile either way. |


**Media Gallery**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Media position | Choice | Left · Right | left | Which side of the product information the gallery sits on. Media is always above the information on mobile. |
| Media size | Choice | Small · Medium · Large | large | How much of the row the gallery takes. The product information fills the rest. |
| Spacing between images | Slider | 0–48 px | 16 | Applies to the layouts that show more than one image at a time — Grid, and Thumbnails with the strip beside the media. The layouts that show one image at a time have nothing to space. |


**Desktop**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Media layout | Choice | Grid · Thumbnails · Paginated | thumbnails | Grid shows every image at once in two columns. Thumbnails shows one image with a strip to pick from. Paginated shows one image at a time with next and previous arrows. |
| Thumbnail position | Choice | Left (vertical) · Bottom (horizontal) | left |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Media layout | Choice | Carousel · Thumbnails below · Paginated | slider | Carousel swipes sideways with the next image peeking in. Thumbnails below shows one image with a strip under it. Paginated shows one image at a time with next and previous arrows. |
| Hide dots above | Slider | 4–30 img | 10 | Products with more media than this show no dots. Past a certain count they stop reading as position and become a gray smear, and each one is too small to aim at. Swiping is unaffected. |
| Image aspect ratio | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | three-four |  |
| Loop product videos | On / off |  | false |  |


**Product Info**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show breadcrumbs | On / off |  | true |  |
| Show discount percentage | On / off |  | true |  |


**Purchase**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable sticky add to cart bar | On / off |  | true | A compact bar with the product title, price and Add to Cart button appears when the main form scrolls out of view. |

### Blocks

#### Badges


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Vendor


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Title

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Size | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h3 | Type scale only. The product name stays the page’s H1. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Rating


> Reads review-app metafields. Shows nothing until a review app is installed and has ratings.


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Price


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Variant picker


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Quantity selector


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Buy buttons

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show dynamic checkout button | On / off |  | true |  |
| Show Shop Pay Installments | On / off |  | true | Only appears when the store is eligible and the price qualifies. |
| Show gift card recipient form | On / off |  | true | Lets a buyer send a gift card to someone else by email, on a date they choose. Only appears on gift card products, and replaces the dynamic checkout button on them. |


> The variant picker and quantity selector need this block — it carries the form they submit to.


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### View in your space


> Opens the product in AR. Appears only on devices that support it, and only when the product has a 3D model.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | View in your space |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Local pickup


> Shows where this variant can be collected. Appears only for locations with local pickup switched on in Settings → Shipping and delivery.


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Stock level


> Reads the variant’s stock and updates as options change. The low-stock threshold is in Theme settings.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show level bar | On / off |  | true |  |
| Bar reaches full at | Slider | 5–100 pc | 20 | Stock count that fills the bar completely. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Product details

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show type | On / off |  | true |  |
| Type label | Text |  | Type |  |
| Show SKU | On / off |  | true |  |
| SKU label | Text |  | SKU |  |
| Show barcode | On / off |  | false |  |
| Barcode label | Text |  | Barcode |  |
| Show tags | On / off |  | false |  |
| Tags label | Text |  | Tags |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Text with icon group


**Row 1**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | None · Arrow circle · Book · Cake · Car · Chat · Chat bubble · Chat bubble with smile · Check circle · Clock · Cross · Crown · Cup · Customer service · Delivery · Eco · Email · Exchange · Fire · Flag · Gift · Globe · Handbag · Heart · Help circle · Home with smile · Info · Map pin · Measuring tape · Moon · Phone · Plus circle · Price tag · Question and answer · Quote · Recycle · Restaurant · Smiley · Sparks · Star · Store · Sun · Takeaway · Trophy · Truck · Umbrella · Wallet · Warning circle | none |  |
| Text | Text |  |  |  |


**Row 2**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | None · Arrow circle · Book · Cake · Car · Chat · Chat bubble · Chat bubble with smile · Check circle · Clock · Cross · Crown · Cup · Customer service · Delivery · Eco · Email · Exchange · Fire · Flag · Gift · Globe · Handbag · Heart · Help circle · Home with smile · Info · Map pin · Measuring tape · Moon · Phone · Plus circle · Price tag · Question and answer · Quote · Recycle · Restaurant · Smiley · Sparks · Star · Store · Sun · Takeaway · Trophy · Truck · Umbrella · Wallet · Warning circle | none |  |
| Text | Text |  |  |  |


**Row 3**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | None · Arrow circle · Book · Cake · Car · Chat · Chat bubble · Chat bubble with smile · Check circle · Clock · Cross · Crown · Cup · Customer service · Delivery · Eco · Email · Exchange · Fire · Flag · Gift · Globe · Handbag · Heart · Help circle · Home with smile · Info · Map pin · Measuring tape · Moon · Phone · Plus circle · Price tag · Question and answer · Quote · Recycle · Restaurant · Smiley · Sparks · Star · Store · Sun · Takeaway · Trophy · Truck · Umbrella · Wallet · Warning circle | none |  |
| Text | Text |  |  |  |


**Row 4**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | None · Arrow circle · Book · Cake · Car · Chat · Chat bubble · Chat bubble with smile · Check circle · Clock · Cross · Crown · Cup · Customer service · Delivery · Eco · Email · Exchange · Fire · Flag · Gift · Globe · Handbag · Heart · Help circle · Home with smile · Info · Map pin · Measuring tape · Moon · Phone · Plus circle · Price tag · Question and answer · Quote · Recycle · Restaurant · Smiley · Sparks · Star · Store · Sun · Takeaway · Trophy · Truck · Umbrella · Wallet · Warning circle | none |  |
| Text | Text |  |  |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Description

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Description |  |
| Open by default | On / off |  | true |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Collapsible tab

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Additional details |  |
| Content | Rich text |  |  |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Collapsible tab + image

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Size guide |  |
| Image | Image |  |  |  |
| Image position | Choice | Above text · Beside text | above |  |
| Content | Rich text |  |  |  |
| Open by default | On / off |  | false |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Highlights


**Item 1**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | Shipping · Returns · Secure · Globe · Gift · Check | shipping |  |
| Text | Text |  |  |  |


**Item 2**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | Shipping · Returns · Secure · Globe · Gift · Check | returns |  |
| Text | Text |  |  |  |


**Item 3**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | Shipping · Returns · Secure · Globe · Gift · Check | secure |  |
| Text | Text |  |  |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Share buttons


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Customize — text field


> Saved on the order as a line item property. The label is the property name, so renaming it later will not change existing orders.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | Engraving |  |
| Placeholder | Text |  |  |  |
| Multi-line | On / off |  | false |  |
| Maximum length | Slider | 10–500 ch | 100 |  |
| Required | On / off |  | false |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Customize — checkbox


> Left unticked the property is simply absent from the order, rather than recorded as "No".

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | Add a gift message |  |
| Value when ticked | Text |  | Yes |  |
| Required | On / off |  | false |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Customize — dropdown

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | Gift wrap |  |
| Options | Text (multi-line) |  | Kraft paper Linen None | One per line. |
| Empty choice | Text |  | Choose an option |  |
| Required | On / off |  | false |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Customize — radio

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | Finish |  |
| Options | Text (multi-line) |  | Matte Gloss | One per line. |
| Required | On / off |  | false |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Image

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |
| Link | Link |  |  |  |
| Maximum width | Slider | 60–600 px | 300 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Button

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Label | Text |  | Size guide |  |
| Link | Link |  |  |  |
| Style | Choice | Filled · Outlined · Underlined | outlined |  |
| Open in a new tab | On / off |  | false |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Divider


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Text with icon

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | None · Arrow circle · Book · Cake · Car · Chat · Chat bubble · Chat bubble with smile · Check circle · Clock · Cross · Crown · Cup · Customer service · Delivery · Eco · Email · Exchange · Fire · Flag · Gift · Globe · Handbag · Heart · Help circle · Home with smile · Info · Map pin · Measuring tape · Moon · Phone · Plus circle · Price tag · Question and answer · Quote · Recycle · Restaurant · Smiley · Sparks · Star · Store · Sun · Takeaway · Trophy · Truck · Umbrella · Wallet · Warning circle | truck |  |
| Text | Text |  | Ships in 1–2 business days |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text | Rich text |  | &lt;p&gt;Add supporting copy.&lt;/p&gt; |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

#### Custom Liquid

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Liquid code | Liquid |  |  | For app snippets and other custom code. Store and template objects work here; theme settings do not. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Block position (desktop) | Choice | First column · Second column | first_column | Applies when the section is set to two columns. |
| Bottom spacing | Slider | 0–60 px | 0 |  |

> Supports app blocks — apps you install can add their own content here.

---

## Product recommendations

*File: `sections/product-recommendations.liquid`* — **Add via theme editor**

### Settings


> Products are chosen automatically by Shopify's Product Recommendations API.


**Recommendations**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Recommendation type | Choice | Related · Complementary | related | Complementary products are set up in Shopify's Search &amp; Discovery app. Related products are chosen automatically from order history and product data. |
| Products to show | Slider | 2–10 | 4 |  |
| Fall back to the product's collection | On / off |  | true | New and low-traffic stores often have no recommendations yet. With this on, the section shows other products from the same collection instead of hiding. |
| Show demo products | On / off |  | false | Replaces real products with placeholder cards, for building out a demo store. Turn off before going live. |


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | You may also like |  |
| Heading alignment | Choice | Left · Center · Right | left |  |
| Spacing below heading | Slider | 0–80 px | 44 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Products per row (desktop) | Choice | 2 · 3 · 4 · 5 | 4 |  |
| Top spacing | Slider | 0–120 px | 56 |  |
| Bottom spacing | Slider | 0–120 px | 56 |  |


**Card**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image ratio | Choice | Portrait (4:5) · Tall (3:4) · Square (1:1) · Extra tall | three-four |  |
| Show vendor | On / off |  | false |  |


**Quick Look**


> Button and modal styling for Quick Look is shared across the whole theme — edit it in Theme settings → Quick look.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable Quick Look | On / off |  | true |  |

---

## Promotional popup

*File: `sections/promotional-popup.liquid`* — **Add via theme editor**

### Settings


> A modal offer shown over the page. For a persistent corner widget use Video popup instead; for the same signup form inline on a page use Email signup strip.


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Kicker | Text |  | Members get more |  |
| Heading | Text |  | Take 10% off your first order |  |
| Text | Rich text |  | &lt;p&gt;Join the list for early access to new arrivals, and we'll send a welcome code straight to your inbox.&lt;/p&gt; |  |
| Image | Image |  |  | Optional. Shown beside the text on desktop, above it on mobile. |
| Text alignment | Choice | Left · Center · Right | left |  |
| Color scheme | Color scheme |  | scheme-1 |  |


**Button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Action | Choice | Newsletter signup · Button · No action | newsletter |  |
| Email field label | Text |  | Email address |  |
| Success message | Text |  | Thanks — check your inbox for your code. |  |
| Button label | Text |  | Subscribe |  |
| Button link | Link |  |  |  |
| Dismiss link | Text |  | No thanks | A visible way to decline. Leave empty to rely on the close button alone. |
| Override button colors | On / off |  | false |  |
| Button background | Color |  | #111111 |  |
| Button text color | Color |  | #ffffff |  |


**Trigger**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show popup | Choice | After a delay · After scrolling · On exit intent | delay |  |
| Delay | Slider | 0–30 s | 5 | Exit intent has no cursor to track on a phone, so a delay of at least 8 seconds is used there instead. |
| Scroll depth | Slider | 10–90 % | 30 |  |
| Show again after | Slider | 0–30 d | 7 | Days before a shopper who dismissed it sees it again. Set to 0 to show on every visit. |
| Hide from logged-in customers | On / off |  | true | Existing customers are usually already subscribed. |
| Test mode | On / off |  | false | Opens immediately and ignores the trigger and frequency. Turn off before publishing. |


**Style**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Popup style | Choice | Centered · Corner slide-in | modal | Corner slide-in does not dim or block the rest of the page. |
| Corner | Choice | Bottom left · Bottom right | bottom-right |  |
| Corner width | Slider | 280–520 px | 380 | Applies on desktop. The card is edge-to-edge on mobile. |
| Corner height | Slider | 280–640 px | 420 | Content taller than this scrolls inside the card. Applies on desktop; sizes to its content on mobile. |
| Media position | Choice | Left · Right | left | Applies on desktop. The image always sits above the text on mobile. |
| Image ratio | Choice | Landscape (3:2) · Portrait (4:5) · Square (1:1) · Wide (16:9) | landscape |  |
| Maximum width | Slider | 360–1000 px | 880 |  |
| Border radius | Slider | 0–40 px | 4 |  |
| Heading font size (desktop) | Slider | 18–56 px | 34 |  |
| Heading font size (mobile) | Slider | 16–40 px | 24 |  |
| Overlay | Color |  | #000000 |  |
| Overlay opacity | Slider | 0–90 % | 55 |  |

---

## Quick look

*File: `sections/quick-look.liquid`* — fixed template section

_No section-level settings._

---

## Recently viewed

*File: `sections/recently-viewed.liquid`* — **Add via theme editor**

### Settings


> Fills in from each shopper's own browsing history, so it stays empty here and on a first visit.


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Recently viewed |  |
| Heading alignment | Choice | Left · Center · Right | left |  |
| Spacing below heading | Slider | 0–60 px | 44 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Products to show | Slider | 2–12 | 4 |  |
| Products per row (desktop) | Choice | 2 · 3 · 4 · 5 | 4 |  |


**Card**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image ratio | Choice | Portrait (4:5) · Tall (3:4) · Square (1:1) · Extra tall | portrait |  |
| Show vendor | On / off |  | false |  |
| Enable Quick Look | On / off |  | true |  |


**Section spacing**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Top spacing | Slider | 0–100 px | 56 |  |
| Bottom spacing | Slider | 0–100 px | 56 |  |

---

## Rich text

*File: `sections/rich-text.liquid`* — **Add via theme editor**

### Settings


**Alignment**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Alignment (desktop) | Choice | Left · Center · Right | center |  |
| Alignment (mobile) | Choice | Left · Center · Right | center |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top spacing | Slider | 0–100 px | 40 |  |
| Bottom spacing | Slider | 0–100 px | 40 |  |
| Color scheme | Color scheme |  |  |  |

### Blocks

#### Headline

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Heading |  |
| Font size | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h3 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 16 |  |

#### Text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text | Rich text |  | &lt;p&gt;Use this text block to show store announcements, advertise products and collections, or simply welcome visitors to your store.&lt;/p&gt; |  |
| Font size | Choice | Small · Medium · Large | medium |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 16 |  |

#### Button


**Button link**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button link | Link |  |  |  |
| Button label | Text |  |  | Required to show the button. |


**Style**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |
| Button background | Color |  | #111111 |  |
| Button text | Color |  | #FFFFFF |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom spacing | Slider | 0–60 px | 16 |  |

---

## Scrolling banner

*File: `sections/scrolling-banner.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  |  |  |
| Description | Rich text |  |  |  |
| Alignment | Choice | Left · Center · Right | center |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show fade | On / off |  | true |  |
| Enable borders | On / off |  | false |  |


**Animation**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Animation direction | Choice | Left · Right | left |  |
| Speed | Slider | 1–10 | 5 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top spacing | Slider | 0–100 px | 36 |  |
| Bottom spacing | Slider | 0–100 px | 36 |  |
| Space between blocks (desktop) | Slider | 8–120 px | 48 |  |
| Space between blocks (mobile) | Slider | 8–80 px | 24 |  |
| Color scheme | Color scheme |  | scheme-1 |  |

### Blocks

#### Image

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Upload images | Image |  |  |  |
| Height (desktop) | Slider | 20–400 px | 180 |  |
| Height (mobile) | Slider | 16–240 px | 40 |  |
| Link | Link |  |  |  |

#### Icon

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | Arrow circle · Book · Cake · Car · Chat · Chat bubble · Chat bubble with smile · Check circle · Clock · Cross · Crown · Cup · Customer service · Delivery · Eco · Email · Exchange · Fire · Flag · Gift · Globe · Handbag · Heart · Help circle · Home with smile · Info · Map pin · Measuring tape · Moon · Phone · Plus circle · Price tag · Question and answer · Quote · Recycle · Restaurant · Smiley · Sparks · Star · Store · Sun · Takeaway · Trophy · Truck · Umbrella · Wallet · Warning circle | star |  |
| Height (desktop) | Slider | 16–200 px | 24 |  |
| Height (mobile) | Slider | 12–120 px | 20 |  |

---

## Scrolling text

*File: `sections/scrolling-text.liquid`* — **Add via theme editor**

### Settings


**Animation**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Speed | Slider | 1–10 | 5 |  |
| Animation direction | Choice | Left · Right | left |  |
| Pause on hover | On / off |  | true |  |


**Style**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text size | Slider | 11–24 px | 14 |  |
| Show fade | On / off |  | true |  |
| Enable borders | On / off |  | false |  |
| Color scheme | Color scheme |  | scheme-1 |  |


**Spacing**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Space between blocks (desktop) | Slider | 8–120 px | 48 |  |
| Space between blocks (mobile) | Slider | 8–80 px | 24 |  |
| Top spacing | Slider | 0–60 px | 12 |  |
| Bottom spacing | Slider | 0–60 px | 12 |  |

### Blocks

#### Text

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | None · Arrow circle · Book · Cake · Car · Chat · Chat bubble · Chat bubble with smile · Check circle · Clock · Cross · Crown · Cup · Customer service · Delivery · Eco · Email · Exchange · Fire · Flag · Gift · Globe · Handbag · Heart · Help circle · Home with smile · Info · Map pin · Measuring tape · Moon · Phone · Plus circle · Price tag · Question and answer · Quote · Recycle · Restaurant · Smiley · Sparks · Star · Store · Sun · Takeaway · Trophy · Truck · Umbrella · Wallet · Warning circle | none |  |
| Heading | Text |  | FREE SHIPPING |  |
| Text | Text |  | on orders over $150 |  |
| Link | Link |  |  |  |

---

## Search results

*File: `sections/search.liquid`* — fixed template section

### Settings


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Width | Choice | Page · Full width | page | Page constrains the section to your theme's page width. Full width stretches edge-to-edge. |
| Side padding (full width) | Slider | 0–100 px | 40 | Only applies when Width is set to Full width. |
| Apply side padding on mobile | On / off |  | false | When off, side padding is removed on screens below 750px for a true edge-to-edge mobile look. |
| Offset for overlay header | On / off |  | false | Enable when your header is set to 'Over content'. Adds top padding equal to the header height so the collection title isn't hidden behind it. |
| Top padding | Slider | 0–100 px | 20 |  |
| Bottom padding | Slider | 0–100 px | 20 |  |
| Header alignment | Choice | Left · Center · Right | left |  |


**Search Field**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Search field max width | Slider | 280–800 px | 480 | Ignored when 'Full width search field' is enabled below. |
| Full width search field | On / off |  | false |  |
| Search field side padding for mobile | Slider | 0–40 px | 0 | Adds horizontal padding around the search field on screens below 750px. Useful when the section Width is set to Full width. |
| Search field corner style | Choice | Pill · Rounded · Square | pill |  |
| Show search icon | On / off |  | true |  |
| Search button style | Choice | Filled · Outline · Text only · Icon only | filled |  |


**Grid Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Results per page | Slider | 4–36 | 16 |  |
| Products per row (desktop) | Slider | 2–5 | 4 |  |
| Products per row (mobile) | Choice | 1 product · 2 products | 2 |  |
| Product image ratio | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | three-four |  |
| Show secondary image on hover | On / off |  | true |  |
| Show discount percentage | On / off |  | true |  |
| Show product vendor | On / off |  | false |  |
| Product card alignment | Choice | Left · Center · Right | left |  |


**Filtering**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable filtering | On / off |  | true | Requires filters to be configured for search results via the Search &amp; Discovery app. |
| Desktop filter layout | Choice | Top bar / Mobile style · Sidebar left | topbar |  |


**Sorting**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable sorting | On / off |  | true |  |


**Quick Look**


> Button and modal styling for Quick Look is shared across the whole theme — edit it in Theme settings → Quick look.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable Quick Look | On / off |  | true |  |

---

## Shop the look

*File: `sections/shop-the-look.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Shop the look |  |
| Description | Rich text |  |  |  |
| Heading alignment | Choice | Left · Center · Right | center |  |
| Color scheme | Color scheme |  | scheme-1 |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Layout | Choice | Overlay (cards over image) · Split (image beside cards) | overlay | Overlay lays the product cards over the image. Split puts them in a column beside it. Both stack on mobile. |
| Image position | Choice | Left · Right | left |  |
| Image width | Slider | 40–70 % | 60 |  |
| Section width | Choice | Content width · Full width | page |  |
| Look image ratio | Choice | Adapt to image · Square (1:1) · Portrait (4:5) · Landscape (4:3) · Wide (16:9) | landscape | A fixed ratio keeps the section from resizing as customers move between looks. |
| Top padding | Slider | 0–100 px | 36 |  |
| Bottom padding | Slider | 0–100 px | 36 |  |
| Spacing below heading | Slider | 0–80 px | 36 |  |


**Hotspots**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Hotspot style | Choice | Dot · Plus · Number | dot |  |
| Hotspot size | Slider | 16–40 px | 24 |  |
| Animate hotspots | On / off |  | true | A slow pulse that draws the eye to the pins. Skipped for visitors who ask for reduced motion. |
| Show product tooltip | On / off |  | true | Shows the product's name and price when a hotspot is hovered on desktop. |


**Product cards**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Card style | Choice | Auto (match layout) · Compact (thumbnail beside text) · Standard (image above text) | auto | Auto uses compact cards in the Overlay layout and standard cards in the Split layout. |
| Cards visible (desktop) | Slider | 2–5 | 4 |  |
| Cards visible (desktop) | Slider | 1–3 | 1 |  |
| Card image ratio | Choice | Square (1:1) · Portrait (4:5) · Portrait (3:4) · Tall (10:16) | portrait | Standard cards only — compact cards always use a square thumbnail. |
| Show product vendor | On / off |  | false |  |
| Show price | On / off |  | true |  |


**Quick Look**


> Button and modal styling for Quick Look is shared across the whole theme — edit it in Theme settings → Quick look.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable Quick Look | On / off |  | true |  |

### Blocks

#### Look

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  | 1600px wide or larger recommended. Leave empty to show a placeholder. |
| Look label | Text |  |  | Optional. Shown above this look's product cards. |
| Hotspot color | Color |  | #ffffff | Pick a color that stands out against this look's image. |


**Product one**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Product | Product |  |  |  |
| Horizontal position | Slider | 0–100 % | 25 |  |
| Vertical position | Slider | 0–100 % | 30 |  |


**Product two**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Product | Product |  |  |  |
| Horizontal position | Slider | 0–100 % | 45 |  |
| Vertical position | Slider | 0–100 % | 62 |  |


**Product three**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Product | Product |  |  |  |
| Horizontal position | Slider | 0–100 % | 70 |  |
| Vertical position | Slider | 0–100 % | 40 |  |


**Product four**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Product | Product |  |  |  |
| Horizontal position | Slider | 0–100 % | 30 |  |
| Vertical position | Slider | 0–100 % | 80 |  |


**Product five**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Product | Product |  |  |  |
| Horizontal position | Slider | 0–100 % | 80 |  |
| Vertical position | Slider | 0–100 % | 75 |  |

---

## Slideshow

*File: `sections/slideshow.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |


**Desktop**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Section height | Choice | Original · Small · Medium · Large · Extra large · Full screen | x-large |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Section height | Choice | Original · Small · Medium · Large · Extra large · Full screen | x-large |  |


**Slides**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Slide navigation style | Choice | None · Arrows · Bars · Dots | dots |  |
| Change slides every | Slider | 0–10 s | 5 | Set to 0 to disable auto-advance. |


**Content and text**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Bottom content spacing | Slider | 0–160 px | 64 | Extra space between bottom-positioned content and the slide navigation. Increase if text overlaps the dots or arrows. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Width | Choice | Content width · Full width | full |  |
| Top spacing | Slider | 0–100 px | 0 |  |
| Bottom spacing | Slider | 0–100 px | 0 |  |

### Blocks

#### Slide

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Your story begins here. |  |
| Text | Rich text |  |  |  |


**Buttons**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| First button link | Link |  |  |  |
| First button label | Text |  | Shop now | The whole slide will act as a link if label is left empty. |
| Second button link | Link |  |  |  |
| Second button label | Text |  |  |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |
| Primary color | Color |  | #FFFFFF |  |
| Secondary color | Color |  | #35382E | Only applies to text when Button style is 'Filled'. |


**Desktop**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  |  |
| Content position | Choice | Center left · Center · Center right · Bottom left · Bottom · Bottom right | center-left |  |
| Heading font size | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h1 |  |
| Body text size | Choice | Small · Medium · Large | body |  |


**Mobile**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image (Optional) | Image |  |  |  |
| Content position | Choice | Center left · Center · Center right · Bottom left · Bottom · Bottom right | center-left |  |
| Heading font size | Choice | H1 · H2 · H3 · H4 · H5 · H6 | h2 |  |
| Body text size | Choice | Small · Medium · Large | body |  |


**Color**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Text | Color |  | #FFFFFF |  |
| Overlay | Color |  | #262428 |  |
| Overlay opacity | Slider | 0–100 % | 40 |  |

---

## Social feed

*File: `sections/social-feed.liquid`* — **Add via theme editor**

### Settings


> Add images as blocks to build the wall. This is a set you upload and curate — it doesn't connect to a social account.


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Follow Us on Instagram |  |
| Description | Rich text |  | &lt;p&gt;Experience the best of our brand on Instagram, follow us for behind-the-scenes access.&lt;/p&gt; |  |
| Text alignment | Choice | Left · Center · Right | left |  |
| Profile picture | Image |  |  | Square images work best. 96 × 96 px or larger. |
| Account name | Text |  | @yourbrand |  |
| Follower count | Text |  | 13k Followers | Free text — update it yourself as the count changes. |
| Color scheme | Color scheme |  | scheme-1 |  |


**Button**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button label | Text |  | Follow @yourbrand |  |
| Button link | Link |  |  |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false |  |
| Button background | Color |  | #111111 |  |
| Button text color | Color |  | #ffffff |  |


**Animation**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Animation direction | Choice | Vertical · Horizontal | vertical | Vertical scrolls the columns up and down. Horizontal scrolls the rows sideways. |
| Speed | Slider | 10–120 | 40 | Pixels travelled per second. The pace stays the same however many images you add. |
| Alternate direction | On / off |  | true | Every second column travels the opposite way. |
| Pause on hover | On / off |  | true |  |
| Show fade | On / off |  | true | Softens the images where they meet the edge of the section. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Media position | Choice | Left · Right | right |  |
| Text width (desktop) | Slider | 25–55 % | 36 | Share of the row given to the text. The images take the rest. |
| Space between text and images | Slider | 16–120 px | 64 |  |
| Columns | Slider | 2–5 | 3 | Stays the same on mobile — the images get narrower rather than rewrapping onto a second row. |
| Rows | Slider | 1–3 | 2 |  |
| Image area height (desktop) | Slider | 240–800 px | 520 |  |
| Image area height (mobile) | Slider | 160–600 px | 340 |  |
| Image width (desktop) | Slider | 120–400 px | 240 |  |
| Image width (mobile) | Slider | 90–280 px | 180 |  |
| Spacing between images | Slider | 0–40 px | 16 |  |
| Image ratio | Choice | Portrait (4:5) · Square (1:1) · Landscape (3:2) · Wide (16:9) | portrait |  |


**Style**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading font size (desktop) | Slider | 20–72 px | 44 |  |
| Heading font size (mobile) | Slider | 18–48 px | 30 |  |
| Profile picture size | Slider | 32–80 px | 48 |  |


**Padding**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top padding | Slider | 0–120 px | 64 |  |
| Bottom padding | Slider | 0–120 px | 64 |  |

### Blocks

#### Image

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Image | Image |  |  | Alt text set on the file is read out by screen readers. |
| Link | Link |  |  | Opens in a new tab. Link to the post, or leave empty. |

---

## Social proof

*File: `sections/social-proof.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |


**Rating**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show star rating | On / off |  | true |  |
| Rating value | Slider | 1–5 | 5 | This value is typed in, not read from a review app. Use the genuine average rating your store has earned. |
| Star color | Color |  | #d4a13d |  |
| Rating caption | Text |  | Trusted by Those Who Lounge in Luxury |  |


**Content**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | What Our Customers Are Saying |  |
| Description | Rich text |  | &lt;p&gt;Crafted with the finest materials and designed for the modern woman, our pieces promise unparalleled comfort without compromising on style.&lt;/p&gt; |  |
| Button label | Text |  |  |  |
| Button link | Link |  |  |  |
| Button style | Choice | Filled · Outlined · Underlined | filled |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Testimonial layout | Choice | Stacked list · Vertical auto-scroll | stack |  |
| Content alignment | Choice | Top · Middle · Bottom | top | Vertical position of the heading/description column next to the testimonials. |
| Content follows page scroll | On / off |  | false | When on, the heading/description column stays pinned in view as visitors scroll past the testimonials. Turn off to keep it in normal position. |
| Scroll area height | Slider | 320–960 px | 640 |  |
| Scroll speed | Slider | 10–90 s | 40 | Seconds per full loop. Lower is faster. |
| Space between testimonials | Slider | 8–48 px | 24 |  |
| Top padding | Slider | 0–160 px | 80 |  |
| Bottom padding | Slider | 0–160 px | 80 |  |

### Blocks

#### Testimonial

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Cover image | Image |  |  | Shown before the video plays. If left blank, a YouTube video will use its default thumbnail automatically. |
| Shopify-hosted video | Video |  |  | Optional. Takes priority over the Video URL field below. |
| Video URL | Text |  |  | Optional. Accepts a YouTube or Vimeo link. Shows when no Shopify-hosted video is selected. |
| Video/image ratio | Choice | Default (4:3, zoomed) · 1:1 (Square) · 4:3 (Landscape) · 3:4 (Portrait) · 16:9 (Landscape) · 9:16 (portrait / Reels) · Custom | default | Leave on Default to keep the current cropped/zoomed 4:3 frame. |
| Custom ratio — width | Slider | 1–21 | 16 |  |
| Custom ratio — height | Slider | 1–21 | 9 |  |
| Quote | Rich text |  | &lt;p&gt;Witness the meticulous process where luxury fabric meets masterful tailoring, creating timeless loungewear pieces.&lt;/p&gt; |  |
| Author | Text |  | @LuxeClothing |  |
| Show verified badge | On / off |  | false | Displays a checkmark next to the author name. Use it only for reviews you have confirmed came from a real customer. |
| Date | Text |  | 2027-01-01 |  |

---

## Testimonials

*File: `sections/testimonials.liquid`* — **Add via theme editor**

### Settings


> Short written quotes as cards. For video and Reels-shaped clips, use the Social proof section instead.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | What our customers say |  |
| Subheading | Rich text |  | &lt;p&gt;Real words from people who shop with us.&lt;/p&gt; |  |
| Heading alignment | Choice | Left · Center · Right | center |  |
| Color scheme | Color scheme |  | scheme-1 |  |


**Card**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Card style | Choice | Bordered · Filled · Plain — no card | bordered |  |
| Text alignment | Choice | Left · Center · Right | left |  |
| Show quote mark | On / off |  | true |  |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Layout (desktop) | Choice | Grid · Carousel | grid |  |
| Columns per row (desktop) | Slider | 2–4 | 3 |  |
| Layout (mobile) | Choice | Grid · Carousel | slider |  |
| Columns per row (mobile) | Choice | 1 column · 2 columns | 1 |  |


**Padding**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top padding | Slider | 0–100 px | 48 |  |
| Bottom padding | Slider | 0–100 px | 48 |  |
| Spacing below heading | Slider | 0–80 px | 36 |  |

### Blocks

#### Testimonial

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Quote | Rich text |  | &lt;p&gt;Exactly what I hoped for. The quality is obvious the moment you unwrap it, and it has held up beautifully.&lt;/p&gt; |  |
| Rating | Slider | 0–5 | 5 | Type in the rating this customer actually gave. Set to 0 to hide the stars on this one. |
| Author | Text |  | Alex Moreau |  |
| Author detail | Text |  |  | Shown under the name — a place, a job title, or 'Verified buyer'. |
| Image | Image |  |  | Optional. Square images work best — it is cropped to a circle. |
| Product reviewed | Product |  |  | Optional. Adds a link to the product under the quote. |

---

## Text adverts

*File: `sections/text-adverts.liquid`* — **Add via theme editor**

### Settings

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show dividers | On / off |  | true |  |
| Autoplay carousel | Choice | Disable · Only mobile · Only desktop (shows three blocks at once) · Both | disable | Slides one block at a time. Pauses on hover/touch. |
| Text alignment | Choice | Left · Center · Right | center |  |


**Buttons**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top spacing | Slider | 0–100 px | 32 |  |
| Bottom spacing | Slider | 0–100 px | 24 |  |
| Color scheme | Color scheme |  | scheme-1 |  |

### Blocks

#### Text


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Heading |  |
| Text | Rich text |  | &lt;p&gt;Draw attention to key selling points.&lt;/p&gt; |  |


**Link**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Link | Link |  |  |  |
| Button label | Text |  |  |  |
| Button background | Color |  | #111111 |  |
| Button text | Color |  | #FFFFFF |  |

---

## Text adverts with icon

*File: `sections/text-adverts-with-icon.liquid`* — **Add via theme editor**

### Settings


**Icon**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon size | Choice | Small · Medium · Large | medium |  |
| Show dividers | On / off |  | true |  |
| Autoplay carousel | Choice | Disable · Only mobile · Only desktop (shows three blocks at once) · Both | disable | Slides one block at a time. Pauses on hover/touch. |
| Text alignment | Choice | Left · Center · Right | center |  |


**Buttons**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Button style | Choice | Filled · Outlined · Underlined | filled |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Top spacing | Slider | 0–100 px | 32 |  |
| Bottom spacing | Slider | 0–100 px | 24 |  |
| Color scheme | Color scheme |  | scheme-1 |  |

### Blocks

#### Icon

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Icon | Choice | None · Arrow circle · Book · Cake · Car · Chat · Chat bubble · Chat bubble with smile · Check circle · Clock · Cross · Crown · Cup · Customer service · Delivery · Eco · Email · Exchange · Fire · Flag · Gift · Globe · Handbag · Heart · Help circle · Home with smile · Info · Map pin · Measuring tape · Moon · Phone · Plus circle · Price tag · Question and answer · Quote · Recycle · Restaurant · Smiley · Sparks · Star · Store · Sun · Takeaway · Trophy · Truck · Umbrella · Wallet · Warning circle | recycle |  |


**Custom icon**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Upload image | Image |  |  | Aspect ratio of 1:1 recommended. Overrides the icon above when set. |


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  | Heading |  |
| Text | Rich text |  | &lt;p&gt;Draw attention to key selling points.&lt;/p&gt; |  |


**Link**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Link | Link |  |  |  |
| Button label | Text |  |  |  |
| Button background | Color |  | #111111 |  |
| Button text | Color |  | #FFFFFF |  |

---

## Video

*File: `sections/video.liquid`* — **Add via theme editor**

### Settings


**Heading**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Heading | Text |  |  |  |
| Description | Rich text |  |  |  |
| Heading alignment | Choice | Left · Center · Right | left |  |
| Spacing below heading | Slider | 0–80 px | 40 |  |


**Media**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Video | Video |  |  |  |
| or embed video from URL | Video URL |  |  | Shows when no Shopify-hosted video is selected. Accepts YouTube and Vimeo. |
| Cover image | Image |  |  | Shown before the video plays. If left blank, a YouTube video will use its default thumbnail automatically. |
| Video alt text | Text |  |  | Describe the video for customers using screen readers. |


**Style**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Autoplay | On / off |  | false | Autoplaying video is muted and looped, which is what browsers require. |
| Loop product videos | On / off |  | false |  |
| Show controls | On / off |  | true | Adds a play/pause and sound button over the video. Applies to uploaded video only — YouTube and Vimeo keep their own controls. |
| Controls position | Choice | Top left · Top right · Bottom left · Bottom right | bottom_right |  |
| Section height | Choice | Auto · Small · Medium · Large · Extra large | auto |  |
| Width | Choice | Content width · Full width | content |  |
| Overlay opacity | Slider | 0–80 % | 0 |  |


**Section spacing**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Color scheme | Color scheme |  | scheme-1 |  |
| Top spacing | Slider | 0–100 px | 56 |  |
| Bottom spacing | Slider | 0–100 px | 56 |  |

---

## Video popup

*File: `sections/video-popup.liquid`* — **Add via theme editor**

### Settings


**Video**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Select | Video |  |  |  |
| URL | Text |  |  | Accepts YouTube and Vimeo. Shows when no Shopify-hosted video is selected. |


> ⚠ If this URL isn't a valid YouTube or Vimeo link, a red warning banner will appear at the bottom of the preview while you're editing — fix it before publishing.

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Video alt text | Text |  |  | Describe the video for customers using screen readers. |


**Widget**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Shape | Choice | Square · Tall · Wide · Circle | tall |  |
| Size | Choice | Small · Medium · Large | small |  |
| Image | Image |  |  | Optional. Overrides the auto-generated YouTube thumbnail. Use for Vimeo videos or to customize the widget appearance. |


**Expanded video**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Shape | Choice | Square · Tall · Wide · Circle | tall |  |
| Size | Choice | Small · Medium · Large | medium |  |


**End of video**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Enable test mode | On / off |  | false | Forces the popup and end screen to appear immediately on every page load. For editing only — must be turned off before publishing. |
| Show button on video click | On / off |  | false |  |
| Link | Link |  |  |  |
| Button label | Text |  | Explore our collections |  |
| End screen color scheme | Choice | General · First · Second · Third | scheme-3 |  |
| Override button colors | On / off |  | false | Enable to reveal button color options. |
| Button background | Color |  | #111111 |  |
| Button text color | Color |  | #FFFFFF |  |
| Button border | Color |  | #111111 |  |


**Triggers**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Show on... | Choice | All pages · Home page only | all |  |
| Show on exit intent (desktop) | On / off |  | false | The popup will only show when the user moves the cursor away from the store. |
| Show after | Slider | 0–30 s | 0 | Delay is disabled in theme editor for visibility. Does not apply to 'Exit intent'. |
| Frequency | Slider | 0–30 d | 0 | Number of days before a dismissed popup reappears. |
| Disable for account holders | On / off |  | false | Will not be shown to customers who have created an account. |


**Layout**

| Setting | Type | Options | Default | Notes |
|---|---|---|---|---|
| Position (desktop) | Choice | Bottom left · Bottom right | bottom-left |  |

---

