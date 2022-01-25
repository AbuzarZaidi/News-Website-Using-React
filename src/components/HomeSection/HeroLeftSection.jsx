// import React, { useState, useEffect } from "react";
import "../../style/HeroSection.css";
import "../../style/responsive.css";
const HeroLeftSection = ({ title, img}) => {
  // console.log(title);

  return (
    <div>
      <div className="row">
        <div className="col-md-12 container">
          <div>
            <figure>
 
              <img
                className="he_img leftSingleImg"
                src={
                  "https://cdn.cnn.com/cnnnext/dam/assets/220123043252-01-francis-ngannou-012222-super-tease.jpg"
                  // img
                  //   ? img
                  //   : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                }
                alt="#"
              />
              
            </figure>
            <a href= "https://www.cnn.com/2022/01/23/sport/francis-ngannou-ciryl-gane-ufc-270-spt-intl/index.html"
>
            <div className="our_text_box position_box centered ">
              <h2
                className="awesome withi_color"
                style={{ color: "#fff", marginLeft: "2rem", fontSize: "2rem" }}
              >
                {/* {title}{" "} */}

                "UFC 270: Francis Ngannou beats Ciryl Gane to retain heavyweight title and unify division - CNN"
              </h2>
              <p className="hiuouh" style={{ color: "#fff" }}></p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeftSection;
