"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractSplitPoints;
function extractSplitPoints(routes) {
  return routes.map(function (_ref) {
    var route = _ref.route;

    return route.component.displayName || route.component.name;
  });
}