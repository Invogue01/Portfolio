import React from "react";
import "./about.css";
import ME from '../../assets/me-about1.jpeg'
import {SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGimp}from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {FiGithub} from 'react-icons/fi'
import {FiGitlab} from 'react-icons/fi'
import {SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint} from 'react-icons/si'
import {BiLogoTailwindCss} from 'react-icons/bi'



const About = () => {
  return <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt='Author Image'></img>
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
           
            <h5>Skills</h5>
            <SiMongodb className="skills__icon"/>
            <GrReactjs className="skills__icon"/>
            <SiExpress className="skills__icon"/>
            <SiNodedotjs className="skills__icon"/>
            <SiMysql className='skills__icon'/>
            <FiGithub className='skills__icon'/>
            <BiLogoTailwindCss className='skills__icon'/>
            <small></small>
          </article>
          <article className="about__card">
            
            <h5>Version Control</h5>
            <FiGithub className='version__icon'/>
            <FiGitlab className='version__icon'/>
            
            <small></small>
          </article>
          <article className="about__card">
           
            <h5>Transferable Skills</h5>
            <SiMicrosoftword className='skills__icon'/>
            <SiMicrosoftexcel className='skills__icon'/>
            <SiMicrosoftpowerpoint className='skills__icon'/>
            <SiGimp className='skills__icon'/>

           
          </article>
        </div>
        <p>
        Collaborative and results-oriented Full-Stack Web Developer with a background in Business Management. Graduated with a Boot Camp Certificate from the University of Birmingham, which focused on gaining technical programming skills in JavaScript, SQL, React, MongoDB, Node, and Express. With a Business Management Degree (Upper 2nd class BA) from University College of Food Birmingham, passionate about utilising earned education and skills to build intuitive user experiences on the web. Experience includes developing strategies to support process improvements, conducting code reviews, and working closely with cross-functional teams to ensure high-quality deliverables. Career aspirations include expanding technical expertise and contributing to innovative web solutions that drive business results.
        </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>

    </div>
  </section>;
};

export default About;
