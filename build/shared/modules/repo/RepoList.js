'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _lifecycle = require('recompose/lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _setStatic = require('recompose/setStatic');

var _setStatic2 = _interopRequireDefault(_setStatic);

var _setDisplayName = require('recompose/setDisplayName');

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _reactRouterRedux = require('react-router-redux');

var _actions = require('./actions');

var _selectors = require('./selectors');

var _selectors2 = require('../app/selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RepoList = function RepoList(_ref) {
  var repos = _ref.repos,
      onItemClick = _ref.onItemClick;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Top 10 Repos'
    ),
    _react2.default.createElement(
      'ul',
      null,
      repos.map(function (_ref2) {
        var id = _ref2.id,
            name = _ref2.name,
            owner = _ref2.owner;
        return _react2.default.createElement(
          'li',
          {
            key: id,
            onClick: onItemClick.bind(null, {
              owner: owner.login,
              repo: name
            })
          },
          name
        );
      })
    )
  );
};


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    repos: (0, _selectors.getRepos)(state),
    keyword: (0, _selectors.getSearchKeyword)(state),
    firstRender: (0, _selectors2.getFirstRender)(state)
  };
};

var mapDispatchToProps = {
  searchRepos: _actions.searchRepos,
  push: _reactRouterRedux.push
};

var enhance = (0, _compose2.default)((0, _setDisplayName2.default)('RepoList'), (0, _setStatic2.default)('needs', [_actions.searchRepos]), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withHandlers2.default)({
  onItemClick: function onItemClick(props) {
    return function (_ref3) {
      var owner = _ref3.owner,
          repo = _ref3.repo;
      return props.push('/' + owner + '/' + repo);
    };
  }
}), (0, _lifecycle2.default)({
  componentDidMount: function componentDidMount() {
    var _props = this.props,
        firstRender = _props.firstRender,
        searchRepos = _props.searchRepos,
        keyword = _props.keyword;

    if (!firstRender) {
      searchRepos({ keyword: keyword });
    }
  }
}));

exports.default = enhance(RepoList);