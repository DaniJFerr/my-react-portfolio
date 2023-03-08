import React from "react";
import BackToTopButton from "./BackToTopButton";

function Home() {
  return (
    <div class="top-container">
    <img class="top-cloud"src="images/cloud.png" alt="cloud-img"></img>
    <h1>I'm Daniel.</h1>
    <h2>a <span class="pro">pro</span>grammer.</h2>
    <img class="botton-cloud"src="images/cloud.png" alt="cloud-img"></img>
    <img class="mountain"src="images/mountain.png" alt="mountain-img"></img>
    <BackToTopButton /> 
    </div>
  );
}

export default Home;
