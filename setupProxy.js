const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/amadeus',
    createProxyMiddleware({
      target: 'https://test.api.amadeus.com',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        // Modify the User-Agent header
        proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (compatible; MyClient/1.0; +myclient@example.com)');
      },
      onError: (err, req, res) => {
        // Handle errors
        console.error('Proxy error:', err);
        res.writeHead(500, {
          'Content-Type': 'text/plain',
        });
        res.end('Something went wrong. Please try again.');
      },
    })
  );
};
