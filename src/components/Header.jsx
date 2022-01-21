import React from "react";
import "../style/Header.css";
import "../style/responsive.css";
import logo from "../images/logo.png";
import box_img from "../images/box_img.png";
// import background from "../images/back.jpg";
const Header = () => {
  return (
    <header>
      {/* <!-- header inner --> */}
      <div className="head_top fixed-top">
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <a href="index.html">
                        <img src={logo} alt="Logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarsExample04"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          {" "}
                          Home{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">
                          News
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end header inner -->
           <!-- end header -->
           <!-- banner --> */}
        {/* <section className="banner_main">
          <div className="container">
            <div className="row d_flex">
              <div className=" col-xl-8 col-lg-8 col-md-8 col-12-9">
                <div className="text-bg">
                  <h1>
                    Blog
                    <br /> <span className="white1">Landing Page 2019</span>
                  </h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters,
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-12-3">
                <div className="text-img">
                  <figure>
                    <img src={box_img} alt="#" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </header>
  );
};

export default Header;