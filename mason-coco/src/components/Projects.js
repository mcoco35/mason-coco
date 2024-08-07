// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <strong>Knight Fight</strong><br />
          Developed a basic dice game in Java to demonstrate my Java skills.
        </div>
        <div className="project">
          <strong>Wordle</strong><br />
          Developed Wordle in C++, while basic it allowed me to develop my C++ skills.
        </div>
        <div className="project">
          <strong>Mapping Website</strong><br />
          Worked together as a team to develop a mapping website that would take into consideration different locations in React JS.
        </div>
        <div className="project">
          <strong>Extinction Chess</strong><br />
          Used React JS to create Extinction Chess with a number of teammates in an agile environment.
        </div>
        <div className="project">
          <strong>Chat App</strong><br />
          Created both a client and server to develop a chat app that would allow users to communicate.
        </div>
        <div className="project">
          <strong>Anonymous-Web-Get</strong><br />
          Worked with another individual to create an application to browse the web anonymously using numerous different nodes.
        </div>
        <div className="project">
          <strong>AI Study App</strong><br />
          Personally created an application in React Native to test HCI principles that used OpenAI's API to generate study sets. In our testing, it was more effective than Quizlet!
        </div>
      </div>
    </section>
  );
};

export default Projects;
