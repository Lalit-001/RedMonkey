import React from "react";
import { Navigate } from "react-router-dom";

const Table = ({ user, setUser }) => {
  const logout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };
  return <button onClick={logout}>logout login user is </button>;
};

export default Table;
