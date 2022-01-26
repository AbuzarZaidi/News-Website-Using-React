import React from "react";
const Headline = ({ headLineNews }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {headLineNews.map((val) => (
            <div
              key={val.url}
              className="card m-2"
              style={{ width: "18rem", borderRadius: "20px" }}
            >
              <img
                src={val.urlToImage}
                className="card-img-top"
                alt="..."
                style={{ borderRadius: "20px" }}
              />
              <div className="card-body">
                <a href={val.url}>
                  <h2 className="card-title">{val.title}</h2>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Headline;
