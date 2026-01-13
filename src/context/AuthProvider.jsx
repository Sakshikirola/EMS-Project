import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const data = getLocalStorage()

    if (!data || !data.employees || data.employees.length === 0) {
      setLocalStorage()
      const freshData = getLocalStorage() 
      setUserData(freshData.employees)
    } else {
      setUserData(data.employees)
    }
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
