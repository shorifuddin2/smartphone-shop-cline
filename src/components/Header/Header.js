import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

// this is head
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleLogout= ()=>{
    auth.signOut();
  }
    return (
        <div>
            <Navbar bg="success" expand="lg" className=''>
  <Container fluid>
    <Navbar.Brand ><Link className="link text-warning" to='/home'>Smartphone Show Room</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2  my-lg-0 sticky-top"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <CustomLink className="link" to='/'>Home</CustomLink>
        <CustomLink className="link" to='/inventory'>Inventory</CustomLink>
        <CustomLink className="link" to='/blog'>Blog</CustomLink>
        <CustomLink className="link" to='/addItems'>AddItems</CustomLink>
        <CustomLink className="link" to='/myItems'>MyItems</CustomLink>
        {
          user?.uid ? <button  onClick={handleLogout} className="text-decoration-none text-danger">SignOut</button> :   <CustomLink to="/login">SignIn</CustomLink>
        }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default Header;