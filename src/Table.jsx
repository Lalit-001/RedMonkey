import React from "react";
import { Navigate } from "react-router-dom";

const Table = ({ user, setUser }) => {
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  const logout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };
  return <button onClick={logout}>logout</button>;
};

export default Table;
