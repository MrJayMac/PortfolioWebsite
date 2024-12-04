import React, { useState, useEffect } from 'react';
import './Nav.css';
import { FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { href: '#about', label: <FaUser />, title: 'About' },
    { href: '#skills', label: <FaTools />, title: 'Skills' },
    { href: '#projects', label: <FaProjectDiagram />, title: 'Projects' },
    { href: '#contact', label: <FaEnvelope />, title: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      {navLinks.map(({ href, label, title }) => (
        <a
          key={href}
          href={href}
          title={title}
          className={activeSection === href.slice(1) ? 'active' : ''}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
