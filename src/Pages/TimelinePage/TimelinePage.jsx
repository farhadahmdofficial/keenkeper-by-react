

import React, { useContext } from 'react';
import { TimelineCt } from '../../Contex/TimelineC';

const TimelinePage = () => {

    const { timeline, settimeline } = useContext(TimelineCt);

    // const consxt =useContext(TimelineCt)

    console.log(timeline, "const data ");

   
        return (
            <div>





                {/* ai code  */}



                <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header & Filter Section */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Timeline</h1>
        
        <div className="flex gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Search timeline..." 
            className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#244D3F] shadow-sm"
          />
          <select className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none shadow-sm cursor-pointer">
            <option>All</option>
            <option>Text</option>
            <option>Call</option>
            <option>Video</option>
          </select>
        </div>

        {/* List of Cards */}
        <div className="space-y-4">
          {timeline && timeline.length > 0 ? (
            [...timeline].reverse().map((item, index) => (
              <TimelineCard key={index} item={item} />
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-400 italic">No activities recorded yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
               

            </div>
        );
    };

    export default TimelinePage;