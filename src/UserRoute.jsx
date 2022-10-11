import React from "react";
import { Navigate } from "react-router-dom";
import { WithUser } from "./WithProvider";

const UserRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default WithUser(UserRoute);
