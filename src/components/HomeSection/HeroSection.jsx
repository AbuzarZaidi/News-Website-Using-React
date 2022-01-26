import HeroLeftSection from "./HeroLeftSection";
import HeroRightSection from "./HeroRightSection";
import "../../style/responsive.css";
import "../../style/HeroSection.css";
const HeroSection = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" col-lg-8 ">
            <HeroLeftSection heroNews={props.heroNews[0]} />
          </div>
          <div className=" col-lg-4 ">
            <div className="row">
              <HeroRightSection heroNews={props.heroNews[1]} />
            </div>
            <div className="row">
              <HeroRightSection heroNews={props.heroNews[2]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
