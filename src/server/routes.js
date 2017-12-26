import App from '../shared/modules/app/App';
import AppShell from '../shared/modules/app/AppShell';
import NotFound from '../shared/components/NotFound';
import Home from '../shared/modules/pages/Home';
import RepoDetails from '../shared/modules/pages/RepoDetails';
import Login from '../shared/modules/pages/Login';
import About from '../shared/modules/pages/About';

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
        path: '/shell',
        exact: true,
        component: AppShell
      },
      {
        path: '/login',
        exact: true,
        component: Login
      },
      {
        path: '/about',
        exact: true,
        component: About
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
