import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/web1.png'
import IMG2 from '../../assets/web2.png'
import IMG3 from '../../assets/web3.gif'
import IMG4 from '../../assets/web4.png'
import IMG5 from '../../assets/web5.png'
import IMG6 from '../../assets/web6.png'


const data =[
  {
    id:1,
    image:IMG1,
    title: 'Coding Jobs Website'
    github:'https://github.com/Invogue01/codeBusters-gig',
    demo:'https://invogue01.github.io/codeBusters-gig/'
  }
]

const Portfolio = () => {
  return <section id='portfolio'>
<h5>My previous Projects</h5>
<h2>Portfolio</h2>

<div className="container portfolio__container">
<article className='portfolio__item'>
  <div className="portfolio__item-image">
   <img src={IMG1} alt="codeBuster landing page" />
  </div>
  <h3>Title</h3>
  <div className="portfolio__item-cta">
  <a href="https://github.com" className='btn' target='_blank'>Github</a>
  <a href="https://github.com" className='btn btn-primary'target='_blank'>Demo</a>
  </div>
</article>


</div>

  </section>;
};

export default Portfolio;
