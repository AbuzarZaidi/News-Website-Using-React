import React from "react";
import "../style/Home.css";
import Headline from "./HomeSection/Headline";
import HeroSection from "./HomeSection/HeroSection";
import TopHeadline from "./HomeSection/TopHeadline";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <TopHeadline />
      <Headline />
    </div>
  );
};

export default Home;
