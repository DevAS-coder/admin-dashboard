import React, { useContext } from 'react'
import { TicketsContext } from '../../../Contexts/TicketContext'
import TicketsMessage from './TicketsMessage'
import SendMessage from './SendMessage'

function TicketsMain() {
    const { selectedTicket, setSelectedTicket, status } = useContext(TicketsContext)

    return (
        <>
            {selectedTicket ? (
                <div className="w-2/3 p-6 bg-gray-900 ">
                    <div className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className='flex justify-between items-center'>
                            <div>
                                <h2 className="text-3xl font-bold mb-3">{selectedTicket.name}</h2>
                                <p className="text-lg"><span className="font-bold">وضعیت:</span> <span className={`text-sm ${selectedTicket.status === 'open' ? 'bg-green-600 px-6 py-0.5 rounded-full' :
                                    selectedTicket.status === 'in_progress' ? 'bg-yellow-600 px-6 py-0.5 rounded-full' :
                                        'bg-red-600 px-6 py-0.5 rounded-full'
                                    }`}>{status[selectedTicket.status]}</span></p>
                            </div>
                            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 cursor-pointer" onClick={() => { setSelectedTicket('') }}>بستن</button>
                        </div>
                        <hr />
                        <div className='space-y-2 bg-gray-700 p-6 rounded-lg'>
                            <TicketsMessage messages={selectedTicket.messages} />
                            {
                                selectedTicket.status === 'closed' ? (
                                    <div className="bg-red-600 text-white p-2 rounded-lg">
                                        <p>این تیکت بسته شده است و شما نمی توانید به آن پاسخ دهید.</p>
                                    </div>
                                ) : <SendMessage ticketId={selectedTicket.id} />
                            }
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