import React from 'react'
   import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export  function Header() {
  return (


    <Navbar expand="lg " bg='dark' variant="dark">
      <Container >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className={({isActive})=>isActive?'text-warning nav-link':'nav-link'}>Home</NavLink>
            <NavLink to="/products"  className={({isActive})=>isActive?'text-warning nav-link':'nav-link'}>Products</NavLink>
            <NavLink to="/*"  className={({isActive})=>isActive?'text-warning nav-link':'nav-link'}>login</NavLink>
            {/* <NavLink to={`/products/${0}/edit`} className={({isActive})=>isActive?'text-warning nav-link':'nav-link'}>Products Form</NavLink>
            <NavLink to={`/products/:id`} className={({isActive})=>isActive?'text-warning nav-link':'nav-link'}>Product Details</NavLink> */}
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

  
