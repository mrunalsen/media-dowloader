import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { NextUIProvider, Spinner } from '@nextui-org/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './assets/core/components/navigation/app.routing';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </NextUIProvider>
  </StrictMode>,
);
