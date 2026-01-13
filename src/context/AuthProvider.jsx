import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage' 

export const AuthContext = createContext()

const AuthProvider = ({ children }) => { 

    const [userData, setUserData] = useState([])

    useEffect(() => {
    const data = getLocalStorage()
    if (!data) {
        setLocalStorage()
        const { employees } = getLocalStorage()
        setUserData(employees)
    } else {
        setUserData(data.employees)
    }
    }, []) 

    return (
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
    )
}

export default AuthProvider