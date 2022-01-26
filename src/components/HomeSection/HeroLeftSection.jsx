import "../../style/HeroSection.css";
import "../../style/responsive.css";
const HeroLeftSection = ({ heroNews }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 container">
          <div>
            <figure>
              <img
                className="he_img leftSingleImg"
                src={
                  heroNews.urlToImage
                    ? heroNews.urlToImage
                    : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                }
                alt="#"
              />
            </figure>
            <a href={heroNews.url}>
              <div className="our_text_box position_box centered ">
                <h2
                  className="awesome withi_color"
                  style={{
                    color: "#fff",
                    marginLeft: "2rem",
                    fontSize: "2rem",
                  }}
                >
                  {heroNews.title}
                </h2>
                <p className="hiuouh" style={{ color: "#fff" }}></p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeftSection;
