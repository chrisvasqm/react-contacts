import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.tsx';
import ContactDetailsPage from './pages/ContactDetailsPage.tsx';
import data from '../src/data/people.json';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:id',
        element: <ContactDetailsPage contacts={data} />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Box bg={'gray.200'} h={'100vh'}>
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
