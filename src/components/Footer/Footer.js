import React from 'react';
import "../style/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const heartColor={
    color:'red'
}

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Made with <FontAwesomeIcon icon={faHeart} style={heartColor}/> Md.Isham
      </p>
    </div>
  );
};

export default Footer;
