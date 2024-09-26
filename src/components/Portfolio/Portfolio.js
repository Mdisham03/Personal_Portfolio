import React from "react";
import "../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import work1 from "../images/PersonalPort.png";
import work2 from "../images/Logo-eds.png";
import work3 from "../images/ABUCON.jpg";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Projects</h1>
          <p>
            Explore My Journey And Skills Through An Interactive Portfolio That
            Highlights My Expertise In Web Development. From Responsive Designs
            To Dynamic Web Applications, This Showcase Reflects My Passion For
            Creating Visually Appealing And User-Friendly Digital Experiences.
            Dive Into A Collection Of Projects That Demonstrate My Proficiency
            In HTML, CSS, Javascript, And React.Js,Showcasing My Commitment To
            Delivering High-Quality Web Solutions.
          </p>
          <div className="work-list">
            <div className="work">
              <img src={work1} alt="Work 1" />
              <div className="layer">
                <h3>"Interactive Portfolio Showcase" </h3>
                <p>
                  Explore My Journey And Skills Through An Interactive Portfolio
                  That Highlights My Expertise In Web Development. From
                  Responsive Designs To Dynamic Web Applications2. Dive Into A Collection Of
                  Projects That Demonstrate My Proficiency In HTML, CSS,
                  Javascript, And React.Js,Showcasing My Commitment To
                  Delivering High-Quality Web Solutions.
                </p>
                <a href="#header" >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work2} alt="Work 2" />
              <div className="layer">
                <h3>EDSOLARGROUP</h3>
                <p>
                  EDS - GROUP
                  ENGINEERING DRAFTING SERVICES
                  &
                  WEB SOULTION
                  At Engineering Drafting Services, We Are A Team Of Dedicated Professionals Specializing In Providing High-Quality Drafting And CAD Services. We Have Established Ourselves As A Trusted Partner For Clients Seeking Precise And Efficient Drafting Solutions.
                </p>
                <a href="https://edsolargroup.com" >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>
            <div className="work w3">
              <img src={work3} alt="Work 3" />
              <div className="layer">
                <h3>ABUCONSTRUCTION</h3>
                <p>
                ABU Construction, your trusted partner in construction excellence. We specialize in delivering top-quality construction services, from innovative design to meticulous execution. Our team of experienced professionals is committed to turning your vision into reality with precision and care. Explore our projects, discover our services, and see why ABU Construction is the preferred choice for all your construction needs.
                </p>
                <a href="https://adiraiabuconstruction.com/">
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>
          <p className="btn loading">Loading...</p>
          {/* <a href="#contact" className="btn">
            Loading....
          </a> */}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Portfolio;
