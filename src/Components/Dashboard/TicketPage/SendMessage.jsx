import React, { useContext, useEffect, useState } from 'react'
import { TicketsContext } from '../../../Contexts/TicketContext';

function SendMessage() {
	const { selectedTicket, chatMessages, setchatMessages } = useContext(TicketsContext)
	const [newMessage, setNewMessage] = useState('')

	const handleNewMessage = (e) => {
		setNewMessage(e.target.value)
	}

	const handleClick = () => {
		setchatMessages([...chatMessages, { sender: 'کاربر', message: newMessage }])
		selectedTicket.messages = JSON.stringify([...chatMessages, { sender: 'کاربر', message: newMessage }])
	}

	useEffect(() => {
		if(newMessage){
			const SendMessage = async () => {
				const res = await fetch(`https://dashboard-db.amirhoseinsadeghian2017.workers.dev/api/tickets/send`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ id: selectedTicket.id, message: JSON.stringify(chatMessages) })
				})
				.then(res => res.json())
				if (res.status === 200) {
					setNewMessage('')
				}
			}
			SendMessage()
		}
	}, [chatMessages])

	return (
		<div>
			<div className="flex justify-between items-center mt-5">
				<input type="text" className="w-5/5 p-2 bg-gray-800 rounded-lg" placeholder="پیام خود را بنویسید..." value={newMessage} onChange={handleNewMessage} />
				<button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-900 cursor-pointer" onClick={handleClick}>ارسال</button>
			</div>
		</div>
	)
}

export default SendMessage