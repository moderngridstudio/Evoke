[← Documentation home](index.md)

# Product content

Size guides and FAQs can be set once for the whole store, or set per product for the ones that differ. Most stores want both: a sensible store-wide answer, and overrides on the products that need them.

Everything here is set up in Shopify admin, not in the theme editor. No apps, no code.

---

## Size guide

The size guide adds a link beside the size option on a product. Clicking it opens a panel over the page, so the shopper never leaves what they were looking at. It appears on the product page and inside Quick Look.

### Turn it on

Go to **Customize → Theme settings → Size guide**.

1. Switch on **Show size guide**
2. Set **Size option name** to match your product option — for example `Size`. Case and spacing are ignored, so `size`, `Size ` and `SIZE` all match. If it doesn't match, no link appears and nothing in the editor explains why.
3. Set **Link label** if you want something other than "Size guide"

### Build the table

Under **Or build a table here**:

| Field | What to enter |
|---|---|
| **Column headings** | Separated by commas — `Size, Chest, Waist, Length` |
| **Rows** | One size per line, cells separated by commas. The first cell of each line is the size. |
| **Unit label** | `cm` |
| **Rows in a second unit** | Optional. The same sizes converted — this is what gives shoppers a unit toggle. |
| **Second unit label** | `in` |
| **Note below the table** | Optional. Somewhere to explain how to measure. |

Rows look like this:

```
XS, 81, 61, 66
S, 86, 66, 68
M, 91, 71, 70
```

Building the table rather than using a page gets you two things a page can't:

- **A unit toggle**, if you fill in the second unit
- **Row highlighting** — the row for the size the shopper has selected highlights as they change variant

> **Replace the example measurements.** Evoke ships with a filled-in example table so you can see the feature working. Those numbers are invented. Clear them or replace them before you go live.

### Or use a page

Prefer to write your size guide as a normal page? Pick it under **Size guide page** and leave the table empty. Any page content works — the panel shows it verbatim.

**The table wins over the page.** If the table has anything in it, the page is ignored. Since the table ships pre-filled, you have to clear it before a page will show.

---

## A different size chart per product

Three ways, and Evoke uses the most specific one a product actually has. All three are product metafields, set in **Shopify admin → Products → (a product) → Metafields**.

### A shared chart — best for more than a handful of products

Create a **Size chart** metaobject (see **Creating the metaobject definitions** in this section), add one entry per chart you really use — "Women's tops", "Men's denim" — then point each product at the right one.

Add a product metafield:

| Namespace and key | Type |
|---|---|
| `custom.size_chart` | **Metaobject reference → Size chart** |

Every product cut to the same chart points at the same entry, so a correction lands on all of them at once. This is the reason to prefer metaobjects over typing rows onto each product.

A chart used this way is used **whole** — its own headings, units and note. Nothing is mixed in from Theme settings, because pairing one product's centimetre rows with the store's inch headings would quietly show shoppers wrong measurements.

### A page for one product

Same metafield, different type:

| Namespace and key | Type |
|---|---|
| `custom.size_chart` | **Page reference** |

Any page content works, but you lose the unit toggle and the row highlighting.

### Rows typed onto one product

For the single odd product that needs its own numbers and nothing else:

| Namespace and key | Type |
|---|---|
| `custom.size_chart_rows` | **Multi-line text** |

Same format as the theme setting — one size per line, cells separated by commas. Column headings, units and the note come from **Theme settings → Size guide**, so only the numbers are yours.

Want a unit toggle on that product too? Add `custom.size_chart_rows_alt`, also **Multi-line text**, with the same sizes converted.

---

## Product FAQs

FAQs appear inside **Quick Look** — the modal that opens from a product card. They do not appear on the product page.

### Store-wide

Go to **Customize → Theme settings → Quick look → FAQs**.

Switch on **Show FAQ section** and fill in up to four question and answer pairs. Leave a question blank to skip it.

They render as an accordion under the heading "Frequently Asked Questions", closed by default.

> **Rewrite the example answers before you go live.** Evoke ships with **Show FAQ section** already on and four placeholder answers filled in — including a 30-day, no-questions-asked returns promise. Those are demonstration copy, not your policy. Replace them or switch the section off.

---

## Different FAQs per product

Two ways, both product metafields set in **Shopify admin → Products → (a product) → Metafields**.

### Reusable questions

Create a **Product FAQ** metaobject (see **Creating the metaobject definitions** in this section) and add one entry per question — "Do these run large?", "How long does delivery take?".

Add a product metafield:

| Namespace and key | Type |
|---|---|
| `custom.faqs` | **Metaobject reference → Product FAQ**, with turn on **List of values** so a product can carry several |

Entries are reusable: write the shipping answer once and attach it to everything. A single reference works too if a product only ever needs one question.

### Typed onto one product

| Namespace and key | Type |
|---|---|
| `custom.faqs_text` | **Multi-line text** |

One FAQ per line, question and answer separated by a pipe:

```
Do these run large? | They fit true to size. Between sizes, size down.
When will it ship? | Within two working days.
```

An answer can contain a pipe of its own — only the first one on each line splits the question from the answer.

### Two things to know

- A product with FAQs of its own shows **only those**. The store-wide four are replaced, not added to, because merging them would show your shipping answer twice as soon as you repeated it on a product.
- Product FAQs show **whether or not Show FAQ section is on**. Filling in the metafield is taken as saying you want them.

---

## Creating the metaobject definitions

You only do this once. In Shopify admin, go to **Settings → Custom data → Metaobjects → Add definition**.

### Size chart

Name it **Size chart**, then add these fields. The field names must match exactly — that is how the theme finds them.

| Field name | Type | Required? |
|---|---|---|
| `columns` | Single line text | Recommended |
| `rows` | Multi-line text | **Yes** — an entry with no rows is skipped |
| `unit_primary` | Single line text | Optional |
| `rows_alt` | Multi-line text | Optional — fill in for a unit toggle |
| `unit_alt` | Single line text | Optional |
| `note` | Rich text | Optional |

`unit` is accepted in place of `unit_primary` if you have already named it that.

### Product FAQ

Name it **Product FAQ**, then add:

| Field name | Type | Required? |
|---|---|---|
| `question` | Single line text | **Yes** — an entry with no question is skipped |
| `answer` | Rich text | Optional |

`title` is accepted in place of `question`, and `content` in place of `answer` — those are the names Shopify pre-fills on a generic definition, so an existing one usually works untouched.

### Then create the product metafields

Go to **Settings → Custom data → Products → Add definition** and create the ones you need from the tables above. Leave the namespace as `custom`, which is what Shopify fills in by default.

---

## Which source wins

Evoke always uses the most specific source a product actually has, and each step tests for real content — a metaobject that was linked but never filled in, or a page since deleted, falls through to the next source instead of turning the feature off for that one product.

### Size guide

| | Source |
|---|---|
| 1 | `custom.size_chart` → a Size chart metaobject |
| 2 | `custom.size_chart_rows` → rows typed on the product |
| 3 | `custom.size_chart` → a page |
| 4 | **Theme settings → Size guide** → the table |
| 5 | **Theme settings → Size guide** → the size guide page |

### FAQs

| | Source |
|---|---|
| 1 | `custom.faqs` → Product FAQ metaobjects |
| 2 | `custom.faqs_text` → questions typed on the product |
| 3 | **Theme settings → Quick look → FAQs** → the four store-wide questions |

### If nothing appears

- **Size guide link is missing.** Check **Show size guide** is on, and that **Size option name** matches the product's option. A product with no size option never shows the link.
- **The wrong chart appears.** Something further up the list is set. A store-wide table you forgot to clear beats a size guide page.
- **FAQs are missing.** Check **Show FAQ section** in **Theme settings → Quick look**, and remember they only appear inside Quick Look, not on the product page.
