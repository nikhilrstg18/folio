import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from '../context/context';
import {
  aboutData,
  contactData,
  educationData,
  footerData,
  heroData,
  projectsData,
  skillsData,
} from '../mock/data';
import About from './About/About';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [skills, setSkills] = useState({});
  const [education, setEducation] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setSkills([...skillsData]);
    setEducation([...educationData]);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, skills, education, projects, contact, footer }}>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
