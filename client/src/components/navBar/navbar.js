import React from 'react';
import "./navBar.scss";
import { Link } from 'react-router-dom';


function NavBar() {
    return (
      <nav className="nav">
        <div className="nav__wrapper">
          <Link to="/" id="nav">
          <h4>No Food Waste</h4>
          </Link>
          <Link to="/about" id="about">
          <h4>About Us</h4>
          </Link>
        </div>
      </nav>
    );
  }
  
  export default NavBar;