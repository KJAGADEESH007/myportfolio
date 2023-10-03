import React from "react";
import imgg from "../assets/images/jagadeesh.JPG";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contactMee">
      <div className="contactMe">
        <div className="image">
          <img src={imgg} alt="jagadeesh" />
        </div>
        <div className="contact">
            <div className="contact_h1"><h1> Contact Me</h1></div>
          <div>
            
          <p>
            Name:<span> K Jagadeesh</span>
          </p>

          <p>
            Email:            <span>
              <a href="mailto: karuturijagadesh@gmail.com">karuturijagadesh@gmail.com</a>
            </span>
          </p>
          <p>
            MobileNo:            <span>
              <a href="mailto: +916362033832">+91 6362033832</a>
            </span>
          </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
