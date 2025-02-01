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

const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, "SalesData");

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

    saveAs(dataBlob, "Sales_Chart.xlsx");
};

export default function SalesChart() {

    return (
        <div className="p-4 rounded-md">
            <div className='flex justify-between items-center mb-5 flex-wrap'>
                <h2 className='text-xl'>نمودار فروش بر اساس ماه</h2>
                <button
                    onClick={exportToExcel}
                    className="ml-4  mt-3 md:mt-0 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition cursor-pointer"
                >
                    دانلود خروجی اکسل<i className="fa-solid fa-file-excel mr-2"></i>
                </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis width={80} tick={{ dx: -60 }} tickFormatter={(value) => `${value} تومان`} />
                    <Tooltip formatter={(value) => `${value} تومان`} />
                    <Area type="monotone" dataKey="فروش" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                </AreaChart>
            </ResponsiveContainer>


        </div>
    );
}
