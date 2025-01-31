import { createContext, useState } from "react";

export const notifContext = createContext()

export const NotificationContext = ({ children }) => {
    const [message, setMessage] = useState('')
    const [Status, setStatus] = useState('')
    const [ShowNotif, setShowNotif] = useState(false)

    return (
        <notifContext.Provider value={{ setMessage, message, setShowNotif,ShowNotif,Status, setStatus }}>
            {children}
        </notifContext.Provider>
    )
}
