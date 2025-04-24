'use client';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
    Legend,
} from 'recharts';

const data = [
    { name: 'Jan', value: 80 },
    { name: 'Feb', value: 70 },
    { name: 'Mar', value: 100 },
    { name: 'Apr', value: 60 },
    { name: 'May', value: 90 },
    { name: 'Jun', value: 75 },
    { name: 'Jul', value: 85 },
    { name: 'Aug', value: 70 },
    { name: 'Sept', value: 95 },
    { name: 'Oct', value: 80 },
    { name: 'Nov', value: 70 },
    { name: 'Dec', value: 90 },
];

export default function EarningGrowthChart() {
    return (
        <div className="bg-white rounded-xl p-2 w-full text-[#4c4c4c] shadow-[0px_0px_2px_0px_#00000040]">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-sm font-semibold">Earning Growth</h2>
                <select className="border border-gray-400 outline-none rounded px-2 py-[1] text-[8px]">
                    <option>2024</option>
                    <option>2023</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={158}>
                <AreaChart className='text-[8px]' data={data}>
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        ticks={[0, 20, 40, 60, 80, 100]}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#2FCFCF" fill="#00A89D" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
