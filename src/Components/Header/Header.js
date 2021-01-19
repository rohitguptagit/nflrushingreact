import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import './Header.css'

import SportsFootballIcon from '@material-ui/icons/SportsFootball';

// Header (Navbar) responsible for displaying application title and logo.
export default function Header() {
  return (
    <Navbar className="navbar-container" bg="dark" variant="dark">
      <SportsFootballIcon fontSize="large" className="footballIcon" data-testid="footballIcon-test"/>
      <Navbar.Brand className="appName"><b>NFL Rushing Yards App</b></Navbar.Brand>
    </Navbar>
  )
}
