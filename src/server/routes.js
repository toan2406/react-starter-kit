import App from '../shared/modules/app/App';
import AppShell from '../shared/modules/app/AppShell';
import NotFound from '../shared/components/NotFound';
import Home from '../shared/modules/home/Home';
import RepoDetails from '../shared/modules/repo/RepoDetails';
import About from '../shared/modules/about/About';

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
