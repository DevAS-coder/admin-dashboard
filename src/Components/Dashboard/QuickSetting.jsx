import React, { useContext } from 'react'
import { CardContext } from '../../Contexts/CardsContext';

function QuickSetting() {
    const { setshowUsers, setshowOrders, setshowMessages, setshowIncome, showUsers, showOrders, showMessages, showIncome } = useContext(CardContext)

    const quickSettings = [
        { id: 1, title: "نمایش تعداد کاربران", status: showUsers, func: () => { setshowUsers(!showUsers) } },
        { id: 2, title: "نمایش تعداد سفارش ها", status: showOrders, func: () => { setshowOrders(!showOrders) } },
        { id: 3, title: "نمایش تعداد پیام ها", status: showMessages, func: () => { setshowMessages(!showMessages) } },
        { id: 4, title: "نمایش درآمد امروز", status: showIncome, func: () => { setshowIncome(!showIncome) } },
    ];
    return (
        <div>
            <h2 className="text-lg font-bold mb-4">تنظیمات سریع داشبورد</h2>
            <ul className="bg-gray-800 border border-gray-700 rounded-lg shadow-md">
                {quickSettings.map((setting) => (
                    <li key={setting.id} className="flex justify-between p-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer" onClick={setting.func}>
                        <span>{setting.title}</span>
                        <button className={`text-sm ${setting.status ? "text-green-400" : "text-red-400"}`}>
                            {setting.status ? 'فعال ✔️' : 'غیرفعال ❌'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default QuickSetting