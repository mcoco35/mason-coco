// src/components/Education.js
import React from 'react';

const Education = () => {
  return (
    <section className="section education" id="Education">
      <h2>Education</h2>
      <div>
        <h3>Cybersecurity Bootcamp</h3>
        <p>
          <strong>University of Colorado, Boulder, CO</strong> <span>Jun 2024 - Present</span>
        </p>
        <p>
          <em>Relevant Coursework:</em> Information Security, Network Security, Risk Management, System Security, Application Security, Offensive Security, Threats and Threat Actors, Computer Networking, Security Systems Administration, Infrastructure Security, Social Engineering, Ethical Hacking, Digital Forensics, Incident Response, and Threat Hunting.
        </p>
      </div>
      <div>
        <h3>Bachelor of Science in Computer Science</h3>
        <p>
          <strong>Colorado State University, Fort Collins, CO</strong> <span>August 2020 - Jun 2024</span>
        </p>
        <p>GPA: 3.2</p>
        <p>
          <strong>Concentration:</strong> Network and Security <br />
          <strong>Minor:</strong> Business Administration <br />
          <strong>Certifications:</strong> Entrepreneurship
        </p>
        <p>
          <em>Relevant Coursework:</em> Personal Computing, Data Structures, Algorithms - Theory and Practice, Operating Systems, Object-Oriented Design, Software Engineering, Computer Organization, Systems Security, Software Development with C++, Modern Cybersecurity, Computer Networks/Internet, Ethical Computing Systems, Database Systems, Modern Web Apps, Principles of Human-Computer Interaction
        </p>
      </div>
    </section>
  );
};

export default Education;
