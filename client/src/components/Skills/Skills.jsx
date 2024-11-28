import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faPython, faHtml5, faCss3Alt, faNodeJs, faGit, faDocker, faPython as faDjango } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <h2>My Skills</h2>

      {/* Beginning of Languages */}
      <div className="container skills__container">
        <div className="skills">
          <h3>Languages</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <div>
                <FontAwesomeIcon icon={faJs} className="icon" style={{ color: '#F7DF1E' }} />
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <FontAwesomeIcon icon={faPython} className="icon" style={{ color: '#306998' }} />
                <h4>Python</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>Visual Basics (.NET)</h4>
              </div>
            </article>
          </div>
        </div>
        {/* End of Languages */}

        {/* Beginning of Frontend */}
        <div className="skills">
          <h3>Frontend</h3>
          <div className="skills__content">
          <article className='skills__details'>
              <div>
                <FontAwesomeIcon icon={faReact} className="icon" style={{ color: '#61DAFB' }} />
                <h4>React</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <FontAwesomeIcon icon={faHtml5} className="icon" style={{ color: '#E34F26' }} />
                <h4>HTML</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <FontAwesomeIcon icon={faCss3Alt} className="icon" style={{ color: '#1572B6' }} />
                <h4>CSS</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}

        {/* Beginning of Backend */}
        <div className="skills">
          <h3>Backend and Databases</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <div>
                <FontAwesomeIcon icon={faNodeJs} className="icon" style={{ color: '#8CC84B' }} />
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <FontAwesomeIcon icon={faDjango} className="icon" style={{ color: '#092E20' }} />
                <h4>Django</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>Flask</h4>
              </div>
            </article>
          </div>
        </div>
        {/* End of Backend */}

        {/* Beginning of Others */}
        <div className="skills">
          <h3>Others</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <div>
                <FontAwesomeIcon icon={faGit} className="icon" style={{ color: '#F1502F' }} />
                <h4>Git</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <FontAwesomeIcon icon={faDocker} className="icon" style={{ color: '#0DB7ED' }} />
                <h4>Docker</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>Arduino</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div>
                <h4>Jenkins</h4>
              </div>
            </article>
          </div>
        </div>
        {/* End of Others */}
      </div>
    </section>
  );
}

export default Skills;
