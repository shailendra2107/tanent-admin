import React from "react";
// import { useSelector } from 'react-redux';
import { useRouteMatch } from "react-router-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../router/PrivateRoute";
import PublicRoute from "../router/PublicRoute";
// import LazyRoute from '../router/LazyRoute';
import App from "../layouts/Navbar";
import Auth from "../layouts/Auth";

import Login from "../auth/Login";
import { routes } from "./routes";
import CreateServiceRequest from "../pages/ServiceRequest/Components/CreateServiceRequest";
import PayNow from "../pages/Charges/Components/PayNow";

const AppRouter: React.FC = () => {
  return (
    <App>
      <React.Suspense fallback={<h1>loading....</h1>}>
        <Switch>
          {routes.map((route: any) => (
            <Route
              exact={route.exact}
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
          <Route
            path="/create-service-request"
            component={CreateServiceRequest}
          />
          <Route path="/pay" component={PayNow} />
          {/* <Route exact path='/' component={Home} /> */}
          {/* <Route path='/index' component={Inbox} /> */}

          <Route path="*">
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          </Route>
        </Switch>
      </React.Suspense>
    </App>
  );
};

const AuthRouter: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Auth>
      <React.Suspense fallback={<h1>loading....</h1>}>
        <Switch>
          {/* {routes.map((route: IRoute) => (
            <LazyRoute
              {...route}
              key={route.path}
              path={`${path}${route.path}`}
            />
          ))} */}
          <Route path={`${path}/login`} component={Login} />
        </Switch>
      </React.Suspense>
    </Auth>
  );
};

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path="/auth">
        <AuthRouter />
      </PublicRoute>

      <PrivateRoute path="/">
        <AppRouter />
      </PrivateRoute>
    </Switch>
  </BrowserRouter>
);

export default Router;
