

import React, { use } from 'react';

const promis =fetch('/data.json').then(res=>res.json())


const YouFriends = () => {

    const friends =use(promis)
   

    return (
        <div className=' w-11/12 mx-auto mt-10'>

            <h1 className='text-2xl  font-bold'>Your Friends </h1>

            <div className='grid grid-cols-4 gap-6 mt-3'>

                {friends.map((friend,ind)=>{
                    return<div key={ind} className='border-1 border-amber-300 flex flex-col justify-center items-center p-4 space-y-2 bg-[#FFFFFF]  rounded-2xl shadow h-100' >

                        <div >
                            <img className='text-2xl h-25 w-25 flex justify-center items-center rounded-full transition-all duration-300 ' src={friend.picture} alt="" />
                        </div>
                        <h3 className='font-bold text-3xl'>{friend.name}</h3>
                        <p className='text-xl text-[#64748B] '>{friend.days_since_contact}d ago </p>
                        <p>work</p>
                        <p>almost dau</p>

                    </div>})
                }


            </div>
            
        </div>
    );
};

export default YouFriends;