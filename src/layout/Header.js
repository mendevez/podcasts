import React from "react";
import logo from '../img/logo.jpg';
const Header = () => {
  return (
    <header id="header">
      <img className = "logo" src={logo} alt="Website Logo"/>
    </header>
  );
};

export default Header;
