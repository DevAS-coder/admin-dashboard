import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const data = [
    { name: 'کارشناس 1', فروش: 100 },
    { name: 'کارشناس 2', فروش: 80 },
    { name: 'کارشناس 3', فروش: 50 },
    { name: 'کارشناس 4', فروش: 50 },
];

const COLORS = ['#1da341', '#a31d1d', '#201da3', '#98a31d'];

const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, "SalesData");

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

    saveAs(dataBlob, "Seller_Chart.xlsx");
};

const SellerChart = () => {

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
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                <Tooltip formatter={(value) => `${value} تومان`} />
                <Legend />
                    <Pie data={data} dataKey='فروش' cx={'50%'} cy={'50%'} outerRadius={100} label >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} strokeWidth={0} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SellerChart