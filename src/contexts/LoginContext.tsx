import { User } from "@/interfaces/LoginInterface";
import { createContext, ReactNode, useContext, useState } from "react";

interface LoginContextData {
  user: User;
  handleSetUser: (data: User) => void;
}

interface LoginContextProviderProps {
  children: ReactNode;
  initialValue: User;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginContextProvider({
  children,
  initialValue,
}: LoginContextProviderProps) {
  const [user, setUser] = useState<User>(initialValue);
  const handleSetUser = (data: User) => {
    setUser(data);
  };
  return (
    <LoginContext.Provider
      value={{
        handleSetUser,
        user
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  const context = useContext(LoginContext);

  return context;
}
