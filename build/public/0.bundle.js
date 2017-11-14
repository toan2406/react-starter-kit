webpackJsonp([0],{

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(45);

var _compose = __webpack_require__(104);

var _compose2 = _interopRequireDefault(_compose);

var _lifecycle = __webpack_require__(105);

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _withHandlers = __webpack_require__(246);

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _setStatic = __webpack_require__(106);

var _setStatic2 = _interopRequireDefault(_setStatic);

var _setDisplayName = __webpack_require__(101);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _reactRouterRedux = __webpack_require__(25);

var _actions = __webpack_require__(102);

var _selectors = __webpack_require__(243);

var _selectors2 = __webpack_require__(245);

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
        searchRepos = _props.searchRepos;

    if (!firstRender) {
      searchRepos({});
    }
  }
}));

exports.default = enhance(RepoList);

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedRepo = exports.getRepos = undefined;

var _reselect = __webpack_require__(244);

var _normalizr = __webpack_require__(46);

var _schemas = __webpack_require__(103);

var getRepoEntities = function getRepoEntities(state) {
  return state.repo.repoEntities;
};
var getOwnerEntities = function getOwnerEntities(state) {
  return state.repo.ownerEntities;
};
var getRepoIds = function getRepoIds(state) {
  return state.repo.repoIds;
};
var getSelectedRepoId = function getSelectedRepoId(state) {
  return state.repo.selectedRepo;
};

var getRepos = (0, _reselect.createSelector)([getRepoEntities, getOwnerEntities, getRepoIds], function (repoEntities, ownerEntities, repoIds) {
  return (0, _normalizr.denormalize)(repoIds, [_schemas.repo], {
    owners: ownerEntities,
    repos: repoEntities
  });
});

var getSelectedRepo = (0, _reselect.createSelector)([getRepoEntities, getOwnerEntities, getSelectedRepoId], function (repoEntities, ownerEntities, selectedRepoId) {
  return (0, _normalizr.denormalize)(selectedRepoId, _schemas.repo, {
    owners: ownerEntities,
    repos: repoEntities
  });
});

exports.getRepos = getRepos;
exports.getSelectedRepo = getSelectedRepo;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getFirstRender = function getFirstRender(state) {
  return state.app.firstRender;
};

exports.getFirstRender = getFirstRender;

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _setDisplayName = __webpack_require__(101);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(107);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _mapValues = __webpack_require__(247);

var _mapValues2 = _interopRequireDefault(_mapValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */


var withHandlers = function withHandlers(handlers) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var WithHandlers = function (_Component) {
      _inherits(WithHandlers, _Component);

      function WithHandlers() {
        var _temp, _this, _ret;

        _classCallCheck(this, WithHandlers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
      }

      WithHandlers.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
        this.cachedHandlers = {};
      };

      WithHandlers.prototype.render = function render() {
        return factory(_extends({}, this.props, this.handlers));
      };

      return WithHandlers;
    }(_react.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.cachedHandlers = {};
      this.handlers = (0, _mapValues2.default)(typeof handlers === 'function' ? handlers(this.props) : handlers, function (createHandler, handlerName) {
        return function () {
          var cachedHandler = _this2.cachedHandlers[handlerName];
          if (cachedHandler) {
            return cachedHandler.apply(undefined, arguments);
          }

          var handler = createHandler(_this2.props);
          _this2.cachedHandlers[handlerName] = handler;

          if (process.env.NODE_ENV !== 'production' && typeof handler !== 'function') {
            console.error(
            // eslint-disable-line no-console
            'withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
          }

          return handler.apply(undefined, arguments);
        };
      });
    };

    if (process.env.NODE_ENV !== 'production') {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'withHandlers'))(WithHandlers);
    }
    return WithHandlers;
  };
};

exports.default = withHandlers;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var mapValues = function mapValues(obj, func) {
  var result = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  /* eslint-enable no-restricted-syntax */
  return result;
};

exports.default = mapValues;

/***/ })

});