const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://erpapi.urbanbolt.in',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v1/services', // rewrite path
      },
      headers: {
        Cookie: 'csrftoken=Vk9iCihkIyOe1TqA8Pt2gXPoBa3GYEKh; sessionid=hqdie9vsa70u5c4lzrglb05m75ptl12q'
      }
    })
  );
}; 