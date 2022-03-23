import { useState } from "react";
import { Navigate } from "react-router-dom";
import Auth, { isLoggedIn, login } from "../services/Auth";

const Protected = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default Protected;
