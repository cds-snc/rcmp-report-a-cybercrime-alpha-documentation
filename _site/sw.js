importScripts( '/rcmp-report-a-cybercrime-alpha-documentation/cache-polyfill.js' );

var filesToCache = [
  // root
  '/rcmp-report-a-cybercrime-alpha-documentation/',
  '/rcmp-report-a-cybercrime-alpha-documentation/index.html',
  // css
  '/rcmp-report-a-cybercrime-alpha-documentation/assets/css/main.css',
  '/rcmp-report-a-cybercrime-alpha-documentation/assets/css/normalize.css',
  '/rcmp-report-a-cybercrime-alpha-documentation/assets/css/syntax.css',
  // images
  '/rcmp-report-a-cybercrime-alpha-documentation/assets/img/octocat.png',
  // pages
  '/rcmp-report-a-cybercrime-alpha-documentation/alpha-research/','/rcmp-report-a-cybercrime-alpha-documentation/background/','/rcmp-report-a-cybercrime-alpha-documentation/contact/','/rcmp-report-a-cybercrime-alpha-documentation/home/','/rcmp-report-a-cybercrime-alpha-documentation/participate/','/rcmp-report-a-cybercrime-alpha-documentation/prototypes/','/rcmp-report-a-cybercrime-alpha-documentation/team-news/','/rcmp-report-a-cybercrime-alpha-documentation/technical-platform/','/rcmp-report-a-cybercrime-alpha-documentation/accueil/','/rcmp-report-a-cybercrime-alpha-documentation/coordonnees/','/rcmp-report-a-cybercrime-alpha-documentation/contexte/','/rcmp-report-a-cybercrime-alpha-documentation/nouvelles-dequipe/','/rcmp-report-a-cybercrime-alpha-documentation/participez/','/rcmp-report-a-cybercrime-alpha-documentation/recherche-de-la-phase-decouverte/',
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
