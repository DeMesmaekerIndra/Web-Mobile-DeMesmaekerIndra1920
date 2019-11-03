
var routes = [
  {
    path: '/',
    url: './index.html',
    name: 'home'
  },
  {
    path: '/gegevens/',
    url: './pages/gegevens.html',
    name: 'gegevens'
  },
  {
    path: '/gegevens/:id/',
    componentUrl: './pages/product.html',
    name: 'product'
  },
  {
    path: '/locatie/',
    componentUrl: './pages/locatie.html',
    name: 'locatie'
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
