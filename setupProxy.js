const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/amadeus',
    createProxyMiddleware({
      target: 'https://test.api.amadeus.com',
      changeOrigin: true,
      onProxyReq: (proxyReq) => {
        // Modify the User-Agent header
        proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (compatible; MyClient/1.0; +myclient@example.com)');
      },
    })
  );
};
