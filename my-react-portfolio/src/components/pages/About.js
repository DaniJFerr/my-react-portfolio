import React from "react";

function About() {
  return (
    <div>
    <div class="profile">
      <img class="myimg"src="images/myfoto-modified.png" alt=""></img>
      <h1>Hello.</h1>
      <p>My name is Daniel, I'm a Junior Web Developer passionate for technologies,
         games, hardware and software engineering. I've been studying programming languages since 2010,
        researching the web industry and the evolution of the big techs .
      </p>
    </div>

    <div class="skills">
      <h2>My Skills.</h2>
       <div class="skill-row">
       <img class="large" src="images/large-modified.png" alt=""></img>
       <h3>Core qualifications</h3>
      <p>I have experience writing web applications and dynamic Web sites using HTML, CSS, JAVASCRIPT, REACT, BOOTSTRAP, NODEJS, NPM, EXPRESSJS, EJS, GIT, GITHUB, HYPERTERMINAL, SQL, API).</p>
     </div>
    </div>
  </div>
  );
}

export default About;
