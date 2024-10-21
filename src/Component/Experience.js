import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experiences = [
    {
        company: 'Numeric Infosystem Pvt Ltd',
        position: 'Full Stack Developer (Internship)',
        duration: '6 Months',
        description: 'Worked as a Full Stack Developer intern. Responsible for building web applications using React.js, Node.js, and MongoDB. Gained hands-on experience in front-end and back-end development.',
    },
    {
        company: 'Amosta Solution Pvt Ltd',
        position: 'Front-End Developer',
        duration: '1.4 Years',
        description: 'Worked as a Front-End Developer focusing on creating responsive web applications using React.js, JavaScript, and CSS3. Led UI development for multiple projects and collaborated with backend teams to implement APIs.',
    },
];


const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <motion.section
            className="experience-section"
            id="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>Experience</h2>
            <div className="experience-grid">
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        className="experience-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                        <h3>{experience.position}</h3>
                        <h4>{experience.company}</h4>
                        <p className="duration">{experience.duration}</p>
                        <p className="description">{experience.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Experience;
