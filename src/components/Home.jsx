import React, { useCallback, useState, useEffect } from "react";
import Spinner from "./Spinner";
import "../style/Home.css";
import Headline from "./HomeSection/Headline";
import HeroSection from "./HomeSection/HeroSection";
import TopHeadline from "./HomeSection/TopHeadline";

const Home = (props) => {
  const [load, setLoad] = useState(true);
  const [heroNews, setHeroNews] = useState([]);
  const [topHeadLineNews, setTopHeadLineNews] = useState([]);
  const [headLineNews, setHeadLineNews] = useState([]);
  const getNewsFunction = useCallback(async () => {
    const link = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}`;
    let data = await fetch(link);
    let parseData = await data.json();
    let temp = [];
    let i;
    for (i = 0; i < 3; i++) {
      temp.push(parseData.articles[i]);
    }
    setHeroNews(temp);
    temp = [];
    for (i = 3; i < 5; i++) {
      temp.push(parseData.articles[i]);
    }
    setTopHeadLineNews(temp);
    temp = [];
    for (i = 5; i < 8; i++) {
      temp.push(parseData.articles[i]);
    }
    setHeadLineNews(temp);
    setLoad(false);
  }, [props.apiKey]);
  useEffect(() => {
    getNewsFunction();
  }, [getNewsFunction]);

  return (
    <>
      {load && <Spinner />}
      <div className="home">
        {!load && <HeroSection heroNews={heroNews} />}
        {!load && <TopHeadline topHeadLineNews={topHeadLineNews} />}
        {!load && <Headline headLineNews={headLineNews} />}
      </div>
    </>
  );
};

export default Home;
