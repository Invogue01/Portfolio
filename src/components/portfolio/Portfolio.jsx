import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/web1.png'
import IMG2 from '../../assets/web2.gif'
import IMG3 from '../../assets/web3.png'
import IMG4 from '../../assets/web4.png'



const data =[
  {
    id:1,
    image:IMG1,
    title: 'DataBase - Social Platform API',
    github:'https://github.com/Invogue01/social-platform-api',
    demo:'https://drive.google.com/file/d/1O1YqLz8xyG5KzCSOsCTZQiyb-j99raV4/view'
  },
  {
    id:2,
    image:IMG2,
    title: 'DataBase - Note Taking App',
    github:'https://github.com/Invogue01/note-taking-app',
    demo:'https://github.com/Invogue01/note-taking-app'
  },
  {
    id:3,
    image:IMG3,
    title: 'In Terminal easy ReadMe file generator',
    github:'https://github.com/Invogue01/easyREADME-generator',
    demo:'https://github.com/Invogue01/easyREADME-generator'
  },
  {
    id:4,
    image:IMG4,
    title: 'Check the Weather API',
    github:'https://github.com/Invogue01/weather-check-api',
    demo:'https://invogue01.github.io/weather-check-api/'
  },
 
]

const Portfolio = () => {
  return (
  <section id='portfolio'>
<h5 >My previous Projects</h5>
<h2 >Portfolio</h2>

<div className="container portfolio__container">
{
  data.map(
    ({id, image, title, github, demo})=>{
      return (
        <article key={id} className='portfolio__item'>
  <div className="portfolio__item-image">
   <img src={image} alt={title}/>
  </div>
  <h3>{title}</h3>
  <div className="portfolio__item-cta">
  <a href={github} className='btn' target='_blank'>Github</a>
  <a href={demo} className='btn btn-primary'target='_blank'>Demo</a>
  </div>
</article>
      )
    }
  )
}


</div>

  </section>
)};

export default Portfolio;
