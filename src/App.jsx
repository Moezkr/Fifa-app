import React from 'react';
import HeaderNav from './components/HeaderNav';
import BannerHero from './components/BannerHero';
import PlayersList from './components/PlayersList';
import MatchesList from './components/MatchesList';
import Footer from './components/Footer';

function App() {
  const players = [
    {
      name: "Lautaro Martínez",
      team: "Inter Milan",
      nationality: "Argentine",
      flag: "🇦🇷",
      jerseyNumber: 10,
      age: 27,
      image: "/Lautaro Martinez.png",
      position: "ST",
      rating: 89,
      stats: { pac: 82, sho: 89, pas: 75, dri: 86, def: 48, phy: 84 }
    },
    {
      name: "Benjamin Pavard",
      team: "Inter Milan",
      nationality: "France",
      flag: "🇫🇷",
      jerseyNumber: 28,
      age: 28,
      image: "/B.Pavard.png",
      position: "CB",
      rating: 84,
      stats: { pac: 72, sho: 65, pas: 76, dri: 73, def: 85, phy: 80 }
    },
    {
      name: "Federico Dimarco",
      team: "Inter Milan",
      nationality: "Italie",
      flag: "🇮🇹",
      jerseyNumber: 32,
      age: 26,
      image: "/dimarco.png",
      position: "LWB",
      rating: 84,
      stats: { pac: 83, sho: 77, pas: 86, dri: 81, def: 77, phy: 75 }
    },
    {
      name: "Josep Martínez",
      team: "Inter Milan",
      nationality: "Espagne",
      flag: "🇪🇸",
      jerseyNumber: 13,
      age: 26,
      image: "/j.martinez.png",
      position: "GK",
      rating: 78,
      stats: { pac: 78, sho: 76, pas: 81, dri: 80, def: 42, phy: 75 }
    },
    {
      name: "Piotr Zieliński",
      team: "Inter Milan",
      nationality: "Pologne",
      flag: "🇵🇱",
      jerseyNumber: 7,
      age: 30,
      image: "/Zilinski.png",
      position: "CM",
      rating: 83,
      stats: { pac: 75, sho: 78, pas: 84, dri: 85, def: 67, phy: 69 }
    },
    {
      name: "John Stones",
      team: "Inter Milan",
      nationality: "Angleterre",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      jerseyNumber: 5,
      age: 30,
      image: "/j.stones.png",
      position: "CB",
      rating: 85,
      stats: { pac: 71, sho: 50, pas: 78, dri: 79, def: 87, phy: 78 }
    }
  ];

  const matches = [
    {
      id: 1,
      team1: "Inter Milan",
      team2: "AC Milan",
      logo1: "/logos/inter.svg",
      logo2: "/logos/milan.svg",
      score: "2 - 0",
      date: "22 Octobre 2026",
      time: "20:45",
      status: "Terminé"
    },
    {
      id: 2,
      team1: "Inter Milan",
      team2: "Manchester City",
      logo1: "/logos/inter.svg",
      logo2: "/logos/man_city.svg",
      score: "1 - 0",
      date: "04 Novembre 2026",
      time: "21:00",
      status: "Terminé"
    },
    {
      id: 3,
      team1: "Juventus",
      team2: "Inter Milan",
      logo1: "/logos/juventus.svg",
      logo2: "/logos/inter.svg",
      score: "1 - 3",
      date: "18 Novembre 2026",
      time: "20:45",
      status: "Terminé"
    },
    {
      id: 4,
      team1: "Inter Milan",
      team2: "Real Madrid",
      logo1: "/logos/inter.svg",
      logo2: "/logos/real_madrid.svg",
      score: "VS",
      date: "10 Décembre 2026",
      time: "21:00",
      status: "À venir"
    },
    {
      id: 5,
      team1: "AC Milan",
      team2: "Inter Milan",
      logo1: "/logos/milan.svg",
      logo2: "/logos/inter.svg",
      score: "VS",
      date: "15 Janvier 2027",
      time: "20:45",
      status: "À venir"
    },
    {
      id: 6,
      team1: "Manchester City",
      team2: "Inter Milan",
      logo1: "/logos/man_city.svg",
      logo2: "/logos/inter.svg",
      score: "VS",
      date: "28 Janvier 2027",
      time: "21:00",
      status: "À venir"
    }
  ];

  return (
    <div>
      <HeaderNav />
      <BannerHero />
      <PlayersList players={players} />
      <MatchesList matches={matches} />
      <Footer />
    </div>
  );
}

export default App;
