import React from 'react'
import '../style/ContactUs.css'
import '../style/responsive.css'
const ContactUs = () => {
    return (
        <div id="contact" className="contact">
        <div className="container">
           <div className="row">
              <div className="col-md-12">
                 <div className="titlepage">
                    <h2>Contact us</h2>
                    <span>There are many variations of passages of Lorem Ipsum available, but the </span>
                 </div>
              </div>
           </div>
        </div>
        <div className="container">
           <div className="row">
              <div className="col-md-12 ">
                 <form className="main_form ">
                    <div className="row">
                       <div className="col-md-12 ">
                          <input className="form_contril" placeholder="Name " type="text" name="Name "/>
                       </div>
                       <div className="col-md-12">
                          <input className="form_contril" placeholder="Phone Number" type="text" name=" Phone Number"/>
                       </div>
                       <div className="col-md-12">
                          <input className="form_contril" placeholder="Email" type="text" name="Email"/>
                       </div>
                       <div className="col-md-12">
                          <textarea className="textarea" placeholder="Message" type="text" name="Message"></textarea>
                       </div>
                       <div className="col-sm-12">
                          <button className="send_btn">Send</button>
                       </div>
                    </div>
                 </form>
              </div>
           </div>
        </div>
     </div>
    )
}

export default ContactUs
