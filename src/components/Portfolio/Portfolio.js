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
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src={work1} alt="Work 1" />
              <div className="layer">
                <h3>"Interactive Portfolio Showcase" </h3>
                <p>
                  Explore my journey and skills
                  through an interactive portfolio that highlights my expertise
                  in web development. From responsive designs to dynamic web
                  applications, this showcase reflects my passion for creating
                  visually appealing and user-friendly digital experiences. Dive
                  into a collection of projects that demonstrate my proficiency
                  in HTML, CSS, JavaScript, and React.js, showcasing my
                  commitment to delivering high-quality web solutions.
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
          <a href="#contact" className="btn">
            Loading....
          </a>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Portfolio;