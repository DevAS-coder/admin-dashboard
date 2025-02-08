import React from 'react'

function TicketsSkeleton() {
    const skeletons = Array(5).fill(0);
    return (
        <>
            {skeletons.map((_, index) => (
                <li
                    key={index}
                    className="p-3 animate-pulse rounded-lg cursor-pointer transition-colors duration-200 border border-gray-200"
                >
                    <h3 className='text-sm bg-gray-600 px-6 py-3 mb-5 rounded-full'></h3>
                    <span className={`text-sm bg-gray-600 px-8 py-0.5 rounded-full`}>
                    </span>
                </li>
            ))}
        </>
    )
}

export default TicketsSkeleton