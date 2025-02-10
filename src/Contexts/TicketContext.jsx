import React, { createContext, useState } from 'react'

export const TicketsContext = createContext()

export function TicketContext({children}) {
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [Tickets, setTickets] = useState([]);
    const [ModalOpen, setModalOpen] = useState(false);
    const [chatMessages, setchatMessages] = useState([])


    const status = {
        'open': 'باز',
        'in_progress': 'درحال انجام',
        'closed': 'بسته شده'
    }

    return (
        <TicketsContext.Provider value={{ selectedTicket, setSelectedTicket, Tickets, setTickets, status,ModalOpen, setModalOpen, chatMessages, setchatMessages }}>
            {children}
        </TicketsContext.Provider>
    )
}

