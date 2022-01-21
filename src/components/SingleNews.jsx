import React from 'react';
// import LikeImg from "../images/like.png";
// import CommentImg from "../images/comm.png";
import '../style/responsive.css'
import "../style/SingleNews.css";
const SingleNews = ({ img, heading, detail, author }) => {
  return (
      <>
      <div class=" padding_bottom2 mb-4 me-4">
      
      <div class="our_img">
         <figure><img src={img} alt="#" style={{width:"18rem",height:"10rem"}}/></figure>
      </div>
       <div class="our_text_box three_box">


          <div class="post_box d_flex padding_top3">
             <h3 class="awesome padding_flot">{heading.slice(0,30)}..</h3>
             <h4 class="flot_left1">Post By : {author} </h4>
             {/* <ul class="like padding_left2">
                <li><a href="#"><img src={LikeImg} alt="#"/>Like</a></li>
                <li><a href="#"><img src={CommentImg} alt="#"/>Comment</a></li>
             </ul> */}
          </div>
          <p>{detail.slice(0,50)}... </p>
       </div>
    </div>
      
      </>
  )
};

export default SingleNews;
