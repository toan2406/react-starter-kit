export default function fetchComponentData(dispatch, routes, params) {
  const needs = routes.reduce((accumulator, { route }) => {
    const needs = route.component.needs || [];
    return needs.concat(accumulator);
  }, []);
  const promises = needs.map(need => dispatch(need(params)));
  return Promise.all(promises);
}
