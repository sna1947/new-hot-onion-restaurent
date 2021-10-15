import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       
        <>

<Navbar className='nav-br ' bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link> 
                        <Nav.Link as={Link} to="/login">Login</Nav.Link> 
                        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link> 
                    </Nav>
                </Container>
            </Navbar>
        </>
       
    );
};

export default Footer;