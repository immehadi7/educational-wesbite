import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <Navbar bg="light" variant="light">
            <Container>
                    <Nav className="me-auto">
                         <NavLink to="/">Home</NavLink>
                             <NavLink to="/services">Services</NavLink>
                                    <NavLink to="/aboutus">About Us</NavLink>
                                    <NavLink to="/termsandCondition">Terms and Conditions </NavLink>
                                      </Nav>
                                             </Container>
                                                     </Navbar>

        </div>
    );
};

export default Header;