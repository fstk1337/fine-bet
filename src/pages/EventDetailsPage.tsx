import { useNavigate } from 'react-router-dom';

import EventDetails from '@/components/EventDetails/EventDetails';
import { MainWrapper } from './HomePage.styles';
import { BackButton } from './EventDetailsPage.styles';

const EventDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <BackButton onClick={() => navigate(-1)}>
        <span>Back to all events</span>
      </BackButton>
      <EventDetails />
    </MainWrapper>
  );
};

export default EventDetailsPage;
