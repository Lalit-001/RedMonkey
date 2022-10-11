import React from "react";
import { useContext } from "react";
import { alertContext, userContext } from "./Contexts";

const WithProvider = (provider) => (IncomingComponent) => (props) => {
  const contextData = useContext(provider);
  return <IncomingComponent {...props} {...contextData} />;
};

export default WithProvider;
export const WithAlert = WithProvider(alertContext);
export const WithUser = WithProvider(userContext);
