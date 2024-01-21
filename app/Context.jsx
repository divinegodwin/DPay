"use client"
import { createContext, useContext, useState } from "react";

const  UserContext = createContext()

export const UserProvider = ({children})=>{
        const [userAmount, setUserAmount] = useState('N896,000')

        const updateUserAmount = (newAmount) =>{
            setUserAmount(newAmount)
        }

        return(
            <UserContext.Provider value = {{userAmount, updateUserAmount}}>
                {children}
            </UserContext.Provider>
        )
}

export const useUserContext = ()=>{
    const context = useContext(UserContext)
    return context;
}