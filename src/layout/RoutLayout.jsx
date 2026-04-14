

import React from 'react';
import NavBer from './Componet/Share/NavBer';
import Footer from './Componet/Share/Footer';
import { Outlet } from 'react-router';

const RoutLayout = () => {
    return (
        <div>
            <NavBer></NavBer>

           <Outlet />

            <Footer></Footer>

        </div>
    );
};

export default RoutLayout;