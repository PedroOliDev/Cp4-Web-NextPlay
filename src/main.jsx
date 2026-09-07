import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Roleta from './pages/Roleta';
import Detalhes from './pages/Detalhes';
import Watchlist from './pages/Watchlist';
import PageNotFound from './pages/PageNotFound';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/roleta',
        element: <Roleta />,
      },
      {
        path: '/detalhes/:id',
        element: <Detalhes />,
      },
      {
        path: '/minha-lista',
        element: <Watchlist />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
