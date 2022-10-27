import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import About from './component/About';
import Experience from './component/Experience';
import Skill from './component/Sikll';
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

  const handleScroll = function () {
    const { scrollY } = window;
    if (scrollY >= 0 && scrollY <= 1055) {
      setActive(0);
    } else if (scrollY >= 1056 && scrollY <= 2099) {
      setActive(1);
    } else if (scrollY >= 2100 && scrollY <= 3410) {
      setActive(2);
    } else if (scrollY >= 3411 && scrollY <= 5181) {
      setActive(3);
    } else if (scrollY >= 5182 && scrollY <= 7039) {
      setActive(4);
    } else if (scrollY >= 7040) {
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
        />
        <div className="content-wrapper">
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
          <Contact
            contactAnchor={contactAnchor}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
