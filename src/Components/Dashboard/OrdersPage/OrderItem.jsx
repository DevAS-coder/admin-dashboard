import React from 'react';

function OrderItem({ row, name, date, price, status }) {
    const statusClasses = {
        'لغو شده': 'bg-red-600',
        'تکمیل شده': 'bg-green-600',
        'در حال پردازش': 'bg-yellow-600',
    };
    
    const statusClass = statusClasses[status] || 'bg-gray-500';

    return (
        <div className='flex items-center w-full h-14 text-white bg-gray-700 rounded-3xl whitespace-nowrap'>
            <div className='flex min-w-[60px] justify-center bg-gray-600 mx-2 py-2 rounded-3xl flex-1'>{row + 1}</div>
            <div className='flex min-w-[150px] justify-center bg-gray-600 mx-2 py-2 rounded-3xl flex-1'>{name}</div>
            <div className='flex min-w-[150px] justify-center bg-gray-600 mx-2 py-2 rounded-3xl flex-1'>{date}</div>
            <div className='flex min-w-[150px] justify-center bg-gray-600 mx-2 py-2 rounded-3xl flex-1'>{price} تومان</div>
            <div className={`flex min-w-[150px] justify-center mx-2 py-2 rounded-3xl flex-1 ${statusClass}`}>{status}</div>
        </div>
    );
}

export default OrderItem;
