import React from 'react';

function BannerHero() {
  return (
    <div id="banner" className="site-banner position-relative">
      <img
        src="/banner.png"
        alt="Bannière Inter Milan"
        className="banner-img"
      />
      <div className="banner-overlay d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="banner-heading fw-bold text-white">INTER MILAN</h1>
        <p className="banner-subheading text-light mb-0">Application FIFA — Effectif & Matchs</p>
      </div>
    </div>
  );
}

export default BannerHero;
