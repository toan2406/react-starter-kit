"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchComponentData;
function fetchComponentData(dispatch, components, params) {
  var needs = components.reduce(function (accumulator, _ref) {
    var route = _ref.route,
        match = _ref.match;

    if (route.component) {
      var _needs = route.component.needs || [];
      return _needs.concat(accumulator);
    }
    return accumulator;
  }, []);
  var promises = needs.map(function (need) {
    return dispatch(need(params));
  });
  return Promise.all(promises);
}