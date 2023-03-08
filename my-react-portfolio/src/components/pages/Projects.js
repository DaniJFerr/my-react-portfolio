import React from "react";

function Projects() {
  return (
    <div className="containerProjects">
      <h1>Projects</h1>
    
      <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>

          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
          <section class="skill-row d-block " >
            <img class="project" src="images/Imgproject01.png" alt=""></img>
            <h3>My projects</h3>
            <p>I invite you to check out some of my recent web projects. This is a small part of my work that is currently in progress.</p>
            </section>
          </div>

          <div class="carousel-item">
          <section class="skill-row d-block" >
            <a href="https://danijferreira.github.io/Tindog-project/"><img class="project" src="images/tindog-page.png" alt=""></img></a>
            <h3>Tindog</h3>
            <p>Tindog is a funny website related to Tinder. I have created this project during my Web Developer bootcamp using html, css and bootstrap.</p>
          </section>
          </div>

          <div class="carousel-item">
          <section class="skill-row d-block">
          <a  href="https://danijferr.github.io/Team_Profile_Generator/"><img class="project" src="images/Team_profile.png" alt=""></img></a>
          <h3>Team Profile Generator</h3>
          <p>Is an application that dynamically generates and display a team summaries profile from a user's input</p>
          </section>
          </div>

          <div class="carousel-item">
            <section class="skill-row d-block">
            <a  href="https://danijferreira.github.io/keeper-web-app/"><img class="project" src="images/keeper.png" alt=""></img></a>
            <h3>Kepper App</h3>
            <p>Is an application that dynamically generates and display notes from user's input.</p>
            </section>
          </div>

            <div class="carousel-item">
              <section class="skill-row d-block">
              <a  href="https://danijferreira.github.io/W_News_Homepage/" ><img class="project" src="images/W_news.png" alt=""></img></a>
              <h3>W. News</h3>
              <p>Is news website interface created for the frontend mentor challenge that uses html and css</p>
              </section>
            </div>

          <div class="carousel-item">
            <section class="skill-row d-block">
            <a  href="https://danijferreira.github.io/Simple-interest-rate-calculator/"><img class="project" src="images/interest-rate.png" alt=""></img></a>
            <h3>Interst Rate Calculator</h3>
            <p>Simple Calculator Interest Rate is an project created on Edx/IBM course and implemanted by me using html, css, bootstrap and javascript.</p>
            </section>
            </div>

            <div class="carousel-item">
              <section class="skill-row d-block">
              <a  href="https://danijferr.github.io/Bootstrap-Portfolio/#"><img class="project" src="images/BootcampPortfolio.png" alt=""></img></a>
              <h3>Bootstrap Portfolio</h3>
              <p>Boostrap Portfolio consists of some other projects as well as the work created for the Bootcamp challenge.  </p>
              </section>
              </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon " aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Projects;
