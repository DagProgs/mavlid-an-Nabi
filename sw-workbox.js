importScripts('./workbox-v4.3.1/workbox-sw.js');

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({
  modulePathPrefix: './workbox-v4.3.1/'
});

// Turn on logging
workbox.setConfig({
  debug: true
});

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "16054041c3bf66df25360489ac8a8ed5"
  },
  {
    "url": "manifest.json",
    "revision": "9ac2fbe3442996bf9ddbce85e80c8a87"
  },
  {
    "url": "css/styles.css",
    "revision": "f10a9e8078d864f94bac5e84e677a705"
  },
  {
    "url": "js/script.js",
    "revision": "21af7689c76ac7c77fbcfbb2baa83738"
  },
  {
    "url": "main.js",
    "revision": "80846bb3403b82a07c7f84658f186b23"
  },
  {
    "url": "polyfills.js",
    "revision": "56f34b0f4d3a42d45bfdb1782adaa173"
  },
  {
    "url": "pwacompat.min.js",
    "revision": "038770ef3eb91f3e8a50a3916cb7cf28"
  },
  {
    "url": "runtime.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "update.js",
    "revision": "db409cd90d613a43e7a19c449e074441"
  },
  {
    "url": "img/1.webp",
    "revision": "c64b0b529e507d7ecd7d6e6eb65b13de"
  },
  {
    "url": "img/10.webp",
    "revision": "7a07cf7146ad1d8005327b78100d944a"
  },
  {
    "url": "img/11.webp",
    "revision": "65b7dcd2d8fcee9a336e2073c8c0aa2b"
  },
  {
    "url": "img/12.webp",
    "revision": "d43c3bcc41237db090651bc893d724ce"
  },
  {
    "url": "img/13.webp",
    "revision": "d1c4b3a3279559133a99f0c413ddb223"
  },
  {
    "url": "img/14.webp",
    "revision": "9abadbbbd436019b8a36fbde352660f6"
  },
  {
    "url": "img/15.webp",
    "revision": "51a65b99c83f7fd5d45aad1b68fde5de"
  },
  {
    "url": "img/16.webp",
    "revision": "c294ba106a01945498dfe5fa7fb2e24b"
  },
  {
    "url": "img/17.webp",
    "revision": "692951470fde91a8849fb7620ad85956"
  },
  {
    "url": "img/18.webp",
    "revision": "1b3c2d556e30c0392e18ac2bf495ac85"
  },
  {
    "url": "img/19.webp",
    "revision": "1d1512068b581a11901e83e0513bd608"
  },
  {
    "url": "img/2.webp",
    "revision": "e85b08358eed652368338431c85ff983"
  },
  {
    "url": "img/20.webp",
    "revision": "be5008df9ff0bed8ca55c246a91cc9a0"
  },
  {
    "url": "img/21.webp",
    "revision": "f82b98f1079b7a9eeede5b61381a0b96"
  },
  {
    "url": "img/22.webp",
    "revision": "269b2549f307ba38d1256de18143a581"
  },
  {
    "url": "img/23.webp",
    "revision": "769d9322de145bf96450bb8d01eb8c3b"
  },
  {
    "url": "img/24.webp",
    "revision": "51f35d54a1c6b294e9c43bae9c120ff7"
  },
  {
    "url": "img/25.webp",
    "revision": "4c525b60f9c2a0c6faf466b7571fbfaa"
  },
  {
    "url": "img/26.webp",
    "revision": "15c21de8b8b4ad30dae39a5f38ffc363"
  },
  {
    "url": "img/27.webp",
    "revision": "7fd651998e031d18300e25f5e8b7b189"
  },
  {
    "url": "img/28.webp",
    "revision": "56dd8b6abeb11120924e20e9c3f02e17"
  },
  {
    "url": "img/29.webp",
    "revision": "c4bf935fd90dfa70b65f98570f0d7d05"
  },
  {
    "url": "img/3.webp",
    "revision": "2d0c66e3480b4f45236b987b6c63f50f"
  },
  {
    "url": "img/30.webp",
    "revision": "d0cf533fa4da2682edfc2c5820a779ad"
  },
  {
    "url": "img/31.webp",
    "revision": "34bb5610804951218d70a1b0443facd9"
  },
  {
    "url": "img/32.webp",
    "revision": "fd579e189b95ccd53ad97d1713d5f8ce"
  },
  {
    "url": "img/33.webp",
    "revision": "44f7f5e575ac71e522cf332a9ee3a7c4"
  },
  {
    "url": "img/34.webp",
    "revision": "511115da8e416150a5d4285f9c3db9a4"
  },
  {
    "url": "img/35.webp",
    "revision": "a55fce6ccd57b6323e80580766b2035f"
  },
  {
    "url": "img/36.webp",
    "revision": "1f9ee943a334343117c6618bdb472bd9"
  },
  {
    "url": "img/37.webp",
    "revision": "02ed1f3f42de1d8315827f836d21ec14"
  },
  {
    "url": "img/38.webp",
    "revision": "92f5e68feed9078595fd484ba1e1219d"
  },
  {
    "url": "img/39.webp",
    "revision": "01e27e845bbd6eef0a93e6f3208563e3"
  },
  {
    "url": "img/4.webp",
    "revision": "8f5ae646b4a20788ff6a30bdd90ca51d"
  },
  {
    "url": "img/40.webp",
    "revision": "541e9743b1712299f71d22dc087cb57e"
  },
  {
    "url": "img/41.webp",
    "revision": "31a8a2f49a1b183f1627b5ac91a98c8a"
  },
  {
    "url": "img/42.webp",
    "revision": "7db21d678a452fdeac6c23819223dbc4"
  },
  {
    "url": "img/5.webp",
    "revision": "61c5717eb44221d55827a6a61781992e"
  },
  {
    "url": "img/6.webp",
    "revision": "e5ffdfe32759e17a7b1bdd80d062dcc0"
  },
  {
    "url": "img/7.webp",
    "revision": "b2ae0ef52e7d686f113b4e83fef47c52"
  },
  {
    "url": "img/8.webp",
    "revision": "cd4e0da1fcde3eedebbb45d5a6b19f1a"
  },
  {
    "url": "img/9.webp",
    "revision": "bed34a7760b440a9522a0ebee2eeefc7"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "4d735d6103ecd1d6725f1292a32dc2b0"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "30a2c40f9d38f582420bcd4e49e664e8"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "bd2875c5bd2053d239248f7fbbe3cfc3"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "d10c5e89839cc3df85cd3260af7df58c"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "199777b3059069f4aeed424f7d2163be"
  },
  {
    "url": "assets/icons/icon-48x48.png",
    "revision": "743b1588856384baf84d961a7b69ebd2"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "1073ec20df36964f86666d97ad26978f"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "1f11f9c35dfdecf59e54b142e41b66e3"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "cec91c1bf430c03d7a303e9fccb4198a"
  }
]);

// RUNTIME CACHING

// Google fonts
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
);

// API with network-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)timeline/,
  workbox.strategies.networkFirst()
)

// API with cache-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)favorites/,
  workbox.strategies.cacheFirst()
)

// OTHER EVENTS

// Receive push and show a notification
self.addEventListener('push', function(event) {
  console.log('[Service Worker]: Received push event', event);
});
