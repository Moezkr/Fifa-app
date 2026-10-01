import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="site-footer text-center text-white">
      <Container>
        <h5>FC INTERNAZIONALE MILANO</h5>
        <p className="mb-1 text-light">FIFA App — Effectif des Joueurs & Calendrier des Matchs</p>
        <small className="text-white-50">
          © 2026 FIFA App. Tous droits réservés.
        </small>
      </Container>
    </footer>
  );
}

export default Footer;
