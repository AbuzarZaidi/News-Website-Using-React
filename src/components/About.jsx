import React from "react";
import "../style/responsive.css";
import "../style/About.css";

import Team from "./AboutPart/Team";
import Vision from "./AboutPart/Vision";
const About = () => {
  return (
    <>
      <div className="blog_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our Vision</h2>
                <Vision />
                <h2>Testimonial</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
    </>
  );
};

export default About;
