import React, { useState } from "react";

const Header = ({ dark, toggleTheme }) => {
  const [nav, setNav] = useState(false);


  return (
    <header>
      <div className="container">
        <nav className="header">
          <a href="/" className="logo">
            Sadeq<span className="family ">Dev</span>
          </a>

          <ul className="des-menu">
            <li className="des-menu-item">
              <a href="#About">About Me</a>
            </li>
            <li className="des-menu-item">
              <a href="#Services">Services</a>
            </li>
            <li className="des-menu-item">
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li className="des-menu-item">
              <a href="#Contact">Contact</a>
            </li>
          </ul>

          <div className="btn-group ">
            <button
              className={`nav-btn theme-btn ${dark ? "dark" : "light"}`}
              onClick={() => toggleTheme()}
            >
              {dark ? (
                <ion-icon className="moon" name="sunny-outline"></ion-icon>
              ) : (
                <ion-icon className="sun" name="moon-outline"></ion-icon>
              )}
            </button>

            {/* <button className={`nav-btn nav-menu-btn ${dark && "active"}`}>
              <ion-icon name="book-outline"></ion-icon>
            </button> */}
            <button
              className={`nav-btn nav-menu-btn ${dark && "active"}`}
              onClick={() => setNav(true)}
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>

          <div className={`mobile-nav ${nav && "active"}`}>
            <div className="mobile-menu">
              <ul className="menu-mobile-items">
                <li>
                  <a href="#About">
                    <ion-icon
                      className="icon-menu-mobile"
                      name="person-outline"
                    ></ion-icon>
                    <span className="margin-left-mobile">About</span>
                    
                  </a>
                </li>
                <li>
                  <a href="#Services">
                    <ion-icon
                      className="icon-menu-mobile"
                      name="desktop-outline"
                    ></ion-icon>
                    
                    <span className="margin-left-mobile">Services</span>
                  </a>
                </li>
                <li>
                  <a href="#Portfolio">
                    <ion-icon
                      className="icon-menu-mobile"
                      name="list-outline"
                    ></ion-icon>
                      <span className="margin-left-mobile">Projects</span>
                    
                  </a>
                </li>
                <li>
                  <a href="#Contact">
                    <ion-icon
                      className="icon-menu-mobile"
                      name="mail-outline"
                    ></ion-icon>
                <span className="margin-left-mobile">Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={`empty-space ${nav && "active"}`}
              onClick={() => setNav(false)}
            ></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
