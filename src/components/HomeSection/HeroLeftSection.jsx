// import React, { useState, useEffect } from "react";
import "../../style/HeroSection.css";
import img3 from '../../images/our_img3.jpg';
import "../../style/responsive.css";
const HeroLeftSection = ({ title, img}) => {
  console.log(title);

  return (
    <div>
      <div className="row">
        <div className="col-md-12 container">
          <div>
            <figure>
              <img
                className="he_img leftSingleImg"
                src={
                  img3
                  // img
                  //   ? img
                  //   : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                }
                alt="#"
              />
            </figure>

            <div className="our_text_box position_box centered ">
              <h2
                className="awesome withi_color"
                style={{ color: "#fff", marginLeft: "2rem", fontSize: "2rem" }}
              >
                {/* {title}{" "} */}
                Breaking News
              </h2>
              <p className="hiuouh" style={{ color: "#fff" }}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeftSection;
