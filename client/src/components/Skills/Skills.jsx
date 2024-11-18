import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Languages</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>Terraform</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF Languages */}

        <div className="skills__backend">
          <h3>Frameworks & Libraries</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>Flask</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>ReactJS / React Native</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>GraphQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;