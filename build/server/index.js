'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressStaticGzip = require('express-static-gzip');

var _expressStaticGzip2 = _interopRequireDefault(_expressStaticGzip);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _config = require('./config');

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
var app = (0, _express2.default)();

app.set('views', _config.viewDir);
app.set('view engine', 'pug');

app.use((0, _serveFavicon2.default)(_config.faviconPath));
app.use((0, _expressStaticGzip2.default)(_config.publicDir));
// or config in web server
// app.use(express.static(publicDir));
app.use('/', _router2.default);
app.use(errorHandler);

app.listen(port, onListen);

function errorHandler(err, req, res, next) {
  res.status(500).send(err.message);
}

function onListen() {
  console.info('⚡  Listening on ' + port);
}