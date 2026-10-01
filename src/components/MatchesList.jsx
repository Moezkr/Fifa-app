import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MatchCard from './MatchCard';

function MatchesList({ matches = [] }) {
  const completedMatches = matches.filter(m => m.status.toLowerCase().includes('terminé'));
  const upcomingMatches = matches.filter(m => m.status.toLowerCase().includes('venir'));

  return (
    <section id="matches" className="py-4" style={{ scrollMarginTop: '70px' }}>
      <Container>
        <h2 className="text-center mb-5 text-white">Calendrier des Matchs</h2>

        <div className="mb-5">
          <h4 className="text-success border-bottom border-success border-opacity-50 pb-2 mb-3">
            ⚽ Matchs Terminés
          </h4>
          <Row className="g-4">
            {completedMatches.map((match, idx) => (
              <Col key={match.id || idx} xs={12} md={6} lg={4}>
                <MatchCard
                  team1={match.team1}
                  team2={match.team2}
                  logo1={match.logo1}
                  logo2={match.logo2}
                  score={match.score}
                  date={match.date}
                  time={match.time}
                  status={match.status}
                />
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <h4 className="text-info border-bottom border-info border-opacity-50 pb-2 mb-3">
            📅 Matchs À Venir
          </h4>
          <Row className="g-4">
            {upcomingMatches.map((match, idx) => (
              <Col key={match.id || idx} xs={12} md={6} lg={4}>
                <MatchCard
                  team1={match.team1}
                  team2={match.team2}
                  logo1={match.logo1}
                  logo2={match.logo2}
                  score={match.score}
                  date={match.date}
                  time={match.time}
                  status={match.status}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default MatchesList;
