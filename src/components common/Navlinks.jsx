import React from 'react';
import Nav from 'react-bootstrap/Nav';

function NavLinks({ page, menuOpen }) {
  return (
    <Nav className={`me-auto ${menuOpen ? 'show' : ''}`}>
      <Nav.Link href="/" className={page === 'Home' ? 'active' : ''}>
        Home
      </Nav.Link>
      <Nav.Link href="/project" className={page === 'Project' ? 'active' : ''}>
        Project
      </Nav.Link>
      <Nav.Link href="/team" className={page === 'Team' ? 'active' : ''}>
        Team
      </Nav.Link>
      <Nav.Link
        href="/sponsors"
        className={page === 'Sponsors' ? 'active' : ''}
      >
        Sponsors
      </Nav.Link>
    </Nav>
  );
}

export default NavLinks;
