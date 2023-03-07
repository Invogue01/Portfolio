import React from "react";
import CV from "../../assets/AndreaLT-CV.docx.pdf";

const Action = () => {
  return (
    <div className="action">
      <a href={CV} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default Action;
