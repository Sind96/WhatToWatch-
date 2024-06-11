import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import SignIn from '@loginPages/signIn';
import SignUp from '@loginPages/signUp';
import Homepage from '@pages/Homepage';
import WatchList from '@pages/watchList';
import IndividualMovie from '@pages/individualMovie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/homepage',
    element: <Homepage />,
  },
  {
    path: '/watchList',
    element: <WatchList />,
  },
  {
    path: '/homepage/:imdbId',
    element: <IndividualMovie />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
