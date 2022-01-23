import React from 'react';
import SingleTopHeadline from './SingleTopHeadline';
import img4 from '../../images/our_img4.jpg'
import img5 from '../../images/our_img5.jpg'
const TopHeadline = () => {
const topHeadline=[{
    img:img4,
    title:"first Top Heading",
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},{
    img:img5,
    title:"second Top Heading",
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}]
    return (
      <>
      <div className="blog_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Top HeadLine</h2>
                {/* <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page{" "}
                </span> */}
              </div>
            </div>
          </div>
          </div>
      </div>
<div className="container mt-4">
{topHeadline.map((val) => (
              <SingleTopHeadline title={val.title} img={val.img} detail={val.detail}/>
            ))}
            </div>
      </>
  )
};

export default TopHeadline;
