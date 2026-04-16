

import React from 'react';
import { CgMathPlus } from 'react-icons/cg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[20vh]  mt-10">
            <div className="hero-content text-center ">
                <div className=" ">
                    <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                    <p className="py-6 text-[#64748B]">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        <br />relationships that matter most.
                    </p>
                    <button className="btn bg-[#244D3F] text-yellow-50"><CgMathPlus /> Add a Friend</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;