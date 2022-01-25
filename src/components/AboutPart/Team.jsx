import React from "react";
import "../../style/Team.css";
import plan1 from "../../images/plan1.png";
const Team = () => {
  return (
    <div className="section">
      <div id="" className="Testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="titlepage">
                <h2>will smithe</h2>
              </div>
            </div>
          </div>
          <div className="row d_flex">
            <div className="col-md-3">
              <div className="Testimonial_box">
                <i>
                  <img src={plan1} alt="#" />
                </i>
              </div>
            </div>
            <div className="col-md-9">
              <div className="Testimonial_box">
                <p>
                  Tof Lorem Ipsum, you need to be There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable. If
                  you are going to use a pass
                  <br />
                  age of Lorem Ipsum, you need to be
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
