import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/pages/BackToTopButton';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <Router>
      <div className='container'>
           <NavTabs />
          {/* Wrap Route elements in a Routes component */}
         <Routes basename ="my-react-portfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="my-react-portfolio/" element={<Home />} />
          <Route path="my-react-portfolio/about" element={<About />} />
          <Route path="my-react-portfolio/Projects" element={<Projects />} />
          {/* Define a route that will have descendant routes */}
          <Route path="my-react-portfolio/contact/*" element={<Contact />} />
        </Routes>
        <Footer />
        <BackToTopButton/>
      </div>
    </Router>
  );
  
}

export default App;

