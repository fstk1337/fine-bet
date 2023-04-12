import { Outlet } from 'react-router-dom';

import { AppHeader, AppMain } from './AppLayout.styles';

const AppLayout = () => (
  <>
    <AppHeader>
      <h1>FineBet</h1>
    </AppHeader>
    <AppMain>
      <Outlet />
    </AppMain>
  </>
);

export default AppLayout;
