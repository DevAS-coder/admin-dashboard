import React, { useContext, useEffect, useState } from 'react';
import OrderHeader from './OrderHeader';
import OrderItem from './OrderItem';
import OrderSkeleton from './OrderSkeleton';
import { ordersContext } from '../../../Contexts/OrderPageContext';

function OrdersPage() {
	const [orders, setOrders] = useState([]);
	const [filteredOrders, setfilteredOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const { sortByRow, recordsCount, sortByDate, sortByPrice } = useContext(ordersContext)

	useEffect(() => {
		fetch('https://dashboard-db.amirhoseinsadeghian2017.workers.dev/api/orders', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ count: 20, topDown: 'ASCS' }),
		})
			.then(response => response.json())
			.then(data => {
				setOrders(data.orders.results);
				setfilteredOrders(data.orders.results)
				setLoading(false);
			})
			.catch(error => {
				console.error('Error fetching orders:', error);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		setfilteredOrders([...filteredOrders].reverse())
	}, [sortByRow])

	useEffect(() => {
		if(sortByDate){
			setfilteredOrders([...filteredOrders].sort((a, b) => new Date(a.date.replace(/\//g, '-')) - new Date(b.date.replace(/\//g, '-'))))
		}else{
			setfilteredOrders([...filteredOrders].sort((a, b) => new Date(b.date.replace(/\//g, '-')) - new Date(a.date.replace(/\//g, '-'))))
		}
	}, [sortByDate])

	useEffect(() => {
		if(sortByPrice){
			setfilteredOrders([...filteredOrders].sort((a, b) => a.price - b.price))
		}else{
			setfilteredOrders([...filteredOrders].sort((a, b) => b.price - a.price))
		}
	}, [sortByPrice])

	return (
		<div className='bg-gray-900 min-h-screen text-white p-4'>
			<h1 className='text-2xl'>سفارشات</h1>
			<div className='bg-gray-800 h-120 mt-10 m-5 rounded-3xl overflow-y-scroll'>
				<div className='sticky top-0 w-auto bg-gray-700 py-2'>
					<OrderHeader />
				</div>
				{loading ? <OrderSkeleton /> : filteredOrders.map((order, index) => (
					<div key={order.id} className='p-2'>
						<OrderItem row={index} name={order.username} date={order.date} price={order.price} status={order.orderstatus} />
					</div>
				))}
			</div>
		</div>
	);
}

export default OrdersPage;
