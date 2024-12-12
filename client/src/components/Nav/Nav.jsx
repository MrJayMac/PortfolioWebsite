import React from 'react';
import './Nav.css';
import { FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Nav = () => {

  const navLinks = [
    { href: '#about', label: <FaUser />, title: 'About' },
    { href: '#skills', label: <FaTools />, title: 'Skills' },
    { href: '#projects', label: <FaProjectDiagram />, title: 'Projects' },
    { href: '#contact', label: <FaEnvelope />, title: 'Contact' },
  ];

  return (
    <nav>
      {navLinks.map(({ href, label, title }) => (
        <a
          key={href}
          href={href}
          title={title}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
