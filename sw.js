/* Casa Church — service worker (deixa o site instalável + funciona offline o básico).
   Estratégia "rede primeiro": sempre tenta a versão mais nova; se estiver sem
   internet, usa o que tiver guardado. Assim nunca trava em versão antiga. */
const CACHE = 'casa-v4';
const ASSETS = [
  './', './index.html', './cadastro.html', './admin.html',
  './styles.css?v=6', './config.js?v=8', './db.js',
  './icon-192.png', './icon-512.png', './manifest.webmanifest',
  './logo-emblema.png', './logo-completa.png', './logo-horizontal.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // só cuida de GET do próprio site; chamadas ao banco (Supabase) e externos passam direto
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return r; })
      .catch(() => caches.match(e.request))
  );
});
