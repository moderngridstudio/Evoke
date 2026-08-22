/* Docs site behaviour: mobile nav and client-side search.
   No dependencies. The search index is a single JSON file emitted by build.js
   and fetched lazily — nothing loads until the visitor focuses the field. */

(function () {
  'use strict';

  /* ── Mobile navigation ───────────────────────────────────────────────── */

  var toggle = document.querySelector('.navtoggle');
  var nav = document.getElementById('sitenav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* ── Search ──────────────────────────────────────────────────────────── */

  var input = document.querySelector('[data-search]');
  var panel = document.querySelector('[data-search-results]');
  if (!input || !panel) return;

  /* The stylesheet always sits at <root>/assets/docs.css, so its resolved href
     is the one thing on the page that reveals where the site root is. Both the
     index and every result link hang off it — which is what lets the same build
     work from disk, from a domain root and from a project subdirectory without
     anything being configured. */
  var sheet = document.querySelector('link[rel="stylesheet"]');
  var siteRoot = new URL('../', sheet.href).href;
  var indexUrl = siteRoot + 'search-index.json';

  var docs = null;
  var loading = false;

  function load() {
    if (docs || loading) return;
    loading = true;
    fetch(indexUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) { docs = data; loading = false; if (input.value) run(); })
      .catch(function () { loading = false; });
  }

  input.addEventListener('focus', load, { once: true });

  /* Scores a document against the query terms. Title hits outrank body hits,
     and a whole-phrase hit outranks scattered terms, which is what keeps
     "quick look" ahead of every page that merely says "look". */
  function score(doc, terms, phrase) {
    var title = doc.t.toLowerCase();
    var cat = doc.c.toLowerCase();
    var body = doc.x.toLowerCase();
    var total = 0;

    if (title === phrase) total += 200;
    if (title.indexOf(phrase) !== -1) total += 60;
    if (body.indexOf(phrase) !== -1) total += 15;

    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      if (title.indexOf(term) !== -1) total += 25;
      if (cat.indexOf(term) !== -1) total += 6;
      var at = body.indexOf(term);
      if (at !== -1) total += 8;
      else if (title.indexOf(term) === -1 && cat.indexOf(term) === -1) return 0; /* every term must appear somewhere */
    }
    return total;
  }

  function snippet(doc, term) {
    var body = doc.x;
    var at = body.toLowerCase().indexOf(term);
    if (at === -1) return body.slice(0, 110) + '…';
    var from = Math.max(0, at - 40);
    return (from ? '…' : '') + body.slice(from, from + 130).trim() + '…';
  }

  function escape(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function run() {
    var q = input.value.trim().toLowerCase();

    if (q.length < 2 || !docs) {
      panel.hidden = true;
      panel.innerHTML = '';
      return;
    }

    var terms = q.split(/\s+/).filter(Boolean);
    var hits = [];

    for (var i = 0; i < docs.length; i++) {
      var s = score(docs[i], terms, q);
      if (s > 0) hits.push({ doc: docs[i], s: s });
    }

    hits.sort(function (a, b) { return b.s - a.s; });
    hits = hits.slice(0, 8);

    if (!hits.length) {
      panel.innerHTML = '<p class="result--empty">No results for “' + escape(input.value) + '”.</p>';
      panel.hidden = false;
      return;
    }

    panel.innerHTML = hits
      .map(function (h) {
        return (
          '<a class="result" href="' + siteRoot + h.doc.u + '">' +
          '<span class="result__cat">' + escape(h.doc.c) + '</span>' +
          '<span class="result__title">' + escape(h.doc.t) + '</span>' +
          '<span class="result__snip">' + escape(snippet(h.doc, terms[0])) + '</span>' +
          '</a>'
        );
      })
      .join('');
    panel.hidden = false;
  }

  var timer;
  input.addEventListener('input', function () {
    load();
    clearTimeout(timer);
    timer = setTimeout(run, 120);
  });

  /* Keyboard: arrows move through results, Enter opens, Escape closes. */
  input.addEventListener('keydown', function (e) {
    var results = panel.hidden ? [] : Array.prototype.slice.call(panel.querySelectorAll('.result'));
    var current = results.findIndex(function (r) { return r.classList.contains('is-active'); });

    if (e.key === 'Escape') { panel.hidden = true; input.blur(); return; }
    if (!results.length) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      var next = e.key === 'ArrowDown'
        ? (current + 1) % results.length
        : (current <= 0 ? results.length - 1 : current - 1);
      results.forEach(function (r) { r.classList.remove('is-active'); });
      results[next].classList.add('is-active');
      results[next].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      window.location.href = (results[current] || results[0]).getAttribute('href');
    }
  });

  document.addEventListener('click', function (e) {
    if (!panel.contains(e.target) && e.target !== input) panel.hidden = true;
  });

  /* "/" focuses search from anywhere, as long as the visitor isn't typing. */
  document.addEventListener('keydown', function (e) {
    if (e.key !== '/' || e.metaKey || e.ctrlKey) return;
    var tag = (document.activeElement && document.activeElement.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable) return;
    e.preventDefault();
    input.focus();
  });
})();

/* ── Tally contact form ──────────────────────────────────────────────────────
   Only the support page carries a [data-tally-src] iframe, so this is a no-op
   everywhere else and costs nothing on the other 99 pages — no script is
   fetched unless the form is actually present.

   It lives here rather than beside the iframe in support.md because the
   Markdown renderer escapes <script> blocks; an inline one printed its own
   source onto the page instead of running.

   The point of it is the inner scrollbar. The form is about 900px tall at the
   width it renders at, taller on a phone or after a validation error, and
   short after submitting — so any fixed frame height either clips it or leaves
   a gap. dynamicHeight=1 makes the form report its height and embed.js resizes
   the frame to match.

   If embed.js fails to load, the fallback copies data-tally-src to src, so the
   form still appears — just at its fixed height, with the scrollbar back. */
(function () {
  var frames = document.querySelectorAll('iframe[data-tally-src]');
  if (!frames.length) return;

  var SRC = 'https://tally.so/widgets/embed.js';

  /* Set src ourselves rather than leaving it to Tally.loadEmbeds(). The
     documented flow is to let loadEmbeds() claim [data-tally-src] frames, but
     it was observed not to — the frame stayed blank with no src and no error.
     Assigning it directly always works, and costs nothing when the script is
     healthy. The frame is still marked data-tally-src so embed.js recognises
     it for the resize messages. */
  frames.forEach(function (frame) {
    if (!frame.getAttribute('src')) frame.src = frame.dataset.tallySrc;
  });

  if (typeof Tally !== 'undefined') return Tally.loadEmbeds();
  if (document.querySelector('script[src="' + SRC + '"]')) return;

  var s = document.createElement('script');
  s.src = SRC;
  s.onload = function () {
    if (typeof Tally !== 'undefined') Tally.loadEmbeds();
  };
  document.body.appendChild(s);
})();
