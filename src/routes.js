import App from './modules/app/App';
import NotFound from './components/NotFound';
import { Home, RepoList, RepoDetails } from './AsyncBundles';

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
