"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userAmount, setUserAmount] = useState("N780,000");
  const [userName, setUsername] = useState("BOSS");

  const updateUserAmount = (newAmount) => {
    setUserAmount(newAmount);
  };

  const updateUsername = (newName) => {
    setUsername(newName);
  };

  const contextValue = {
    userAmount,
    updateUserAmount,
    userName,
    updateUsername,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
