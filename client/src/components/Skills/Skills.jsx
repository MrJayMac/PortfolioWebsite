import React from 'react';
import { FaJs, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGit, FaDocker } from 'react-icons/fa';
import { DiNodejs, DiDjango, DiPostgresql } from 'react-icons/di';
import { IoLogoGithub, IoLogoWindows } from 'react-icons/io';
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
              <FaJs size={30} />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='skills__details'>
              <FaPython size={30} />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='skills__details'>
              <FaReact size={30} />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className='skills__details'>
              <IoLogoWindows size={30} />
              <div>
                <h4>Visual Basic (.NET)</h4>
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
              <FaReact size={30} />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='skills__details'>
              <FaHtml5 size={30} />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='skills__details'>
              <FaCss3Alt size={30} />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='skills__details'>
              <FaGit size={30} />
              <div>
                <h4>Git</h4>
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
              <DiNodejs size={30} />
              <div>
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className='skills__details'>
              <DiDjango size={30} />
              <div>
                <h4>Django</h4>
              </div>
            </article>
            <article className='skills__details'>
              <DiPostgresql size={30} />
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
              <FaDocker size={30} />
              <div>
                <h4>Docker</h4>
              </div>
            </article>
            <article className='skills__details'>
              <IoLogoGithub size={30} />
              <div>
                <h4>GitHub</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* End of Others */}

    </section>
  );
}

export default Skills;
