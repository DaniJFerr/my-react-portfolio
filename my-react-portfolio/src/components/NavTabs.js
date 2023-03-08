import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavTabs() {
  return (
  <Navbar  expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
  
        <NavLink
          to="my-react-portfolio/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <p>Home</p>
        </NavLink>
      
        <NavLink
            to="my-react-portfolio/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
        >
          <p>About</p>
        </NavLink>
    
        <NavLink
          to="my-react-portfolio/Projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <p>Projects</p>
        </NavLink>
  
        <NavLink
          to="my-react-portfolio/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <p>Contact</p>
        </NavLink>
   
      </Nav>
    </Navbar.Collapse>
</Navbar>
);
}


export default NavTabs;
