import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Proshop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link to='/cart' style={{ color: 'white', margin: '10px' }}>
                <i className='fas fa-shopping-cart'></i> Cart
              </Link>
              <Link to='/login' style={{ color: 'white', margin: '10px' }}>
                <i className='fas fa-user'></i> SignIn
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
