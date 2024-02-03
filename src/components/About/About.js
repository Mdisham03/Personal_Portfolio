import React, { useState } from "react";
import "../style/style.css";
import Photo from "../images/abt1 photo.png";
// import "../script.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faPython,
  faJs,
  faReact,
  faCss3Alt,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={Photo} alt="About Me" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                Hello There! I'M Mohamed Isham, A Passionate And Creative Web
                Developer Based In Chennai. My Journey Into The World Of Coding
                Started With A Curious Mind And A Determination To Bring Ideas
                To Life Through The Web.
              </p>
              <div className="tab-titles">
                <p
                  className={`tab-links ${
                    activeTab === "skills" ? "active-link" : ""
                  }`}
                  onClick={() => openTab("skills")}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "education" ? "active-link" : ""
                  }`}
                  onClick={() => openTab("education")}
                >
                  Education
                </p>
              </div>

              <div
                className={`tab-contents ${
                  activeTab === "skills" ? "active-tab" : ""
                }`}
                id="skills"
              >
                <ul>
                  <li>
                    <span>Web Development</span>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faHtml5} />
                        &nbsp;HTML
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCss3Alt} />
                        &nbsp;CSS
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faSass} />
                        &nbsp;SCSS
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faJs} />
                        &nbsp;Javascript
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Web Development Frameworks:</span>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faReact} />
                        &nbsp; React.js
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>
                      Programming Languages
                    </span>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faPython} />
                        &nbsp; Python Programming Languages <br />
                        <br />
                        (Intermediate level)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>
                      Database Management
                    </span>
                    <ul>
                      <li>
                        Basic knowledge of databases like <br />
                        <br />
                        <FontAwesomeIcon icon={faDatabase} />
                        &nbsp;MySQL
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "education" ? "active-tab" : ""
                }`}
                id="education"
              >
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    &nbsp; BCA Hindusthan College of Art's and Science From
                    Coimbatore-641001
                    <br />
                    &nbsp;
                    <br />
                    &nbsp;
                    <span>2020-2023</span>
                  </li>
                  <br />
                  <li>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    &nbsp; XII (12th) Imam Shafi(Rah) Matric, Hr, Sec, School
                    From Adirampattinam-614701
                    <br />
                    &nbsp;
                    <br />
                    &nbsp;
                    <span>2019-2020</span>
                  </li>
                  <br />
                  <li>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    &nbsp; X (10th) Imam Shafi(Rah) Matric, Hr, Sec, School From
                    Adirampattinam-614701
                    <br />
                    &nbsp;
                    <br />
                    &nbsp;
                    <span>2017-2018</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
