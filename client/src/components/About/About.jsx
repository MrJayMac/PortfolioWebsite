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
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = ''; // Enable scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = ''; // Cleanup
    };
  }, [modalType]);

  const modalContent = {
    experience: {
      title: 'Experience',
      content: (
        <>
          <p><strong>Telus - Software Engineer Intern:</strong>
            <div>
              Developed Oasis, a ReactJS and VB.NET-based tool deployed on AWS, automating processes by integrating SAP and other systems.
              Utilized Google Maps API to create real-time wireline and network tracking tools, boosting operational insights and client monitoring.
            </div>
          </p>
          <p><strong>Mitsubishi - Software Developer Intern:</strong>
            <div>
              Developed the Component Tracking Tool using React, Flask, and SQL, with secure operator authentication.
              Enhanced application usability by improving Azure pipeline workflows and building responsive UIs in collaboration with developers and UI/UX designers.
            </div>
          </p>
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
