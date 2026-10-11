// Outcrop Field Book: works offline after the first visit.
// App files: network first (so updates arrive at once), cache when offline.
// Map and terrain tiles: cache first, kept for offline use.
const APP = 'outcrop-app-v8', TILES = 'outcrop-tiles-v1', MAX_TILES = 5000;
const FILES = ['./', './index.html', './leaflet.js', './geotiff.js', './proj4.js', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
const TILE_HOSTS = /(^|\.)(tile\.openstreetmap\.org|tile\.opentopomap\.org|server\.arcgisonline\.com)$/;
self.addEventListener('install', e => { e.waitUntil(caches.open(APP).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== APP && k !== TILES).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
let added = 0;
async function trim(){ const c = await caches.open(TILES), keys = await c.keys(); for (let i = 0; i < keys.length - MAX_TILES; i++) await c.delete(keys[i]); }
function isTile(url){ return TILE_HOSTS.test(url.hostname) || (url.hostname === 's3.amazonaws.com' && url.pathname.startsWith('/elevation-tiles-prod/')) || ((url.hostname === 'public-services.slip.wa.gov.au' || url.hostname === 'services.ga.gov.au') && url.pathname.endsWith('/MapServer/export')); }
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (isTile(url)) {
    e.respondWith(caches.open(TILES).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) { c.put(req, res.clone()); if (++added % 200 === 0) trim(); } return res; }))));
    return;
  }
  const font = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== location.origin && !font) return;
  if (font) { e.respondWith(caches.open(APP).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { c.put(req, res.clone()); return res; })))); return; }
  e.respondWith(caches.open(APP).then(c => {
    const net = fetch(req, {cache: 'no-cache'}).then(res => { if (res && res.ok) c.put(req, res.clone()); return res; });
    const timeout = new Promise(r => setTimeout(r, 4000));
    return Promise.race([net, timeout]).then(res => res || c.match(req, {ignoreSearch: true}).then(hit => hit || net))
      .catch(() => c.match(req, {ignoreSearch: true}).then(hit => hit || c.match('./index.html')));
  }));
});
