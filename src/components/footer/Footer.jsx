import React from "react";
import "./footer.css";
import logo from "../../assets/logo-no-background.png"
import {FaFacebook} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"

const Footer = () => {
  return <footer>
<a href="#" className="footer__logo">
<img src={logo} alt='Author Logo'></img>
</a>
<ul className="permalinks">
<il><a href="#">Home</a></il>
<il><a href="#about">About</a></il>
<il><a href="#portfolio">Portfolio</a></il>
<il><a href="#contact">Contact</a></il>
</ul>

<div className="footer__socials">
<a href="https://www.facebook.com/andreaimac">
  <FaFacebook className="socials__icon"/>
</a>
<a href="https://www.instagram.com/invogue2017/">
  <FaInstagramSquare className="socials__icon"/>
</a>
</div>
<div className="footer__copyright">
  <small>&copy; Andrea Lea-Trengrouse Portfolio. All rights reserved.</small>
</div>
  </footer>
};

export default Footer;
