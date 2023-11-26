const resource = [
  /* --- CSS --- */
  '/https://edsouzadev.github.io/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/https://edsouzadev.github.io/app.js',
  '/https://edsouzadev.github.io/sw.js',

  /* --- HTML --- */
  '/https://edsouzadev.github.io/index.html',
  '/https://edsouzadev.github.io/404.html',

  
    '/https://edsouzadev.github.io/categories/',
  
    '/https://edsouzadev.github.io/tags/',
  
    '/https://edsouzadev.github.io/archives/',
  
    '/https://edsouzadev.github.io/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/https://edsouzadev.github.io/assets/img/favicons/android-chrome-192x192.png',
    '/https://edsouzadev.github.io/assets/img/favicons/android-chrome-512x512.png',
    '/https://edsouzadev.github.io/assets/img/favicons/apple-touch-icon.png',
    '/https://edsouzadev.github.io/assets/img/favicons/favicon-16x16.png',
    '/https://edsouzadev.github.io/assets/img/favicons/favicon-32x32.png',
    '/https://edsouzadev.github.io/assets/img/favicons/favicon.ico',
    '/https://edsouzadev.github.io/assets/img/favicons/mstile-150x150.png'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    'chirpy-img.netlify.app',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

