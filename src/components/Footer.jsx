import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social mt-20">
          <a
            className="social-github social-icon"
            href="https://github.com/sadeqmozaffari"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            className="social-twitter social-icon"
            href="https://twitter.com/SadeqMozaffari"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            className="social-linkedin social-icon"
            href="https://www.linkedin.com/in/sadeqmozaffari/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
