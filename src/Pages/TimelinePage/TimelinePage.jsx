


import React, { useContext, useState } from 'react';
import { TimelineCt } from '../../Contex/TimelineC';
import TimelineCard from './TimelineCrad';

const TimelinePage = () => {
    const { timeline } = useContext(TimelineCt);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');

    // সার্চ এবং ফিল্টার লজিক
    const filteredTimeline = timeline?.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterType === 'All' || item.type === filterType;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-4 pt-10">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Timeline</h1>

                {/* Search & Filter Section */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <input 
                        type="text" 
                        placeholder="Search by friend name..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#244D3F] shadow-sm"
                    />
                    <select 
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="bg-white border border-gray-200 rounded-xl px-6 py-3 focus:outline-none shadow-sm cursor-pointer font-medium"
                    >
                        <option value="All">All Activities</option>
                        <option value="Call">Calls</option>
                        <option value="Text">Texts</option>
                        <option value="Video">Videos</option>
                    </select>
                </div>

                {/* Timeline List */}
                <div className="space-y-4">
                    {filteredTimeline && filteredTimeline.length > 0 ? (
                        // নতুন ডাটা উপরে দেখানোর জন্য রিভার্স করা হয়েছে
                        [...filteredTimeline].reverse().map((item, index) => (
                            <TimelineCard key={index} item={item} />
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                            <p className="text-gray-400 text-lg italic">
                                {searchTerm || filterType !== 'All' 
                                    ? "No matching activities found." 
                                    : "No activities recorded yet."}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;





// import React, { useContext } from 'react';
// import { TimelineCt } from '../../Contex/TimelineC';
// import TimelineCard from './TimelineCrad';

// const TimelinePage = () => {

//     const { timeline, settimeline } = useContext(TimelineCt);

//     // const consxt =useContext(TimelineCt)

//     console.log(timeline, "const data ");

   
//         return (<div className="max-w-7xl mx-auto px-4 pt-10">
//       <h1 className="text-3xl font-extrabold mb-6">Timeline</h1>
//       <div className="space-y-4">
//         {timeline && timeline.map((item, index) => (
//           <TimelineCard key={index} item={item} /> // এখানে এখন আর এরর দিবে না
//         ))}
//       </div>
//     </div>

//     //         <div>





//     //             {/* ai code  */}



//     //             <div className="bg-gray-50 min-h-screen pb-20">
//     //   {/* Header & Filter Section */}
//     //   <div className="max-w-7xl mx-auto px-4 pt-10">
//     //     <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Timeline</h1>
        
//     //     <div className="flex gap-4 mb-8">
//     //       <input 
//     //         type="text" 
//     //         placeholder="Search timeline..." 
//     //         className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#244D3F] shadow-sm"
//     //       />
//     //       <select className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none shadow-sm cursor-pointer">
//     //         <option>All</option>
//     //         <option>Text</option>
//     //         <option>Call</option>
//     //         <option>Video</option>
//     //       </select>
//     //     </div>

//     //     {/* List of Cards */}
//     //     <div className="space-y-4">
//     //       {timeline && timeline.length > 0 ? (
//     //         [...timeline].reverse().map((item, index) => (
//     //           <TimelineCard key={index} item={item} />
//     //         ))
//     //       ) : (
//     //         <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
//     //           <p className="text-gray-400 italic">No activities recorded yet.</p>
//     //         </div>
//     //       )}
//     //     </div>
//     //   </div>
//     // </div>
               

//     //         </div>
//         );
//     };

//     export default TimelinePage;