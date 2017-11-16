import App from '../shared/modules/app/App';
import NotFound from '../shared/components/NotFound';
import Home from '../shared/modules/home/Home';
import RepoList from '../shared/modules/repo/RepoList';
import RepoDetails from '../shared/modules/repo/RepoDetails';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/repos',
        component: RepoList
      },
      {
        path: '/:owner/:repo',
        component: RepoDetails
      },
      {
        component: NotFound
      }
    ]
  }
];

export default routes;
