import { createContext, useState } from "react";

export const Usercontext = createContext()

export const Userinfo = ({ children }) => {
    const [name, setname] = useState('')
    const [Username, setUsername] = useState('')

    return (
        <Usercontext.Provider value={{ name, setname ,Username, setUsername }}>
            {children}
        </Usercontext.Provider>
    )
}
