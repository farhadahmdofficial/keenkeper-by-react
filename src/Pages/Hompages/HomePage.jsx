

import React, { Suspense } from 'react';
import Banner from './Banner';
import NumerCrad from './NumerCrad';
import YouFriends from './YouFriends';
import { HashLoader } from 'react-spinners';

const HomePage = () => {
    return (
        <div className='bg-[#F8FAFC]'>

            
            <Banner></Banner>

            <NumerCrad></NumerCrad>


            <Suspense fallback={<div className='flex justify-center items-center mx-auto  '><HashLoader color="#244D3F" /></div>}>
            <YouFriends></YouFriends>

            </Suspense>

        </div>
    );
};

export default HomePage;