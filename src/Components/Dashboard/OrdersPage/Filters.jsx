import React, { useContext, useEffect } from 'react';
import { ordersContext } from '../../../Contexts/OrderPageContext';
import { Calendar } from 'react-modern-calendar-datepicker';

function Filters() {

    const { sortByRow, sortByDate, sortByPrice, orders, setOrders, filteredOrders, setFilteredOrders, searchName, setSearchName, minPrice, setMinPrice, maxPrice, setMaxPrice, selectedDate, setSelectedDate, showCalendar, setShowCalendar, setLoading } = useContext(ordersContext);

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
        <>
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
                        setSelectedDate(null);
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
        </>

    )
}

export default Filters