import React from "react";
import img4 from "../../images/our_img4.jpg";
import img5 from "../../images/our_img5.jpg";
const Headline = () => {
  const topHeadline = [
    {
      img: img5,
      title: "first Top Heading",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: img5,
      title: "second Top Heading",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: img5,
      title: "second Top Heading",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    
  ];
  return (
    <>
      <div className="container">
        <div className="row">
        {topHeadline.map((val) => (
            
            <div class="card m-2"  style={{width: "18rem",borderRadius:"20px"}}>
            <img src={val.img} class="card-img-top" alt="..." style={{borderRadius:"20px"}}/>
            <div class="card-body">
              <h2 class="card-title">{val.title}</h2>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            </div>
            
          </div>
          
          ))}
        </div>
      </div>
    </>
  );
};

export default Headline;
