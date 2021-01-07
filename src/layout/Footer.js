import React from 'react';
import apiLogo from '../img/api-logo.png';
import logo from '../img/logo.jpg';
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-logo-wrapper">
          <img src={logo} className="footer-logo" alt="Website logo" />
          <div>
            Logo made with <a href="https://www.designevo.com/">DesignEvo</a>
          </div>
        </div>
        <img className="api-logo" src={apiLogo} alt="Api Logo" />
      </div>
    </footer>
  );
};

export default Footer;
