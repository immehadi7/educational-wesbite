import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
        <Navbar className='navbar-style' >
            <Container>
                    <Nav className="me-auto">
                         <NavLink to="/"   activeClassName="selected">Home</NavLink>
                <NavLink to="/services"  activeClassName="selected">Services</NavLink>
                                    <NavLink to="/aboutus"  activeClassName="selected">About Us</NavLink>
                                    <NavLink to="/termsandCondition"  activeClassName="selected">Terms and Conditions </NavLink>
                                      </Nav>
                                             </Container>
                                                     </Navbar>

        </div>
    );
};

export default Header;