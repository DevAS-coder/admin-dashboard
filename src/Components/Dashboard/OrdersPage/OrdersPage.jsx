import React, { useEffect, useState } from 'react';
import { OrdersPageContext } from '../../../Contexts/OrderPageContext';
import OrderHeader from './OrderHeader';
import OrderItem from './OrderItem';
import OrderSkeleton from './OrderSkeleton';

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dashboard-db.amirhoseinsadeghian2017.workers.dev/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ count: 15, topDown: 'DESC' }),
    })
      .then(response => response.json())
      .then(data => {
        setOrders(data.orders.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      });
  }, []);

  return (
    <OrdersPageContext>
      <div className='bg-gray-900 min-h-screen text-white p-4'>
        <h1 className='text-2xl'>سفارشات</h1>
        <div className='bg-gray-800 h-120 mt-10 m-5 rounded-3xl overflow-y-scroll'>
          <div className='sticky top-0 w-auto bg-gray-700 py-2'>
            <OrderHeader />
          </div>
          {loading ? <OrderSkeleton/> : orders.map((order, index) => (
            <div key={order.id} className='p-2'>
              <OrderItem row={index} name={order.username} date={order.date} price={order.price} status={order.orderstatus}/>
            </div>
          ))}
        </div>
      </div>
    </OrdersPageContext>
  );
}

export default OrdersPage;
