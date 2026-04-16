



import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { TimelineCt } from '../../Contex/TimelineC';

const StataPage = () => {
    const { timeline } = useContext(TimelineCt);

 
    const dataCounts = timeline.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1;
        return acc;
    }, {});

    const data = [
        { name: 'Call', value: dataCounts['Call'] || 0, color: '#22C55E' }, // Green
        { name: 'Text', value: dataCounts['Text'] || 0, color: '#3B82F6' }, // Blue
        { name: 'Video', value: dataCounts['Video'] || 0, color: '#A855F7' }, // Purple
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center md:text-left">
                    Friendship Analytics
                </h1>

                <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[400px]">

                    {timeline.length > 0 ? (
                        <ResponsiveContainer width="100%" height={350}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80} // 
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="text-center text-gray-400 italic">
                            No data available to show analytics. <br />
                            Please add some activities first!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StataPage;