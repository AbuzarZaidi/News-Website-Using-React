import React from 'react';
import img2 from "../../images/our_img2.jpg";
import '../../style/HeroSection.css'
// import '../../style/responsive.css'
const HeroRightSection = () => {
  return (
    <div>
<div className="row">
            <div className="col-md-12 container de">
              <div >
              {/* <div className="our_img"> */}
                <figure>
                  <img className=" rightSingleImg" src={img2} alt="#" />
                </figure>

                <div className="our_text_box position_box centered ">
                  <h3 className="awesome withi_color content" style={{ color: "#fff",textAlign:"center",alignItem:"center",justifyContent:"center",paddingBottom:"5rem" }}>
                    This week is incelebrity homes love food{" "}
                  </h3>
                  
                </div>
              </div>
            </div>
          </div>
</div>

  )};

export default HeroRightSection;
