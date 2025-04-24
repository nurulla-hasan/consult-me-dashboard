'use client';
import { useState } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const chartData = {
    2024: [
        { name: 'Jan', value: 10 },
        { name: 'Feb', value: 30 },
        { name: 'Mar', value: 65 },
        { name: 'Apr', value: 40 },
        { name: 'May', value: 60 },
        { name: 'Jun', value: 75 },
        { name: 'Jul', value: 80 },
        { name: 'Aug', value: 55 },
        { name: 'Sept', value: 50 },
        { name: 'Oct', value: 70 },
        { name: 'Nov', value: 60 },
        { name: 'Dec', value: 45 },
    ],
    2023: [
        { name: 'Jan', value: 80 },
        { name: 'Feb', value: 70 },
        { name: 'Mar', value: 35 },
        { name: 'Apr', value: 90 },
        { name: 'May', value: 10 },
        { name: 'Jun', value: 25 },
        { name: 'Jul', value: 10 },
        { name: 'Aug', value: 45 },
        { name: 'Sept', value: 70 },
        { name: 'Oct', value: 20 },
        { name: 'Nov', value: 90 },
        { name: 'Dec', value: 45 },
    ],
};

export default function EarningGrowthChart2() {
    const [selectedYear, setSelectedYear] = useState('2024');

    return (
        <div className="bg-white rounded-md p-3 w-full text-[#4c4c4c] shadow-[0px_0px_2px_0px_#00000040]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Earning Growth</h2>
                <div className="relative w-fit">
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="appearance-none border border-gray-400 outline-none rounded px-2 py-[4px] text-[12px] pr-6">
                        <option>2024</option>
                        <option>2023</option>
                    </select>
                    <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2">
                        <svg className="w-[12px] h-[12px] text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={chartData[selectedYear]} className="text-[8px]">
                    {/* Gradient Fill */}
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2FCFCF" stopOpacity={1.0} />
                            <stop offset="100%" stopColor="#2FCFCF" stopOpacity={0.3} />
                        </linearGradient>
                    </defs>

                    {/* Grid & Axis */}
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                    />
                    <YAxis
                        ticks={[0, 25, 50, 75, 100]}
                        domain={[0, 100]}
                        tickFormatter={(value) => `${value}%`}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                    />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#2FCFCF"
                        fill="url(#colorValue)"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
