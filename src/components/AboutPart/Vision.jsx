import React from 'react';
import '../../style/Vision.css'
import '../../style/responsive.css'
import img2 from '../../images/our_img2.jpg'
const vision = () => {
  return (
    <div className="row">
    <div className="col-md-12">
       <div className="our_two_box">
          <div className="row">
             <div className="col-md-12 container">
                <div className="our_img">
                 
                <figure><img className="he_img" src={img2} alt="#"/></figure>
               
              
                <div className="our_text_box position_box centered ">
                
                   <h3 className="awesome withi_color" style={{color:"#fff"}}>This week is incelebrity homes  love food </h3>
                   <p className="hiuouh">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repea</p>
                   {/* <div className="post_box">
                      <h4 className="flot_left1 withi_color">Post By : Blogger </h4>
                      <ul className="like withi_color">
                         <li><a href="#"><img src={LikeImg} alt="#"/>Like</a></li>
                          <li><a href="#"><img src={CommentImg} alt="#"/>Comment</a></li>
                      </ul>
                   </div> */}
                </div>
                
             </div>
             
             </div>
          </div>
       </div>
    </div>
 </div>
  )
};

export default vision;
