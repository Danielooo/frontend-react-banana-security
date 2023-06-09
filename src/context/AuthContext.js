import React, { createContext, useState } from "react";


export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const [ isAuth, toggleIsAuth] = useState(true);

  function login() {
    console.log('gebruiker is ingelogd')
    toggleIsAuth(true);
  }

  function logout() {
    console.log('gebruiker is uitgelogd')
    toggleIsAuth(false);
  }

  const contextData = {
    isAuth,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContextProvider;
