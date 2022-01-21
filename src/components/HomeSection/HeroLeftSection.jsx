import React from 'react';
import img2 from "../../images/our_img2.jpg";
import '../../style/HeroSection.css'
import '../../style/responsive.css'
const HeroLeftSection = () => {
  return (
<div>
<div className="row">
            <div className="col-md-12 container">
              <div >
              {/* <div className="our_img"> */}
                <figure>
                  <img className="he_img leftSingleImg" src={img2} alt="#" />
                </figure>

                <div className="our_text_box position_box centered ">
                  <h2 className="awesome withi_color" style={{ color: "#fff",marginLeft:"2rem",fontSize:"2rem" }}>
                    This week is incelebrity homes love food{" "}
                  </h2>
                  <p className="hiuouh" style={{ color: "#fff" }}>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
</div>

  )
};

export default HeroLeftSection;
{/* <img className='leftSingleImg' src={img2} alt="" /> */}