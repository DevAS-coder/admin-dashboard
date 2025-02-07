import React, { createContext, useState } from 'react'

export const TicketsContext = createContext()

export function TicketContext({children}) {
    const [selectedTicket, setSelectedTicket] = useState(null);
    const Tickets = [
        { id: 1, title: 'رفع باگ نمودار ها', description: 'Description for ticket 1', status: 'باز' },
        { id: 2, title: 'دریافت اطلاعات', description: 'Description for ticket 2', status: 'درحال انجام' },
        { id: 3, title: 'اضافه کردن خروجی اکسل', description: 'Description for ticket 3', status: 'بسته' }
      ];

    return (
        <TicketsContext.Provider value={{ selectedTicket, setSelectedTicket, Tickets }}>
            {children}
        </TicketsContext.Provider>
    )
}

