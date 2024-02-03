import React from "react";
import "../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import work1 from "../images/PersonalPort.png";
import work2 from "../images/work-2.png";
import work3 from "../images/work-3.png";

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
                  Responsive Designs To Dynamic Web Applications, This Showcase
                  Reflects My Passion For Creating Visually Appealing And
                  User-Friendly Digital Experiences. Dive Into A Collection Of
                  Projects That Demonstrate My Proficiency In HTML, CSS,
                  Javascript, And React.Js,Showcasing My Commitment To
                  Delivering High-Quality Web Solutions.
                </p>
                <a href="#header">
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work2} alt="Work 2" />
              <div className="layer">
                <h3>Proccessing...!</h3>
                {/* <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  dolorum esse exercitationem cumque at, expedita eaque nesciunt
                  tempora excepturi. Asperiores, itaque!
                </p>
                <a href="#">
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a> */}
              </div>
            </div>
            <div className="work">
              <img src={work3} alt="Work 3" />
              <div className="layer">
                <h3>Proccessing...!</h3>
                {/* <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  dolorum esse exercitationem cumque at, expedita eaque nesciunt
                  tempora excepturi. Asperiores, itaque!
                </p>
                <a href="#">
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a> */}
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
