import React, { memo } from 'react';
import ReactECharts from 'echarts-for-react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { color } from 'echarts';

const data = [
    { name: 'کارشناس 1', فروش: 100 },
    { name: 'کارشناس 2', فروش: 80 },
    { name: 'کارشناس 3', فروش: 50 },
    { name: 'کارشناس 4', فروش: 50 },
];

const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, "SalesData");

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

    saveAs(dataBlob, "Seller_Chart.xlsx");
};

const SellerChart = () => {
    const option = {
        textStyle: {
            fontFamily: 'Vazir, Arial, sans-serif',
            fontSize: 14,
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} تومان',
        },
        legend: {
            orient: 'horizontal',
            left: 'left',
            textStyle: { color: 'white' },
            itemGap: 40, 
        },
        series: [
            {
                name: 'فروش',
                type: 'pie',
                radius: '50%',
                data: data.map(item => ({ value: item.فروش, name: item.name })),
                label: {
                    color: '#FFFFFF',
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
                top: window.innerWidth < 640 ? '20%' : '0%',
            },
        ],
    };

    return (
        <div className="p-4 rounded-md">
            <div className='flex justify-between items-center mb-5 flex-wrap'>
                <h2 className='text-xl'>نمودار فروش بر اساس کارشناس</h2>
                <button
                    onClick={exportToExcel}
                    className="ml-4 mt-3 md:mt-0 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition cursor-pointer"
                >
                    دانلود خروجی اکسل<i className="fa-solid fa-file-excel mr-2"></i>
                </button>
            </div>
            <div className='w-70 sm:w-[80lvh]'>
                <ReactECharts option={option} />
            </div>
        </div>
    );
}

export default memo(SellerChart);
