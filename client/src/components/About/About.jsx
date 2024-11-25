import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);  // Set the modal type to open
  const closeModal = () => setModalType(null);  // Close the modal

  // Close modal if the user clicks outside the modal content
  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  // Listen for clicks outside the modal when modal is open
  useEffect(() => {
    if (modalType) {
      document.addEventListener('mousedown', handleClickOutside);  // Listen for click outside modal
    } else {
      document.removeEventListener('mousedown', handleClickOutside);  // Clean up the event listener
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);  // Clean up when component unmounts
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

      {/* Modal to display content and image */}
      {modalType && (
        <div className={`modal ${modalType ? 'open' : ''}`}> {/* Add 'open' class when modalType is set */}
          <div className="modal-content">
            <div className="left">
              <p>IMAGE HERE</p> {/* Placeholder for the image */}
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
    </div>
  );
};

export default About;
