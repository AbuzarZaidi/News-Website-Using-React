import React from 'react';

const SingleTopHeadline = ({img,title,detail,url}) => {
  return (
      <a href={url}>
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
                   <p>{detail}</p> 
                   {/* <a href={url} class="btn btn-sm btn-danger "  style={{backgroundColor:"#1c423f"}} >Read more</a> */}
                   
                </div>
             </div>
          </div> 
       </div>
 </div>
 </div>
 </a>
  )
};

export default SingleTopHeadline;
