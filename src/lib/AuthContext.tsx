import React, { createContext, ReactNode, useState } from "react";
import { AUTH_PAGE } from "./appRouting";
import { SIGNIN } from "./endpoints";

interface IAuthContext {
  getToken: () => string;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
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
    }
    else {
      window.alert("Could not connect to admin space ERROR ::: " + data.message);
    }
  };
  //================================================================================
  const signOut = async (): Promise<void> => {
    window.alert("signout");
  };
  //================================================================================
  const getToken = (): string => {
    const token = localStorage.getItem(localStorageAuthTokenItemName)!;
    if (!token) {
      const isConfirmed  = window.confirm("You will be redirect to auth page ...");
      if(isConfirmed){
        window.location.href = AUTH_PAGE;
      }
    }
    return token;
  };
  //================================================================================

  return <AuthContext.Provider value={{ getToken, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
