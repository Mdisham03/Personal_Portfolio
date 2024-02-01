import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../style/style.css";
import cv from "../Mohamed_CV.pdf";

const iconsColor={
    color:'red'
}


const Contact = () => {
 
  return (
    <div id="contact">
      <div className="container">
        <div className="row ">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <FontAwesomeIcon icon={faPaperPlane} style={iconsColor}/> md.isham03@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneVolume} style={iconsColor}/> +91 9629948681
            </p>
            <a href={cv} download className="btn btn2">
              Download CV
            </a>
            <div className="social-icons">
              <a href="https://www.facebook.com/mohamed.isham.39794">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/md.isham03/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/mohamedisham/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="contact-right ">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"             
            >
              <input
                type="hidden"
                name="access_key"
                value="78d9d326-1853-4a38-8ffb-8df319b2b245"
              />
              <label htmlFor="Name">Enter Your Name</label>
              <br />
              <input type="text" name="Name" placeholder="Your Name" required />
              <label htmlFor="email">Enter Your Email</label>
              <br />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <label htmlFor="msg">Enter Your Message</label>
              <br />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
