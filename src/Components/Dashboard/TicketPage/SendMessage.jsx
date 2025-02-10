import React, { useContext, useEffect, useState } from 'react'
import { TicketsContext } from '../../../Contexts/TicketContext';
import Notification from '../../utils/Notification';
import { notifContext } from '../../../Contexts/NotificationContext';

function SendMessage() {
	const { selectedTicket, chatMessages, setchatMessages } = useContext(TicketsContext)
	const [newMessage, setNewMessage] = useState('')
	const [response, setResponse] = useState('')
	const [btnClicked, setBtnClicked] = useState(false)

	const handleNewMessage = (e) => {
		setNewMessage(e.target.value)
	}

	const handleClick = () => {
		setBtnClicked(true)
		setchatMessages([...chatMessages, { sender: 'کاربر', message: newMessage }])
		selectedTicket.messages = JSON.stringify([...chatMessages, { sender: 'کاربر', message: newMessage }])
	}

	const { setMessage, setStatus, setShowNotif } = useContext(notifContext)

	useEffect(() => {
		if (btnClicked && newMessage) {
			const SendMessage = async () => {
				try {
					const res = await fetch(`https://dashboard-db.amirhoseinsadeghian2017.workers.dev/api/tickets/send`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ id: selectedTicket.id, message: JSON.stringify(chatMessages) })
					});
					const data = await res.json()
					setResponse(data) 

					if (res.status === 200) {
						setNewMessage('')
						setMessage(data.message)
						setStatus(res.status)
						setShowNotif(true)
						setTimeout(() => {
							setShowNotif(false)
						}, 3000)
					}
				} catch (error) {
					console.error("Error sending message:", error)
				}
			}
			setBtnClicked(false)
			SendMessage()
		} else {
			setNewMessage('')
		}
	}, [chatMessages])

	return (
		<div>
			{response && <Notification message={response.message} status='200' />}
			<div className="flex justify-between items-center mt-5">
				<input type="text" className="w-5/5 p-2 bg-gray-800 rounded-lg" placeholder="پیام خود را بنویسید..." value={newMessage} onChange={handleNewMessage} />
				<button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-900 cursor-pointer" onClick={handleClick}>ارسال</button>
			</div>
		</div>
	)
}

export default SendMessage
