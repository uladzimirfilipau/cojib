import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/cojib'>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
