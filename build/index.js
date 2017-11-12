'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('views', _config.viewDir);
app.set('view engine', 'pug');

app.use(_express2.default.static(_config.publicDir));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', html: '<h1>Hello there!</h1>' });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});