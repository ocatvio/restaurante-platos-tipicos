import React, { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { AuthReduccer } from "./AuthReduccer";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,

    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReduccer, {}, init);

  const login = (user) => {
    

    const action = {
      type: types.login,
      payload: user,
    };

    dispatch(action);

    localStorage.setItem("user", JSON.stringify(user));
  };


  const logout = () => {
    localStorage.removeItem('user')

    const action = {
        type:types.logout
    }

    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ ...authState, login: login, logout:logout }}>
      {children}
    </AuthContext.Provider>
  );
};
