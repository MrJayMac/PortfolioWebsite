import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  const modalContent = {
    experience: {
      title: 'Experience',
      content: (
        <>
          <p><strong>Telus - Software Engineer Intern:</strong> Developed tools for network monitoring...</p>
          <p><strong>Mitsubishi - Software Developer Intern:</strong> Developed automation systems...</p>
        </>
      ),
    },
    background: {
      title: 'Background',
      content: (
        <>
          <p><strong>Bachelor's of Computer Engineering, Queen's University</strong></p>
          <p><strong>Relevant Courses:</strong> Object-Oriented Programming, Data Structures, Algorithms, Operating Systems, etc.</p>
        </>
      ),
    },
    interests: {
      title: 'Interests',
      content: (
        <>
          <p><strong>Hobbies:</strong> Basketball, Ultimate Frisbee, Running, Video Editing, Video Games</p>
          <p><strong>Dream Travel Destinations:</strong> China, Singapore, Switzerland</p>
        </>
      ),
    },
  };

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="cards-container">
        {['experience', 'background', 'interests'].map((type) => (
          <div key={type} className="card" onClick={() => openModal(type)}>
            <h5>{modalContent[type].title}</h5>
            <p>Click to learn more about my {type}.</p>
          </div>
        ))}
      </div>

      <div className={`modal ${modalType ? 'open' : ''}`}>
        <div className="modal-content">
          {modalType && (
            <>
              <h3>{modalContent[modalType].title}</h3>
              {modalContent[modalType].content}
              <button className="modal-close" onClick={closeModal}>
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
