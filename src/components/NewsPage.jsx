import React, { useState, useEffect } from "react";
import "../style/NewsPage.css";
import SingleNews from "../components/SingleNews";
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
const NewsPage = () => {
  const [article, setArticle] = useState([]);
   const[loading,setLoading]=useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)
  const capitalizeFirstLetter = (string) => {
   return string.charAt(0).toUpperCase() + string.slice(1);
}
  const updateFunction = async () => {
    const link =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=ce9c68716fc14e71bed05858206454e0&page=${page}`
   // const link=`https://newsapi.org/v2/everything?q=tesla&from=2021-12-21&sortBy=publishedAt&apiKey=ce9c68716fc14e71bed05858206454e0&page=${page+1}
   // `
    let data = await fetch(link);
    let parseData = await data.json();
    setArticle(parseData.articles);
    setTotalResults(parseData.totalResults)
    setLoading(false);
    
  };
  useEffect(() => {
   // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateFunction();
  }, []);
  console.log(article.length)
// const nextClickHandler=async()=>{
// setPage(page+1);
// updateFunction();
// }
// const previousClickHandler=async()=>{
// setPage(page-1);
// updateFunction();
// }
// const fetchMoreData=()=>{
//    setPage(page+1);
//    const link =`https://newsapi.org/v2/top-headlines?country=us&apiKey=ce9c68716fc14e71bed05858206454e0&page=${page}`
//     let data = await fetch(link);
//     let parseData = await data.json();
//     setArticle(article.concat(parseData.articles));

// }
const fetchMoreData = async () => {   
   const link =`https://newsapi.org/v2/top-headlines?country=us&apiKey=ce9c68716fc14e71bed05858206454e0&page=${page+1}`
   // const link=`https://newsapi.org/v2/everything?q=tesla&from=2021-12-21&sortBy=publishedAt&apiKey=ce9c68716fc14e71bed05858206454e0&page=${page+1}
   // `
   setPage(page+1) 
   let data = await fetch(link);
   let parseData = await data.json()
   setArticle(article.concat(parseData.articles))
   setTotalResults(parseData.totalResults)
   console.log(totalResults)
   
 };
  return (
    <>
     {/* <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1> */}
               
      <div className="blog_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our Blogs</h2>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page{" "}
                </span>
              </div>
            </div>
          </div>
          </div>
      </div>
          {loading && <Spinner />}
          {/* <div className='d-flex justify-content-around mb-4'> */}
          <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length !== totalResults}
                    loader={<Spinner/>}
                > 
          <div className="row">
            {article.map((val) => (
              <div className="col-4 mb-4">
                <SingleNews
                  heading={val.title?val.title:""}
                  detail={val.description?val.description:""}
                  author={val.author?val.author:""}
                  img={val.urlToImage?val.urlToImage:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
                />
              </div>
            ))}
          </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
  <button disabled={page<=1} type="button" className="btn btn-danger" onClick={previousClickHandler}>&larr;</button>
  <button type="button" className="btn btn-success" onClick={nextClickHandler}>&rarr;</button>
</div> */}
       
    </>
  );
};

export default NewsPage;
