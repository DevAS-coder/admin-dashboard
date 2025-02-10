import React, { useContext, useEffect, useState } from 'react'
import { TicketsContext } from '../../../Contexts/TicketContext'
import TicketItem from './TicketItem'
import TicketsSkeleton from './TicketsSkeleton'
import SendTicket from './SendTicket'

function TicketsList() {
    const { Tickets, setTickets, setModalOpen} = useContext(TicketsContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTickets = async () => {
            const response = await fetch('https://dashboard-db.amirhoseinsadeghian2017.workers.dev/api/tickets');
            const data = await response.json();
            setLoading(false)
            setTickets(data.tickets.results);
        };
        getTickets();
    },[])

    return (
        <div className="w-full lg:w-1/3 border-l border-gray-500 p-6 bg-gray-900 shadow-sm">
            <div className='flex justify-between items-center mb-6'>
                <h2 className="text-3xl font-bold">تیکت ها</h2>
                <SendTicket />
            </div>
            <ul className="space-y-2">
                {loading ? <TicketsSkeleton />
                :   
                Tickets.map(ticket => (
                     <TicketItem ticket={ticket} key={ticket.id}/>
                )) 
                }
            </ul>
        </div>
    )
}

export default TicketsList