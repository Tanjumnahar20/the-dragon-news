/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../pags/shared/Footer/Footer';
import Header from '../pags/shared/Header/Header';
import Home from '../pags/Home/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>
         <Outlet></Outlet>

        </div>
    );
};

export default Main;