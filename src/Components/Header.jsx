import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import  '../styles/header.css'
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
            {/* <Nav.Link href="#home">SIGNUP</Nav.Link>
            <Nav.Link href="#link">LOGIN</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header