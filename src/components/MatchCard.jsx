import React from 'react';
import Card from 'react-bootstrap/Card';

function MatchCard({
  team1 = "Inter Milan",
  team2 = "AC Milan",
  logo1 = "/logos/inter.svg",
  logo2 = "/logos/milan.svg",
  score = "2 - 0",
  date = "22 Octobre 2026",
  time = "20:45",
  status = "Terminé"
}) {
  const isFinished = status.toLowerCase().includes('terminé');

  return (
    <Card className="match-card h-100">
      <Card.Header className="d-flex justify-content-between align-items-center bg-dark text-white border-0 py-2">
        <span><small>{date} - {time}</small></span>
        <span className={`badge ${isFinished ? 'bg-success' : 'bg-primary'}`}>
          {status}
        </span>
      </Card.Header>
      <Card.Body className="text-center py-3">
        <div className="d-flex justify-content-around align-items-center mb-2">
          <div className="d-flex flex-column align-items-center" style={{ width: '40%' }}>
            <img src={logo1} alt="" aria-hidden="true" className="team-logo mb-2" />
            <span className="fw-bold">{team1}</span>
          </div>

          <div className="fs-3 fw-bold text-warning">
            {score}
          </div>

          <div className="d-flex flex-column align-items-center" style={{ width: '40%' }}>
            <img src={logo2} alt="" aria-hidden="true" className="team-logo mb-2" />
            <span className="fw-bold">{team2}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MatchCard;
