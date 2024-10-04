import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@/localizations/i18n'; // Import the i18n configuration

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
