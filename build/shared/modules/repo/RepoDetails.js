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

var _setStatic = require('recompose/setStatic');

var _setStatic2 = _interopRequireDefault(_setStatic);

var _setDisplayName = require('recompose/setDisplayName');

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _branch = require('recompose/branch');

var _branch2 = _interopRequireDefault(_branch);

var _renderNothing = require('recompose/renderNothing');

var _renderNothing2 = _interopRequireDefault(_renderNothing);

var _actions = require('./actions');

var _selectors = require('./selectors');

var _selectors2 = require('../app/selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RepoDetails = function RepoDetails(_ref) {
  var selectedRepo = _ref.selectedRepo;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      selectedRepo.name
    ),
    _react2.default.createElement(
      'p',
      null,
      'Star: ',
      selectedRepo.stargazers_count
    )
  );
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    selectedRepo: (0, _selectors.getSelectedRepo)(state),
    firstRender: (0, _selectors2.getFirstRender)(state)
  };
};

var mapDispatchToProps = {
  getRepo: _actions.getRepo
};

var enhance = (0, _compose2.default)((0, _setDisplayName2.default)('RepoDetails'), (0, _setStatic2.default)('needs', [_actions.getRepo]), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _lifecycle2.default)({
  componentDidMount: function componentDidMount() {
    var _props = this.props,
        firstRender = _props.firstRender,
        getRepo = _props.getRepo,
        match = _props.match;

    if (!firstRender) {
      getRepo(match.params);
    }
  }
}), (0, _branch2.default)(function (props) {
  return !props.selectedRepo;
}, _renderNothing2.default));

exports.default = enhance(RepoDetails);