import React from "react";

import HeroLeftSection from "./HeroLeftSection";
import HeroRightSection from "./HeroRightSection";
import "../../style/responsive.css";
import "../../style/HeroSection.css";
const HeroSection = () => {
  return (
    <div className="container">
      <div class="row">
        <div class=" col-lg-8 ">
          <HeroLeftSection />
        </div>
        <div class=" col-lg-4 ">
          <div className="row">
            <HeroRightSection />
          </div>
          <div className="row">
            <HeroRightSection />
          </div>
        </div>
      </div>
     </div>
  );
};

export default HeroSection;
