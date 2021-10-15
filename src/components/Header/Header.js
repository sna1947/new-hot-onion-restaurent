import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Banner from '../Banner/Banner';
import Logo from '../Logo/Logo';

import './Header.css'

const Header = () => {
    return (

    <div >
            <Navbar className='nav-br ' bg="dark" variant="dark">
                <Container>
                    <Logo></Logo>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/breakfast">Break Fast</Nav.Link>
                        <Nav.Link as={Link} to="/allfood">All Food</Nav.Link>
                        <Nav.Link as={Link} to="/dinner">Dinner</Nav.Link>
                        <Nav.Link as={Link} to="/lunch">Lunch</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link> 
                        <Nav.Link as={Link} to="/login">Login</Nav.Link> 
                        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link> 
                    </Nav>
                </Container>
            </Navbar>
        <div >
          <Banner></Banner>
        </div>
    </div>
        
    );
};

export default Header;