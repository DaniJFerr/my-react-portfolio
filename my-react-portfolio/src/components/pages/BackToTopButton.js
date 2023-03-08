import {React, useState, useEffect } from 'react';


function BackToTopButton(){

  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      if (window.scrollY > 1) {
        setBackToTopButton (true)
      }else{
        setBackToTopButton(false)
      }
    })
  }, []);

  const scrollUp =() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  <div>
  {backToTopButton && (
    <button onClick={scrollUp}>^</button>
  )}
 </div>
} 


export default BackToTopButton;