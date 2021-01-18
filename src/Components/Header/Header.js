import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">NFL Rushing Yards App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
        </Nav>
      </Navbar>
    )
}
