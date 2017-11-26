import asyncComponent from '../shared/hocs/asyncComponent';

export const Home = asyncComponent(() =>
  import(/* webpackChunkName: "Home" */ '../shared/modules/home/Home')
);

export const RepoDetails = asyncComponent(() =>
  import(/* webpackChunkName: "RepoDetails" */ '../shared/modules/repo/RepoDetails')
);
