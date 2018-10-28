const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy('/auth/*', { target: 'http://localhost:5000/', changeOrigin: true  }));
    app.use(proxy('/api/current_user', { target: 'http://localhost:5000/'  }));
};