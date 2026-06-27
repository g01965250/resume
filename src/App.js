import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import About from './component/About';
import Experience from './component/Experience';
import Skill from './component/Skill';
import Project from './component/Project';
import Contact from './component/Contact';

function App() {
  const homeAnchor = useRef(null);
  const aboutAnchor = useRef(null);
  const experienceAnchor = useRef(null);
  const skillAnchor = useRef(null);
  const projectAnchor = useRef(null);
  const contactAnchor = useRef(null);
  const [active, setActive] = useState(0);
  const [collapse, setCollapse] = useState(false);

  const handleScroll = function () {
    const { scrollY } = window;
    if (scrollY >= 0 && scrollY <= 949) {
      setActive(0);
    } else if (scrollY >= 950 && scrollY <= 1771) {
      setActive(1);
    } else if (scrollY >= 1772 && scrollY <= 3088) {
      setActive(2);
    } else if (scrollY >= 3089 && scrollY <= 4770) {
      setActive(3);
    } else if (scrollY >= 4771 && scrollY <= 5990) {
      setActive(4);
    } else if (scrollY >= 5991) {
      setActive(5);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div className="App">
      <main className="main">
        <Sidebar
          homeAnchor={homeAnchor}
          aboutAnchor={aboutAnchor}
          experienceAnchor={experienceAnchor}
          skillAnchor={skillAnchor}
          projectAnchor={projectAnchor}
          contactAnchor={contactAnchor}
          active={active}
          collapse={collapse}
          setCollapse={setCollapse}
        />
        <div className={`content-wrapper ${collapse ? 'collapse' : ' '} `}>
          <Home
            homeAnchor={homeAnchor}
            aboutAnchor={aboutAnchor?.current?.offsetTop}
          />
          <About
            aboutAnchor={aboutAnchor}
            experienceAnchor={experienceAnchor?.current?.offsetTop}
          />
          <Experience
            experienceAnchor={experienceAnchor}
            skillAnchor={skillAnchor?.current?.offsetTop}
          />
          <Skill
            skillAnchor={skillAnchor}
            projectAnchor={projectAnchor?.current?.offsetTop}
          />
          <Project
            projectAnchor={projectAnchor}
            contactAnchor={contactAnchor?.current?.offsetTop}
          />
          <Contact contactAnchor={contactAnchor} />
        </div>
      </main>
    </div>
  );
}

export default App;
