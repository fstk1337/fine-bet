import EventBlock from '@/components/EventBlock/EventBlock';

import { MainWrapper } from './HomePage.styles';
import { events } from '@/data/Events';
import { selectCurrentBet } from '@/app/betSlice';
import { useAppSelector } from '@/app/hooks';
import BetMessage from '@/components/BetMessage/BetMessage';

const HomePage = () => {
  const bet = useAppSelector(selectCurrentBet);

  return (
    <>{bet && <BetMessage bet={bet} />}
      <MainWrapper>
        <EventBlock
          heading='Live Events'
          events={events.filter((event) => event.type === 'live')}
        />
        <EventBlock
          heading='Upcoming Events'
          events={events.filter((event) => event.type === 'upcoming')}
        />
      </MainWrapper>
    </>
  );
};

export default HomePage;
