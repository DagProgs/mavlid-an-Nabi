importScripts('workbox-v4.3.1/workbox-sw.js');

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({
  modulePathPrefix: 'workbox-v4.3.1/'
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
    "url": "favicon.ico",
    "revision": "5c13770a673b845981634173f2bef663"
  },
  {
    "url": "index.html",
    "revision": "75ecaf6d0d6054ff8e1af5b9aa95dd21"
  },
  {
    "url": "manifest.json",
    "revision": "f114a3b8a084c2c74c466b7a3763cd70"
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
    "url": "assets/icons/icon-128x128.png",
    "revision": "c1fdb4f328dc224c31d4f63b37a2d7eb"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "fbf62408a29bafea9714e5006212cdbc"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "480c47876f2576e4ea51c6e6f6b3a0e1"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "661e7275a650d6a3616d38e98bd09219"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "15230a15012db5dfc25c8756191f8ded"
  },
  {
    "url": "assets/icons/icon-48x48.png",
    "revision": "34950ff63a4a4de30783fa922faee9c2"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "28dca3664bb91e23c7a8ad2d0d8194d7"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "bcd59f0dc93d37c8e8f963471f39028d"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "cce9088080585a31862e0fe7d70d306f"
  },
  {
    "url": "assets/img/1.png",
    "revision": "ebd6b3b3e70a8b2a01f3485fdf0199c3"
  },
  {
    "url": "assets/img/1.webp",
    "revision": "c64b0b529e507d7ecd7d6e6eb65b13de"
  },
  {
    "url": "assets/img/10.webp",
    "revision": "7a07cf7146ad1d8005327b78100d944a"
  },
  {
    "url": "assets/img/11.webp",
    "revision": "65b7dcd2d8fcee9a336e2073c8c0aa2b"
  },
  {
    "url": "assets/img/12.webp",
    "revision": "d43c3bcc41237db090651bc893d724ce"
  },
  {
    "url": "assets/img/13.webp",
    "revision": "d1c4b3a3279559133a99f0c413ddb223"
  },
  {
    "url": "assets/img/14.webp",
    "revision": "9abadbbbd436019b8a36fbde352660f6"
  },
  {
    "url": "assets/img/15.webp",
    "revision": "51a65b99c83f7fd5d45aad1b68fde5de"
  },
  {
    "url": "assets/img/16.webp",
    "revision": "c294ba106a01945498dfe5fa7fb2e24b"
  },
  {
    "url": "assets/img/17.webp",
    "revision": "692951470fde91a8849fb7620ad85956"
  },
  {
    "url": "assets/img/18.webp",
    "revision": "1b3c2d556e30c0392e18ac2bf495ac85"
  },
  {
    "url": "assets/img/19.webp",
    "revision": "1d1512068b581a11901e83e0513bd608"
  },
  {
    "url": "assets/img/2.png",
    "revision": "ff1df813b153209ed897de30e864fd04"
  },
  {
    "url": "assets/img/2.webp",
    "revision": "e85b08358eed652368338431c85ff983"
  },
  {
    "url": "assets/img/20.webp",
    "revision": "be5008df9ff0bed8ca55c246a91cc9a0"
  },
  {
    "url": "assets/img/21.webp",
    "revision": "f82b98f1079b7a9eeede5b61381a0b96"
  },
  {
    "url": "assets/img/22.webp",
    "revision": "269b2549f307ba38d1256de18143a581"
  },
  {
    "url": "assets/img/23.webp",
    "revision": "769d9322de145bf96450bb8d01eb8c3b"
  },
  {
    "url": "assets/img/24.webp",
    "revision": "51f35d54a1c6b294e9c43bae9c120ff7"
  },
  {
    "url": "assets/img/25.webp",
    "revision": "4c525b60f9c2a0c6faf466b7571fbfaa"
  },
  {
    "url": "assets/img/26.webp",
    "revision": "15c21de8b8b4ad30dae39a5f38ffc363"
  },
  {
    "url": "assets/img/27.webp",
    "revision": "7fd651998e031d18300e25f5e8b7b189"
  },
  {
    "url": "assets/img/28.webp",
    "revision": "56dd8b6abeb11120924e20e9c3f02e17"
  },
  {
    "url": "assets/img/29.webp",
    "revision": "c4bf935fd90dfa70b65f98570f0d7d05"
  },
  {
    "url": "assets/img/3.png",
    "revision": "4ac907fe83fffa296a0a82b2834fb5e1"
  },
  {
    "url": "assets/img/3.webp",
    "revision": "2d0c66e3480b4f45236b987b6c63f50f"
  },
  {
    "url": "assets/img/30.webp",
    "revision": "d0cf533fa4da2682edfc2c5820a779ad"
  },
  {
    "url": "assets/img/31.webp",
    "revision": "34bb5610804951218d70a1b0443facd9"
  },
  {
    "url": "assets/img/32.webp",
    "revision": "fd579e189b95ccd53ad97d1713d5f8ce"
  },
  {
    "url": "assets/img/33.webp",
    "revision": "44f7f5e575ac71e522cf332a9ee3a7c4"
  },
  {
    "url": "assets/img/34.webp",
    "revision": "511115da8e416150a5d4285f9c3db9a4"
  },
  {
    "url": "assets/img/35.webp",
    "revision": "a55fce6ccd57b6323e80580766b2035f"
  },
  {
    "url": "assets/img/36.webp",
    "revision": "1f9ee943a334343117c6618bdb472bd9"
  },
  {
    "url": "assets/img/37.webp",
    "revision": "02ed1f3f42de1d8315827f836d21ec14"
  },
  {
    "url": "assets/img/38.webp",
    "revision": "92f5e68feed9078595fd484ba1e1219d"
  },
  {
    "url": "assets/img/39.webp",
    "revision": "01e27e845bbd6eef0a93e6f3208563e3"
  },
  {
    "url": "assets/img/4.png",
    "revision": "ccd010eed14e86ef1756e5a4a7ece29d"
  },
  {
    "url": "assets/img/4.webp",
    "revision": "8f5ae646b4a20788ff6a30bdd90ca51d"
  },
  {
    "url": "assets/img/40.webp",
    "revision": "541e9743b1712299f71d22dc087cb57e"
  },
  {
    "url": "assets/img/41.webp",
    "revision": "31a8a2f49a1b183f1627b5ac91a98c8a"
  },
  {
    "url": "assets/img/42.webp",
    "revision": "7db21d678a452fdeac6c23819223dbc4"
  },
  {
    "url": "assets/img/5.png",
    "revision": "dc0036db39b2bf3b0091e24101479a41"
  },
  {
    "url": "assets/img/5.webp",
    "revision": "61c5717eb44221d55827a6a61781992e"
  },
  {
    "url": "assets/img/6.png",
    "revision": "5f2e42090570ec258281610c1d6f0933"
  },
  {
    "url": "assets/img/6.webp",
    "revision": "e5ffdfe32759e17a7b1bdd80d062dcc0"
  },
  {
    "url": "assets/img/7.png",
    "revision": "8a3ea791bd4ece4448adb13df9bcfc78"
  },
  {
    "url": "assets/img/7.webp",
    "revision": "b2ae0ef52e7d686f113b4e83fef47c52"
  },
  {
    "url": "assets/img/8.webp",
    "revision": "cd4e0da1fcde3eedebbb45d5a6b19f1a"
  },
  {
    "url": "assets/img/9.webp",
    "revision": "bed34a7760b440a9522a0ebee2eeefc7"
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
