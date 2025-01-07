import React, { useState, useEffect, useContext } from 'react';
import './About.css';
import NavBarVisibility from '../Nav/NavBarVisibility';

const About = () => {
  const [modalType, setModalType] = useState(null);
  const { setNavBarVisibility } = useContext(NavBarVisibility);

  const openModal = (type) => {
    setNavBarVisibility(false);
    setModalType(type);
  };

  const closeModal = () => {
    setNavBarVisibility(true);
    setModalType(null);
  };

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
          <p><strong>Sports:</strong> I love running, playing basketball, pickleball, ultimate frisbee and volleyball. I even joined a couple adult leagues for Basketball and Ultimate Frisbee to stay active.</p>
          <p><strong>Video Production:</strong> I try to work on a video project every couple of months where I film scenes and edit them. This year, I have a goal to create a documentary on runners.</p>
          <p><strong>Dream Travel Destinations:</strong> It's been a dream to do a solo trip around China, Singapore, or Switzerland</p>
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
