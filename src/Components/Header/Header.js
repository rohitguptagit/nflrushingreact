import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
      <Navbar className="alignCenter" bg="dark" variant="dark">
        <Navbar.Brand href="#">NFL Rushing Yards App</Navbar.Brand>
      </Navbar>
    )
}
