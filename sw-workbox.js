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
    "revision": "db6bdeeb01061a75017c17e58ea72049"
  },
  {
    "url": "manifest.json",
    "revision": "c3a8cfa7288aca87b342883ad10405e1"
  },
  {
    "url": "asset-manifest.json",
    "revision": "8dbff11e817151dc63a28e3622aa2760"
  },
  {
    "url": "static/css/main.c0f1bc11.css",
    "revision": "1ae7c6bfaa3b9f8e6ab3ec4a39986930"
  },
  {
    "url": "static/css/main.c0f1bc11.css.map",
    "revision": "dc0fb55bbc6be183f4d5766ef3922e3a"
  },
  {
    "url": "static/js/453.4ccc9510.chunk.js",
    "revision": "28cba63a3182a746403948fb10e06036"
  },
  {
    "url": "static/js/453.4ccc9510.chunk.js.map",
    "revision": "0c261e33c0b95d6944f91c40d310ff15"
  },
  {
    "url": "static/js/main.664371a0.js",
    "revision": "1e7bdf467da16ce71ac017c167c105ff"
  },
  {
    "url": "static/js/main.664371a0.js.LICENSE.txt",
    "revision": "cccfa45cda3f72c4ebb3fb2f4ba53a71"
  },
  {
    "url": "static/js/main.664371a0.js.map",
    "revision": "223117779c4ed92c4e133516cf9a59f9"
  },
  {
    "url": "static/media/1.a39f11ca475e0a554f0c.webp",
    "revision": "4433b980e10c1b841e463422c89da704"
  },
  {
    "url": "static/media/3.0467a6970b6f4226feea.webp",
    "revision": "2d0c66e3480b4f45236b987b6c63f50f"
  },
  {
    "url": "css/style.css",
    "revision": "6a3a178d905ed86e3d7f91fd6e123ae7"
  },
  {
    "url": "logo192.png",
    "revision": "1903a9d6236974422ca8fb8fb8116735"
  },
  {
    "url": "logo512.png",
    "revision": "28dca3664bb91e23c7a8ad2d0d8194d7"
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
    "revision": "2e37a1e61c0f6c88bddbb61150536944"
  },
  {
    "url": "img/archive/1.webp",
    "revision": "c64b0b529e507d7ecd7d6e6eb65b13de"
  },
  {
    "url": "img/archive/10.webp",
    "revision": "7a07cf7146ad1d8005327b78100d944a"
  },
  {
    "url": "img/archive/11.webp",
    "revision": "65b7dcd2d8fcee9a336e2073c8c0aa2b"
  },
  {
    "url": "img/archive/12.webp",
    "revision": "d43c3bcc41237db090651bc893d724ce"
  },
  {
    "url": "img/archive/13.webp",
    "revision": "d1c4b3a3279559133a99f0c413ddb223"
  },
  {
    "url": "img/archive/14.webp",
    "revision": "9abadbbbd436019b8a36fbde352660f6"
  },
  {
    "url": "img/archive/15.webp",
    "revision": "51a65b99c83f7fd5d45aad1b68fde5de"
  },
  {
    "url": "img/archive/16.webp",
    "revision": "c294ba106a01945498dfe5fa7fb2e24b"
  },
  {
    "url": "img/archive/17.webp",
    "revision": "692951470fde91a8849fb7620ad85956"
  },
  {
    "url": "img/archive/18.webp",
    "revision": "1b3c2d556e30c0392e18ac2bf495ac85"
  },
  {
    "url": "img/archive/19.webp",
    "revision": "1d1512068b581a11901e83e0513bd608"
  },
  {
    "url": "img/archive/2.webp",
    "revision": "e85b08358eed652368338431c85ff983"
  },
  {
    "url": "img/archive/20.webp",
    "revision": "be5008df9ff0bed8ca55c246a91cc9a0"
  },
  {
    "url": "img/archive/21.webp",
    "revision": "f82b98f1079b7a9eeede5b61381a0b96"
  },
  {
    "url": "img/archive/22.webp",
    "revision": "269b2549f307ba38d1256de18143a581"
  },
  {
    "url": "img/archive/23.webp",
    "revision": "769d9322de145bf96450bb8d01eb8c3b"
  },
  {
    "url": "img/archive/24.webp",
    "revision": "51f35d54a1c6b294e9c43bae9c120ff7"
  },
  {
    "url": "img/archive/25.webp",
    "revision": "4c525b60f9c2a0c6faf466b7571fbfaa"
  },
  {
    "url": "img/archive/26.webp",
    "revision": "15c21de8b8b4ad30dae39a5f38ffc363"
  },
  {
    "url": "img/archive/27.webp",
    "revision": "7fd651998e031d18300e25f5e8b7b189"
  },
  {
    "url": "img/archive/28.webp",
    "revision": "56dd8b6abeb11120924e20e9c3f02e17"
  },
  {
    "url": "img/archive/29.webp",
    "revision": "c4bf935fd90dfa70b65f98570f0d7d05"
  },
  {
    "url": "img/archive/3.webp",
    "revision": "2d0c66e3480b4f45236b987b6c63f50f"
  },
  {
    "url": "img/archive/30.webp",
    "revision": "d0cf533fa4da2682edfc2c5820a779ad"
  },
  {
    "url": "img/archive/31.webp",
    "revision": "34bb5610804951218d70a1b0443facd9"
  },
  {
    "url": "img/archive/32.webp",
    "revision": "fd579e189b95ccd53ad97d1713d5f8ce"
  },
  {
    "url": "img/archive/33.webp",
    "revision": "44f7f5e575ac71e522cf332a9ee3a7c4"
  },
  {
    "url": "img/archive/34.webp",
    "revision": "511115da8e416150a5d4285f9c3db9a4"
  },
  {
    "url": "img/archive/35.webp",
    "revision": "a55fce6ccd57b6323e80580766b2035f"
  },
  {
    "url": "img/archive/36.webp",
    "revision": "1f9ee943a334343117c6618bdb472bd9"
  },
  {
    "url": "img/archive/37.webp",
    "revision": "02ed1f3f42de1d8315827f836d21ec14"
  },
  {
    "url": "img/archive/38.webp",
    "revision": "92f5e68feed9078595fd484ba1e1219d"
  },
  {
    "url": "img/archive/39.webp",
    "revision": "01e27e845bbd6eef0a93e6f3208563e3"
  },
  {
    "url": "img/archive/4.webp",
    "revision": "8f5ae646b4a20788ff6a30bdd90ca51d"
  },
  {
    "url": "img/archive/40.webp",
    "revision": "541e9743b1712299f71d22dc087cb57e"
  },
  {
    "url": "img/archive/41.webp",
    "revision": "31a8a2f49a1b183f1627b5ac91a98c8a"
  },
  {
    "url": "img/archive/42.webp",
    "revision": "7db21d678a452fdeac6c23819223dbc4"
  },
  {
    "url": "img/archive/5.webp",
    "revision": "61c5717eb44221d55827a6a61781992e"
  },
  {
    "url": "img/archive/6.webp",
    "revision": "e5ffdfe32759e17a7b1bdd80d062dcc0"
  },
  {
    "url": "img/archive/7.webp",
    "revision": "b2ae0ef52e7d686f113b4e83fef47c52"
  },
  {
    "url": "img/archive/8.webp",
    "revision": "cd4e0da1fcde3eedebbb45d5a6b19f1a"
  },
  {
    "url": "img/archive/9.webp",
    "revision": "bed34a7760b440a9522a0ebee2eeefc7"
  },
  {
    "url": "img/badge-128x128.webp",
    "revision": "77f1e77e278a03350c2a90c38e09c73b"
  },
  {
    "url": "img/click.webp",
    "revision": "d093466d7096911b3480b2066679d82e"
  },
  {
    "url": "img/icon-192x192.webp",
    "revision": "37706d99446859f44a20cbee60ec6947"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "c1fdb4f328dc224c31d4f63b37a2d7eb"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "fbf62408a29bafea9714e5006212cdbc"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "480c47876f2576e4ea51c6e6f6b3a0e1"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "661e7275a650d6a3616d38e98bd09219"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "15230a15012db5dfc25c8756191f8ded"
  },
  {
    "url": "img/icons/icon-48x48.png",
    "revision": "34950ff63a4a4de30783fa922faee9c2"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "28dca3664bb91e23c7a8ad2d0d8194d7"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "bcd59f0dc93d37c8e8f963471f39028d"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "cce9088080585a31862e0fe7d70d306f"
  },
  {
    "url": "img/new/0.webp",
    "revision": "4f2d7a4aca055fc7c42b7e771b046b28"
  },
  {
    "url": "img/new/1.webp",
    "revision": "4433b980e10c1b841e463422c89da704"
  },
  {
    "url": "img/new/10.webp",
    "revision": "eabd1c0944c5f8de45f48eb2d8aa63df"
  },
  {
    "url": "img/new/11.webp",
    "revision": "d0d26ebf6eb30f42e1f4db084d0b3e2d"
  },
  {
    "url": "img/new/12.webp",
    "revision": "ffa274720324cc1667d9e3e476c04ce2"
  },
  {
    "url": "img/new/13.webp",
    "revision": "810e59bdaa12fdd4c6b92a03d3b7bb9a"
  },
  {
    "url": "img/new/14.webp",
    "revision": "d391a2d4c07247ce120339e0ac1e21e3"
  },
  {
    "url": "img/new/15.webp",
    "revision": "c7dae8f9a59e9d280aa540109107c5f4"
  },
  {
    "url": "img/new/16.webp",
    "revision": "b44406f1c194c8d9e34320bf0e44b2ef"
  },
  {
    "url": "img/new/17.webp",
    "revision": "4444d3e8f930bb1e2f0dff88702dfc27"
  },
  {
    "url": "img/new/2.webp",
    "revision": "2c5315188a2d0d198891bc94d65a44cc"
  },
  {
    "url": "img/new/3.webp",
    "revision": "ba2b3267c885d7e6904241f10785a4eb"
  },
  {
    "url": "img/new/4.webp",
    "revision": "6d9ade5695d3a50e36a054ac69807b7a"
  },
  {
    "url": "img/new/5.webp",
    "revision": "22c8e073e91f5e84ce53efaaf762e332"
  },
  {
    "url": "img/new/6.webp",
    "revision": "df52cf5d00279b8b0e410b84acc410e0"
  },
  {
    "url": "img/new/7.webp",
    "revision": "691e9c95a76a2778e170c462ac99b7b4"
  },
  {
    "url": "img/new/8.webp",
    "revision": "a684859bd7be1c014a3059a1db7d86a7"
  },
  {
    "url": "img/new/9.webp",
    "revision": "4964e4d1a0d2851dfd067d63bfdcc5d0"
  },
  {
    "url": "img/new/Salavat.webp",
    "revision": "f797ed49bd225701fa146dfdf3447072"
  },
  {
    "url": "img/preview.webp",
    "revision": "87012757c3c5719dab8499ab688cfae7"
  },
  {
    "url": "img/share.svg",
    "revision": "fd8ef1f2b16a18127645d38afcd65400"
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

// === Push уведомления ===
self.addEventListener('push', function(event) {
  const data = event.data?.json() || {};
  const title = data.title || 'Мавлид';
  const options = {
    body: data.body || 'Мавлид ан-Наби',
    icon: data.icon || '/img/icon-192x192.webp',
    badge: '/img/badge-128x128.webp',
    data: data.url ? { url: data.url } : {}
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data?.url || '/';
  event.waitUntil(clients.openWindow(url));
});
