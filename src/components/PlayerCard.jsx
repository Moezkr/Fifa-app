import React from 'react';
import Card from 'react-bootstrap/Card';

function PlayerCard({
  name = "Lautaro Martínez",
  team = "Inter Milan",
  nationality = "Argentine",
  jerseyNumber = 10,
  age = 27,
  image = "/Lautaro Martinez.png",
  position = "ST",
  rating = 89,
  flag = "🇦🇷",
  stats = { pac: 82, sho: 89, pas: 75, dri: 86, def: 48, phy: 84 }
}) {
  return (
    <Card className="fifa-gold-card h-100 shadow border-0 position-relative">
      <div className="fifa-card-rating-pos">
        <span className="fifa-rating">{rating}</span>
        <span className="fifa-pos">{position}</span>
      </div>

      <div className="fifa-card-flag-jersey">
        <span className="fifa-flag" title={nationality}>{flag}</span>
        <span className="fifa-jersey">#{jerseyNumber}</span>
      </div>

      <div className="fifa-img-container">
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          className="fifa-player-img"
        />
      </div>

      <Card.Body className="fifa-card-body p-3 text-center">
        <h4 className="fifa-name mb-1">
          {name}
        </h4>

        <hr className="fifa-divider my-2" />

        {stats && (
          <div className="fifa-stats-grid mb-2">
            <div className="fifa-stat-col">
              <span className="fifa-stat-num">{stats.pac}</span>
              <span className="fifa-stat-lbl">PAC</span>
            </div>
            <div className="fifa-stat-col">
              <span className="fifa-stat-num">{stats.sho}</span>
              <span className="fifa-stat-lbl">SHO</span>
            </div>
            <div className="fifa-stat-col">
              <span className="fifa-stat-num">{stats.pas}</span>
              <span className="fifa-stat-lbl">PAS</span>
            </div>
            <div className="fifa-stat-col">
              <span className="fifa-stat-num">{stats.dri}</span>
              <span className="fifa-stat-lbl">DRI</span>
            </div>
            <div className="fifa-stat-col">
              <span className="fifa-stat-num">{stats.def}</span>
              <span className="fifa-stat-lbl">DEF</span>
            </div>
            <div className="fifa-stat-col">
              <span className="fifa-stat-num">{stats.phy}</span>
              <span className="fifa-stat-lbl">PHY</span>
            </div>
          </div>
        )}

        <hr className="fifa-divider my-2" />

        <div className="fifa-club-name fw-bold text-uppercase">
          {team}
        </div>
        <div className="fifa-props-subtext">
          {nationality} • {age} ans • N°{jerseyNumber}
        </div>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;
