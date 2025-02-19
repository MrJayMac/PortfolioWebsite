import React from 'react';
import './Projects.css';

import movieRecommenderImage from '../Photos/Movie-Recommender.png'; 
import violation from '../Photos/violation.jpg'
import todo from '../Photos/Todo.png';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'Traffic Violation Detection',
      github: 'https://github.com/damiensmith1/CAPSTONE',
      description: 'This project leverages advanced machine learning technologies, including YOLOv8 and ResNet18, to detect traffic sign violations and promptly alert drivers, enabling proactive safety measures.',
      technologies: ['Python', 'YOLOv8', 'ResNet18'],
      image: violation, 
    },
    {
      id: 2,
      title: 'Todo App',
      github: 'https://github.com/MrJayMac/TodoApp',
      description: 'This project is a dynamic and user-friendly to-do app designed to streamline task management.',
      technologies: ['React', 'Express', 'Node', 'PostgreSQL'],
      image: todo, 
    },
    {
      id: 3,
      title: "Movie Recommender",
      github: "https://github.com/MrJayMac/movie-recommend",
      description: "A personalized movie recommendation system that provides tailored suggestions based on the user's individual watchlist",
      technologies: ['React', 'Express', 'NodeJS', 'PostgreSQL', 'TMDB API'],
      image: movieRecommenderImage
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container projects__container">
        {projectData.map(({ id, title, github, description, technologies, image }) => (
          <article key={id} className="project__item">
            <div className="project__item-image">
              <img src={image} alt={`${title}-image`} />
            </div>
            <h3 className='project__title'>{title}</h3>
            <p>{description}</p>
            <div className="project__skills">
              <h4>Technology Used:</h4>
              <ul>
                {technologies.map((technologies, index) => (
                  <li key={index}>{technologies}</li>
                ))}
              </ul>
            </div>
            <div className="project__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
