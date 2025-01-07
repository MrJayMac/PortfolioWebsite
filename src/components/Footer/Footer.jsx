import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Joshua Mac</a>

      <ul className="permalinks">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/MrJayMac" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/joshua-mac-280556165/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
    </footer>
  );
};

export default Footer;
