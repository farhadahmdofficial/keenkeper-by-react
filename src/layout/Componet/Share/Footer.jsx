

import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (

        <footer className="bg-[#244D3F] text-white p-10 mt-10">
            {/* Main Content Section */}
            <div className="container mx-auto flex flex-col items-center text-center space-y-8">

                {/* Brand & Description */}
                <aside className="max-w-2xl">
                    <h1 className='text-5xl font-extrabold italic mb-4'>KeenKeeper</h1>
                    <p className='text-gray-200 text-lg leading-relaxed'>
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </aside>

                {/* Social Links Section */}
                <nav className="flex flex-col items-center gap-4">
                    <h3 className='text-xl font-bold uppercase tracking-widest'>Social Links</h3>
                    <div className="flex gap-4">
                        {/* Social Icons with Hover Effect */}




                        <div className='bg-[#E9E9E9] hover:bg-white text-black text-2xl h-12 w-12 flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:scale-110'>

                            <FaInstagram />
                        </div>


                        <div className='bg-[#E9E9E9] hover:bg-white text-black text-2xl h-12 w-12 flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:scale-110'>
                            <FaFacebookSquare />
                        </div>


                        <div className='bg-[#E9E9E9] hover:bg-white text-black text-2xl h-12 w-12 flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:scale-110'>

                            <FaXTwitter />

                            {/* <FaXTwitter /> */}
                        </div>



                       
                    </div>
                </nav>

                {/* Divider Line */}
                <div className="w-full border-t border-gray-500 my-6 opacity-30"></div>

                {/* Bottom Footer Section */}
                <div className='flex flex-col md:flex-row justify-between items-center w-full gap-4 text-sm text-gray-300'>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>

                    <div className='flex flex-wrap justify-center gap-6'>
                        <p className="hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
                        <p className="hover:text-white cursor-pointer transition-colors">Terms of Service</p>
                        <p className="hover:text-white cursor-pointer transition-colors">Cookies</p>
                    </div>
                </div>
            </div>
        </footer>


        

    );
};

export default Footer;