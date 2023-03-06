import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Learn';

function Contact(props) {
  return (
    <div>
      <div class="contact-me">
      <h1>Get In Touch</h1>
      <h3>My portfolio is glad to have you here!</h3>
      <p>For more information about my work, please visit the following links.</p>
      <button type="button" class="btn btn-primary btn-lg"><a href="mailto:danweb.work.station@gmail.com">CONTACT ME</a></button>     
    </div>
      <Routes>
      </Routes>
    </div>
  );
}

export default Contact;
