import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiIonos } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/Invogue01" target="_blank">
        <BsGithub />
      </a>
      <a href="https://aleatrengrouse.co.uk" target="_blank">
        <SiIonos />
      </a>
    </div>
  );
};

export default HeaderSocials;
