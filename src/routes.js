import React from 'react';
import App from './modules/app/App';
import NotFound from './components/NotFound';
import Bundle from './components/Bundle';

const loadRepoList = () =>
  import(/* webpackChunkName: "RepoList" */ './modules/repo/RepoList');
const loadRepoDetails = () =>
  import(/* webpackChunkName: "RepoDetails" */ './modules/repo/RepoDetails');

const RepoList = props => (
  <Bundle load={loadRepoList}>
    {RepoList => <RepoList {...props} />}
  </Bundle>
);

const RepoDetails = props => (
  <Bundle load={loadRepoDetails}>
    {RepoDetails => <RepoDetails {...props} />}
  </Bundle>
);

const routes = [
  {
    component: App,
    routes: [
      {
        component: RepoList,
        path: '/',
        exact: true
      },
      {
        component: RepoDetails,
        path: '/repos'
      },
      {
        component: NotFound
      }
    ]
  }
];

export default routes;
