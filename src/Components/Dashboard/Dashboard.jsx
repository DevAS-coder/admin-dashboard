import React from 'react';
import MyBarChart from './Charts/MyBarChart';

function Dashboard() {
  const cards = [
    { id: 1, title: "کاربران", value: "1,250", icon: <i className="fa-solid fa-users"></i>, bg: "bg-blue-900" },
    { id: 2, title: "سفارش‌ها", value: "320", icon: <i className="fa-solid fa-cart-shopping"></i>, bg: "bg-green-900" },
    { id: 3, title: "پیام‌ها", value: "89", icon: <i className="fa-solid fa-envelope"></i>, bg: "bg-yellow-900" },
    { id: 4, title: "درآمد امروز", value: "$2,430", icon: <i className="fa-solid fa-dollar-sign"></i>, bg: "bg-red-900" }
  ];

  const quickSettings = [
    { id: 1, title: "فعال کردن اعلان‌ها", status: "فعال" },
    { id: 2, title: "تغییر رمز عبور", status: "غیرفعال" },
    { id: 3, title: "تنظیمات پروفایل", status: "فعال" },
    { id: 4, title: "مدیریت حساب", status: "غیرفعال" },
  ];

  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cards.map((card) => (
          <div key={card.id} className={`p-5 rounded-xl shadow-md flex items-center ${card.bg}`}>
            <div className="p-3 rounded-full bg-white shadow text-gray-900 mr-4">
              {card.icon}
            </div>
            <div className='mr-5'>
              <h3 className="text-gray-400 text-sm">{card.title}</h3>
              <p className="text-xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">نمودار درآمد</h2>
        <MyBarChart />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">تنظیمات سریع</h2>
        <ul className="bg-gray-800 border border-gray-700 rounded-lg shadow-md">
          {quickSettings.map((setting) => (
            <li key={setting.id} className="flex justify-between p-3 border-b border-gray-700 hover:bg-gray-700">
              <span>{setting.title}</span>
              <span className={`text-sm ${setting.status === "فعال" ? "text-green-400" : "text-red-400"}`}>
                {setting.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
