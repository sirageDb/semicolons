import React from "react";
import { Route, Redirect } from "react-router-dom";

const CustomRoute = ({ component: Component, auth, ...rest }: any): JSX.Element => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? (
        <Component {...props} />
      ) : (
        // : <Resdirect to='/' />
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default CustomRoute;
