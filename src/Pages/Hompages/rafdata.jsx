




import React from 'react';

const rafdata = () => {
    return (
        <div>

              <div className='crads fullne'>

                {/* 1 */}

                <div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center space-y-3 h-full">
                        <img
                            className="w-24 h-24 rounded-full object-cover border-4 border-gray-50"
                            src={selectedFriend.picture}
                            alt={selectedFriend.name}
                        />
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">{selectedFriend.name}</h2>
                            <p className="text-sm text-gray-500">{selectedFriend.email}</p>
                        </div>

                        {/* Dynamic Status Badge */}
                        <span className={`px-4 py-1 rounded-full text-xs font-bold text-white uppercase ${selectedFriend.status === 'on-track' ? 'bg-[#244D3F]' : 'bg-orange-400'
                            }`}>
                            {selectedFriend.status}
                        </span>

                        <p className="text-sm text-gray-600 px-4">{selectedFriend.bio}</p>

                        {/* Tags */}
                        <div className="flex gap-2 flex-wrap justify-center">
                            {selectedFriend.tags.map((tag, i) => (
                                <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full space-y-2 pt-4">
                            <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-sm rounded-lg border border-gray-200">⏰ Snooze 2 Weeks</button>
                            <button className="w-full py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 text-sm rounded-lg border border-orange-100">📦 Archive</button>
                            <button className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm rounded-lg border border-red-100">🗑️ Delete</button>
                        </div>
                    </div>






                </div>

                {/* 2 */}

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Days Card */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                            <h3 className="text-2xl font-bold">{selectedFriend.days_since_contact}</h3>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Days Since Contact</p>
                        </div>
                        {/* Goal Card */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                            <h3 className="text-2xl font-bold">10</h3>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Goal</p>
                        </div>
                        {/* Next Due Card */}
                        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                            <h3 className="text-sm font-bold">Next Due</h3>
                            <p className="text-[10px] text-gray-500 uppercase">2026-04-20</p>
                        </div>
                    </div>
                </div>

                {/* 3 */}

                <div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6">
                        <h4 className="font-bold text-sm mb-4">Quick Check-In</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button className="flex items-center justify-center gap-2 py-3 bg-green-50 text-green-700 font-bold rounded-lg border border-green-100 hover:bg-green-100 transition">
                                📞 Call
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 bg-blue-50 text-blue-700 font-bold rounded-lg border border-blue-100 hover:bg-blue-100 transition">
                                💬 Text
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 bg-purple-50 text-purple-700 font-bold rounded-lg border border-purple-100 hover:bg-purple-100 transition">
                                🎥 Video
                            </button>
                        </div>
                    </div>

                </div>

            </div>




            {/* detals page my creat cread  */}

            
                <div className='w-11/12 mx-auto'>
                    <h1>thsi time line page </h1>
                   
                    {/* {timeline.map(time)=> <h1>{time.name}</h1>)} */}
                    {timeline.map((time,ind)=>{return <div key={ind} className='border-2 p-5 my-5'>

                        <h1>{time.name}</h1>
                        <p>day</p>

                    </div>})}

                </div>
            
        </div>
    );
};

export default rafdata;