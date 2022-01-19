import React from "react";
import '../style/Footer.css'
 import '../style/responsive.css'
const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer">
      <div className="container">
               <div className="row">
                  <div className="col-md-12 ">
                     <div className="cont">
                        <h3> <strong className="multi"> Join US On Different Platform</strong><br/>
                           Follow US
                        </h3>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <ul className="social_icon">
                          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>  
                     </ul>
                  </div>
                  
               </div>
            </div>
           
         
      <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <p>© 2022 All Rights Reserved.</p>
                     </div>
                  </div>
               </div>
            </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
