import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <video autoPlay muted loop id="heroVideo">
        {/* <source src="Binary_Code.mp4" type="video/mp4" /> */}
        Your browser does not support HTML5 video.
      </video>
      <div className="hero-content">
        <h1>Mason C. Coco</h1>
      </div>
    </section>
  );
};

export default Hero;