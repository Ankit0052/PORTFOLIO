import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const educationData = [
  {
    degree: 'B.Sc. Mathematics',
    institution: 'Jiwaji University',
    year: 'Graduated in 2019',
    description: 'Completed a Bachelor of Science degree in Mathematics with a focus on problem-solving, analytical skills, and mathematical modeling.',
  },
  {
    degree: 'Full Stack Developer (Internship)',
    institution: 'Numeric Infosystem Pvt Ltd',
    year: 'Completed in 2022',
    description: 'Gained hands-on experience in both front-end and back-end development through a 6-month internship. Worked on building web applications using React.js, Node.js, React Native, and MongoDB.',
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <motion.section
      className="education-section"
      id="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h2>Education</h2>
      <div className="education-grid">
        {educationData.map((education, index) => (
          <motion.div
            key={index}
            className="education-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} 
          >
            <h3>{education.degree}</h3>
            <h4>{education.institution}</h4>
            <p className="year">{education.year}</p>
            <p className="description">{education.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
