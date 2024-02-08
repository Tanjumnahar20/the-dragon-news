/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../shared/Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import LeftNav from '../../shared/leftNav/LeftNav';
import RightNav from '../../shared/RightNav/RightNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
<div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
    <div>
        <LeftNav></LeftNav>
    </div>
    <div className='col-span-2'>
        <h2 className="text-4xl">news coming soon</h2>
        </div>
    <div>
        <RightNav></RightNav>
        </div>
</div>
       </div>
    );
};

export default Home;