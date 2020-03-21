import React from 'react';
import "./navBar.scss";
import SmallMenu from "./../menu/small-menu"


function NavBar() {
    return (
      <nav className="nav">
        <div className="nav__wrapper">
            <SmallMenu/>
        </div>
      </nav>
    );
  }
  
  export default NavBar;