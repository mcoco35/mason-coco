import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Mason Coco's Website</h1>
        <p>
          This is the default homepage. You can customize it to showcase your work, projects, and more.
        </p>
        <a
          className="App-link"
          href="https://github.com/mcoco35"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub
        </a>
      </header>
      <main>
        <section className="App-content">
          <h2>About Me</h2>
          <p>
            A brief introduction about yourself, your interests, and what you do. You can expand this section to include more detailed information or links to your projects and social media.
          </p>
        </section>
        <section className="App-footer">
          <p>&copy; {new Date().getFullYear()} Mason Coco. All rights reserved.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
