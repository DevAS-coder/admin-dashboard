import { createContext, useState } from "react";

export const ordersContext = createContext()

export const OrdersPageContext = ({ children }) => {
    const [recordsCount, setrecordsCount] = useState('')
    const [recordsTopDown, setrecordsTopDown] = useState('')

    return (
        <ordersContext.Provider value={{ recordsCount, setrecordsCount, recordsTopDown, setrecordsTopDown }}>
            {children}
        </ordersContext.Provider>
    )
}