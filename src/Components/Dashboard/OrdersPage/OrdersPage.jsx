import React, { useContext, useEffect, useState } from 'react';
import OrderHeader from './OrderHeader';
import OrderItem from './OrderItem';
import OrderSkeleton from './OrderSkeleton';
import { ordersContext } from '../../../Contexts/OrderPageContext';
import { Calendar } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import './OrderPage.css';

function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { sortByRow, sortByDate, sortByPrice } = useContext(ordersContext);
    const [searchName, setSearchName] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    useEffect(() => {
        fetch('https://dashboard-db.amirhoseinsadeghian2017.workers.dev/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ count: 20, topDown: 'ASCS' }),
        })
            .then(response => response.json())
            .then(data => {
                setOrders(data.orders.results);
                setFilteredOrders(data.orders.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let updatedOrders = [...orders];

        if (searchName.trim() !== '') {
            updatedOrders = updatedOrders.filter(order =>
                order.username.toLowerCase().includes(searchName.toLowerCase())
            );
        }

        if (minPrice !== '') {
            updatedOrders = updatedOrders.filter(order => order.price >= parseFloat(minPrice));
        }
        if (maxPrice !== '') {
            updatedOrders = updatedOrders.filter(order => order.price <= parseFloat(maxPrice));
        }

        if (selectedDate) {
            const selectedDateString = `${selectedDate.year}/${selectedDate.month}/${selectedDate.day}`;
            updatedOrders = updatedOrders.filter(order => order.date.includes(selectedDateString));
        }

        setFilteredOrders(updatedOrders);
    }, [searchName, minPrice, maxPrice, selectedDate, orders]);

    useEffect(() => {
        setFilteredOrders([...filteredOrders].reverse());
    }, [sortByRow]);

    useEffect(() => {
        if (sortByDate) {
            setFilteredOrders([...filteredOrders].sort((a, b) => new Date(a.date.replace(/\//g, '-')) - new Date(b.date.replace(/\//g, '-'))));
        } else {
            setFilteredOrders([...filteredOrders].sort((a, b) => new Date(b.date.replace(/\//g, '-')) - new Date(a.date.replace(/\//g, '-'))));
        }
    }, [sortByDate]);

    useEffect(() => {
        if (sortByPrice) {
            setFilteredOrders([...filteredOrders].sort((a, b) => a.price - b.price));
        } else {
            setFilteredOrders([...filteredOrders].sort((a, b) => b.price - a.price));
        }
    }, [sortByPrice]);

    return (
        <div className='bg-gray-900 min-h-screen text-white p-4'>
            <h1 className='text-2xl'>سفارشات</h1>

            <div className='bg-gray-800 p-4 rounded-xl flex flex-wrap gap-4 items-center'>
                <input
                    type='text'
                    placeholder='جستجو بر اساس نام'
                    className='bg-gray-700 p-2 rounded-md text-white'
                    value={searchName}
                    onChange={e => setSearchName(e.target.value)}
                />

                <input
                    type='number'
                    placeholder='حداقل مبلغ'
                    className='bg-gray-700 p-2 rounded-md text-white'
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                />

                <input
                    type='number'
                    placeholder='حداکثر مبلغ'
                    className='bg-gray-700 p-2 rounded-md text-white'
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                />

                <button
                    className='bg-blue-600 px-4 py-2 rounded-md cursor-pointer'
                    onClick={() => setShowCalendar(!showCalendar)}
                >
                    {showCalendar ? 'بستن تاریخ' : 'انتخاب تاریخ'}
                </button>
                <button
                    className='bg-red-600 px-4 py-2 rounded-md cursor-pointer'
                    onClick={() => {
                        setFilteredOrders(orders);
                        setSearchName('');
                        setMaxPrice('');
                        setMinPrice('');
                        setSelectedDate(null); // اگر می‌خواهید تاریخ انتخابی را هم پاک کنید
                    }}
                >
                    پاک کردن فیلترها
                </button>
            </div>

            <div className={`absolute rounded-md shadow-lg mt-2 right-170 ${showCalendar ? 'block' : 'hidden'}`}>
                <Calendar
                    value={selectedDate}
                    onChange={setSelectedDate}
                    shouldHighlightWeekends
                    locale='fa'
                />
            </div>

            <div className='bg-gray-800 h-[600px] mt-10 m-5 rounded-3xl overflow-y-scroll'>
                <div className='sticky top-0 w-auto bg-gray-700 py-2'>
                    <OrderHeader />
                </div>
                {loading ? (
                    <OrderSkeleton />
                ) : filteredOrders.length > 0 ? (
                    filteredOrders.map((order, index) => (
                        <div key={order.id} className='p-2'>
                            <OrderItem row={index} name={order.username} date={order.date} price={order.price} status={order.orderstatus} />
                        </div>
                    ))
                ) : (
                    <p className='text-center text-gray-400 py-4'>سفارشی یافت نشد</p>
                )}
            </div>
        </div>
    );
}

export default OrdersPage;
