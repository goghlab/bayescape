// API/amadeusClient.js

const { createProxyMiddleware } = require('http-proxy-middleware');
const Amadeus = require('amadeus'); // Import the Amadeus Node.js SDK

const amadeus = new Amadeus({
  clientId: 'oZFX5hrqVo0nqrR58DbrQKf8mk9QSGRa',
  clientSecret: 'yj97vc075fY951z1',
});

module.exports = amadeus;