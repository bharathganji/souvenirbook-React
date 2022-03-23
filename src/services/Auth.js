// import React from "react";
// import { useNavigate } from "react-router-dom";

import SupaBase from "./SupaBase";

// const navigate = useNavigate();

// const Auth = () => {
//   // function logout() {
//   //   localStorage.removeItem("token");
//   //   navigate("/");
//   // }

//   return <></>;
// };

// export default Auth;

export async function login(email) {
  const value = await SupaBase.checkUserExists(email).then((data) => {
    if (email.localeCompare(data[0].email) == 0) {
      setToken(data[0]);
      return "ok";
    } else {
      console.log("else");
      return "err";
    }
  });
  return value;
}
export function setToken(param) {
  localStorage.setItem("token", param.email);
  localStorage.setItem("userData", JSON.stringify(param));
}

export function getToken() {
  return localStorage.getItem("token");
}

export function isLoggedIn() {
  return getToken() !== null;
}

export function logOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");

  // navigate("/");
}
