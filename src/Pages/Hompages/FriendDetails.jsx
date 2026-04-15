

import React, { use } from 'react';
import { useParams } from 'react-router';
import { HashLoader } from 'react-spinners';
const promis =fetch('/data.json').then(res=>res.json())

const FriendDetails = () => {

    const {id} = useParams()
      const friends =use(promis)



      const selectedFriend = friends.find((friend) => friend.id ==id);
      
      // const sectedFriend =friends.find((friend)=>String(friend.id ) ===id);
      
      console.log(id ,"id" );
    console.log(friends,"all friends ");
    console.log(selectedFriend ,"selectedFriend");



    if (!selectedFriend) {
        return (
            <div className='flex justify-center items-center mx-auto  '><HashLoader color="#244D3F" /></div>
        );
    }

  



    return (
        <div>
            <h1 className='text-5xl text bg-red-600'>Friend Details add new </h1>
            <p>{selectedFriend.name}</p>
            <button className='btn' clll> text vidoe  </button>
        </div>
    );
};

export default FriendDetails;