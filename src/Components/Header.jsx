import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary py-3 ">
      <Container>
        <Navbar.Brand>
        <Link to='/' className=' text-success Muteen-meal'>
        Muteen Meal Place
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             <Link to='/' className='text-success home'>HOME</Link>
             <Link to='/about' className='text-success  about'>ABOUT</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header