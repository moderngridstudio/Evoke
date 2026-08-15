#!/usr/bin/env node
/* Local preview for the built docs site. Zero dependencies.

     node build.js && node serve.js        # http://localhost:4321
     node serve.js 8080                    # different port

   Directory URLs resolve to index.html, and anything missing falls back to
   404.html, which is what GitHub Pages does. */

const http = require('http');
const fs = require('fs');
const path = require('path');

/* `docs` is the build output GitHub Pages serves; `site` is what older builds
   produced. Whichever is present wins, so an explicit directory only has to be
   passed when both exist and the other one is wanted. */
const ARG = process.argv[2] && Number.isNaN(Number(process.argv[2])) ? process.argv[2] : null;
const ROOT = path.resolve(
  ARG || ['docs', 'site'].map((d) => path.join(__dirname, d)).find(fs.existsSync) || path.join(__dirname, 'docs')
);
const PORT = Number(process.argv[ARG ? 3 : 2]) || 4321;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

if (!fs.existsSync(ROOT)) {
  console.error(`No ${path.relative(__dirname, ROOT) || ROOT} directory — run \`node build.js docs\` first.`);
  process.exit(1);
}

http
  .createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);

    /* Resolve inside ROOT and confirm it stayed there — blocks ../ traversal. */
    let file = path.join(ROOT, url);
    if (!path.resolve(file).startsWith(path.resolve(ROOT))) {
      res.writeHead(403).end('Forbidden');
      return;
    }

    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');

    if (!fs.existsSync(file)) {
      const notFound = path.join(ROOT, '404.html');
      const body = fs.existsSync(notFound) ? fs.readFileSync(notFound) : 'Not found';
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }).end(body);
      return;
    }

    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(fs.readFileSync(file));
  })
  .listen(PORT, () => console.log(`Docs preview → http://localhost:${PORT}`));
