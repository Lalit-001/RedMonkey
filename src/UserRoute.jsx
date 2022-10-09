import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const UserRoute = ({ user, children }) => {
  if (user) {
    <Navigate to="/" />;
  }
  return children;
};

export default UserRoute;
