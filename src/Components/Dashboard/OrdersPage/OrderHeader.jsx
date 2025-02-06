import React, { useContext } from 'react';
import { ordersContext } from '../../../Contexts/OrderPageContext';

function OrderHeader() {
  const { setsortByRow, sortByRow, setsortByDate, sortByDate, setsortByPrice, sortByPrice } = useContext(ordersContext);

  return (
    <div className='overflow-x-auto'>
      <div className='flex items-center w-full h-14 text-white bg-gray-700 rounded-3xl whitespace-nowrap'>
        <div className='flex min-w-[120px] justify-center bg-gray-900 mx-2 py-2 rounded-3xl cursor-pointer flex-1' onClick={() => { setsortByRow(!sortByRow) }}>
          ردیف
          <i className={`fa-solid ${sortByRow ? 'fa-sort-down' : 'fa-sort-up mt-2'} mr-2`}></i>
        </div>
        <div className='flex min-w-[150px] justify-center bg-gray-900 mx-2 py-2 rounded-3xl flex-1'>نام و نام خانوادگی</div>
        <div className='flex min-w-[150px] justify-center bg-gray-900 mx-2 py-2 rounded-3xl cursor-pointer flex-1' onClick={() => { setsortByDate(!sortByDate) }}>
          تاریخ خرید
          <i className={`fa-solid ${sortByDate ? 'fa-sort-down' : 'fa-sort-up mt-2'} mr-2`}></i>
        </div>
        <div className='flex min-w-[150px] justify-center bg-gray-900 mx-2 py-2 rounded-3xl cursor-pointer flex-1' onClick={() => { setsortByPrice(!sortByPrice) }}>
          مبلغ خرید
          <i className={`fa-solid ${sortByPrice ? 'fa-sort-down' : 'fa-sort-up mt-2'} mr-2`}></i>
        </div>
        <div className='flex min-w-[150px] justify-center bg-gray-900 mx-2 py-2 rounded-3xl flex-1'>وضعیت سفارش</div>
      </div>
    </div>
  );
}

export default OrderHeader;
