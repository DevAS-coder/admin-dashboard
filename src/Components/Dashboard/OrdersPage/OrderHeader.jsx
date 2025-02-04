import React from 'react'

function OrderHeader() {
  return (
        <div className='flex items-center w-full h-14 text-white bg-gray-700 rounded-3xl'>
          <div className='flex w-20 justify-center bg-gray-900 mx-2 py-2 rounded-3xl'>ردیف</div>
          <div className='flex flex-1 justify-center bg-gray-900 mx-2 py-2 rounded-3xl'>نام و نام خانوادگی</div>
          <div className='flex flex-1 justify-center bg-gray-900 mx-2 py-2 rounded-3xl'>تاریخ خرید</div>
          <div className='flex flex-1 justify-center bg-gray-900 mx-2 py-2 rounded-3xl'>مبلغ خرید</div>
          <div className='flex flex-1 justify-center bg-gray-900 mx-2 py-2 rounded-3xl'> وضعیت سفارش</div>
        </div>
  )
}

export default OrderHeader