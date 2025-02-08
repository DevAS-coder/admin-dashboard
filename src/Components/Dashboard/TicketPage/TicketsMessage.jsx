import React from 'react';

function TicketsMessage({ messages }) {
    const parseMessages = JSON.parse(messages);

    return (
        <div>
            {parseMessages.map((message, index) => (
                <div 
                    key={index} 
                    className={`w-full flex ${message.sender === 'پشتیبانی' ? 'justify-end' : 'justify-start'}`}
                >
                    <div className={`relative max-w-[70%] p-2 rounded-lg ${message.sender === 'پشتیبانی' ? 'bg-gray-800' : 'bg-blue-800'} mb-10 p-5 text-white`}>
                        <div 
                            className={`absolute top-0 ${
                                message.sender === 'پشتیبانی' ? '-left-2 top-10' : '-right-2 top-10'
                            } w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${
                                message.sender === 'پشتیبانی' 
                                    ? 'border-r-[10px] border-r-gray-800' 
                                    : 'border-l-[10px] border-l-blue-800'
                            }`}
                        />
                    
                        <h3 className="text-lg font-bold mb-2">{message.sender}</h3>
                        <hr />
                        <p className="mt-5">{message.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TicketsMessage;
