import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'فروردین', فروش: 40 },
  { name: 'اردیبهشت', فروش: 55 },
  { name: 'خرداد', فروش: 30 },
  { name: 'تیر', فروش: 70 },
  { name: 'مرداد', فروش: 25 },
  { name: 'شهریور', فروش: 60 },
];

export default function MyAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width={80} tick={{ dx: -60 }} tickFormatter={(value) => `${value} تومان`} />
        <Tooltip formatter={(value) => `${value} تومان`} />
        <Area type="monotone" dataKey="فروش" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
