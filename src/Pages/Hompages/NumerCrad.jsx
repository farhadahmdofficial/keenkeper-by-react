

import React from 'react';

const NumerCrad = () => {
    return (<div className='w-11/12 mx-auto  '>

        <div className='carads grid grid-cols-1 md:grid-cols-4 justify-center gap-8 mx-auto'>


            <div className='crad flex flex-col justify-center items-center p-3   bg-[#FFFFFF]  rounded-2xl shadow'>

                <h1 className=' text-4xl font-bold' >6</h1>
                <p className='text-[#64748B]'>Total Friends</p>



            </div>
            <div className='crad flex flex-col justify-center items-center p-3  bg-[#FFFFFF] rounded-2xl   shadow'>

                <h1 className=' text-4xl font-bold'>3</h1>
                <p className='text-[#64748B]'>On Track</p>



            </div>
            <div className='crad flex flex-col justify-center items-center p-3 bg-[#FFFFFF] rounded-2xl   shadow'>

                <h1 className=' text-4xl font-bold'>6</h1>
                <p className='text-[#64748B]'>Need Attention</p>



            </div>
            <div className='crad flex flex-col justify-center  items-center p-3 bg-[#FFFFFF] h-50 rounded-2xl  shadow'>

                <h1 className=' text-4xl font-bold'>12</h1>
                <p className='text-[#64748B]'>Interactions This Month</p>



            </div>

        </div>
    </div>
    );
};

export default NumerCrad;