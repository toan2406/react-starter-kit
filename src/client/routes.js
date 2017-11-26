import App from '../shared/modules/app/App';
import NotFound from '../shared/components/NotFound';
import { Home, RepoDetails } from './AsyncBundles';

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
