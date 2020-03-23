var CACHE_NAME = 'my-site-cache-v3';
var urlsToCache = [
  '/demos/2018/sw-test/service-worker.html',
  '/demos/2018/sw-test/11.jpg',
  '/demos/2018/sw-test/main.js',
  '/demos/2018/sw-test/page.css'
];

// caches.delete(`my-site-cache-v1`);
// caches.delete(`my-site-cache-v2`);

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch', function(event) {
  console.log('fetch')
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});