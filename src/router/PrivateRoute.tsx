import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from '../lib/auth';
import type { RouteProps } from 'react-router-dom';
import { getAuth } from '../store/auth';
import { useAppSelector } from '../store/hook';
// import store from '../store';
// import auth from '../store/auth';

const PrivateRoute: React.FC<RouteProps> = ({
  children,
  ...rest
}: any) => {
  // const { isLoggedIn } = useAuth();
  // console.log("🚀 ~ file: PrivateRoute.tsx ~ line 13 ~ isLoggedIn", isLoggedIn)
  // if (!isLoggedIn) {
  //   store.dispatch(auth.actions.logout());
  // }
  const isAuth = useAppSelector(getAuth)
  const isLoggedIn = isAuth
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return (
          isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/auth/login',
                state: { from: location },
              }}
            />
          )
        )
      }
      }
    />
  );
};

export default PrivateRoute;
