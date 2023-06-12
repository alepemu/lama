// Cache all the assets required for your PWA
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/app.js',
  // Add more URLs to cache
];

// Install the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => caches.delete(cacheName))
        );
      })
  );
});

// Intercept network requests and serve cached assets if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});



// /* eslint-disable no-restricted-globals */
// import { clientsClaim } from 'workbox-core';
// import { ExpirationPlugin } from 'workbox-expiration';
// import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
// import { registerRoute } from 'workbox-routing';
// import { StaleWhileRevalidate } from 'workbox-strategies';

// clientsClaim();

// // To store in cache
// precacheAndRoute(self.__WB_MANIFEST);

// // Mmmm...
// const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
// registerRoute(
//   // Return false to exempt requests from being fulfilled by index.html.
//   ({ request, url }) => {
//     // If this isn't a navigation, skip.
//     if (request.mode !== 'navigate') {
//       return false;
//     } // If this is a URL that starts with /\_, skip.
//     if (url.pathname.startsWith('/_')) {
//       return false;
//     } // If this looks like a URL for a resource, because it contains // a file extension, skip.
//     if (url.pathname.match(fileExtensionRegexp)) {
//       return false;
//     } // Return true to signal that we want to use the handler.
//     return true;
//   },
//   createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
// );

// // Mmmm...
// registerRoute(
//   // Add in any other file extensions or routing criteria as needed.
//   ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
//   new StaleWhileRevalidate({
//     cacheName: 'images',
//     plugins: [
//       // Ensure that once this runtime cache reaches a maximum size the
//       // least-recently used images are removed.
//       new ExpirationPlugin({ maxEntries: 50 }),
//     ],
//   })
// );

// // Mmmm...
// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });
