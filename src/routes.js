const nextRoutes = require('next-routes');

module.exports = nextRoutes();
const routes = module.exports;

routes.add('post', '/post/:slug');
routes.add('index', '/');
