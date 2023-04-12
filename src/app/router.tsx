import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/layout/AppLayout';
import HomePage from '@/pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
]);
