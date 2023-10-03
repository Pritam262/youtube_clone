'use client'
import { createContext, ReactNode, useContext, useState } from "react";

type AppContextType = {
  isLeftNavHidden: boolean;
  setisLeftNavHidden: (hidden: boolean) => void;
  toggleLeftNav: () => void;
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

  const toggleLeftNav = () => {
    setisLeftNavHidden((prev) => !prev);
  };

  const contextValue: AppContextType = {
    isLeftNavHidden,
    setisLeftNavHidden,
    toggleLeftNav,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
