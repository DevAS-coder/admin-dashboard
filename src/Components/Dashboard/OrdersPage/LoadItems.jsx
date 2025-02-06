import React, { useContext } from 'react';
import { ordersContext } from '../../../Contexts/OrderPageContext';
import OrderHeader from './OrderHeader';
import OrderItem from './OrderItem';
import OrderSkeleton from './OrderSkeleton';

function LoadItems() {
    const { filteredOrders, loading } = useContext(ordersContext);

    return (
        <div className="bg-gray-800 h-[600px] mt-10 lg:mx-5 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto w-full">
                <div className="w-full min-w-[800px] lg:min-w-full">
                    <div className="sticky top-0 bg-gray-700 py-2 z-10">
                        <OrderHeader />
                    </div>
                    <div className="h-[500px] overflow-y-auto custom-scroll">
                        {loading ? (
                            <OrderSkeleton />
                        ) : filteredOrders.length > 0 ? (
                            filteredOrders.map((order, index) => (
                                <div key={order.id} className="p-2">
                                    <OrderItem 
                                        row={index} 
                                        name={order.username} 
                                        date={order.date} 
                                        price={order.price} 
                                        status={order.orderstatus} 
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400 py-4">سفارشی یافت نشد</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadItems;
