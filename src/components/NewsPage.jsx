import React, { useState, useEffect } from "react";
import "../style/NewsPage.css";
import "../style/responsive.css";
import SingleNews from "../components/SingleNews";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const NewsPage = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateFunction = async () => {
    const link = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}`;
    let data = await fetch(link);
    let parseData = await data.json();
    setArticle(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateFunction();
  }, []);
  const fetchMoreData = async () => {
    const link = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ce9c68716fc14e71bed05858206454e0&page=${
      page + 1
    }`;

    setPage(page + 1);
    let data = await fetch(link);
    let parseData = await data.json();
    setArticle(article.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    console.log(totalResults);
  };
  return (
    <>
      <div className="blog_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                {/* <h2>Latest News</h2> */}
                <h2> Top {capitalizeFirstLetter(props.category)} Headlines</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {article.map((val) => (
              <div className="col-4 mb-4">
                <SingleNews
                  heading={val.title ? val.title : ""}
                  detail={val.description ? val.description : ""}
                  author={val.author ? val.author : ""}
                  url={val.url ? val.url : "www.google.com"}
                  img={val.urlToImage}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default NewsPage;
