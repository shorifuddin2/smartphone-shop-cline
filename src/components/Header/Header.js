import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
// this is head
const Header = () => {
  const [registered, setRegistered] = useState(false)
    return (
        <div>
            <Navbar bg="success" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><Link className="link" to='/home'>Smartphone Show Room</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <CustomLink className="link" to='/'>Home</CustomLink>
        <CustomLink className="link" to='/inventory'>Inventory</CustomLink>
        <CustomLink className="link" to='/dashboard'>Dashboard</CustomLink>
        <CustomLink className="link" to='/blog'>Blog</CustomLink>
        <CustomLink className="link" to='/login'>{registered ?'Login' : 'Register'}</CustomLink>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


        </div>
    );
};

export default Header;