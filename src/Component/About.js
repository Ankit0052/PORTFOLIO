import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2>About Me</h2>
      <p>
        I’m a passionate full-stack developer with expertise in creating modern, scalable web applications.
        With a keen eye for detail and a love for clean code, I build digital experiences that drive engagement.
      </p>
    </motion.section>
  );
};

export default About;
