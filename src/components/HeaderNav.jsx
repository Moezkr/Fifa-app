import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function HeaderNav() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="border-bottom border-primary">
      <Container>
        <Navbar.Brand href="#banner" onClick={(e) => scrollTo(e, 'banner')}>
          ⚽ FIFA App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#banner" onClick={(e) => scrollTo(e, 'banner')}>
              Accueil
            </Nav.Link>
            <Nav.Link href="#players" onClick={(e) => scrollTo(e, 'players')}>
              Joueurs
            </Nav.Link>
            <Nav.Link href="#matches" onClick={(e) => scrollTo(e, 'matches')}>
              Matchs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
