import React from 'react';
import "../style/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faCropSimple } from '@fortawesome/free-solid-svg-icons';
import { faAppStore} from "@fortawesome/free-brands-svg-icons";
const Services = () => {
  return (
    <>
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <p>
          I specialize in front-end development, crafting visually appealing and user-friendly websites. From responsive designs that adapt seamlessly to different devices to interactive user interfaces that enhance the overall experience, I love turning concepts into dynamic and functional web solutions.
        </p>
        <div className="services-list">
          <div>
            <FontAwesomeIcon icon={faCode} className={'facode'} />
            <h2>Web Designing</h2>
            <p>
              Creating visually stunning and user-centric web experiences is not just a job for me; it's my passion. As a dedicated web designer, I combine creativity with technical proficiency to bring concepts to life on the digital canvas.
            </p>
            <a href="#contact">Learn more</a>
          </div>
          {/* Uncomment the following code if you want to include UI/UX Designing */}
          <div>
            <FontAwesomeIcon icon={faCropSimple} className={'facode'} />
            <h2>UI/UX Designing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. dolorum esse exercitationem cumque at, expedita eaque nesciunt tempora excepturi. Asperiores, itaque!</p>
            <a href="#contact">Learn more</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faAppStore} className={'facode'}/>
            <h2>Web App Development</h2>
            <p>
              Transforming ideas into dynamic and functional web applications is not just my profession; it's my forte. As a dedicated web app developer, I believe in creating web applications that not only meet but exceed user expectations. Each line of code is an opportunity to enhance user experiences and provide solutions that make a meaningful impact.
            </p>
            <a href="#contact">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <hr/></>
  );
};

export default Services;
