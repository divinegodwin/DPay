"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userAmount, setUserAmount] = useState("****");

  const updateUserAmount = (newAmount) => {
    setUserAmount(newAmount);
  };

  const contextValue = {userAmount, updateUserAmount };

  return (
    <UserContext.Provider value={{ contextValue }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
