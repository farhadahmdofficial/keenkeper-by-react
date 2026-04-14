

import React from 'react';

const YouCard = ({ friend }) => {
    return (
        <div className='border-1 border-amber-300 flex flex-col justify-center items-center p-4 space-y-5 bg-[#FFFFFF]  rounded-2xl shadow h-100' >

            <div >
                <img className='text-2xl h-25 w-25 flex justify-center items-center rounded-full transition-all duration-300 ' src={friend.picture} alt={friend.picture}/>
            </div>
            <h3 className='font-bold text-3xl'>{friend.name}</h3>
            <p className='text-xl text-[#64748B] '>{friend.days_since_contact}d ago </p>
            <div className='flex flex-wrap gap-2 justify-center'>
                {friend.tags.map((tag, index) => (
                    <span
                        key={index}
                        className='bg-[#CBFADB] text-[#244D3F] px-3 py-2 text-sm font-semibold rounded-full'
                    >
                        {tag}
                    </span>
                ))}
            </div>
            {/* <div className='bg-[#CBFADB] px-3 py-1 font-bold rounded-xl flex justify-center items-center'> {friend.tags.map(tag=><p>{tag}</p>)}  </div> */}


            {/* <p>{friend.status}</p> */}

            <p className={`px-4 py-2 font-bold rounded-xl text-white uppercase text-xs ${
                friend.status === "on-track" ? "bg-[#244D3F]" : 
                friend.status === "overdue" ? "bg-[#EF4444]" : 
                "bg-[#EFAD44]"
            }`}>
                {friend.status}
            </p>

        </div>
    );
};

export default YouCard;