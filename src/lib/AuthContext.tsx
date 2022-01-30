import React, { useContext, createContext, ReactNode, useState } from "react";

interface IAuthContext {
  token: string;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [token, setToken] = useState<string>("");

  //================================================================================
  const signIn = async (email: string, password: string): Promise<void> => {
    console.log(email);
    console.log(password);
    console.log("sign in");
    setToken("this is the token");
  };
  //================================================================================
  const signOut = async (): Promise<void> => {
    console.log("Signout");
    setToken("");
  };

  return <AuthContext.Provider value={{ token, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
