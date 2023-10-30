const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/amadeus',
    createProxyMiddleware({
      target: 'https://test.api.amadeus.com',
      changeOrigin: true,
    })
  );
};
