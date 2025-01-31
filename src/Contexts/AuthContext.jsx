import { createContext, useState } from "react";

export const LoginCardContext = createContext()

export const AuthContext = ({ children }) => {
    const [showLogin, setshowLogin] = useState(true)
    const [IsValidToken, setIsValidToken] = useState(null)
    const toggleCard = () => {
        setshowLogin(!showLogin)
    }

    return (
        <LoginCardContext.Provider value={{ showLogin, toggleCard, IsValidToken, setIsValidToken }}>
            {children}
        </LoginCardContext.Provider>
    )
}
