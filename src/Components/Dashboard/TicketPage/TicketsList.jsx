import React, { useContext } from 'react'
import { TicketsContext } from '../../../Contexts/TicketContext'
import TicketItem from './TicketItem'

function TicketsList() {
    const { Tickets } = useContext(TicketsContext)

    return (
        <div className="w-1/3 border-l border-gray-500 p-6 bg-gray-900 shadow-sm">
            <div className='flex justify-between items-center mb-6'>
                <h2 className="text-3xl font-bold">تیکت ها</h2>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">ایجاد تیکت</button>
            </div>
            <ul className="space-y-2">
                {Tickets.map(ticket => (
                    <TicketItem ticket={ticket} />
                ))}
            </ul>
        </div>
    )
}

export default TicketsList