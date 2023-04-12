import EventList from '@/components/EventList/EventList';

import { events } from '@/data/Events';

const HomePage = () => (
  <div>
    <h2>Actual Sport Events</h2>
    <EventList events={events} />
  </div>
);

export default HomePage;
