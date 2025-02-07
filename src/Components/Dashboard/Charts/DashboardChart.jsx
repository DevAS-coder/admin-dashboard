import React, { memo } from 'react';
import ReactECharts from 'echarts-for-react';

const data = [
    { name: 'فروردین', فروش: 40 },
    { name: 'اردیبهشت', فروش: 55 },
    { name: 'خرداد', فروش: 30 },
    { name: 'تیر', فروش: 70 },
    { name: 'مرداد', فروش: 25 },
    { name: 'شهریور', فروش: 60 },
    { name: 'مهر', فروش: 30 },
    { name: 'آبان', فروش: 10 },
    { name: 'آذر', فروش: 90 },
    { name: 'دی', فروش: 20 },
    { name: 'بهمن', فروش: 50 },
    { name: 'اسفند', فروش: 40 },
];


const DashboardChart = () => {
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
        <div className="p-4 rounded-md flex justify-center">
            <div className='w-70 sm:w-[170lvh]'>
                <ReactECharts option={option} />
            </div>
        </div>
    );
}

export default memo(DashboardChart);