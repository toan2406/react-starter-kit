"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchComponentData;
function fetchComponentData(dispatch, routes) {
  var needs = routes.reduce(function (accumulator, _ref) {
    var route = _ref.route,
        match = _ref.match;

    var needs = route.component.needs || [];
    return needs.map(function (need) {
      return need.bind(null, match.params);
    }).concat(accumulator);
  }, []);
  var promises = needs.map(function (need) {
    return dispatch(need());
  });
  return Promise.all(promises);
}