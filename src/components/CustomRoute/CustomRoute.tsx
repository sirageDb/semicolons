import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AUTH_PAGE } from "../../lib/appRouting";

const CustomRoute = ({ component: Component, auth, ...rest }: any): JSX.Element => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: AUTH_PAGE,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default CustomRoute;
