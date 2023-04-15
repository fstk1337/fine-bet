import { Team, teams } from './Teams';

export interface SportEvent {
  id: number;
  homeTeam: Team | undefined;
  awayTeam: Team | undefined;
  type: 'live' | 'upcoming';
  date: string;
  rates: {
    homeWin: number;
    draw: number;
    awayWin: number;
  };
  score: {
    home: number;
    away: number;
    minutesPassed: number;
  };
}

export const events: SportEvent[] = [
  {
    id: 1,
    homeTeam: teams.get('Bologna'),
    awayTeam: teams.get('AC Milan'),
    type: 'live',
    date: '2023-04-15T16:00',
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0,
      minutesPassed: 11
    }
  },
  {
    id: 2,
    homeTeam: teams.get('Napoli'),
    awayTeam: teams.get('Hellas Verona'),
    type: 'live',
    date: '2023-04-15T19:00',
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 1,
      away: 1,
      minutesPassed: 45
    }
  },
  {
    id: 3,
    homeTeam: teams.get('Internazionale'),
    awayTeam: teams.get('Monza'),
    type: 'live',
    date: '2023-04-15T21:45',
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 2,
      away: 1,
      minutesPassed: 82
    }
  },
  {
    id: 4,
    homeTeam: teams.get('Lecce'),
    awayTeam: teams.get('Sampdoria'),
    type: 'upcoming',
    date: '2023-04-16T13:30',
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0,
      minutesPassed: 0
    }
  },
  {
    id: 5,
    homeTeam: teams.get('Torino'),
    awayTeam: teams.get('Salernitana'),
    type: 'upcoming',
    date: '2023-04-16T16:00',
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0,
      minutesPassed: 0
    }
  },
  {
    id: 6,
    homeTeam: teams.get('Sassuolo'),
    awayTeam: teams.get('Juventus'),
    type: 'upcoming',
    date: '2023-04-16T19:00',
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0,
      minutesPassed: 0
    }
  },
  {
    id: 7,
    homeTeam: teams.get('AS Roma'),
    awayTeam: teams.get('Udinese'),
    type: 'upcoming',
    date: '2023-04-16T21:45',
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0,
      minutesPassed: 0
    }
  },
  {
    id: 8,
    homeTeam: teams.get('Fiorentina'),
    awayTeam: teams.get('Atalanta'),
    type: 'upcoming',
    date: '2023-04-17T21:45',
    rates: {
      homeWin: 1.5,
      draw: 1.2,
      awayWin: 1.1
    },
    score: {
      home: 0,
      away: 0,
      minutesPassed: 0
    }
  }
];
