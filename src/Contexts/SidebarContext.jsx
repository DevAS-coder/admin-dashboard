import { createContext, useState } from "react";

export const SideContext = createContext()

export const SidebarContext = ({ children }) => {
    const [isOpen, setisOpen] = useState(true)

    return (
        <SideContext.Provider value={{ isOpen, setisOpen }}>
            {children}
        </SideContext.Provider>
    )
}
