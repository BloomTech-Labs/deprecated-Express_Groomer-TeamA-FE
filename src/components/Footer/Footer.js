import React from 'react';
import {FooterContainer, FooterName} from './footerStyles';
import logo from '../../assets/9f5a8b6a-18d6-4a28-9e98-1eee8c05b05a_200x200.png';

function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="cat and dog together" />
      <FooterName>Pet-XPress © 2020</FooterName>
      <div className="footer-icons">
        <i className="fab fa-facebook footer-icon"></i>
        <i className="fab fa-twitter footer-icon"></i>
        <i className="fab fa-instagram footer-icon"></i>
      </div>
    </FooterContainer>
  );
}

export default Footer;
