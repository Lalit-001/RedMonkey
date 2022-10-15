import React, { useState } from "react";
import { alertContext } from "../Contexts";

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState();
  const removeAlert = () => {
    setAlert(undefined);
  };
  return (
    <alertContext.Provider value={{ alert, setAlert, removeAlert }}>
      {children}
    </alertContext.Provider>
  );
};

export default AlertProvider;
