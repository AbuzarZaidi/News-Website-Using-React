import React from 'react';
import img1 from '../../images/our_img1.jpg';
import '../../style/HeroSection.css'
 import '../../style/responsive.css'
const HeroRightSection = ({title,img}) => {
  return (
    <div>
<div className="row">
            <div className="col-md-12 container de">
              <div >
              {/* <div className="our_img"> */}
                <figure>
                  <img className=" rightSingleImg" src={img1} alt="#" />
                </figure>

                <div className="our_text_box position_box centered ">
                  <h4 className="awesome withi_color content" style={{ color: "#fff",textAlign:"center",alignItem:"center",justifyContent:"center", }}>
                    {/* {title.slice(0,50)}{"..."} */}
                    Breaking News
                  </h4>
                  
                </div>
              </div>
            </div>
          </div>
</div>

  )};

export default HeroRightSection;
