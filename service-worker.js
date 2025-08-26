const CACHE_NAME = 'poetry-lezgin-v11';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/poem.html',
  '/favorites.html',
  '/poems.json',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  // Добавь другие файлы, если есть (например, шрифты)
];

// Установка: кэшируем файлы
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Активация: удаляем старые кэши
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Запросы: сначала из кэша, потом сеть (для poems.json — наоборот)
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Для poems.json — сначала сеть, потом кэш (чтобы обновлялись стихи)
  if (request.url.includes('/poems.json')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
          });
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Для остального — кэш, потом сеть
  event.respondWith(
    caches.match(request)
      .then(cached => cached || fetch(request))
  );
});