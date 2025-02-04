import React from 'react'

function OrderItem({row, name, date, price, status }) {
    const statusClasses = {
        'لغو شده': 'bg-red-600',
        'تکمیل شده': 'bg-green-600',
        'در حال پردازش': 'bg-yellow-600',
      };
      
    const statusClass = statusClasses[status] || 'bg-gray-500'; 

    return (
        <div className='flex items-center w-full h-14 text-white bg-gray-700 rounded-3xl'>
            <div className='flex w-20 justify-center bg-gray-600 mx-2 py-2 rounded-3xl'>{row + 1}</div>
            <div className='flex flex-1 justify-center bg-gray-600 mx-2 py-2 rounded-3xl'>{name}</div>
            <div className='flex flex-1 justify-center bg-gray-600 mx-2 py-2 rounded-3xl'>{date}</div>
            <div className='flex flex-1 justify-center bg-gray-600 mx-2 py-2 rounded-3xl'>{price} تومان</div>
            <div className={`flex flex-1 justify-center mx-2 py-2 rounded-3xl ${statusClass}`}>{status}</div>
        </div>
    )
}

export default OrderItem