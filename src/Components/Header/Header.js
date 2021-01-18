import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import './Header.css'

import SportsFootballIcon from '@material-ui/icons/SportsFootball';

export default function Header() {
  return (
    <Navbar className="navbar-container" bg="dark" variant="dark">
      <SportsFootballIcon fontSize="large" className="footballIcon" />
      <Navbar.Brand className="appName"><b>NFL Rushing Yards App</b></Navbar.Brand>
    </Navbar>
  )
}
