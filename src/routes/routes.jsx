import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Boook from '../components/Boook';
import UpdateBook from '../components/updateBook';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/add',
    element: <Boook />
  },

  {
    path: '/update/:bookId',
    element: <UpdateBook />
  }
]);

export default routes;
