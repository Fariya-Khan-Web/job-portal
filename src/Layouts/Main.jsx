import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Common/Navbar';

const Main = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;