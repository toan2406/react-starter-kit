import App from '../src/modules/app/App';
import NotFound from '../src/components/NotFound';
import Home from '../src/modules/home/Home';
import RepoList from '../src/modules/repo/RepoList';
import RepoDetails from '../src/modules/repo/RepoDetails';

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
