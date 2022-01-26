import React from "react";
import "../../style/HeroSection.css";
import "../../style/responsive.css";
const HeroRightSection = ({ heroNews }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 container de">
          <div>
            <figure>
              <img
                className=" rightSingleImg"
                src={
                  heroNews.urlToImage
                    ? heroNews.urlToImage
                    : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                }
                alt="#"
              />
            </figure>
            <a href={heroNews.url}>
              <div className="our_text_box position_box centered ">
                <h4
                  className="awesome withi_color content"
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    alignItem: "center",
                    justifyContent: "center",
                  }}
                >
                  {heroNews.title.slice(0, 50)}
                  {"..."}
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRightSection;
