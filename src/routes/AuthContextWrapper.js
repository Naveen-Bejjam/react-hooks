import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);
export const AuthContextWrapper = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(true);
    return(
        <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
