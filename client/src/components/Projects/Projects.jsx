import React from 'react';
import './Projects.css';


const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'Weather Application',
      github: 'https://github.com/MrJayMac/WeatherApp',
      demo: 'https://youtu.be/MRzrrbVtu54',
      description: 'A weather forecasting app built with ReactJS, utilizing OpenWeatherMap API for real-time updates.',
    },
    {
      id: 2,
      title: 'Todo App',
      github: 'https://github.com/MrJayMac/TodoApp',
      demo: '',
      description: 'A feature-rich Todo app using React, Express, Node, and PostgreSQL for full-stack functionality.',
    },
    {
      id: 2,
      title: 'Movie Recommender',
      github: 'https://github.com/MrJayMac/movie-recommend',
      demo: '',
      description: 'A dynamic movie recommendation system built with React, Express, NodeJS, and PostgreSQL. Leverages the TMDB API to provide personalized movie suggestions based on user preferences and watched history.'
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container projects__container">
        {projectData.map(({ id, title, image, github, demo, description }) => (
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
              {demo && (
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;