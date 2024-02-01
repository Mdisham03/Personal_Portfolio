import { React, useState } from "react";
import "../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments,faCircleXmark  } from '@fortawesome/free-regular-svg-icons';
// import { faComments,faCircleXmark } from "@fortawesome/free-regular-svg-icons";



const Popup = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const openPopup = () => {
    setPopupVisibility(true);
  };

  const closePopup = () => {
    setPopupVisibility(false);
  };

  return (
    <>
      <div
        className="popup-overlay"
        style={{ display: isPopupVisible ? "block" : "none" }}
      ></div>
      <div
        className="popup-box"
        style={{ display: isPopupVisible ? "block" : "none" }}
      >
        {/* Content of your popup goes here */}
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="78d9d326-1853-4a38-8ffb-8df319b2b245"
          />
          <h6 className="sub-title">Contact Us</h6>
          <label htmlFor="Name">Enter Your Name</label>
          <br />
          <input type="text" name="Name" placeholder="Your Name" required />
          <label htmlFor="email">Enter Your Email</label>
          <br />
          <input type="email" name="Email" placeholder="Your Email" required />
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
        <button
          className="pop"
          onClick={closePopup}
        ><FontAwesomeIcon icon={faCircleXmark} id="cancel-popup" /></button>
      </div>
      <button className="add-btn " id="add-btn-pop" onClick={openPopup}>
        <FontAwesomeIcon icon={faComments} />
      </button>
    </>
  );
};

export default Popup;
