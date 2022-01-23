import React from 'react';
import '../style/Home.css'
import HeroSection from './HomeSection/HeroSection';
import TopHeadline from './HomeSection/TopHeadline';
const Home = () => {
  return (
    <div className='home'>
    <HeroSection/>
    <TopHeadline/>
     </div>
  )
};

export default Home;
