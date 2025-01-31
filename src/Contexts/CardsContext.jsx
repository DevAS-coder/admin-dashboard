import { createContext, useState } from "react";

export const CardContext = createContext()

export const CardsContext = ({ children }) => {
    const [showUsers, setshowUsers] = useState(true)
    const [showOrders, setshowOrders] = useState(true)
    const [showMessages, setshowMessages] = useState(true)
    const [showIncome, setshowIncome] = useState(true)

    return (
        <CardContext.Provider value={{ showUsers, setshowUsers,showOrders, setshowOrders,showMessages, setshowMessages, showIncome, setshowIncome}}>
            {children}
        </CardContext.Provider>
    )
}
