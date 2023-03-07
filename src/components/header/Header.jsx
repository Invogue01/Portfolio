import React from "react";
import "./header.css";
import Action from "./Action";
import MeDisney from "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Andrea Lea-Trengrouse</h1>
        <h5 className="text-light">Full-stack Web Developer</h5>
        <Action />
        <HeaderSocials />
        <div className="me">
          <img src={MeDisney} alt="website owner profile" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
