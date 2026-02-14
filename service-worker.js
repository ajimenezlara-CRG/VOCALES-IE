const CACHE_NAME = 'vocales-ei-v3';  // Cambia el número cuando modifiques la app
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

// INSTALACIÓN: cachea los archivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CCACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // Fuerza que el SW nuevo tome el control
});

// ACTIVACIÓN: elimina versiones antiguas del caché
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim(); // Activa el SW inmediatamente
});

// FETCH: usa caché primero, pero actualiza en segundo plano
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkFetch = fetch(event.request)
        .then(response => {
          // Actualiza el caché con la nueva versión
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone());
          });
          return response;
        })
        .catch(() => cached); // Si no hay red, usa caché

      return cached || networkFetch;
    })
  );
});

