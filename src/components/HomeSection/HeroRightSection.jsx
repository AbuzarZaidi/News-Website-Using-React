import React from 'react';
import '../../style/HeroSection.css'
 import '../../style/responsive.css'
const HeroRightSection = ({title,img,url}) => {
  return (
    <div>
<div className="row">
            <div className="col-md-12 container de">
              <div >
              {/* <div className="our_img"> */}
                <figure>
                  
                  <img className=" rightSingleImg" src={img} alt="#" />
                  
                </figure>
                <a href={url}>
                <div className="our_text_box position_box centered ">
                  <h4 className="awesome withi_color content" style={{ color: "#fff",textAlign:"center",alignItem:"center",justifyContent:"center", }}>
                  
                    {title.slice(0,50)}{"..."}
                    
                  </h4>
                  
                </div>
                </a>
              </div>
            </div>
          </div>
</div>

  )};

export default HeroRightSection;
