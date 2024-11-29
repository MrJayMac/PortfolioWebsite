import React from 'react';
import './Projects.css';

import movieRecommenderImage from '../Photos/Movie-Recommender.png'; 

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'Weather Application',
      github: 'https://github.com/MrJayMac/WeatherApp',
      description: 'A weather forecasting app built with ReactJS, utilizing OpenWeatherMap API for real-time updates.',
      image: movieRecommenderImage, 
    },
    {
      id: 2,
      title: 'Todo App',
      github: 'https://github.com/MrJayMac/TodoApp',
      description: 'A feature-rich Todo app using React, Express, Node, and PostgreSQL for full-stack functionality.',
      image: movieRecommenderImage, 
    },
    {
      id: 3,
      title: 'Movie Recommender',
      github: 'https://github.com/MrJayMac/movie-recommend',
      description: 'A dynamic movie recommendation system built with React, Express, NodeJS, and PostgreSQL. Leverages the TMDB API to provide personalized movie suggestions based on user preferences and watched history.',
      image: movieRecommenderImage,  
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container projects__container">
        {projectData.map(({ id, title, github, description, image }) => (
          <article key={id} className="project__item">
            <div className="project__item-image">
              <img src={image} alt={`${title}-image`} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
