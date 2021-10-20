import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Reflex</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-white border-button" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-white border-button" as={Link} to="/services">Service</Nav.Link>
                        <Nav.Link className="text-white border-button" as={Link} to="/category">Category</Nav.Link>
                        <Nav.Link className="text-white border-button" as={Link} to="/trainer">Trainer</Nav.Link>
                        {!user?.email && <Nav.Link className="text-white border-button" as={Link} to="/signIn">Sign In</Nav.Link>}
                        {!user?.email && <Nav.Link className="text-white border-button" as={Link} to="/signUp">Sign Up</Nav.Link>}
                        {user?.email && <Nav.Link className="text-white" as={Link} to="/signUp"><button onClick={logOut}>Log Out</button></Nav.Link>}
                        <Navbar.Text className="text-white">
                            {user?.displayName}
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