import React from 'react';
import '../style/responsive.css'
import "../style/SingleNews.css";
const SingleNews = ({ img, heading, detail, author,url }) => {
  return (
      <>
      <div className=" padding_bottom2 mb-4 me-4">
      
      <div className="our_img">
         <figure><img src={img?img:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} alt="#" style={{width:"18rem",height:"10rem"}}/></figure>
      </div>
       <div className="our_text_box three_box">


          <div className="post_box d_flex padding_top3">
             <h3 className="awesome padding_flot">{heading.slice(0,30)}..</h3>
             <h4 className="flot_left1">Post By : {author} </h4>
          </div>
          <p>{detail.slice(0,50)}... </p>
          <a href={url} className="btn btn-sm btn-danger mt-2"  style={{backgroundColor:"#1c423f"}} >Read more</a>
       </div>
    </div>
      
      </>
  )
};

export default SingleNews;
