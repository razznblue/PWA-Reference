// When creating a service worker for a different aplication, make sure to update the assets with the correct assets you are using for that project.
// Try workbox.js which will make writing this file a lot easier. React comes with workbox working under the hood.

// The first element represents our index.html file. This is how we should always write it
const assets = [
  '/',
  'styles.css',
  'app.js',
  'sw-register.js',
  'https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

self.addEventListener('install', event => {
  caches.open('assets').then(cache => {
    cache.addAll(assets);
  });
});

// State while revalidate strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
        .then( cachedResponse => {
            // Even if the response is in the cache, we fetch it
            // and update the cache for future usage
            const fetchPromise = fetch(event.request).then(
                  networkResponse => {
                    caches.open("assets").then( cache => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            // We use the currently cached version if it's there
            return cachedResponse || fetchPromise; // cached or a network fetch
        })
    );
}); 