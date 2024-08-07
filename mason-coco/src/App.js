// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
import Education from './components/Education';
// import Certifications from './components/Certifications';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      {/* <About /> */}
      <Education />
      {/* <Certifications />
      <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
