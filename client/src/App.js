import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NavBarVisibility from './components/Nav/NavBarVisibility';

const App = () => {
  const [isNavBarVisible, setNavBarVisibility] = useState(true);

  return (
    <NavBarVisibility.Provider value={{ isNavBarVisible, setNavBarVisibility }}>
      {isNavBarVisible && <Nav />}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </NavBarVisibility.Provider>
  );
};

export default App;
