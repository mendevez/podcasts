import React from "react";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
      <ul className = "nav-links p-1">
          <li>
            <NavLink exact={true} to ="/" className = "nav-link p-1" > Popular </NavLink>   
          </li>
          <li>
            <NavLink exact={true} to = "/search" className = "nav-link p-1" > Search</NavLink>   
          </li>
      </ul>
  )
};

export default Navbar;
