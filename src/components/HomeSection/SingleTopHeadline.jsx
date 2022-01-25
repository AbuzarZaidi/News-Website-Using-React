import React from 'react';

const SingleTopHeadline = ({img,title,detail,url}) => {
  return (
      <a href={url}>
    <div className="row">
    <div className="col-md-12">
       <div className="our_two_box">
          <div className="row d_flex">
            
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="our_img">
                   <figure><img src={img} alt="#" style={{borderRadius:"20px"}}/></figure>
                </div>
             </div>
             <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="our_text_box">
                   <h3 className="awesome pa_wi">{title}</h3>
                   <p>{detail}</p> 
                   {/* <a href={url} className="btn btn-sm btn-danger "  style={{backgroundColor:"#1c423f"}} >Read more</a> */}
                   
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
