const { createProxyMiddleware } = require('http-proxy-middleware');

//Backend URL
const BE_URL =`${process.env.REACT_APP_BACKEND_URL}`

module.exports = function(app) {
    app.use(
        /^\/(api|auth)/,
        createProxyMiddleware({
            target: BE_URL,
        })
    )
};
