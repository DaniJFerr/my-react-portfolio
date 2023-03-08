import React from "react";
import BackToTopButton from "./BackToTopButton";

function About() {
  return (
    <div className="containerAbout">
  
    <div class="profile">
      <img class="myimg"src="images/myfoto.png" alt=""></img>
      <h1>Hello.</h1>
      <p>My name is Daniel,a Web Developer with a background in logistics, 
        investing in IT training since 2010, coding Bootcamp and earning a Certificate in Full Stack Web Development. 
        Innovative problem-solver passionate about developing web apps; focused on responsive design and development. 
        Strengths in creativity, teamwork, and building projects from ideation to execution, adept in all stages of advanced web development.
        Ability to learn and adapt to complex roles and tasks in a fast-paced environment.
      </p>
    </div>

    <div class="skills">
      <h2>My Skills.</h2>
       <div class="skill-row">
       <img class="large" src="images/large-modified.png" alt=""></img>
       <h3>Core qualifications</h3>
      <p>I have experience writing web applications and dynamic Web sites using Html, Css, JavaScript, React, bootstrap, Node.js, NPM, Express.js, EJS, Git, gitHub, noSQL MongoDB, API.</p>
     </div>
    </div>

    <BackToTopButton/>
  </div>

  );
}

export default About;
