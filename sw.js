const CACHE_NAME = 'iptu-careiro-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/config.html',
  '/login.html',
  '/favicon.ico',
  '/cadastros.html',
  '/manifest.json',
  '/favicon.ico',
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
