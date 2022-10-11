import React from "react";
import { Navigate } from "react-router-dom";

import { WithUser } from "./WithProvider";

const AuthRoute = ({ children, user }) => {
  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default WithUser(AuthRoute);
