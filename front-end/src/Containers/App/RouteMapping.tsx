import { Children } from 'react';
import { ROUTES } from '../../configs/routes';
import {
  Switch,
  Route,
} from "react-router-dom";

const RouteMapping = () => {
  return (
    <Switch>
      {Children.toArray(
        ROUTES.map(r => {
          return (
            <Route
              exact={true}
              path={r.path}
              render={() =>
                r?.component
              }
            />
          );
        }),
      )}
    </Switch>
  );
};

export default RouteMapping;
