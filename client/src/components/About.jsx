import React, { useState } from 'react';
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
      <h1>Hello, I'm Joshua</h1>

      <div className="button-group">
        {/* Experience Modal */}
        <button className="modal-button" onClick={openExperience}>Experience</button>
        <Modal
          isOpen={experience}
          onRequestClose={closeExperience}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <h3>Experience</h3>
          <p><strong>Telus - Software Engineer Intern:</strong> Developed tools for network monitoring...</p>
          <p><strong>Mitsubishi - Software Developer Intern:</strong> Developed automation systems...</p>
          <p><strong>Math Tutor:</strong> Tutored students in various math topics...</p>
          <button className="modal-close" onClick={closeExperience}>Close</button>
        </Modal>
      </div>

      <div className="button-group">
        {/* Background Modal */}
        <button className="modal-button" onClick={openBackground}>Background</button>
        <Modal
          isOpen={background}
          onRequestClose={closeBackground}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <h3>Background</h3>
          <p><strong>Bachelor's of Computer Engineering, Queen's University</strong></p>
          <p><strong>Relevant Courses:</strong> Object-Oriented Programming, Data Structures, Fundamentals of Software Development, Database Management, Algorithms, Operating Systems, Computer Vision, Engineering Design and Practice</p>
          <button className="modal-close" onClick={closeBackground}>Close</button>
        </Modal>
      </div>

      <div className="button-group">
        {/* Interests Modal */}
        <button className="modal-button" onClick={openInterest}>Interests</button>
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
    </div>
  );
};

export default About;
