export default function fetchComponentData(dispatch, routes) {
  const needs = routes.reduce((accumulator, { route, match }) => {
    const needs = route.component.needs || [];
    return needs
      .map(need => need.bind(null, match.params))
      .concat(accumulator);
  }, []);
  const promises = needs.map(need => dispatch(need()));
  return Promise.all(promises);
}
