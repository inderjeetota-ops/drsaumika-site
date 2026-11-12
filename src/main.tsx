import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App, { preloadForPath } from './App.tsx';
import './index.css';

const render = () => createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);

// The prerendered HTML stays on screen while the current page's code loads.
preloadForPath(window.location.pathname).catch(() => {}).finally(render);
