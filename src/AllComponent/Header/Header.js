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
                <NavLink to="/" className='navStyle'
               /*   activeStyle={{color: 'rgb(4, 4, 148)',
                 fontSize: '20px',
                 fontWeight: '600'
               }} */
                 >Home</NavLink>

                <NavLink to="/services"   className='navStyle' >Services</NavLink>

                <NavLink to="/aboutus" className='navStyle'>About Us</NavLink>

                <NavLink to="/termsandCondition" className='navStyle'>Terms and Conditions </NavLink>
                                      </Nav>
                                             </Container>
                                                     </Navbar>

        </div>
    );
};

export default Header;