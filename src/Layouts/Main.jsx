import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Common/Navbar';
import Footer from '../Pages/Common/Footer';

const Main = () => {
    return (
        <div className=''>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;