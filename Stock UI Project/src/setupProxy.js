const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/evaluation-service',
    createProxyMiddleware({
      target: 'http://20.244.56.144/evaluation-service',
      changeOrigin: true,
    })
  );
};