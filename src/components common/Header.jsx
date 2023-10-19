import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from '../images/Navbarlogo.png';
import NavLinks from './NavLinks'; // Create a separate component for the navigation links
import './Header.css';

function Header({ page }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar bg="body-tertiary" expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        {isMobile ? (
          <MobileNavbar page={page} />
        ) : (
          <NavLinks page={page} />
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
