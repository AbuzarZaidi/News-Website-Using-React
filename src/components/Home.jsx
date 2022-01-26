import React, { useCallback, useState, useEffect } from "react";
import Spinner from "./Spinner";
import "../style/Home.css";
import Headline from "./HomeSection/Headline";
import HeroSection from "./HomeSection/HeroSection";
import TopHeadline from "./HomeSection/TopHeadline";

const Home = (props) => {
  const [load, setLoad] = useState(true);
  const [heroNews, setHeroNews] = useState([]);
  const getNewsFunction = useCallback(async () => {
    const link = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}`;
    let data = await fetch(link);
    let parseData = await data.json();
    let temp = [];
    let i;
    for (i = 0; i < 3; i++) {
      temp.push(parseData.articles[i]);
      console.log(temp);
    }
    setHeroNews(temp);
    setLoad(false);
  }, []);
  useEffect(() => {
    getNewsFunction();
  }, [getNewsFunction]);

  return (
    <>
      {load && <Spinner />}
      <div className="home">
        {!load && <HeroSection heroNews={heroNews} />}
        {!load && <TopHeadline />}
        {!load && <Headline />}
      </div>
    </>
  );
};

export default Home;
