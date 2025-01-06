import React from 'react';
import './Nav.css';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt, FaBrain } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Nav = () => {
  const navLinks = [
    { href: '#home', label: <AiFillHome />, title: 'Home' },
    { href: '#about', label: <FaUserAlt />, title: 'About' },
    { href: '#skills', label: <FaBrain />, title: 'Skills' },
    { href: '#projects', label: <AiOutlineFundProjectionScreen />, title: 'Projects' },
    { href: '#contact', label: <MdEmail />, title: 'Contact' },
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
