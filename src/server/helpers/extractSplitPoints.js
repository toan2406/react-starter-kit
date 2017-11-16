export default function extractSplitPoints(routes) {
  return routes.map(({ route }) => {
    return route.component.displayName || route.component.name;
  });
}
