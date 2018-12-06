import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
  return(
    <div className="header-container">
      <header className="header">
      <div className="header__border">
        <Link to="/" className="logo__container">
          <img src="images/Logo-1.png" alt="Logo" className="logo logo--1" />
          <img src="images/Logo-2.png" alt="Logo" className="logo logo--2" />
        </Link>
      </div>
    </header>
  </div>
  )
}

export default Header;
