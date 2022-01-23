// import React,{useState,useEffect} from "react";
// import Spinner from "../Spinner";
import HeroLeftSection from "./HeroLeftSection";
import HeroRightSection from "./HeroRightSection";
import "../../style/responsive.css";
import "../../style/HeroSection.css";
const HeroSection = () => {
  
//   const[title1,setTitle1]=useState("");
//   const[img1,setImg1]=useState("");
//   const[title2,setTitle2]=useState("");
//   const[img2,setImg2]=useState("");
//   const[title3,setTitle3]=useState("");
//   const[img3,setImg3]=useState("");
//   const[load,setLoad]=useState(false);
//   const updateFunction = async () => {
//     const link =`https://newsapi.org/v2/top-headlines?country=us&apiKey=ce9c68716fc14e71bed05858206454e0`
    
   
//     let data = await fetch(link);
//     let parseData = await data.json();

// setTimeout(() => {
//   setHandler(parseData);
//   setLoad(true);
// }, 1000);
    
//   };
// const setHandler=(parseData)=>{
//   console.log(parseData)
// let  t=parseData.articles[0].title;
//  let i=parseData.articles[0].urlToImage;
// setTitle1(t);
// setImg1(i);
//   t=parseData.articles[1].title;
//   i=parseData.articles[1].urlToImage;
// setTitle2(t);
// setImg2(i);
//   t=parseData.articles[3].title;
//   i=parseData.articles[3].urlToImage;
// setTitle3(t);
// setImg3(i);
// setLoad(true);
// }  
//   useEffect(() => {
//     updateFunction();
    
//   }, []);    
  return (
    <>
    {/* {!load && <Spinner />} */}
  {/* {load&& <div className="container"> */}
 <div className="container">
      <div class="row">
        <div class=" col-lg-8 ">
          
{/* <HeroLeftSection title={title1} img={img1}/> */}
<HeroLeftSection title={"hello world"} 
img={"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}/>
      
        </div>
        <div class=" col-lg-4 ">
          <div className="row">
            {/* <HeroRightSection title={title2} img={img2}/> */}
            <HeroRightSection title={"hello world"} 
img={"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}/>
          </div>
          <div className="row">
            {/* <HeroRightSection title={title3} img={img3}/> */}
            <HeroRightSection title={"hello world"} 
img={"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}/>
          </div>
        </div>
      </div>
     </div>
     </>
  );
};

export default HeroSection;
