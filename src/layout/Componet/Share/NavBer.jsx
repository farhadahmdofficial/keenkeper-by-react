

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';
import { RiHomeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const NavBer = () => {



    const navLinkStyles = ({ isActive }) =>
        `flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${isActive
            ? "bg-[#244D3F] text-white border-2 border-[#244D3F]"
            : "text-gray-600 hover:bg-gray-100"
        }`;

    return (
        <nav className='shadow-md mb-2 w-full md:w-11/12 mx-auto bg-white mt-3 md:sticky md:top-2 z-50'>
        {/* <nav className='shadow-md mb-2 w-full md:w-11/12 mx-auto bg-white mt-3 sticky top-2 z-50'> */}
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center  gap-4 p-4'>

                {/* Logo Section */}
                <h1 className='text-2xl font-bold italic'>
                    <span className='font-extrabold text-[#244D3F]'>Keen</span>Keeper
                </h1>

                {/* Navigation Links */}
                <ul className='flex flex-wrap justify-center items-center gap-2 md:gap-5'>
                    <li>
                        <NavLink to="/" className={navLinkStyles}>
                            <RiHomeLine /> <span>Home</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/timeline" className={navLinkStyles}>
                            <IoIosTimer /> <span>Timeline</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/stats" className={navLinkStyles}>
                            <TfiStatsUp /> <span>Stats</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );







    // return (
    //      <nav className=' shadow mb-2 w-11/12 mx-auto '>


    //         <div className='container mt-2 mx-auto flex justify-between items-center gap-2 border-2 p-1'>

    //            <h1><samp className='font-extrabold'>Keen</samp>Keeper</h1>

    //             <ul className='flex  gap-5 justify-between items-center'>
    //                 <li> <NavLink  className={({isActive})=> isActive ? `btn border-2 border-[#244D3F] ${" bg-[#244D3F]   text-white"}`: "" } to={"/"}> <samp className=' flex items-center gap-1  '><RiHomeLine /> Home</samp> </NavLink></li>

    //                 <li> <NavLink className={({isActive})=> isActive ? `btn ${"border-b-2 border-purple-500     text-purple-500"}`: "" }  to={"/apps"}> <samp className='flex items-center gap-1 btn border-b-2 border-purple-500'><IoIosTimer /> Timeline</samp> </NavLink></li>

    //                 <li> <NavLink className={({isActive})=> isActive ? `btn ${"border-b-2 border-purple-500     text-purple-500"}`: "" }  to={"/installapps"}> <samp className='flex items-center  gap-1 btn border-b-2 border-purple-500 '><TfiStatsUp /> Stats</samp></NavLink></li>


    //             </ul>

    //         </div>




    //     </nav>

    // );
};

export default NavBer;