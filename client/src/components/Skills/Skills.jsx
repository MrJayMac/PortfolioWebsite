import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faPython, faHtml5, faCss3Alt, faNodeJs, faGit, faDocker, faPython as faDjango } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faJenkins } from '@fortawesome/free-brands-svg-icons';
import { BiLogoPostgresql, BiLogoFlask, BiLogoTypescript, BiLogoVisualStudio } from "react-icons/bi";
import { SiArduino } from "react-icons/si";
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
              <div className="skills__details-inner">
                <FontAwesomeIcon icon={faJs} className="icon" style={{ color: '#F7DF1E' }} />
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
                <FontAwesomeIcon icon={faPython} className="icon" style={{ color: '#306998' }} />
                <h4>Python</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
                <BiLogoTypescript className='icon' style={{color: '#3178C6'}}/>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
                <BiLogoVisualStudio className='icon' style={{color: '#9458D3'}}/>
                <h4>VB.NET</h4>
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
              <div className="skills__details-inner">
                <FontAwesomeIcon icon={faReact} className="icon" style={{ color: '#61DAFB' }} />
                <h4>React</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
                <FontAwesomeIcon icon={faHtml5} className="icon" style={{ color: '#E34F26' }} />
                <h4>HTML</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
                <FontAwesomeIcon icon={faCss3Alt} className="icon" style={{ color: '#1572B6' }} />
                <h4>CSS</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
                <FontAwesomeIcon icon={faBootstrap} className="icon" style={{ color: '#7E11A5' }} />
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
              <div className="skills__details-inner">
                <FontAwesomeIcon icon={faNodeJs} className="icon" style={{ color: '#8CC84B' }} />
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
                <FontAwesomeIcon icon={faDjango} className="icon" style={{ color: '#092E20' }} />
                <h4>Django</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
              <BiLogoPostgresql className="icon" style={{color: '#336791'}}/>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
              <BiLogoFlask className="icon"/>
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
              <div className="skills__details-inner">
                <FontAwesomeIcon icon={faGit} className="icon" style={{ color: '#F1502F' }} />
                <h4>Git</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
                <FontAwesomeIcon icon={faDocker} className="icon" style={{ color: '#0DB7ED' }} />
                <h4>Docker</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
                <SiArduino className='icon' style={{color: '#00979D'}}/>
                <h4>Arduino</h4>
              </div>
            </article>
            <article className='skills__details'>
              <div className="skills__details-inner">
                <FontAwesomeIcon icon={faJenkins} className="icon"/>
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
