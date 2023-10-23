'use client'
import { createContext, ReactNode, useContext, useState, useEffect } from "react";

type AppContextType = {
  isLeftNavHidden: boolean;
  setisLeftNavHidden: (hidden: boolean) => void;
  toggleLeftNav: () => void;
  isLogin:boolean;
  setIsLogin: (loginStatus: boolean) => void; // Add setIsLogin function
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [isLeftNavHidden, setisLeftNavHidden] = useState(true);
  const [isLogin, setIsLogin] = useState(false); // Initialize isLogin state


  useEffect(() => {
    // Check if there's an "auth-token" in local storage to determine if the user is logged in
    const authToken = localStorage.getItem("auth-token");
    setIsLogin(!!authToken); // Set isLogin to true if authToken is present

    // You can also perform other actions here, like checking the validity of the token, etc.
  }, []);


  const toggleLeftNav = () => {
    setisLeftNavHidden((prev) => !prev);
  };

  const contextValue: AppContextType = {
    isLeftNavHidden,
    setisLeftNavHidden,
    toggleLeftNav,
    isLogin,
    setIsLogin: (loginStatus) => setIsLogin(loginStatus), // Provide the setIsLogin function
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
