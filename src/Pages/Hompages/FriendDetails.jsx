

import React, { use, useContext, } from 'react';
import { useParams } from 'react-router';
import { HashLoader } from 'react-spinners';
import { TimelineCt } from '../../Contex/TimelineC';
import ProfileCard from './DatalsTime/Profile';
import StatsSection from './DatalsTime/statasSeclection';
import QuickCheckIn from './DatalsTime/ButtonSeaction';
const promis = fetch('/data.json').then(res => res.json())

const FriendDetails = () => {

    const { id } = useParams()
    const friends = use(promis)



    const selectedFriend = friends.find((friend) => friend.id == id);

    // const sectedFriend =friends.find((friend)=>String(friend.id ) ===id);

    // console.log(id, "id");
    // console.log(friends, "all friends ");
    // console.log(selectedFriend, "selectedFriend");



    if (!selectedFriend) {
        return (
            <div className='flex justify-center items-center mx-auto  '><HashLoader color="#244D3F" /></div>
        );
    }

    // const [timeline, settimeline] = useState([]);

    const { timeline, settimeline } = useContext(TimelineCt);

    const handalTimeline = () => {

        settimeline([...timeline, selectedFriend])

    }

    console.log(timeline, "timeline");





    return (<div >
        <div className="bg-gray-50 min-h-screen mt-12 ">
            {/* Header Section */}
            {/* <div className='w-11/12 mx-auto pt-8 pb-4'>
                <h1 className='text-3xl font-bold text-gray-800'>Friend Details</h1>
                <p className='text-sm text-gray-500'>Manage relationship and activity</p>
            </div> */}

            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 pb-10">
                {/* Profile Column */}
                <div className="md:col-span-4 lg:col-span-3">
                    <ProfileCard friend={selectedFriend} />
                </div>

                {/* Details Column */}
                <div className="md:col-span-8 lg:col-span-9 space-y-6">
                    <StatsSection selectedFriend={selectedFriend} />

                    {/* Relationship Goal Section */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 relative shadow-sm">
                        <button className="absolute right-6 top-6 text-blue-600 text-xs font-bold hover:underline">Edit</button>
                        <h4 className="font-bold text-sm text-gray-700">Relationship Goal</h4>
                        <p className="text-sm text-gray-600 mt-2">Contact every 10 days</p>
                    </div>

                    {/* Action Buttons with Handle Function */}


                    {/* <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6">
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
                    </div> */}
                    <QuickCheckIn handalTimeline={handalTimeline} />
                </div>
            </div>
        </div>




        {/* <button className='btn btn-primary' onClick={handalTimeline} > text vidoe  </button> */}














    </div>

    );
};

export default FriendDetails;