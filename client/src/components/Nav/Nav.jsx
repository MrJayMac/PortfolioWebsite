import React from 'react';
import './Nav.css';

const Nav = () => {
  const navLinks = [
    { href: '#', label: 'About' },
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
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
