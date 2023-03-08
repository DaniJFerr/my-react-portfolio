import {React } from 'react';
import BackToTopButton from './pages/BackToTopButton';

function Footer(){

   return (
   <div class="bottom-container">
  <BackToTopButton/>
   <a class="footer-link" href="https://github.com/DaniJFerr"><i class="fa-brands fa-github"></i></a>
   <a class="footer-link" href="https://linkedin.com/in/daniel-ferreira-166741225"><i class="fa-brands fa-linkedin"></i></a>

   <p class="copyright">© 2023 Daniel Ferreira <i class="fa-brands fa-react"></i> Web Development Project.</p>   
 </div>

   )
}


export default Footer;