import { createContext, useState } from "react";

export const ordersContext = createContext()

export const OrdersPageContext = ({ children }) => {
    const [recordsCount, setrecordsCount] = useState('')
    const [sortByRow, setsortByRow] = useState(true)
    const [sortByDate, setsortByDate] = useState(true)
    const [sortByPrice, setsortByPrice] = useState(true)
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [loading, setLoading] = useState(true);

    return (
        <ordersContext.Provider value={{ recordsCount, setrecordsCount, sortByRow, setsortByRow, sortByDate, setsortByDate,sortByPrice, setsortByPrice,orders, setOrders, filteredOrders, setFilteredOrders, searchName, setSearchName, minPrice, setMinPrice, maxPrice, setMaxPrice, selectedDate, setSelectedDate, showCalendar, setShowCalendar, loading, setLoading  }}>
            {children}
        </ordersContext.Provider>
    )
}