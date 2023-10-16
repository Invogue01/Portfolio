import React from "react";
import CV from "../../assets/A.Lea-Trengrouse131023.pdf";

const Action = () => {
  return (
    <div className="action">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default Action;
