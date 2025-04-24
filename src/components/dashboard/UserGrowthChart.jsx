'use client';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Jan', active: 900, cancel: 600 },
    { name: 'Feb', active: 850, cancel: 400 },
    { name: 'Mar', active: 700, cancel: 500 },
    { name: 'Apr', active: 950, cancel: 300 },
    { name: 'May', active: 800, cancel: 600 },
    { name: 'Jun', active: 880, cancel: 450 },
    { name: 'Jul', active: 870, cancel: 200 },
    { name: 'Aug', active: 780, cancel: 300 },
    { name: 'Sept', active: 860, cancel: 500 },
    { name: 'Oct', active: 900, cancel: 400 },
    { name: 'Nov', active: 940, cancel: 600 },
    { name: 'Dec', active: 850, cancel: 500 },
];

export default function UserGrowthChart() {
    return (
        <div className="bg-white rounded-xl p-3 w-full text-[#4c4c4c] shadow-[0px_0px_2px_0px_#00000040]">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-sm font-semibold">User Growth</h2>
                <select className="border border-gray-400 outline-none rounded px-2 py-[1] text-[8px]">
                    <option>2024</option>
                    <option>2023</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={150}>
                <BarChart
                    className='text-[8px]'
                    data={data}
                    barSize={5}
                >
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        ticks={[0, 200, 400, 600, 800, 1000]}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip />
                    <Legend
                        layout="horizontal"
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{ fontSize: '10px', paddingBottom: '10px' }}
                    />
                    <Bar dataKey="active" fill="#107A7A" />
                    <Bar dataKey="cancel" fill="#2FCFCF" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
