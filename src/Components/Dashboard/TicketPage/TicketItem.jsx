import React, { useContext } from 'react'
import { TicketsContext } from '../../../Contexts/TicketContext'

function TicketItem({ticket}) {

    const { setSelectedTicket, status } = useContext(TicketsContext)

    return (
        <li
            key={ticket.id}
            onClick={() => setSelectedTicket(ticket)}
            className="p-3 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors duration-200 border border-gray-200 hover:border-blue-500"
        >
            <h3 className="text-xl mb-3">{ticket.name}</h3>
            <span className={`text-sm ${ticket.status === 'open' ? 'bg-green-600 px-6 py-0.5 rounded-full' :
                ticket.status === 'in_progress' ? 'bg-yellow-600 px-6 py-0.5 rounded-full' :
                    'bg-red-600 px-6 py-0.5 rounded-full'
                }`}>
                {status[ticket.status.toLowerCase()]}
            </span>
        </li>
    )
}

export default TicketItem