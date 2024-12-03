const CACHE_NAME = 'axion-dev-cache-v1';
const STATIC_CACHE_NAME = 'axion-dev-static-v1';
const DYNAMIC_CACHE_NAME = 'axion-dev-dynamic-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/static/js/main.chunk.js',
  '/static/js/vendors.chunk.js',
  '/static/css/main.chunk.css',
  '/images/logo.png',
  '/favicon.ico'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activación y limpieza de caches antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            return cacheName.startsWith('axion-dev-') &&
                   cacheName !== STATIC_CACHE_NAME &&
                   cacheName !== DYNAMIC_CACHE_NAME;
          })
          .map(cacheName => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia de cache: Network First con fallback a cache
self.addEventListener('fetch', event => {
  // Solo manejamos peticiones GET
  if (event.request.method !== 'GET') return;

  // No cacheamos peticiones a la API
  if (event.request.url.includes('/api/')) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // Para assets estáticos, usamos Cache First
  if (isStaticAsset(event.request.url)) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  // Para el resto de peticiones, Network First
  event.respondWith(networkFirst(event.request));
});

// Helpers
function isStaticAsset(url) {
  return STATIC_ASSETS.some(asset => url.includes(asset)) ||
         /\.(js|css|png|jpg|jpeg|gif|svg|ico)$/i.test(url);
}

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    await updateCache(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    await updateCache(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

async function updateCache(request, response) {
  if (!response.ok) return;
  
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  await cache.put(request, response);
}

// Background Sync para formularios
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  try {
    const formData = await getContactFormData();
    if (!formData) return;

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    await clearContactFormData();
  } catch (error) {
    console.error('Error syncing contact form:', error);
  }
}