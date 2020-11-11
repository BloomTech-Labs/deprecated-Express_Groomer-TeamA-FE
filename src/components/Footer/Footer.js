import React from 'react';
import './footer.scss';
import logo from '../../assets/9f5a8b6a-18d6-4a28-9e98-1eee8c05b05a_200x200.png';

function Footer() {
  return (
    <div className="footer-container">
      <img src={logo} />
      <div className="footer-icons">
        <i className="fab fa-facebook footer-icon"></i>
        <i className="fab fa-twitter footer-icon"></i>
      </div>
    </div>
  );
}

export default Footer;
