import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">NFL Rushing Yards App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}

export default Header;
