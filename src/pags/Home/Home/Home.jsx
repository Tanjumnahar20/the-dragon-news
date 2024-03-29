/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../shared/Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import LeftNav from '../../shared/leftNav/LeftNav';
import RightNav from '../../shared/RightNav/RightNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';

const Home = () => {
    const newses = useLoaderData();
    console.log(newses)
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
        {
            newses.map(news=><NewsCard 
                key={news._id}
                news={news}
            >

            </NewsCard>)
        }
        </div>
    <div>
        <RightNav></RightNav>
        </div>
</div>
       </div>
    );
};

export default Home;