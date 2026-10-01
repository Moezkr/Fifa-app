import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PlayerCard from './PlayerCard';

function PlayersList({ players = [] }) {
  return (
    <section id="players" className="py-4">
      <Container>
        <h2 className="text-center mb-4 text-white">Effectif des Joueurs</h2>
        <Row className="g-4">
          {players.map((player) => (
            <Col key={player.jerseyNumber || player.name} xs={12} sm={6} md={4}>
              <PlayerCard
                name={player.name}
                team={player.team}
                nationality={player.nationality}
                jerseyNumber={player.jerseyNumber}
                age={player.age}
                image={player.image}
                position={player.position}
                rating={player.rating}
                flag={player.flag}
                stats={player.stats}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default PlayersList;
