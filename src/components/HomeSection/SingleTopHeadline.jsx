import React from 'react';

const SingleTopHeadline = ({img,title,detail}) => {
  return (
      
    <div class="row">
    <div class="col-md-12">
       <div class="our_two_box">
          <div class="row d_flex">
            
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="our_img">
                   <figure><img src={img} alt="#" style={{borderRadius:"20px"}}/></figure>
                </div>
             </div>
             <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="our_text_box">
                   <h3 class="awesome pa_wi">{title}</h3>
                   <p>{detail} </p>
                   {/* <div class="post_box padding_bottom1">
                      <h4 class="flot_left1">Post By : {author}</h4>
                      <ul class="like">
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
  )
};

export default SingleTopHeadline;
