import { createContext, useState } from "react";

export const ordersContext = createContext()

export const OrdersPageContext = ({ children }) => {
    const [recordsCount, setrecordsCount] = useState('')
    const [sortByRow, setsortByRow] = useState(true)
    const [sortByDate, setsortByDate] = useState(true)
    const [sortByPrice, setsortByPrice] = useState(true)

    return (
        <ordersContext.Provider value={{ recordsCount, setrecordsCount, sortByRow, setsortByRow, sortByDate, setsortByDate,sortByPrice, setsortByPrice }}>
            {children}
        </ordersContext.Provider>
    )
}