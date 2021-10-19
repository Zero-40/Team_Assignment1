import React, { Component } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import "./Mid2.css"
class Mid2 extends React.Component {
  render() {
    return <div className="Row1" id ="mid2id">
        <Nav bg="light"
  
>
  
  <NavDropdown  title="All rentals" id="basic-nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        
      </NavDropdown>
      <NavDropdown title="Add Filter Option" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        
      </NavDropdown>
      
    <Nav.Link eventKey="disabled" disabled>
      6 Properties Match:
    </Nav.Link><Nav.Link href="#">Export</Nav.Link>
</Nav>
    
        
    </div>;
  }
}
export default Mid2;
