import React from 'react';
import './About.css';

function About() {
  return (
    <section className="section about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/MasonCoco.jpeg`} alt="Profile Picture" />
        </div>
        <div className="about-text">
          <p>I am an enthusiastic Computer Science graduate with a concentration in Networks and Security from Colorado State University...</p>
        </div>
      </div>
    </section>
  );
}

export default About;
