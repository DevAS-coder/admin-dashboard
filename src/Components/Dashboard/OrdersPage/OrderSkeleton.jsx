import React from 'react'

function OrderSkeleton() {
    const skeletons = Array(8).fill(0);

    return (
        <>
            {skeletons.map((_, index) => (
                <div key={index} className='flex items-center w-full h-14 text-white bg-gray-700 rounded-3xl animate-pulse p-2 my-3'>
                    <div className='flex w-20 justify-center bg-gray-600 mx-2 py-2 h-10 rounded-3xl'></div>
                    <div className='flex flex-1 justify-center bg-gray-600 mx-2 py-2 h-10 rounded-3xl'></div>
                    <div className='flex flex-1 justify-center bg-gray-600 mx-2 py-2 h-10 rounded-3xl'></div>
                    <div className='flex flex-1 justify-center bg-gray-600 mx-2 py-2 h-10 rounded-3xl'></div>
                    <div className='flex flex-1 justify-center bg-gray-600 mx-2 py-2 h-10 rounded-3xl'></div>
                </div>
            ))}
        </>
    )
}

export default OrderSkeleton