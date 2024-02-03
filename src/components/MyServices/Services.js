import React from "react";
import "../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode} from "@fortawesome/free-solid-svg-icons"; // faCropSimple 
import { faAppStore } from "@fortawesome/free-brands-svg-icons";
const Services = () => {
  return (
    <>
      <div id="services">
        <div className="container">
          <h1 className="sub-title">My Services</h1>
          <p>
            I Specialize In Front-End Development, Crafting Visually Appealing
            And User-Friendly Websites. From Responsive Designs That Adapt
            Seamlessly To Different Devices To Interactive User Interfaces That
            Enhance The Overall Experience, I Love Turning Concepts Into Dynamic
            And Functional Web Solutions.
          </p>
          <div className="services-list">
            <div>
              <FontAwesomeIcon icon={faCode} className={"facode"} />
              <h2>Web Designing</h2>
              <p>
                Creating Visually Stunning And User-Centric Web Experiences Is
                Not Just A Job For Me; It'S My Passion. As A Dedicated Web
                Designer, I Combine Creativity With Technical Proficiency To
                Bring Concepts To Life On The Digital Canvas.
              </p>
              <a href="#contact">Learn more</a>
            </div>
            {/* Uncomment the following code if you want to include UI/UX Designing */}
            {/* <div>
              <FontAwesomeIcon icon={faCropSimple} className={"facode"} />
              <h2>UI/UX Designing</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                dolorum esse exercitationem cumque at, expedita eaque nesciunt
                tempora excepturi. Asperiores, itaque!
              </p>
              <a href="#contact">Learn more</a>
            </div> */}
            <div>
              <FontAwesomeIcon icon={faAppStore} className={"facode"} />
              <h2>Web App Development</h2>
              <p>
                Transforming Ideas Into Dynamic And Functional Web Applications
                Is Not Just My Profession; It'S My Forte. As A Dedicated Web App
                Developer, I Believe In Creating Web Applications That Not Only
                Meet But Exceed User Expectations. Each Line Of Code Is An
                Opportunity To Enhance User Experiences And Provide Solutions
                That Make A Meaningful Impact.
              </p>
              <a href="#contact">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Services;
