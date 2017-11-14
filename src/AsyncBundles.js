import asyncComponent from './hocs/asyncComponent';

export const Home = asyncComponent(() =>
  import(/* webpackChunkName: "Home" */ './modules/home/Home')
);

export const RepoList = asyncComponent(() =>
  import(/* webpackChunkName: "RepoList" */ './modules/repo/RepoList')
);

export const RepoDetails = asyncComponent(() =>
  import(/* webpackChunkName: "RepoDetails" */ './modules/repo/RepoDetails')
);
