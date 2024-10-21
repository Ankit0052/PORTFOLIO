import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img from '../Assets/ankit.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar`}
    >
      <div className="nav-container">
      <div className="logo">
          <img src={img} alt="Logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#hero">Home</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#about">About</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#skills">Skills</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#experience">Experience</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#projects">Projects</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#education">Education</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#contact">Contact</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="../Assets/Ankit Kumar jha Resume.pdf" download>Resume</a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
