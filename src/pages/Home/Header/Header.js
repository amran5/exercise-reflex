import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Reflex</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/services">Service</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/category">Category</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/trainer">Trainer</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/signIn">Sign In</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/signUp">Sign Up</Nav.Link>
                        <Navbar.Text className="text-white">
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;