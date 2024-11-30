import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null); 

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalType) {
      document.addEventListener('mousedown', handleClickOutside);  
    } else {
      document.removeEventListener('mousedown', handleClickOutside);  
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); 
    };
  }, [modalType]);

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
          <p><strong>School:</strong> Queen's University</p>
          <p><strong>Degree:</strong> Bachelors of Applied Science - Computer Engineering</p>
          <p><strong>GPA:</strong> 3.7</p>
          <p><strong>Relevant Courses:</strong> Object-Oriented Programming, Data Structures, Algorithms, Operating Systems, Fundamentals of Software Engineering, Engineering Design Principles</p>
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
    <section id="about">
      <h2>About Me</h2>
      <div className="cards-container">
        {['experience', 'background', 'interests'].map((type) => (
          <div key={type} className="card" onClick={() => openModal(type)}>
            <h5>{modalContent[type].title}</h5>
            <p>Click to learn more about my {type}.</p>
          </div>
        ))}
      </div>

      {modalType && (
        <div className={`modal ${modalType ? 'open' : ''}`}> 
          <div className="modal-content">
            <div className="left">
              <p>IMAGE HERE</p>
            </div>
            <div className="right">
              <h3>{modalContent[modalType].title}</h3>
              {modalContent[modalType].content}
              <button className="modal-close" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
