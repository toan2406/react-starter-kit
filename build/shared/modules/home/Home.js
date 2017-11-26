'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _setStatic = require('recompose/setStatic');

var _setStatic2 = _interopRequireDefault(_setStatic);

var _setDisplayName = require('recompose/setDisplayName');

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _Common = require('../../components/Common');

var _Common2 = _interopRequireDefault(_Common);

var _SearchInput = require('../repo/SearchInput');

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _RepoList = require('../repo/RepoList');

var _RepoList2 = _interopRequireDefault(_RepoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Home Page'
    ),
    _react2.default.createElement(_Common2.default, null),
    _react2.default.createElement(_SearchInput2.default, null),
    _react2.default.createElement(_RepoList2.default, null)
  );
};

var enhance = (0, _compose2.default)((0, _setDisplayName2.default)('Home'), (0, _setStatic2.default)('needs', _RepoList2.default.needs));

exports.default = enhance(Home);