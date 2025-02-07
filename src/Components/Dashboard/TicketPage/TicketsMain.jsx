import React, { useContext } from 'react'
import { TicketsContext } from '../../../Contexts/TicketContext'

function TicketsMain() {
    const { selectedTicket, setSelectedTicket } = useContext(TicketsContext)

    return (
        <>    
        {selectedTicket ? (
            <div className="w-2/3 p-6 bg-gray-900 ">
                <div className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className='flex justify-between items-center'>
                        <h2 className="text-3xl font-bold ">{selectedTicket.title}</h2>
                        <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 cursor-pointer" onClick={() => { setSelectedTicket('') }}>بستن</button>
                    </div>
                    <hr />
                    <div className='space-y-2 bg-gray-700 p-6 rounded-lg'>
                        <p className="text-lg">{selectedTicket.description}</p>
                        <div className="inline-block px-3 py-1 rounded-full text-sm font-medium
                  ${selectedTicket.status === 'Open' ? 'bg-green-100 text-green-800' :
                    selectedTicket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100'
                  }">
                            Status: {selectedTicket.status}
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='flex justify-center w-2/3 items-center'><p className="text-lg text-center">لطفا یک تیکت انتخاب کنید یا تیکت جدیدی بسازید :)</p></div>
        )}
        </>
    )
}

export default TicketsMain