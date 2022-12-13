import React from "react"

export const UserContext = React.createContext()

export const UseStorage = ({ children }) => {
  return (
    <UserContext.Provider value={{ usuario: "leonardo" }}>
      {children}
    </UserContext.Provider>
  )
}

export default UseStorage
