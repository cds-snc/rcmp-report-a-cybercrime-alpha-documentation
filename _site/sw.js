importScripts( '/cache-polyfill.js' );

var filesToCache = [
  // root
  '/',
  '/index.html',
  // css
  '/assets/css/main.css',
  '/assets/css/normalize.css',
  '/assets/css/syntax.css',
  // images
  '/assets/img/octocat.png',
  // pages
  '/background-1/','/background/','/contact/','/design-principles/','/design-workflow/','/discovery-research/','/home/','/how-to-write-questions/','/participate-in-research/','/piloting-the-service/','/prototyping/','/team-news/','/platform/','/accueil/','/contexte/','/nous-joindre/','/nouvelles-d-%C3%A9quipe/','/participer-%C3%A0-la-recherche/','/platforme/','/principes-de-conception/','/processus-de-conception/','/prototypage/','/recherche-ax%C3%A9e-sur-la-d%C3%A9couverte/','/menu/menu.html',
  // posts
  
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
