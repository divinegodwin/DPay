"use client"
import { createContext, useContext, useState } from "react";

const  UserContext = createContext()

export const UserProvider = ({children})=>{
        const [userAmount, setUserAmount] = useState('****')
        const [userName, setUsername] = useState('@user')

        const updateUserAmount = (newAmount) =>{
            setUserAmount(newAmount)
        }

        const updateUserName = (newUsername) =>{
            setUsername(newUsername)
        }

        const contextValue = {
            userAmount,
            updateUserAmount,
            userName,
            updateUserName,
          };

        return(
            <>
            <UserContext.Provider value={{ contextValue }}>
                {children}
            </UserContext.Provider>
            
            <UserContext.Provider value={{ userName, updateUserName }}>
                    {children}
                </UserContext.Provider></>
        )
}

export const useUserContext = ()=>{
    const context = useContext(UserContext)
    return context;
}