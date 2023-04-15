import { useParams } from 'react-router-dom';

import { events } from '@/data/Events';
import { router } from '@/app/router';
import {
  BetForm,
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
import { useState } from 'react';

const EventDetails = () => {
  const [betValue, setBetValue] = useState('');
  const { id } = useParams();
  const event = events.find((event) => event.id.toString() === id);

  if (!event) {
    router.navigate('/');
  }

  return (
    <StyledEvent>
      <h2>Event Details</h2>
      {event && (
        <EventDetailsWrapper>
          <EventDetailsHeader>
            <div>{formatDate(event.date)}</div>
            <div>{formatTime(event.date)}</div>
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
            <Versus>vs</Versus>
          </EventDetailsContent>
        </EventDetailsWrapper>
      )}
      <BetForm>
        <RadioBets>
          <input type='radio' id='home' name='betOption' value='home' />
          <label htmlFor='home'>Home</label>
          <input type='radio' id='draw' name='betOption' value='draw' />
          <label htmlFor='draw'>Draw</label>
          <input type='radio' id='away' name='betOption' value='away' />
          <label htmlFor='away'>Away</label>
        </RadioBets>
        <input
          type='text'
          name='betValue'
          placeholder='0'
          value={betValue.toString()}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          onChange={e => setBetValue(e.target.value)}
        />
        <button type='submit'>Make a bet</button>
      </BetForm>
    </StyledEvent>
  );
};

export default EventDetails;
