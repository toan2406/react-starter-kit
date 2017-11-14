"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchComponentData;
function fetchComponentData(dispatch, routes, params) {
  var needs = routes.reduce(function (accumulator, _ref) {
    var route = _ref.route;

    var needs = route.component.needs || [];
    return needs.concat(accumulator);
  }, []);
  var promises = needs.map(function (need) {
    return dispatch(need(params));
  });
  return Promise.all(promises);
}