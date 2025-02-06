import React, { useContext, useEffect, useState } from 'react';
import './OrderPage.css';
import Filters from './Filters';
import LoadItems from './LoadItems.jsx';
import { OrdersPageContext } from '../../../Contexts/OrderPageContext.jsx';

function OrdersPage() {
    return (
        <OrdersPageContext>
            <div className='bg-gray-900 min-h-screen text-white p-4'>
                <Filters />
                <LoadItems/>
            </div>
        </OrdersPageContext>
    );
}

export default OrdersPage;
