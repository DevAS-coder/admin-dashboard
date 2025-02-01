import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const data = [
  { name: 'فروردین', فروش: 40 },
  { name: 'اردیبهشت', فروش: 55 },
  { name: 'خرداد', فروش: 30 },
  { name: 'تیر', فروش: 70 },
  { name: 'مرداد', فروش: 25 },
  { name: 'شهریور', فروش: 60 },
];

export default function MyAreaChart() {

  const exportToExcel = () => {
    // ایجاد ورک‌شیت (صفحه اکسل)
    const ws = XLSX.utils.json_to_sheet(data);
    
    // ایجاد ورک‌بوک (فایل اکسل)
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SalesData");

    // تبدیل به فایل باینری و ذخیره
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

    saveAs(dataBlob, "sales_data.xlsx");
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width={80} tick={{ dx: -60 }} tickFormatter={(value) => `${value} تومان`} />
          <Tooltip formatter={(value) => `${value} تومان`} />
          <Area type="monotone" dataKey="فروش" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>

      <button
        onClick={exportToExcel}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        دانلود خروجی اکسل
      </button>
    </div>
  );
}
