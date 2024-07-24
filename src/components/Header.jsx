import React from 'react';
import './Header.css';
import logo from '../assets/Sazzon.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <nav className="nav">
        <a href="#">Página principal</a>
        <a href="#">Nosotros</a>
        <div className="social-icons">
          <a href="https://www.instagram.com/appsazzon24/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/share/WnW5Hp2Eaapzr3jA/?mibextid=qi2Omg"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.tiktok.com/@.sazzon?_t=8oHOWeIMneX&_r=1"><i className="fab fa-tiktok"></i></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
