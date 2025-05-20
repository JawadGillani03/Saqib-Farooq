import React from 'react';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from './components/Experience';
function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
