/* Generates the settings reference from the theme's own schemas, so the docs
   cannot drift from the code. Run from the theme root; writes into OUT. */
const fs = require('fs');
const path = require('path');

const OUT = process.argv[2];
if (!OUT) { console.error('usage: node gen-docs.js <output-dir>'); process.exit(1); }
fs.mkdirSync(OUT, { recursive: true });

const raw = fs.readFileSync('locales/en.default.schema.json', 'utf8');
const locale = JSON.parse(raw.replace(/^\s*\/\*[\s\S]*?\*\/\s*/, ''));
const t = (v) => {
  if (typeof v !== 'string') return v;
  if (!v.startsWith('t:')) return v;
  const r = v.slice(2).split('.').reduce((o, k) => (o == null ? undefined : o[k]), locale);
  return typeof r === 'string' ? r : v.slice(2);
};
/* Pipes break table cells; angle brackets in default values (rich text ships
   as "<p>…</p>") would otherwise be parsed as markup by the Markdown renderer. */
const esc = (s) => String(s)
  .replace(/\|/g, '\\|')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/\n+/g, ' ')
  .trim();

const TYPE_LABEL = {
  text: 'Text', textarea: 'Text (multi-line)', richtext: 'Rich text', html: 'HTML',
  liquid: 'Liquid', image_picker: 'Image', video: 'Video', video_url: 'Video URL',
  url: 'Link', collection: 'Collection', collection_list: 'Collections',
  product: 'Product', product_list: 'Products', blog: 'Blog', page: 'Page',
  link_list: 'Menu', color: 'Color', color_background: 'Color', color_scheme: 'Color scheme',
  color_scheme_group: 'Color schemes', font_picker: 'Font', range: 'Slider',
  checkbox: 'On / off', select: 'Choice', radio: 'Choice', number: 'Number',
  article: 'Article', inline_richtext: 'Text',
};

function settingsTable(settings) {
  if (!Array.isArray(settings)) return '';
  const rows = [];
  for (const s of settings) {
    if (!s || typeof s !== 'object') continue;
    if (s.type === 'header') { rows.push(['__H__', t(s.content)]); continue; }
    if (s.type === 'paragraph') { rows.push(['__P__', t(s.content)]); continue; }
    if (!s.id) continue;
    const label = t(s.label) || s.id;
    const type = TYPE_LABEL[s.type] || s.type;
    let opts = '';
    if (Array.isArray(s.options)) opts = s.options.map((o) => t(o.label)).filter(Boolean).join(' · ');
    if (s.type === 'range') opts = `${s.min}–${s.max}${s.unit ? ' ' + s.unit : ''}`;
    const info = s.info ? t(s.info) : '';
    const dflt = s.default !== undefined && typeof s.default !== 'object' ? String(s.default) : '';
    rows.push([label, type, opts, dflt, info]);
  }
  if (!rows.length) return '';

  let md = '';
  let open = false;
  const closeTable = () => { if (open) { md += '\n'; open = false; } };
  for (const r of rows) {
    if (r[0] === '__H__') { closeTable(); md += `\n**${r[1]}**\n\n`; continue; }
    if (r[0] === '__P__') { closeTable(); md += `\n> ${r[1]}\n\n`; continue; }
    if (!open) {
      md += '| Setting | Type | Options | Default | Notes |\n|---|---|---|---|---|\n';
      open = true;
    }
    md += `| ${esc(r[0])} | ${esc(r[1])} | ${esc(r[2])} | ${esc(r[3])} | ${esc(r[4])} |\n`;
  }
  return md + '\n';
}

/* ── Section pages ─────────────────────────────────────────────────────── */
const sections = [];
for (const f of fs.readdirSync('sections').filter((x) => x.endsWith('.liquid'))) {
  const src = fs.readFileSync(path.join('sections', f), 'utf8');
  const m = src.match(/{%-?\s*schema\s*-?%}([\s\S]*?){%-?\s*endschema/);
  if (!m) continue;
  let sch;
  try { sch = JSON.parse(m[1]); } catch { continue; }
  const name = t(sch.name) || f.replace(/\.liquid$/, '');
  const addable = Array.isArray(sch.presets) && sch.presets.length > 0;
  sections.push({ file: f, name, addable, sch });
}
sections.sort((a, b) => a.name.localeCompare(b.name));

let ref = `# Sections reference\n\nEvery section in Evoke, with all of its settings.\n\n`;
ref += `Sections marked **Add via theme editor** can be added to any page from *Customize → Add section*. `;
ref += `The rest are fixed parts of a specific template (the product page's main section, the header, the footer, and so on).\n\n`;
ref += `## Contents\n\n`;
for (const s of sections) ref += `- [${s.name}](#${s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')})\n`;
ref += '\n---\n\n';

for (const s of sections) {
  ref += `## ${s.name}\n\n`;
  ref += `*File: \`sections/${s.file}\`* — ${s.addable ? '**Add via theme editor**' : 'fixed template section'}\n\n`;
  const st = settingsTable(s.sch.settings);
  if (st) { ref += `### Settings\n\n${st}`; } else { ref += `_No section-level settings._\n\n`; }
  const blocks = (s.sch.blocks || []).filter((b) => b && b.type && b.type !== '@app' && b.type !== '@theme');
  if (blocks.length) {
    ref += `### Blocks\n\n`;
    for (const b of blocks) {
      ref += `#### ${t(b.name) || b.type}\n\n`;
      const bt = settingsTable(b.settings);
      ref += bt || `_No settings._\n\n`;
    }
  }
  if ((s.sch.blocks || []).some((b) => b && b.type === '@app')) {
    ref += `> Supports app blocks — apps you install can add their own content here.\n\n`;
  }
  ref += '---\n\n';
}
fs.writeFileSync(path.join(OUT, 'sections-reference.md'), ref);

/* ── Theme settings page ───────────────────────────────────────────────── */
const ss = JSON.parse(fs.readFileSync('config/settings_schema.json', 'utf8'));
let th = `# Theme settings\n\nSettings that apply across the whole store. Find them in *Customize → Theme settings*.\n\n`;
th += `## Contents\n\n`;
const groups = ss.filter((g) => g.name !== 'theme_info');
for (const g of groups) { const n = t(g.name); th += `- [${n}](#${n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')})\n`; }
th += '\n---\n\n';
for (const g of groups) {
  th += `## ${t(g.name)}\n\n`;
  th += settingsTable(g.settings) || '_No settings._\n\n';
}
fs.writeFileSync(path.join(OUT, 'theme-settings.md'), th);

console.log(`sections documented: ${sections.length} (${sections.filter((s) => s.addable).length} addable)`);
console.log(`theme setting groups: ${groups.length}`);
console.log(`written: sections-reference.md, theme-settings.md`);
