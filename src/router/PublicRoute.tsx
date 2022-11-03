import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from '../lib/auth';
import type { RouteProps } from 'react-router-dom';
import { useAppSelector } from '../store/hook';
import { getAuth } from '../store/auth';
// import store from '../store';
// import auth from '../store/auth';

const PublicRoute: React.FC<RouteProps> = ({
  children,
  ...rest
}: any) => {
  // const { isLoggedIn } = useAuth();
  // console.log("🚀 ~ file: PublicRoute.tsx ~ line 13 ~ isLoggedIn", isLoggedIn)

  // if (!isLoggedIn) {
  //   store.dispatch(auth.actions.logout());
  // }

  const isAuth = useAppSelector(getAuth)
  const isLoggedIn = isAuth

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

export default PublicRoute;
