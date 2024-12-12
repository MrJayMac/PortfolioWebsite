import React from 'react';
import './Home.css'
import P2 from '../Photos/P2.png'

const Home = () => {
  return (
    <section id="introduction">
      <div className="container intro__container">
        <div className="intro__image">
          <img src={P2} alt="Introduction Image" />
        </div>
        <div className="intro__content">
          <h1>Hi, I'm Joshua Mac</h1>
          <p>
          I am a Computer Engineering graduate from Queen’s University, experienced in full-stack development, database systems, and machine learning. 
          <div>
          Here, you’ll find insights into my projects, experiences, and the skills that drive my passion for creating impactful solutions. I’m always excited to connect, collaborate, and explore new opportunities. 
            </div>
          </p>
          <a href="#about" className="btn btn-primary">Learn More About Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
