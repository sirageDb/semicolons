import React, { createContext, ReactNode } from "react";
import { AUTH_PAGE } from "./appRouting";
import { SIGNIN } from "./endpoints";

interface IAuthContext {
  getToken: () => string;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
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
    } else {
      window.alert("Could not connect to admin space ERROR ::: " + data.message);
    }
  };
  //================================================================================
  const isAuth = (): boolean => {
    const isAuthItem = localStorage.getItem("isAuth");
    if (!isAuthItem || (isAuthItem && isAuthItem === "false")) {
      return false;
    }
    return true;
  };
  //================================================================================
  const signOut = async (): Promise<void> => {
    window.alert("signout");
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

  return <AuthContext.Provider value={{ getToken, signIn, signOut, isAuth }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
