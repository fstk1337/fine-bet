import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { events } from '@/data/Events';
import {
  BetButton,
  BetForm,
  BetInput,
  BetPoints,
  EventDetailsContent,
  EventDetailsHeader,
  EventDetailsWrapper,
  RadioBets,
  StyledEvent,
  TeamInfo,
  Versus
} from './EventDetails.styles';
import { formatDate } from '@/util/DateFormatter';
import { formatTime } from '@/util/TimeFormatter';
import { useAppDispatch } from '@/app/hooks';
import { addBet } from '@/app/betSlice';

const EventDetails = () => {
  const dispatch = useAppDispatch();
  const [betValue, setBetValue] = useState('');
  const [betOption, setBetOption] = useState<null | 'home' | 'draw' | 'away'>(
    null
  );
  const navigate = useNavigate();

  const { id } = useParams();
  const event = events.find((event) => event.id.toString() === id);

  const makeABet = () => {
    dispatch(
      addBet({
        event,
        option: betOption,
        value: betValue
      })
    );
    navigate('/events');
  };

  useEffect(() => {
    if (!event) {
      navigate('/');
    }
  }, []);

  return (
    <StyledEvent>
      <h2>Event Details</h2>
      {event && (
        <EventDetailsWrapper>
          <EventDetailsHeader>
            {event.type === 'upcoming' &&
              <>
                <div>{formatDate(event.date)}</div>
                <div>{formatTime(event.date)}</div>
              </>
            }
            {event.type === 'live' &&
              <>
                <div>LIVE</div>
                <div>{event.score.minutesPassed}'</div>
              </>
            }
          </EventDetailsHeader>
          <EventDetailsContent>
            <TeamInfo>
              <img src={event.homeTeam?.imageUrl} />
              <div>{event.homeTeam?.name}</div>
            </TeamInfo>
            <TeamInfo>
              <img src={event.awayTeam?.imageUrl} />
              <div>{event.awayTeam?.name}</div>
            </TeamInfo>
            <Versus>
              {event.type === 'live' ? `${event.score.home} : ${event.score.away}`  : 'vs'}
            </Versus>
          </EventDetailsContent>
        </EventDetailsWrapper>
      )}
      {event && (
        <BetForm>
          <RadioBets>
            <input
              type='radio'
              id='home'
              name='betOption'
              value='home'
              onClick={() => setBetOption('home')}
            />
            <label htmlFor='home'>Home {event.rates.homeWin.toFixed(2)}</label>
            <input
              type='radio'
              id='draw'
              name='betOption'
              value='draw'
              onClick={() => setBetOption('draw')}
            />
            <label htmlFor='draw'>Draw {event.rates.draw.toFixed(2)}</label>
            <input
              type='radio'
              id='away'
              name='betOption'
              value='away'
              onClick={() => setBetOption('away')}
            />
            <label htmlFor='away'>Away {event.rates.awayWin.toFixed(2)}</label>
          </RadioBets>
          <div>
            <BetInput
              type='text'
              name='betValue'
              placeholder='0'
              value={betValue.toString()}
              onChange={(e) => {
                if (!Number(e.target.value) && e.target.value.length > 0)
                  return;
                setBetValue(e.target.value);
              }}
            />
            <BetPoints>pts.</BetPoints>
          </div>
          <BetButton
            type='button'
            disabled={!betOption || betValue === ''}
            onClick={() => makeABet()}
          >
            Make a bet
          </BetButton>
        </BetForm>
      )}
    </StyledEvent>
  );
};

export default EventDetails;
