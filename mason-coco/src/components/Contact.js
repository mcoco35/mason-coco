import React from 'react';

function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/xleqykrp" method="POST">
        <input type="text" name="Name" required placeholder="Name" />
        <input type="email" name="Email" required placeholder="Email" />
        <textarea name="Message" required placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;

