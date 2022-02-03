import React, { createContext, ReactNode } from "react";
import { AUTH_PAGE } from "./appRouting";
import { SIGNIN, LOGOUT } from "./endpoints";

interface IAuthContext {
  getToken: () => string;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  isAuth: () => boolean;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  //================================================================================

  const localStorageAuthTokenItemName = "authToken";

  //================================================================================
  const signIn = async (email: string, password: string): Promise<void> => {
    const apiResponse = await fetch(SIGNIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await apiResponse.json();
    if (apiResponse.status === 200) {
      localStorage.setItem(localStorageAuthTokenItemName, data.token);
      localStorage.setItem("isAuth", "true");
      window.location.href = "/backoffice/projects";
    } else {
      window.alert("Could not connect to admin space ERROR ::: " + data.message);
    }
  };
  //================================================================================
  const isAuth = (): boolean => {
    console.log("calling here");

    const isAuthItem = localStorage.getItem("isAuth");
    if (!isAuthItem || (isAuthItem && isAuthItem === "false")) {
      return false;
    }
    return true;
  };
  //================================================================================
  const logOut = async (): Promise<void> => {
    const isConfirmedLogOut = window.confirm("Are you sure you want to log out ?");
    if (isConfirmedLogOut) {
      console.log("here");
      const apiResponse = await fetch(LOGOUT, {
        headers : {authorization : getToken()}
      });
      if (apiResponse.status === 401) {
        const isConfirmed = window.confirm("Access denied, will be redirected to /auth");
        if (isConfirmed) {
          window.location.href = AUTH_PAGE;
        }
      }
      if (apiResponse.status === 200) {
        localStorage.removeItem(localStorageAuthTokenItemName);
        localStorage.removeItem("isAuth");
        window.location.href = "/";
      }
    }
  };
  //================================================================================
  const getToken = (): string => {
    const token = localStorage.getItem(localStorageAuthTokenItemName)!;
    if (!token) {
      const isConfirmed = window.confirm("You will be redirect to auth page ...");
      if (isConfirmed) {
        window.location.href = AUTH_PAGE;
      }
    }
    return token;
  };
  //================================================================================

  return <AuthContext.Provider value={{ getToken, signIn, logOut, isAuth }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
