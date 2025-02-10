import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { TicketsContext } from "../../../Contexts/TicketContext";
import './Modal.css'
Modal.setAppElement("#root");

function SendTicket() {
    const { ModalOpen, setModalOpen } = useContext(TicketsContext)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="flex flex-col items-center justify-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer" onClick={() => { setModalOpen(true) }}>ایجاد تیکت</button>

            <Modal
                isOpen={ModalOpen}
                onRequestClose={() => setModalOpen(false)}
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="p-6 bg-gray-700 rounded-lg shadow-lg text-white max-h-96 z10">
                    <div className="flex justify-between items-center">
                        <h2>ایجاد تیکت جدید</h2>
                        <button onClick={() => setModalOpen(false)} className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <input type="text" className="w-full p-2 bg-gray-800 rounded-lg mt-4" placeholder="نام تیکت" value={name} onChange={(e) => setName(e.target.value)} />
                    <textarea 
                        className="w-full p-2 bg-gray-800 rounded-lg mt-4" 
                        placeholder="توضیحات تیکت" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        maxLength="500"
                    />
                    <button onClick={() => setModalOpen(false)} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 cursor-pointer mt-4">
                        <span>ارسال</span>
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default SendTicket;