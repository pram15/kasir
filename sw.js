const CACHE_NAME = "kasir-pwa-v1";

const urlsToCache = [
  "/kasi/",
  "/kasi/index.html",
  "/kasi/kasir.html",
  "/kasi/foto/logogram png.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request))
  );
});