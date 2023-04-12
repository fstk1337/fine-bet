import { Team, teams } from './Teams';

export interface SportEvent {
  id: number;
  homeTeam: Team | undefined;
  awayTeam: Team | undefined;
  type: 'current' | 'future';
  date: Date;
  rates: {
    homeWin: number;
    draw: number;
    awayWin: number;
  },
  score: {
    home: number;
    away: number;
  }
}

export const events: SportEvent[] = [
  {
    id: 1,
    homeTeam: teams.get('Bologna'),
    awayTeam: teams.get('AC Milan'),
    type: 'current',
    date: new Date(2023, 3, 15, 16, 0),
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0
    }
  },
  {
    id: 2,
    homeTeam: teams.get('Napoli'),
    awayTeam: teams.get('Hellas Verona'),
    type: 'current',
    date: new Date(2023, 3, 15, 19, 0),
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0
    }
  },
  {
    id: 3,
    homeTeam: teams.get('Internazionale'),
    awayTeam: teams.get('Monza'),
    type: 'current',
    date: new Date(2023, 3, 15, 21, 45),
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0
    }
  },
  {
    id: 4,
    homeTeam: teams.get('Lecce'),
    awayTeam: teams.get('Sampdoria'),
    type: 'future',
    date: new Date(2023, 3, 16, 13, 30),
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0
    }
  },
  {
    id: 5,
    homeTeam: teams.get('Torino'),
    awayTeam: teams.get('Salernitana'),
    type: 'future',
    date: new Date(2023, 3, 16, 16, 0),
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0
    }
  },
  {
    id: 6,
    homeTeam: teams.get('Sassuolo'),
    awayTeam: teams.get('Juventus'),
    type: 'future',
    date: new Date(2023, 3, 16, 19, 0),
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0
    }
  },
  {
    id: 7,
    homeTeam: teams.get('AS Roma'),
    awayTeam: teams.get('Udinese'),
    type: 'future',
    date: new Date(2023, 3, 16, 21, 45),
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0
    }
  },
  {
    id: 8,
    homeTeam: teams.get('Fiorentina'),
    awayTeam: teams.get('Atalanta'),
    type: 'future',
    date: new Date(2023, 3, 17, 21, 45),
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0
    }
  }
];
