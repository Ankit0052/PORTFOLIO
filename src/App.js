import React from 'react';
import Navbar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import About from './Component/About';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import './App.css';
import Skills from './Component/Skills';
import Experience from './Component/Experience'
import Education from './Component/Education'
import Footer from './Component/Footer'



function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills/>
      <Experience/>
      <Projects />
      <Education/>

      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
