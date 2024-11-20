import React, { useState } from 'react';
import './About.css';
import Modal from 'react-modal';

const About = () => {
  const [experience, setExperience] = useState(false);
  const [background, setBackground] = useState(false);
  const [interest, setInterest] = useState(false);

  const openExperience = () => setExperience(true);
  const closeExperience = () => setExperience(false);

  const openBackground = () => setBackground(true);
  const closeBackground = () => setBackground(false);

  const openInterest = () => setInterest(true);
  const closeInterest = () => setInterest(false);

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="cards-container">
        {/* Experience Card */}
        <div className="card" onClick={openExperience}>
          <h5>Experience</h5>
          <p>Click to learn about my professional journey.</p>
        </div>
        
        {/* Background Card */}
        <div className="card" onClick={openBackground}>
          <h5>Background</h5>
          <p>Click to learn about my educational background.</p>
        </div>

        {/* Interests Card */}
        <div className="card" onClick={openInterest}>
          <h5>Interests</h5>
          <p>Click to discover my personal interests.</p>
        </div>
      </div>

      {/* Modals for each section */}
      <Modal
        isOpen={experience}
        onRequestClose={closeExperience}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h3>Experience</h3>
        <p><strong>Telus - Software Engineer Intern:</strong> Developed tools for network monitoring...</p>
        <p><strong>Mitsubishi - Software Developer Intern:</strong> Developed automation systems...</p>
        <button className="modal-close" onClick={closeExperience}>Close</button>
      </Modal>

      <Modal
        isOpen={background}
        onRequestClose={closeBackground}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h3>Background</h3>
        <p><strong>Bachelor's of Computer Engineering, Queen's University</strong></p>
        <p><strong>Relevant Courses:</strong> Object-Oriented Programming, Data Structures, Algorithms, Operating Systems, etc.</p>
        <button className="modal-close" onClick={closeBackground}>Close</button>
      </Modal>

      <Modal
        isOpen={interest}
        onRequestClose={closeInterest}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h3>Interests</h3>
        <p><strong>Hobbies:</strong> Basketball, Ultimate Frisbee, Running, Video Editing, Video Games</p>
        <p><strong>Dream Travel Destinations:</strong> China, Singapore, Switzerland</p>
        <button className="modal-close" onClick={closeInterest}>Close</button>
      </Modal>
    </div>
  );
};

export default About;
