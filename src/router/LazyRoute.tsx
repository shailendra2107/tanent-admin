import React from 'react';
import { Route } from 'react-router-dom';
import type { IRoute } from '../router/routes';

const LazyRoute: React.FC<IRoute> = ({ component, ...rest }: IRoute) => {
  const Component = React.lazy(() => import(`../pages/${component}/index.tsx`));
  return (
    <Route  {...rest}>
      <Component />
    </Route>
  );
};

export default LazyRoute;
