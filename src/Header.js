import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Header.css'
class Header extends React.Component {
  render() {
    return (<div className="Row1">
      
        <Navbar bg="dark" variant="dark" expand="lg" class="navbar" id='Colorid' >
        <Navbar.Brand href="#" >{''}{''}</Navbar.Brand>

  <Navbar.Brand href="#" >W</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
    
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Rentals</Nav.Link>
      <Nav.Link >{''}{''}</Nav.Link>
      <Nav.Link href="#action2">Associations</Nav.Link>
      <Nav.Link >{''}{''}</Nav.Link>
      <Nav.Link href="#action3">Accounting</Nav.Link>
      <Nav.Link >{''}{''}</Nav.Link>
      <Nav.Link href="#action4">Tasks</Nav.Link>
      <Nav.Link >{''}{''}</Nav.Link>
      <Nav.Link href="#action5">Communication</Nav.Link>
      <Nav.Link >{''}{''}</Nav.Link>
      <Nav.Link href="#action6">Company</Nav.Link>
      <Nav.Link >{''}{''}</Nav.Link>
      

      
    </Nav>
    
  
    
    
  </Navbar.Collapse>
  
  <Nav>
       <Nav.Link >{''}{''}</Nav.Link>
       
       <Nav.Link ><i class="fa fa-search" aria-hidden="true"></i></Nav.Link>
       <Nav.Link ><i class="fas fa-cog" aria-hidden="true"></i></Nav.Link>
       <Nav.Link ><i class="fas fa-calendar-week" aria-hidden="true"></i></Nav.Link>
       <Nav.Link ><i class="fas fa-columns" aria-hidden="true"></i></Nav.Link>
       <img src="./profile.jpg" width="50" height="50" />
      <NavDropdown title="Varshith Dosapati" id="navbarScrollingDropdown">
      
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
</Navbar>

        
    </div>
    )
  }
}
export default Header;
