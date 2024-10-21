import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero-section"
      id="hero"
    >
      <motion.h1 initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Hi, I'm Ankit Jha
      </motion.h1>
      <motion.p initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Full Stack Developer
      </motion.p>
    </motion.div>
  );
};

export default HeroSection;
