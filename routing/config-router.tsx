import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const HomePage = () => (
  <h1> home </h1>
);

const JavaScriptPage = () => (
  <h1>javascript</h1>
);

const ReactJSPage = ({ routes }) => (
  <Fragment>
    <h1>react</h1>
    <Link to='/reactjs/infinite-pagination'>infinite pagination</Link> <br />
    <Link to='/reactjs/paralex'>paralex</Link> <br />
    <Link to='/typescript'>typescript</Link>
    <Switch>
      {routes.map((route, index) => 
        <RouteWithSubRoutes key={index} {...route} />
      )}
    </Switch>
  </Fragment>
);

const InfinitePaginationPage = () => (
  <h1>infinite pagination</h1>
);

const ParalexPage = () => (
  <h1>paralex</h1>
);

const TypeScriptPage = () => (
  <h1>typescript</h1>
);

const routes = [
  {
    path: '/javascript',
    component: JavaScriptPage
  },
  {
    path: '/reactjs',
    component: ReactJSPage,
    routes: [
      {
        path: '/reactjs/infinite-pagination',
        component: InfinitePaginationPage
      },
      {
        path: '/reactjs/paralex',
        component: ParalexPage
      }
    ]
  },
  {
    path: '/typescript',
    component: TypeScriptPage
  },
  {
    path: '/',
    component: HomePage
  },
];

const RouteWithSubRoutes = (route) => {
  return (
    <Route 
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
};

const App = () => (
  <BrowserRouter>
    <div>
      <Link to='/'> home </Link> <br />
      <Link to='/javascript'>javascript</Link> <br />
      <Link to='/reactjs'>react</Link>
    </div>
    <Switch>
      {routes.map((route, index) =>
        <RouteWithSubRoutes key={index} {...route} />
      )}
    </Switch>
  </BrowserRouter>
);

export default App;