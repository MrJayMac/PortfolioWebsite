import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav>
      {navLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? 'active' : ''}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
