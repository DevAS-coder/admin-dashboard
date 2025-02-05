import React, { useContext } from 'react'
import { ordersContext } from '../../../Contexts/OrderPageContext'

function OrderHeader() {
  const {setsortByRow, sortByRow, setsortByDate, sortByDate, setsortByPrice, sortByPrice} = useContext(ordersContext)

  return (
        <div className='flex items-center w-full h-14 text-white bg-gray-700 rounded-3xl'>
          <div className='flex w-20 justify-center bg-gray-900 mx-2 py-2 rounded-3xl cursor-pointer' onClick={() => {setsortByRow(!sortByRow)}}>ردیف
          <i class={`fa-solid ${sortByRow ? 'fa-sort-down' : 'fa-sort-up mt-2'} mr-2`}></i></div>
          <div className='flex flex-1 justify-center bg-gray-900 mx-2 py-2 rounded-3xl'>نام و نام خانوادگی</div>
          <div className='flex flex-1 justify-center bg-gray-900 mx-2 py-2 rounded-3xl cursor-pointer' onClick={() => {setsortByDate(!sortByDate)}}>تاریخ خرید<i class={`fa-solid ${sortByDate ? 'fa-sort-down' : 'fa-sort-up mt-2'} mr-2`}></i></div>
          <div className='flex flex-1 justify-center bg-gray-900 mx-2 py-2 rounded-3xl cursor-pointer' onClick={() => {setsortByPrice(!sortByPrice)}}>مبلغ خرید
          <i class={`fa-solid ${sortByPrice ? 'fa-sort-down' : 'fa-sort-up mt-2'} mr-2`}></i></div>
          <div className='flex flex-1 justify-center bg-gray-900 mx-2 py-2 rounded-3xl'> وضعیت سفارش</div>
        </div>
  )
}

export default OrderHeader