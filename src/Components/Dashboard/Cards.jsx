import React, { useContext } from 'react'
import { CardContext } from '../../Contexts/CardsContext';

function Cards() {
    const{showUsers, showOrders, showMessages, showIncome} = useContext(CardContext)
    const cards = [
        { id: 1, title: "کاربران", value: "1,250", icon: <i className="fa-solid fa-users"></i>, bg: "bg-blue-900" ,status:showUsers},
        { id: 2, title: "سفارش‌ها", value: "320", icon: <i className="fa-solid fa-cart-shopping"></i>, bg: "bg-green-900" ,status:showOrders},
        { id: 3, title: "پیام‌ها", value: "89", icon: <i className="fa-solid fa-envelope"></i>, bg: "bg-yellow-900" ,status:showMessages},
        { id: 4, title: "درآمد امروز", value: "2,430,548 تومان", icon: <i className="fa-solid fa-dollar-sign"></i>, bg: "bg-red-900",status:showIncome }
    ];
    return (
        <div className="flex flex-wrap w-full gap-4">
            {cards.map((card) => (card.status &&
                <div
                    key={card.id}
                    className={`p-5 rounded-xl shadow-md flex items-center  ${card.bg} flex-1`}
                >
                    <div className="p-3 w-10 flex justify-center items-center h-10 rounded-full bg-white shadow text-gray-900 mr-4">
                        {card.icon}
                    </div>
                    <div className="mr-5">
                        <h3 className="text-gray-400 text-sm">{card.title}</h3>
                        <p className="text-xl font-bold">{card.value}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards