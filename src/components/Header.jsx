import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import "../style/responsive.css";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <header>
      <div className="head_top fixed-top">
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <Link to="/">
                        <img src={logo} alt="Logo" />
                      </Link>
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
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarsExample04"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          {" "}
                          Home{" "}
                        </Link>
                      </li>

                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="news"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          News
                        </Link>

                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link className="dropdown-item" to="/general">
                              General
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/business">
                              Business
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/entertainment">
                              Entertainment
                            </Link>
                          </li>

                          <li>
                            <Link className="dropdown-item" to="/health">
                              Health
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/science">
                              Science
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/sports">
                              Sports
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/technology">
                              Technology
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="about">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="contact">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
