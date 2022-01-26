import React from "react";
import SingleTopHeadline from "./SingleTopHeadline";
const TopHeadline = ({ topHeadLineNews }) => {
  return (
    <>
      <div className="blog_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Top HeadLine</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        {topHeadLineNews.map((val) => (
          <SingleTopHeadline
            key={val.url}
            title={val.title}
            img={val.urlToImage}
            detail={val.description}
            url={val.url}
          />
        ))}
      </div>
    </>
  );
};

export default TopHeadline;
