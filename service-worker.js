var cacheName = 'petstore-v1';
var cacheFiles = [
    'petDepotWeek7.html',
    'products.js',
    'petstore.webmanifest',
    'images/red.jpg',
    'images/dog leash.jfif',
    'images/dog sunscreen.jfif'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});