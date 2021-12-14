import React from "react";
import { Route ,Routes , Navigate} from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Routes
      {...rest}
      render={({ location }) =>
        localStorage.getItem("token") ? (
          children
        ) : (
          <Route path = "/Login"></Route>

        )
      }
    />
  );
};
export default ProtectedRoute;