import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaAws, FaGooglePlay, FaDownload } from 'react-icons/fa'; 
import { SiMysql, SiMui } from 'react-icons/si';
import { motion } from 'framer-motion';
import resume from '../Assets/Ankit Kumar jha Resume.pdf';

const technologies = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
  { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
  { name: 'React Native', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Material-UI', icon: <SiMui />, color: '#007FFF' },
  { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
  { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
  { name: 'Play Store Console', icon: <FaGooglePlay />, color: '#34A853' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>My Skills & Technologies</h2>
      <div className="skills-grid">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="skill-icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <h3>{tech.name}</h3>
          </motion.div>
        ))}
      </div>
      <a href={resume} download className="resume-button">
        <FaDownload style={{ marginRight: '8px' }} />
        Resume
      </a> 
    </section>
  );
};

export default Skills;
