import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Gwalior Basket',
    description: 'A full-stack e-commerce store with features like product listings, cart, and payment gateway integration.',
    technologies: 'React.js, HTML, CSS, JavaScript, Node.js, MySQL',
    link: 'https://gwaliorbasket.com',
    id: 1,
  },
  {
    title: 'HumHai App',
    description: 'A job management mobile application using React Native and React Native Paper.',
    technologies: 'React Native, React Native Paper',
    link: 'https://humhai.in/',
    id: 2,
  },
  {
    title: 'Amosta Solutions',
    description: 'Corporate website designed to showcase Amosta Solutions services.',
    technologies: 'React.js, HTML, CSS, JavaScript',
    link: 'https://www.amosta.com/',
    id: 3,
  },
  {
    title: 'Akansha Aardhaya Foundation',
    description: 'A non-profit organization website created to spread awareness about their activities.',
    technologies: 'React.js, HTML, CSS, JavaScript',
    link: 'https://www.akankshaaradhyafoundation.com/',
    id: 4,
  },
  {
    title: 'Arun Prabhu',
    description: 'A personal portfolio site for the professional Arun Prabhu.',
    technologies: 'React.js, HTML, CSS, JavaScript',
    link: 'https://arunprabhu.com/',
    id: 5,
  },
  {
    title: 'Sartrac Global',
    description: 'A business website for Sartrac Global.',
    technologies: 'React.js, HTML, CSS, JavaScript',
    link: 'https://sartracglobal.com/',
    id: 6,
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack"><strong>Technologies:</strong> {project.technologies}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Visit Site
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
