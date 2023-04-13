import EventBlock from '@/components/EventBlock/EventBlock';

import { MainWrapper } from './HomePage.styles';
import { events } from '@/data/Events';

const HomePage = () => (
  <MainWrapper>
    <EventBlock heading='Live Events' events={events.filter(event => event.type === 'live')} />
    <EventBlock heading='Upcoming Events' events={events.filter(event => event.type === 'upcoming')} />
  </MainWrapper>
);

export default HomePage;
