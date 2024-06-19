import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider} from 'react-router-dom';
import { BookContextProvider } from './contexts/bookContext';
import './index.css';
import routes from './routes/routes';



createRoot(document.getElementById('root')).render(
  <BookContextProvider>
    <RouterProvider router={routes} />
  </BookContextProvider>
);
