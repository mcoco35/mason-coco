import React from 'react';
import masonImage from '../assets/MasonCoco.jpeg'; // Adjust the path as needed

const About = () => {
  return (
    <section className="section about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={masonImage} alt="Profile Picture" />
        </div>
        <div className="about-text">
          <p>
            {/* Your "About Me" content here */}
            I am an enthusiastic Computer Science graduate...
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;