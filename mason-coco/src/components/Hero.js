import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <video autoPlay muted loop id="heroVideo">
        <source src={`${process.env.PUBLIC_URL}/images/Binary_Code.mp4`} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="hero-content">
        <h1>Mason C. Coco</h1>
      </div>
    </section>
  );
}

export default Hero;
