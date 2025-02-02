import React, { memo } from 'react';
import ReactECharts from 'echarts-for-react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { color } from 'echarts';

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

const SalesChart = () => {
    const option = {
        textStyle: {
            fontFamily: 'Vazir, Arial, sans-serif',
            fontSize: 14,
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a} <br/>{b}: {c} تومان',
        },
        xAxis: {
            type: 'category',
            data: data.map(item => item.name),
            axisLabel: {
                color: '#FFFFFF',
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#FFFFFF',
            },
        },
        series: [
            {
                name: 'فروش',
                type: 'line',
                data: data.map(item => item.فروش),
                smooth: true,
                areaStyle: {
                    color: "rgba(130, 202, 157, 0.7)",
                },
                lineStyle: {
                    color: "#82ca9d",
                    width: 4
                },
                symbolSize: 10
            },
        ],
    };

    return (
        <div className="p-4 rounded-md">
            <div className='flex justify-between items-center mb-5 flex-wrap'>
                <h2 className='text-xl'>نمودار فروش بر اساس ماه</h2>
                <button
                    onClick={exportToExcel}
                    className="ml-4 mt-3 md:mt-0 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition cursor-pointer"
                >
                    دانلود خروجی اکسل<i className="fa-solid fa-file-excel mr-2"></i>
                </button>
            </div>
            <div className=''>
                <ReactECharts option={option} />
            </div>
        </div>
    );
}

export default memo(SalesChart);
